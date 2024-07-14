"use strict";
// src/index.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello World!");
});
// Endpoint to send push notification
app.post("/send-notification", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, message, userId } = req.body;
    if (!title || !message) {
        return res.status(400).send("Missing title or message");
    }
    try {
        const response = userId
            ? yield sendPushNotificationToUser(title, message, userId)
            : yield sendPushNotificationToAll(title, message);
        console.log("Response from OneSignal:", response.data); // Log response
        res.status(200).json(response.data);
    }
    catch (error) {
        console.error("Error sending notification:", error.response
            ? error.response.data
            : error.message); // Log error
        res.status(500).json({
            error: error.response
                ? error.response.data
                : error.message,
        });
    }
}));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// Function to send push notification to a specific user using OneSignal
function sendPushNotificationToUser(title, message, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const ONE_SIGNAL_APP_ID = "dcce0754-e658-48e5-a1a8-b3a234c5b2d8";
        const ONE_SIGNAL_API_KEY = "ZTEwZDg1MzgtZmNkYS00OGI4LWJmN2QtZTQxMDJmNTgwOWQy";
        const headers = {
            "Content-Type": "application/json; charset=utf-8",
            Authorization: `Basic ${ONE_SIGNAL_API_KEY}`,
        };
        const payload = {
            app_id: ONE_SIGNAL_APP_ID,
            headings: { en: title },
            contents: { en: message },
            include_player_ids: [userId],
        };
        return axios_1.default.post("https://onesignal.com/api/v1/notifications", payload, {
            headers,
        });
    });
}
// Function to send push notification to all users using OneSignal
function sendPushNotificationToAll(title, message) {
    return __awaiter(this, void 0, void 0, function* () {
        const ONE_SIGNAL_APP_ID = "dcce0754-e658-48e5-a1a8-b3a234c5b2d8";
        const ONE_SIGNAL_API_KEY = "ZTEwZDg1MzgtZmNkYS00OGI4LWJmN2QtZTQxMDJmNTgwOWQy";
        const headers = {
            "Content-Type": "application/json; charset=utf-8",
            Authorization: `Basic ${ONE_SIGNAL_API_KEY}`,
        };
        const payload = {
            app_id: ONE_SIGNAL_APP_ID,
            headings: { en: title },
            contents: { en: message },
            included_segments: ["All"],
        };
        return axios_1.default.post("https://onesignal.com/api/v1/notifications", payload, {
            headers,
        });
    });
}

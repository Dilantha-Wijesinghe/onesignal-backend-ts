# OneSignal Push Notifications Server

This is a Node.js server built with TypeScript designed to send push notifications using OneSignal.

## Prerequisites

- Node.js (version 14.x or later)
- npm (version 6.x or later)

## Getting Started

To get started with this project, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/Dilantha-Wijesinghe/onesignal-backend-ts.git

cd onesignal-backend-ts
```

### 2. Install Dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

### 3. Set Up Environment Variables

Copy the [`.env.example`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fdilantha%2FDeveloper%2Fonesignal-backend-ts%2F.env.example%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/dilantha/Developer/onesignal-backend-ts/.env.example") file to a new file named [`.env.local`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fdilantha%2FDeveloper%2Fonesignal-backend-ts%2F.env.local%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/dilantha/Developer/onesignal-backend-ts/.env.local") and fill in your OneSignal App ID and API Key:

```plaintext
ONE_SIGNAL_APP_ID=your_app_id_here
ONE_SIGNAL_API_KEY=your_api_key_here
```

### 4. Start the Server

To start the server, run:

```bash
npm run nodemon
```

This will start the server with `nodemon` for automatic reloading on code changes.

## API Endpoints

- `GET /` - A simple endpoint that returns "Hello World!".
- `POST /send-notification` - Endpoint to send push notifications. Requires [`title`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fdilantha%2FDeveloper%2Fonesignal-backend-ts%2Fsrc%2Findex.ts%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fdilantha%2FDeveloper%2Fonesignal-backend-ts%2Fsrc%2Findex.ts%22%2C%22path%22%3A%22%2FUsers%2Fdilantha%2FDeveloper%2Fonesignal-backend-ts%2Fsrc%2Findex.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A14%2C%22character%22%3A2%7D%5D "src/index.ts"), [`message`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fdilantha%2FDeveloper%2Fonesignal-backend-ts%2Fsrc%2Findex.ts%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fdilantha%2FDeveloper%2Fonesignal-backend-ts%2Fsrc%2Findex.ts%22%2C%22path%22%3A%22%2FUsers%2Fdilantha%2FDeveloper%2Fonesignal-backend-ts%2Fsrc%2Findex.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A14%2C%22character%22%3A2%7D%5D "src/index.ts"), and optionally [`userId`](command:_github.copilot.openSymbolFromReferences?%5B%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fdilantha%2FDeveloper%2Fonesignal-backend-ts%2Fsrc%2Findex.ts%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fdilantha%2FDeveloper%2Fonesignal-backend-ts%2Fsrc%2Findex.ts%22%2C%22path%22%3A%22%2FUsers%2Fdilantha%2FDeveloper%2Fonesignal-backend-ts%2Fsrc%2Findex.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%7B%22line%22%3A14%2C%22character%22%3A2%7D%5D "src/index.ts") in the request body.

## Building the Project

To build the project, run:

```bash
npm run build
```

This will compile the TypeScript files to JavaScript in the `dist` directory.

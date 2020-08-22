// generated by @ng-toolkit/serverless
import { createServer, proxy } from "aws-serverless-express";
import { app } from "./dist/server";
import { eventContext } from "aws-serverless-express/middleware";

const binaryMimeTypes = [
    "application/javascript",
    "application/json",
    "application/octet-stream",
    "application/xml",
    "image/jpeg",
    "image/png",
    "image/gif",
    "text/comma-separated-values",
    "text/css",
    "text/html",
    "text/javascript",
    "text/plain",
    "text/text",
    "text/xml",
    "image/x-icon",
    "image/svg+xml",
    "application/x-font-ttf",
];

app.use(eventContext());

const serverProxy = createServer(app, null, binaryMimeTypes);
export function universal(event, context) {
    return proxy(serverProxy, event, context);
}

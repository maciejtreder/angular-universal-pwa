// generated by @ng-toolkit/serverless
"use strict";
import { app } from "./dist/server";
import { https } from "firebase-functions";

const http = https.onRequest((request, response) => {
    if (!request.path) {
        request.url = "/" + request.url;
    }
    return app(request, response);
});

export default {
    http,
};

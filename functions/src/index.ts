import * as functions from 'firebase-functions';
import {cpus} from 'os';
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!" + cpus().map(cpu => JSON.stringify(cpu)).join(' '));
});

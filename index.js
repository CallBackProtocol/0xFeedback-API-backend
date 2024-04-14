const axios = require("axios");
const client = require('twilio');//(accountSid, authToken);
const fs = require("fs");

client.verify.v2.services("")
    .verificationChecks
    .create({to: '', code: '[Code]'})
    .then(verification_check => console.log(verification_check.status));



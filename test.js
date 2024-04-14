const { Vonage } = require('@vonage/server-sdk');
const vonage = new Vonage({
  apiKey: env.API_KEY,
  apiSecret: env.API_SECRET
});

// vonage.verify.start({
//   number: "48516442108",
//   brand: "Vonage"
// })
//   .then(resp => console.log(resp.request_id))
//  .catch(err => console.error(err));

vonage.verify.check("2dda6aac17674670a8c1d8e6094b1ab1", "5652")
  .then(resp => console.log(resp))
  .catch(err => console.error(err));

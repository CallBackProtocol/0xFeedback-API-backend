const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { Vonage } = require('@vonage/server-sdk');
const vonage = new Vonage({
  apiKey: "70def1e9",
  apiSecret: "dFS07Xk9BC2vLV5W"
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/createverify', async (req, res) => {
  const { phoneNumber, code } = req.body;

  try {
    let resp = vonage.verify.start({
    number: phoneNumber,
    brand: code
})

//   .then(resp => console.log(resp.request_id))
//  .catch(err => console.error(err));

  res.status(200).json({ message: 'Verification otp sent successfully.', status: resp });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ message: 'Error verifying OTP.', error: error.message });
  }
});

app.post('/checkverify', async (req, res) => {
  const { id, code } = req.body;

  try {
  let resp = await vonage.verify.check(id, code)

  // .then(resp => console.log(resp))
  // .catch(err => console.error(err));

  console.log(resp)

  res.status(200).json({ message: 'Verification otp sent successfully.', status: resp });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ message: 'Error verifying OTP.', error: error.message });
  }
});

const port = process.env.PORT || 3011;
app.listen(port, () => console.log(`Server listening on port ${port}`));

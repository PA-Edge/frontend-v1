import axios from 'axios';

export async function getTokenOrRefresh() {

  const speechKey = process.env.REACT_APP_SPEECH_KEY;
  const speechRegion = process.env.REACT_APP_SPEECH_REGION;
  const headers = {
    headers: {
      'Ocp-Apim-Subscription-Key': speechKey,
      'Ocp-Apim-Subscription-Region': speechRegion,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };
  try {
    const res = await axios.post('https://sg-edgeweb-dv-speech.cognitiveservices.azure.com/sts/v1.0/issuetoken', null, headers);
    const authToken = res.data;
    // return { authToken: null, error: 'err.response.data' };
    return { authToken, "region": speechRegion }
  } catch (err) {
    console.log(err.response.data);
    return { authToken: null, error: err.response.data };
  }
}
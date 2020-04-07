'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
  + '?client_id=e3s8vrrfkpo0hk8s3k1v92o8g'
  + '&client_secret=qu5ujnj6r94pagac9g8ric1rpu'
  + '&grant_type=authorization_code'
  + '&redirect_uri=http://JLewis444.github.io/my-tomeet'
  + '&code=' + event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};

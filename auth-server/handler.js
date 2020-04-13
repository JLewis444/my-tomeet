'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = `https://secure.meetup.com/oauth2/access/?client_id=e3s8vrrfkpo0hk8s3k1v92o8g&client_secret=qu5ujnj6r94pagac9g8ric1rpu&grant_type=authorization_code&redirect_uri=https://JLewis444.github.io/my-tomeet&code=${event.pathParameters.code}`;

 console.log(event);

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },  
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
}

// module.exports.refreshAccessToken = async (event) => {

//   const MEETUP_OAUTH_REFRESH_URL = 'https://secure.meetup.com/oauth2/access'
//   + '?client_id=e3s8vrrfkpo0hk8s3k1v92o8g'
//   + '&client_secret=qu5ujnj6r94pagac9g8ric1rpu'
//   + '&grant_type=refresh_token'
//   + '&refresh_token=' + event.pathParameters.code;

//   const info = await axios.post(MEETUP_OAUTH_REFRESH_URL);

//   return {
//     statusCode: 200,
//     headers: {
//       'Access-Control-Allow-Origin': 'https://JLewis444.github.io'
//     },
//     body: JSON.stringify({
//       accessToken: info.data.access_token,
//       refreshToken : info.data.refresh_token
//     })
//   }
// }

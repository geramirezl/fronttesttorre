const axios = require('axios')

exports.handler = async function(event) {
  const username = event.queryStringParameters.username
  const url = `https://torre.bio/api/bios/${username}`
  const response = await axios.get(url)
  console.log(response)
  return {
    statusCode: response.status,
    body: JSON.stringify(response.data),
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}

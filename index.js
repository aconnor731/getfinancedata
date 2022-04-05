var axios = require("axios").default;

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

if (!process.env.YAHOO_FINANCE_API_KEY) {
  console.error('The value for YAHOO_FINANCE_API_KEY is not set');
}

if (!process.argv[2]) {
  console.error('No SYMBOL provided.')
}

var options = {
  method: 'GET',
  url: `https://yfapi.net/v11/finance/quoteSummary/${process.argv[2]}`,
  params: {modules: 'defaultKeyStatistics,assetProfile'},
  headers: {
    'x-api-key': `${process.env.YAHOO_FINANCE_API_KEY}`
  }
};

axios.request(options).then(function (response) {
	console.log(response.data.quoteSummary.result);
}).catch(function (error) {
	console.error(error);
});

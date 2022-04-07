var axios = require("axios").default;

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
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
}).catch(function () {
  if (!process.env.YAHOO_FINANCE_API_KEY && process.argv[2]) {
    console.error('The value for YAHOO_FINANCE_API_KEY is not set');
  } else if (process.env.YAHOO_FINANCE_API_KEY && !process.argv[2]) {
    console.error('No SYMBOL provided.')
  } else {
    console.error('The value for YAHOO_FINANCE_API_KEY is not set');
    console.error('No SYMBOL provided.')
  }
});

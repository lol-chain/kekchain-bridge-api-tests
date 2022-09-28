const axios = require('axios');
var querystring = require('querystring');
async function doPostRequest() {

    //let data = { method: 'log_tx', address: '0xC925F19cb5f22F936524D2E8b17332a6f4338751', hash: '0xc8d58343bc2e8214b444a6ab95756388448ac1cad8814bd412a17fd15adff514' };
    
    let res = await axios.post('https://bridge-api.interchained.org/adminapi.php', querystring.stringify({
            method: 'mark_paid', //gave the values directly for testing
	    path: 'ETH-KEK',
	    app_spec_key: '0x103090mm031291',
            currency: 'ETH',
	    address: '0x3215614be56c79511fc87b3e082cffcf2cd5d79e',
            hash: '0xdc27be404deb680d46555e9d12609329347e98e52d95c38e66db00d0ed3bbe8e' 
    }), {
      headers: { 
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });

    let data = res.data;
    console.log(data);
}

doPostRequest();

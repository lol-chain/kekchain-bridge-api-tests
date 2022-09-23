const axios = require('axios');
var querystring = require('querystring');
async function doPostRequest() {

    //let data = { method: 'log_tx', address: '0xC925F19cb5f22F936524D2E8b17332a6f4338751', hash: '0xc8d58343bc2e8214b444a6ab95756388448ac1cad8814bd412a17fd15adff514' };
    
    let res = await axios.post('https://bridge-api.interchained.org/api.php', querystring.stringify({
            method: 'get_contract_kek', //gave the values directly for testing
	    path: 'ETH-KEK',
	    app_spec_key: '0x3215614be',
            currency: 'ETH',
	    address: '0x3215614be56c79511fc87b3e082cffcf2cd5d79e',
            hash: '0x64a010f7a37726ea931064f5b848112dce7c1f6886751b72a30bba84ab6502a0' 
    }), {
      headers: { 
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });

    let data = res.data;
    console.log(data);
}

doPostRequest();

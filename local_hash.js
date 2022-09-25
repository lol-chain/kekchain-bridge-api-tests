const axios = require('axios');
var querystring = require('querystring');
async function doPostRequest() {

    //let data = { method: 'log_tx', address: '0xC925F19cb5f22F936524D2E8b17332a6f4338751', hash: '0xc8d58343bc2e8214b444a6ab95756388448ac1cad8814bd412a17fd15adff514' };
    
    let res = await axios.post('https://bridge-api.interchained.org/api.php', querystring.stringify({
            method: 'local_hash_stats', //gave the values directly for testing
	    path: 'KEK-ETH',
	    height: 304285,
	    status: "CONFIRMED",
            address: '0x050134fd4EA6547846EdE4C4Bf46A334B7e87cCD',
            hash: '0x288a42a159b56da316d48c5501228941193928e07311eb4ff33ec7cd0e2bdd5f' 
    }), {
      headers: { 
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });

    let data = res.data;
    console.log(data);
}

doPostRequest();

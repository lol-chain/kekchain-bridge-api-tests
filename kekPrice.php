<?php
// this script expects to be imported through composer.json
require "../../vendor/autoload.php";
use Codenixsv\CoinGeckoApi\CoinGeckoClient;

$client = new CoinGeckoClient();
$data = $client->simple()->getTokenPrice('ethereum','0x67954768e721fad0f0f21e33e874497c73ed6a82', 'usd');
//echo $data;
// kekchain (KEK)
$exchangeResponse = json_encode($data['0x67954768e721fad0f0f21e33e874497c73ed6a82']['usd']);
// log the object (devel)
//$exchangeResponse = print_r($data);
// set fee price (usdt)
$feeAmount = 5.0;
// set amount KEK in USDt for fee
$totalDiv = $feeAmount / $exchangeResponse;
//echo $exchangeResponse;
// return total KEK in USDt to cover fee
echo $totalDiv;

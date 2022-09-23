<?php
// this script expects the CG library to be imported through composer.json
require "../../vendor/autoload.php";
use Codenixsv\CoinGeckoApi\CoinGeckoClient;

$client = new CoinGeckoClient();
$data = $client->simple()->getPrice('ethereum', 'usd');
//echo $data;
//
$exchangeResponse =  json_encode($data['ethereum']['usd']);
//$exchangeResponse = print_r($data);
$feeAmount = 5.0;
$totalDiv = $feeAmount / $exchangeResponse;
//echo $exchangeResponse;
echo $totalDiv;

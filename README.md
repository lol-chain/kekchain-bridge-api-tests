Just an update, API construction is going smoothly. Here's a list of functionality on server kekchain_bridge.php (example). Each function listed below runs in PHP on server and has been thoroughly tested with tests written in NodeJS with Axios. && with all functions operating to spec, as expected within the scope. Now transferB, and final touches being put to UI on client side, to enforce server reliability and transaction protections, and more... Thank you, M

 KEK Bridge v1 API:

# () success($data)
### private
-> outputs JSON encoded success data

# () error($data) 
### private
-> outputs JSON encoded error data

# () checkTXReceipt($path,$height,$transaction) 
### private
-> poll checks RPC && EXP then outputs block height == transaction broadcast, ensuring amount of confirmations > acceptable limit; useful for enforcing delay, and ensuring transaction success, preventing stolen transferB, and proving transferA receipts post-transactions collections

# () get_fee() 
### public
-> outputs ETH amount in USDt == fee needed. Reads fee from DB.

# () setFee($app_spec_key) 
### public (app specific key required to call)
-> callable by providing application specific key, collects ETH/USDT price from CoinGecko, returns conversion rate adjusted to collect 5 USDt in ETH. This function runs on interval at server (local) processed through bash/js/PHP automation cycle. Applies fee to DB, to be served in return by get_fee().

# () getHeight()
### public
-> outputs block height **deprecated in favor of checkRPC() && checkExplorer() combination of conditionals, useful for predicting safety on client, enforcing safety on server 

# () checkReceipt($transaction)
### private
-> outputs height of transaction broadcast (post confirmation, pre-transferB) applies txBroadcast height to DB

# () tx_log($path,$address,$transaction)
### public
-> returns checkTxReceipt; outputs polling schedule to ensure delay is properly managed pre-transferB; data written to DB includes receiptHeight, blockHeight, TXID, PATH, timestamp; useful for preventing error, proving transaction success post-transfer collections, enforcing safety on server

# Donations 
Thanks for our sponsors and generous donors!
Wallet: 0xB9F96789D98407B1b98005Ed53e8D8824D42A756

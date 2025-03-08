require("./doc/module.js")

global.prefix = ['','!','.',',','#','/']
global.owner = ['2347084528285']
global.ownMain = '2347084528285'
global.NamaOwner = 'big stepper LYTA Xeon' //
global.sessionName = 'session'
global.connect = true // 
global.namabot = 'X-EndPoint' //
global.author = '🦄드림 가이 LYTA Xeon' //
global.packname = 'Xeon-Bug-API' //
global.url1 = 'https://m.webnovel.com/book/reincarnated-as-a-mushroom_31834764608814605' //
global.url2 = 'https://m.webnovel.com/book/reincarnated-as-a-mushroom_31834764608814605' //
global.linkgc = 'https://m.webnovel.com/book/reincarnated-as-a-mushroom_31834764608814605'
global.delayjpm = 3500
 





let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

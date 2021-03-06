let fs = require ('fs')
let path = require('path')
let util = require('util')
let os = require('os')
let { performance } = require('perf_hooks')
let { sizeFormatter } = require('human-readable')
  let format = sizeFormatter({
      std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
      decimalPlaces: 2,
      keepTrailingZeroes: false,
      render: (literal, symbol) => `${literal} ${symbol}B`,
      })
let pref = global.pref

let handler  = async (m, { conn, usedPrefix }) => { 
  const cpus = os.cpus().map(cpu => {
      cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
      return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
     last.total += cpu.total
     last.speed += cpu.speed / length
     last.times.user += cpu.times.user
     last.times.nice += cpu.times.nice
     last.times.sys += cpu.times.sys
     last.times.idle += cpu.times.idle
     last.times.irq += cpu.times.irq
     return last
}, {
    speed: 0,
    total: 0,
    times: {
    user: 0,
    nice: 0,
    sys: 0,
    idle: 0,
    irq: 0
   }
})
  let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.db.data.users).length
  let old = Math.round(performance.now())
  await m.reply('*[ โ ] Loading...*')
  let neww = Math.round(performance.now())
  let str = `
               *โโ๐พ B O T  S T A T I S T I C*
               
๐ฉ๐ปโ๐ป *Owner:* wa.me/6289504575881
๐งช *Mode:* ${global.opts['self'] ? 'Private' : 'Publik'}
๐ *Versi:* ${package.version}
๐ป *Platform:* Unbuntu Linux
๐๏ธ *Lib:* Baileys
๐ฎ *Type:* NodeJs
๐งฟ *Server:* ${os.hostname()}
๐ *Browser:* ${conn.browserDescription[1]}
*๐ข Hostname:* ${conn.browserDescription[0]}
๐ข *Report:* wa.me/6289504575881
โญ *Prefix:* (# / ! .)
๐ *Speed:* ${neww - old} *ms*
๐ฅ *Total user:* ${totalreg} *user*
โฐ *Uptime:* ${uptime}


*โโ๐ฑP H O N E  S T A T I S T I C*

*๐ช Whatsapp V:* ${conn.user.phone.wa_version}
*๐ Ram:* ${format(os.totalmem() - os.freemem())} / ${format(os.totalmem())}
*๐ MCC:* ${conn.user.phone.mcc}
*๐ MNC:* ${conn.user.phone.mnc}
*๐ OS Version:* ${os.platform()} ${conn.user.phone.os_version}
*๐ซ Merk Hp:* ${conn.user.phone.device_manufacturer}
*๐ฎ Versi Hp:* ${conn.user.phone.device_model}


*โโ๐ปC O N N E C T  W I T H  M E*

โ *Api:* http://api-alphabot.herokuapp.com
โ *Youtube:* https://bit.ly/NullBot
โ *Github:* https://github.com/Putradindra
โ *Insragram:* http://instagram.com/Veteran_Putra
โ *Whatsapp:* wa.me/6289504575881




`.trim()
conn.sendButton(m.chat, str, `${botol}`, 'GROUP BOT', '.gcbot', m)

}
handler.help = ['info']
handler.tags = ['main']
handler.command = /^(info)$/i

handler.fail = null

module.exports = handler
let botol = global.botwm


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

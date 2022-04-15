let handler  = async (m, { conn, usedPrefix: _p }) => {
let fetch = require('node-fetch')
let botol = global.botwm
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Premium'
let info = `
╭═══ *〘 BUY PREMIUM 〙*
║ ┅ ๑————————————๑
║┊ ⌲ Sewa = _3k/grup (1 hari)_
║┊ ⌲ Sewa = _7k/grup (1 minggu)_
║┊ ⌲ Sewa = _9k/grup (1 bulan)_
║┊ ⌲ Sewa = _12k/grup (permanen)_
╰═ ┅ ═══════

༅ _*KEUNTUNGAN USER PREMIUM*_

✧ *Fitur Premium Terbuka*
✧ *Limit UNLIMITED*
✧ *Bisa Menyuruh Bot Buka/Tutup Group*
✧ *Kick Orang*
✧ *Add Orang*
✧ *Anti Link On*
✧ *Fitur Game Banyak Sepuas Nya Main*
✧ *Bisa Memasukkan Bot Ke dalam Grup*
✧ *Fitur Nsfw Terbuka*


◪ *Jika Minat Hubungi owner kami*
◪ *Atau Masuk Group Official Bot*
_https://chat.whatsapp.com/FOID1O8ithmJE6utrXNvff_

▌│█║▌║▌║║▌║▌║█│▌
▌│█║▌║▌║║▌║▌║█│▌
`.trim()
conn.send2ButtonLoc(m.chat,await (await fetch(fla + 'Premium')).buffer(), info, `${botol}`, `🐾 Owner`, `.owner`, 'Payment','.payment', m)
} 
handler.help = ['premium']
handler.tags = ['info']
handler.command = /^premium$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 100

module.exports = handler

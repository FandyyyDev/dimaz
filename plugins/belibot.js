let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╭═══ *〘 SEWA 〙*
║ ┅ ๑————————————๑
║┊ ⌲ Sewa = _3k/grup (1 hari)_
║┊ ⌲ Sewa = _7k/grup (1 minggu)_
║┊ ⌲ Sewa = _9k/grup (1 bulan)_
║┊ ⌲ Sewa = _12k/grup (permanen)_
╰═ ┅ ═══════

༅ _*KEUNTUNGAN SEWABOT*_

✧ *Bot akan masuk gc*
✧ *Bisa Menyuruh Bot Buka/Tutup Group*
✧ *Kick Orang*
✧ *Add Orang*
✧ *Anti Link On*
✧ *Bisa Memasukkan Bot Ke dalam Grup*

*[❗] Jika Group Sepi 2 minggu, bot akan leave*

◪ *Jika Minat Hubungi owner kami*
◪ *Atau Masuk Group Official Bot*
_https://chat.whatsapp.com/FOID1O8ithmJE6utrXNvff_

▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Payment', '#payment', 'Owner', '#Nowner', m)
}

handler.help = ['sewa', 'sewabot']
handler.tags = ['info']
handler.command = /^sewa(bot)?$/i

module.exports = handler

let wm = global.botwm

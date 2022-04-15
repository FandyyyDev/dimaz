let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix, command }) => {
    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    let id = m.chat
    if (id in conn.susunkata) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.susunkata[id][0])
        throw false
    }
    let res = await fetch('http://zekais-api.herokuapp.com/susunkata')
    let json = await res.json()
    let caption = `
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}wa untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.tebakanime[id] = [
        await conn.sendButtonImg(m.chat, await (await fetch(json.image)).buffer(), caption, wm, 'BANTUAN', '.wa', m),
        json, poin,
        setTimeout(async () => {
            if (conn.susunkata[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.name}*`, '© nullbot', 'Susun Kata', `${usedPrefix + command}`, m)
            delete conn.susunkata[id]
        }, timeout)
    ]
}
handler.help = ['susunkata']
handler.tags = ['game']
handler.command = /^susunkata$/i

module.exports = handler
let wem = global.botwm

module.exports = handler

let wem = global.botwm

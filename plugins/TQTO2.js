//di ilangin jangan,di tambahin boleh
let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pertanyaan:* ${m.text}
*Jawaban:* ${pickRandom(['Ya','Mungkin iya','Mungkin','Mungkin tidak','Tidak','Tidak mungkin'])}
`.trim(), m)
}
handler.help = ['↣Swister','↣Null Bot','↣ᴢᴇᴋs','↣xᴛᴇᴀᴍ','↣ʟᴏʟʜᴜᴍᴀɴ','↣Team Null']
handler.tags = ['thnks']
handler.customPrefix = /(\?$)/
handler.command = /^kannajelek$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
//jgn di ilagin cok

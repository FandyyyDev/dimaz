//yg gk tau nomer aku nih nomer nya
//http://wa.me/6289504575882?text=bg%20izin%20taroh%20nama%20di%20bot%20mu%20yak
let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pertanyaan:* ${m.text}
*Jawaban:* ${pickRandom(['Ya','Mungkin iya','Mungkin','Mungkin tidak','Tidak','Tidak mungkin'])}
`.trim(), m)
}
handler.help = ['↣ɴᴜʀᴜᴛᴏᴍᴏ','↣ᴀᴅɪᴡᴀᴊsʜɪɴɢ','↣ʀᴇɴᴅʏᴄʀᴀғᴛ','↣Team Null', '↣ᴀʀɪғғʙ25','↣Swister','↣Null Bot']
handler.tags = ['thnks']
handler.customPrefix = /(\?$)/
handler.command = /^kannakawai$/i
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

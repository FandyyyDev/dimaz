const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{
    "displayName": "Owner Aozora",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Owner Aozora\nitem1.TEL;waid=6287772051527:6287772051527\nitem1.X-ABLabel:📍 Creator\nitem2.ADR:;;🇮🇩 Indonesia;;;;\nitem2.X-ABADR:ac\nitem2.X-ABLabel:🌍 Region | Otaku 🇯🇵\nitem3.X-ABLabel:───────[ Aozora Bot ]───────\nEND:VCARD"
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(nowner)$/i

module.exports = handler

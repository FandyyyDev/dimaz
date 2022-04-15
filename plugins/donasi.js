let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Pulsa:* 087772051527
│┝‷✧ *Dana:* 0882000579597
│┝‷✧ *Gopay:* 0882000579597
│┝‷✧ *Ovo:* 087772051527
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/6287772051527?text=kak+ganteng+banget+💗
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Owner', '.owner')

module.exports = handler

let wm = global.botwm

/**
 * Created by @skylarkaf
 * thx to para mastah yg gw copas
 * para penyedia api dan lain"
 * Sory kallo sc nya berantakan 😅
*/
process.on('uncaughtException', console.error) //Safe Log Error
require('./config')
const {
   BufferJSON, 
   WA_DEFAULT_EPHEMERAL, 
   generateWAMessageFromContent, 
   proto, generateWAMessageContent, 
   generateWAMessage, 
   prepareWAMessageMedia, 
   areJidsSameUser, 
   getContentType
   } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const jimp = require('jimp')
const brainly = require("brainly-scraper")
const maker = require('mumaker')
const imgbbUploader = require('imgbb-uploader')
const moment = require('moment-timezone')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { 
        smsg, 
        formatp, 
        tanggal, 
        formatDate, 
        getTime, 
        isUrl, 
        sleep, 
        clockString, 
        runtime, 
        fetchJson, 
        getBuffer, 
        jsonformat, 
        format, 
        parseMention, 
        getRandom
        } = require('./src/lib/myfunc')

//Scrape
const hikki = require("hikki-me");
const cph = require("caliph-api");
const kotz = require("kotz-api");
const xfar = require("xfarr-api");
const hx = require("hxz-api");
const dhn = require("dhn-api");
const rapis = require("ra-api");
const yogipw = require("tod-api");
const bochil = require('@bochilteam/scraper');

//Database & Src
let hit = [];
let { ind } = require('./chats');
let { msgFilter } = require('./src/lib/antispam');
const { addCmd, AddHituser } = require("./src/lib/hitbot.js");
let bad = JSON.parse(fs.readFileSync('./database/bad.json'));
let banUser = JSON.parse(fs.readFileSync('./database/banUser.json'));	
let commund = JSON.parse(fs.readFileSync('./database/dashboard/datacmd.json'));
let hitbot = JSON.parse(fs.readFileSync('./database/dashboard/command.json'));
let userHit = JSON.parse(fs.readFileSync('./database/dashboard/userhit.json'));

//Gamedb
const asahotak = fs.readFileSync('./src/game/result/asahotak.json');
const susunkata = fs.readFileSync('./src/game/result/susunkata.json');
const tebakkalimat = fs.readFileSync('./src/game/result/tebakkalimat.json');
const tekateki = fs.readFileSync('./src/game/result/tekateki.json');
const caklontong = fs.readFileSync('./src/game/result/caklontong.json');
const tebakbendera = fs.readFileSync('./src/game/result/tebakbendera.json');
const tebakanime = fs.readFileSync('./src/game/result/tebakanime.json');
const tebaklagu = fs.readFileSync('./src/game/result/tebaklagu.json');
const tebaklirik = fs.readFileSync('./src/game/result/tebaklirik.json');

const _asahotak = JSON.parse(fs.readFileSync('./src/game/dbgame/asahotak.json'));
const _susunkata = JSON.parse(fs.readFileSync('./src/game/dbgame/susunkata.json'));
const _tebakkalimat = JSON.parse(fs.readFileSync('./src/game/dbgame/tebakkalimat.json'));
const _tekateki = JSON.parse(fs.readFileSync('./src/game/dbgame/tekateki.json'));
const _caklontong = JSON.parse(fs.readFileSync('./src/game/dbgame/caklontong.json'));
const _tebakbendera = JSON.parse(fs.readFileSync('./src/game/dbgame/tebakbendera.json'));
const _tebakanime = JSON.parse(fs.readFileSync('./src/game/dbgame/tebakanime.json'));
const _tebaklirik= JSON.parse(fs.readFileSync('./src/game/dbgame/tebaklirik.json'));
const _tebaklagu= JSON.parse(fs.readFileSync('./src/game/dbgame/tebaklagu.json'));

let tebakgambar = []
let gamewaktu = 50
let waktu = 60000

//Read src media
let logo = fs.readFileSync('./src/media/elaina.jpg')
let logo2 = fs.readFileSync('./src/media/replyimg.jpg')
let logoyt = fs.readFileSync('./src/media/logoyt.jpg')
let logoAd = fs.readFileSync('./src/media/Ad.jpg')
  
//Pref?		
let multipref = true;
let oneprefix = false;
let preff = "."
module.exports = elaina = async (elaina, m, chatUpdate, store) => {    
try {
      var body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
      var budy = (typeof m.text == 'string' ? m.text : '')
      if (multipref) {
      var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
      } else if (oneprefix) {
      prefix = preff
      } 
      const isCmd = body.startsWith(prefix)
      const command = body.toLowerCase().split(' ')[0] || ''  
      const args = body.trim().split(/ +/).slice(1)
      const pushname = m.pushName || "No Name"
      const botNumber = await elaina.decodeJid(elaina.user.id)
      const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      const itsMe = m.sender == botNumber ? true : false
      const text = q = args.join(" ")
      const quoted = m.quoted ? m.quoted : m
      const mime = (quoted.msg || quoted).mimetype || ''
	  const isMedia = /image|video|sticker|audio/.test(mime)
        // Group
        const groupMetadata = m.isGroup ? await elaina.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const cmdBotTotal = require('util').inspect(hit.all)
        const cmdBotHarian = require('util').inspect(hit.today)
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
        const isBane = banUser.includes(m.sender)
        
   try {
   let isNumber = x => typeof x === 'number' && !isNaN(x)
   let user = global.db.data.users[m.sender]
   if (typeof user !== 'object') global.db.data.users[m.sender] = {}
   if (user) {
       if (!isNumber(user.afkTime)) user.afkTime = -1
       if (!('afkReason' in user)) user.afkReason = ''
   } else global.db.data.users[m.sender] = {
       afkTime: -1,
       afkReason: '',
   }
    
   let chats = global.db.data.chats[m.chat]
   if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
   if (chats) {
       if (!('mute' in chats)) chats.mute = false
       if (!('antilink' in chats)) chats.antilink = false
   } else global.db.data.chats[m.chat] = {
       mute: false,
       antilink: false,
   }
		
	    let setting = global.db.data.settings[botNumber]
   if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false			
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,		
	    }
	    
        } catch (err) {
   console.error(err)
        }
	     
 // Public & Self
 if (!elaina.public) {
 if (!m.key.fromMe) return
}
if (isCmd) {
 axios.get('https://api.countapi.xyz/hit/skylarkaf/visits').then(({
 data
 }) => hit.all = data.value)
 axios.get(`https://api.countapi.xyz/hit/skylarkaf${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`).then(({
 data
 }) => hit.today = data.value)
}
 // add command
let addHit = (sender, command) => {
 hitbot.push({
 "id": sender,
 "command": command
 })
 fs.writeFileSync('./database/dashboard/hit.json', JSON.stringify(hitbot))
}

   // Push Message To Console && Auto Read
   if (m.message) {
   elaina.sendReadReceipt(m.chat, m.sender, [m.key.id])
   console.log(chalk.black(chalk.bgWhite('[ MSG ]')), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))   
            }

        	
//Target
const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})}, message: { "contactMessage":{"displayName": `@skylarkaf_`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;elaina;;;\nFN:SkylarKaf\nitem1.TEL;waid=6282331660134:6282331660134\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}	
// Reply target 
const reply = (teks) => {
return elaina.sendMessage(m.chat, { text: teks, contextInfo: {"externalAdReply": { title: "𝖤𝗅𝖺𝗂𝗇𝖺-𝗆𝖽",mediaType: 3, renderLargerThumbnail: false, showAdAttribution: true, body: "𝗌𝗎𝗉𝗉𝗈𝗋𝗍 @𝗌𝗄𝗒𝗅𝖺𝗋𝗄𝖺𝖿",jpegThumbnail: logoAd, mediaUrl: global.websitex, thumbnail: logo2, sourceUrl: global.websitex }}}, { quoted : m})
}

if (bad.includes(body)) {
 tos = ['Jangan Toxic banh 🤓','Beliau ini sok Toxic 😅', 'Sipaling toxic 🤓']
 sin =  tos[Math.floor(Math.random() * (tos.length))]
 reply(sin)  
}

        
 // auto set bio
 if (db.data.settings[botNumber].autobio) {
   let setting = global.db.data.settings[botNumber]
    if (new Date() * 1 - setting.status > 1000) {
    let uptime = await runtime(process.uptime())
	await elaina.setStatus(`${elaina.user.name} | Runtime : ${runtime(uptime)}`)
	setting.status = new Date() * 1
     }
   }
	  
 //Resize Location
 const reSize = async(buffer, ukur1, ukur2) => {
 return new Promise(async(resolve, reject) => {
 var obz = await jimp.read(buffer);
 var ab = await obz.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
 resolve(ab)
  })
 }  
 
//Suffle image
men = ['pics1','pics2','pics3','pics4','pics5','pics6','pics7','pics8','pics9']
rndmmenu =  men[Math.floor(Math.random() * (men.length))]
globaltamnel = await reSize(`./src/media/suffle/${rndmmenu}.jpg`, 300, 200) 
   
// Anti Link
 if (db.data.chats[m.chat].antilink) {
 if (budy.match(`chat.whatsapp.com`)) {
 reply(`*• ANTI LINK*\n\nKamu terdeteksi mengirim link group, bot akan melakukan vertifikasi ulang...`)
 if (!isBotAdmins) return reply(`Jadikan bot admin terlebih dahulu`)
 let gclink = (`https://chat.whatsapp.com/`+await elaina.groupInviteCode(m.chat))
 let isLinkThisGc = new RegExp(gclink, 'i')
 let isgclink = isLinkThisGc.test(m.text)
 if (isgclink) return reply(`Karena kamu share link groub ini kamu tidak jadi di kick`)
 if (isAdmins) return reply(`Karena kamu asalah admin kamu diperbolehkan sharelink`)
 if (isCreator) return reply(`Sungkem owner`)
 elaina.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
 }
}
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
   userJid: elaina.user.id,
   quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, elaina.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
   ...chatUpdate,
   messages: [proto.WebMessageInfo.fromObject(messages)],
   type: 'append'
        }
        elaina.ev.emit('messages.upsert', msg)
        }
	    
        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    elaina.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    elaina.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) elaina.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) elaina.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) elaina.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    elaina.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) elaina.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) elaina.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    elaina.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
   let user = global.db.data.users[jid]
   if (!user) continue
   let afkTime = user.afkTime
   if (!afkTime || afkTime < 0) continue
   let reason = user.afkReason || ''
   reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}
        
if (_asahotak.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _asahotak[m.sender.split('@')[0]].jawaban
if (budy.toLowerCase() == 'nyerah') { 
await reply('Yahaaa Cupu nyerah') 
delete _asahotak[m.sender.split('@')[0]]
fs.writeFileSync("./src/game/dbgame/asahotak.json", JSON.stringify(_asahotak))
return
}
if (budy.toLowerCase() == jawaban) {
const sections = [ { title: "Game", rows: [ {title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: `Selamat Jawaban Kamu Benar🥳🎉`,footer: `Thx to deff for games menu`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  elaina.sendMessage(m.chat, listMessage, {quoted :m })
delete _asahotak[m.sender.split('@')[0]]
fs.writeFileSync("./src/game/dbgame/asahotak.json", JSON.stringify(_asahotak))
} else { if(sim(budy.toLowerCase(), jawaban) >= threshold) reply('Jawaban kamu hampir benar')
else reply('Salah')
}
}

if (_susunkata.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _susunkata[m.sender.split('@')[0]].jawaban
if (budy.toLowerCase() == 'nyerah') { 
await reply('Yahaaa Cupu nyerah') 
delete _susunkata[m.sender.split('@')[0]]
fs.writeFileSync("./src/game/dbgame/susunkata.json", JSON.stringify(_susunkata))
return
}
if (budy.toLowerCase() == jawaban) {
const sections = [ { title: "Game", rows: [ {title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: `Selamat Jawaban Kamu Benar🥳🎉`,footer: `Thx to deff for games menu`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  elaina.sendMessage(m.chat, listMessage, {quoted :m })
delete _susunkata[m.sender.split('@')[0]]
fs.writeFileSync("./src/game/dbgame/susunkata.json", JSON.stringify(_susunkata))
} else { if(sim(budy.toLowerCase(), jawaban) >= threshold) reply('Jawaban kamu hampir benar')
else reply('Salah')
}
}

if (_tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _tebakkalimat[m.sender.split('@')[0]].jawaban
if (budy.toLowerCase() == 'nyerah') { 
await reply('Yahaaa Cupu nyerah') 
delete _tebakkalimat[m.sender.split('@')[0]]
fs.writeFileSync("./src/game/dbgame/tebakkalimat.json", JSON.stringify(_tebakkalimat))
return
}
if (budy.toLowerCase() == jawaban) {
const sections = [ { title: "Game", rows: [ {title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: `Selamat Jawaban Kamu Benar🥳🎉`,footer: `Thx to deff for games menu`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  elaina.sendMessage(m.chat, listMessage, {quoted :m })
delete _tebakkalimat[m.sender.split('@')[0]]
fs.writeFileSync("./src/game/dbgame/tebakkalimat.json", JSON.stringify(_tebakkalimat))
} else { if(sim(budy.toLowerCase(), jawaban) >= threshold) reply('Jawaban kamu hampir benar')
else reply('Salah')
}
}

if (_tekateki.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _tekateki[m.sender.split('@')[0]].jawaban
if (budy.toLowerCase() == 'nyerah') { 
await reply('Yahaaa Cupu nyerah') 
delete _tekateku[m.sender.split('@')[0]]
fs.writeFileSync("./src/game/dbgame/tekateku.json", JSON.stringify(_tekateku))
return
}
if (budy.toLowerCase() == jawaban) {
const sections = [ { title: "Game", rows: [ {title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: `Selamat Jawaban Kamu Benar🥳🎉`,footer: `Thx to deff for games menu`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  elaina.sendMessage(m.chat, listMessage, {quoted :m })
delete _tekateki[m.sender.split('@')[0]]
fs.writeFileSync("./src/game/dbgame/tekateki.json", JSON.stringify(_tekateki))
} else { if(sim(budy.toLowerCase(), jawaban) >= threshold) reply('Jawaban kamu hampir benar')
else reply('Salah')
}
}

if (_caklontong.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _caklontong[m.sender.split('@')[0]].jawaban
if (budy.toLowerCase() == 'nyerah') { 
await reply('Yahaaa Cupu nyerah') 
delete _caklontong[m.sender.split('@')[0]]
fs.writeFileSync("./src/game/dbgame/caklontong.json", JSON.stringify(_caklontong))
return
}
if (budy.toLowerCase() == jawaban) {
const sections = [ { title: "Game", rows: [ {title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: `Selamat Jawaban Kamu Benar🥳🎉`,footer: `Thx to deff for games menu`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  elaina.sendMessage(m.chat, listMessage, {quoted :m })
delete _caklontong[m.sender.split('@')[0]]
fs.writeFileSync("./src/game/dbgame/caklontong.json", JSON.stringify(_caklontong))
} else { if(sim(budy.toLowerCase(), jawaban) >= threshold) reply('Jawaban kamu hampir benar')
else reply('Salah')
}
}

if (_tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _tebakbendera[m.sender.split('@')[0]].jawaban
if (budy.toLowerCase() == 'nyerah') { 
await reply('Yahaaa Cupu nyerah') 
delete _tebakbendera[m.sender.split('@')[0]]
fs.writeFileSync("./src/game/dbgame/tebakbendera.json", JSON.stringify(_tebakbendera))
return
}
if (budy.toLowerCase() == jawaban) {
const sections = [ { title: "Game", rows: [ {title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: `Selamat Jawaban Kamu Benar🥳🎉`,footer: `Thx to deff for games menu`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  elaina.sendMessage(m.chat, listMessage, {quoted :m })
delete _tebakbendera[m.sender.split('@')[0]]
fs.writeFileSync("./src/game/dbgame/tebakbendera.json", JSON.stringify(_tebakbendera))
} else { if(sim(budy.toLowerCase(), jawaban) >= threshold) reply('Jawaban kamu hampir benar')
else reply('Salah')
}
}

if (_tebakanime.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _tebakanime[m.sender.split('@')[0]].jawaban
if (budy.toLowerCase() == 'nyerah') { 
await reply('Yahaaa Cupu nyerah') 
delete _tebakanime[m.sender.split('@')[0]]
fs.writeFileSync("./src/game/dbgame/tebakanime.json", JSON.stringify(_tebakanime))
return
}
if (budy.toLowerCase() == jawaban) {
const sections = [ { title: "Game", rows: [ {title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: `Selamat Jawaban Kamu Benar🥳🎉`,footer: `Thx to deff for games menu`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  elaina.sendMessage(m.chat, listMessage, {quoted :m })
delete _tebakanime[m.sender.split('@')[0]]
fs.writeFileSync("./src/game/dbgame/tebakanime.json", JSON.stringify(_tebakanime))
} else { if(sim(budy.toLowerCase(), jawaban) >= threshold) reply('Jawaban kamu hampir benar')
else reply('Salah')
}
}

if (_tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _tebaklirik[m.sender.split('@')[0]].jawaban
if (budy.toLowerCase() == 'nyerah') { 
await reply('Yahaaa Cupu nyerah') 
delete _tebaklirik[m.sender.split('@')[0]]
fs.writeFileSync("./src/game/dbgame/tebaklirik.json", JSON.stringify(_tebaklirik))
return
}
if (budy.toLowerCase() == jawaban) {
const sections = [ { title: "Game", rows: [ {title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: `Selamat Jawaban Kamu Benar🥳🎉`,footer: `Thx to deff for games menu`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  elaina.sendMessage(m.chat, listMessage, {quoted :m })
delete _tebaklirik[m.sender.split('@')[0]]
fs.writeFileSync("./src/game/dbgame/tebaklirik.json", JSON.stringify(_tebaklirik))
} else { if(sim(budy.toLowerCase(), jawaban) >= threshold) reply('Jawaban kamu hampir benar')
else reply('Salah')
}
}

if (_tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _tebaklagu[m.sender.split('@')[0]].jawaban
if (budy.toLowerCase() == 'nyerah') { 
await reply('Yahaaa Cupu nyerah') 
delete _tebaklagu[m.sender.split('@')[0]]/
fs.writeFileSync("./src/game/dbgame/tebaklagu.json", JSON.stringify(_tebaklagu))
return
}
if (budy.toLowerCase() == jawaban) {
const sections = [ { title: "Game", rows: [ {title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: `Selamat Jawaban Kamu Benar🥳🎉`,footer: `Thx to deff for games menu`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  elaina.sendMessage(m.chat, listMessage, {quoted :m })
delete _tebaklagu[m.sender.split('@')[0]]
fs.writeFileSync("./src/game/dbgame/tebaklagu.json", JSON.stringify(_tebaklagu))
} else { if(sim(budy.toLowerCase(), jawaban) >= threshold) reply('Jawaban kamu hampir benar')
else reply('Salah')
}
}
        
if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
  user.afkTime = -1
  user.afkReason = ''
 }
        
 //ucapan waktu 
 moment.tz.setDefault("Asia/Jakarta").locale("id");
 let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
 const sayTime = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
 
 //Button
const buttonsList = [
	{ urlButton: { displayText: `Instagram`, url : `https://www.instagram.com/skylarkaf_/` } },
    { quickReplyButton: { displayText: `Sewa Bot`, id: `.sewabot` } },
    { quickReplyButton: { displayText: `Dashboard`, id: `.dashboard` } }
	]	  
 //start switch	     
switch(command) {
case prefix+'ban': {
if (isBanee) return reply(mess.ban)	 			
if (!isCreator) return reply(mess.Onlyowner)
if (!args[0]) return reply(`Pilih user yg akan di ban`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBan = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBan) return reply('User was already banned')
banUser.push(orgnye)
reply(`Successfully banned the user`)
} else if (args[0] === "del") {
if (!isBan) return reply('User sudah terban sebelumnya')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
reply(`Berhasil unbaned user`)
} else {
reply("Error")
 }
 }
addCmd(command.slice(1), 1, commund)
break        
   case prefix+'afk': {	   
       let user = global.db.data.users[m.sender]
       user.afkTime = + new Date
       user.afkReason = text
       reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
   }
   addCmd(command.slice(1), 1, commund)
   break	
   case prefix+'suitpvp': case prefix+'suit': {
   this.suit = this.suit ? this.suit : {}
   let poin = 10
   let poin_lose = 10
   let timeout = 60000
   if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Tidak bisa bermain dengan diri sendiri !`)
   if (!m.mentionedJid[0]) return reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
   if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
   let id = 'suit_' + new Date() * 1
   let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
   this.suit[id] = {
   chat: await elaina.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
   id: id,
   p: m.sender,
   p2: m.mentionedJid[0],
   status: 'wait',
   waktu: setTimeout(() => {
   if (this.suit[id]) elaina.sendText(m.chat, `_Waktu suit habis_`, m)
   delete this.suit[id]
   }, 60000), poin, poin_lose, timeout
   }
   }
   addCmd(command.slice(1), 1, commund)
   break
   
	    
   case prefix+'delete': case prefix+'del': {
       if (!m.quoted) throw false
       let { chat, fromMe, id, isBaileys } = m.quoted
       if (!isBaileys) return reply(`Pesan tersebut bukan dikirim oleh bot!`)
       elaina.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
   }
   addCmd(command.slice(1), 1, commund)
   break  
   
   case prefix+'listgc': {
        let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
        let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
        for (let i of anu) {
   let metadata = await elaina.groupMetadata(i)
   teks += `◦ *Nama :* ${metadata.subject}\n◦ *Owner :* @${metadata.owner.split('@')[0]}\n◦ *ID :* ${metadata.id}\n◦ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n◦ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
        }
        elaina.sendTextWithMentions(m.chat, teks, m)
    }
    addCmd(command.slice(1), 1, commund)
   break  
    case prefix+'listonline': case prefix+'liston': {
  let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
  let online = [...Object.keys(store.presences[id]), botNumber]
  elaina.sendText(m.chat, 'List Online:\n\n' + online.map(v => '◦ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
    }
    addCmd(command.slice(1), 1, commund)
   break  

   case prefix+'mediafire': {       
       if (!text) return reply (`Example : ${command} https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file`)
       let me = await elaina.mediafire(text)  
       reply(util.format(me))     
       elaina.sendMessage(m.chat, { document: { url: me[0].link }, mimetype: `${me[0].mime}`, fileName: `${me[0].nama}` }, { quoted: m })
   }
   addCmd(command.slice(1), 1, commund)
   break  
  


//────────────────────[ Search Menu ]────────────────────

       case prefix+'google': {
       if (!text) return reply(`Masukan Query, contoh ${command} elaina`)
       let google = require('google-it')
       google({'query': text}).then(res => {
       let teks = `Google Search From : ${text}\n\n`
       for (let g of res) {
       teks += `◦ *Title* : ${g.title}\n`
       teks += `◦ *Description* : ${g.snippet}\n`
       teks += `◦ *Link* : ${g.link}\n\n────────────────────────\n\n`
       } 
       reply(teks)
       })
       }
       addCmd(command.slice(1), 1, commund)
  break  
  case prefix+'yts': case prefix+'ytsearch': {
       if (!text) return reply(`Masukan Query, Contoh ${command} Phonk Music`)
       let yts = require("yt-search")
       let search = await yts(text)
       let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
       let no = 1
       for (let i of search.all) {
  teks += `◦ No : ${no++}\n◦ Type : ${i.type}\n◦ Video ID : ${i.videoId}\n◦ Title : ${i.title}\n◦ Views : ${i.views}\n◦ Duration : ${i.timestamp}\n◦ Upload At : ${i.ago}\n◦ Author : ${i.author.name}\n◦ Url : ${i.url}\n\n─────────────────\n\n`
       }
       elaina.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
     }
   addCmd(command.slice(1), 1, commund)
   break  
case prefix+'pin': case prefix+'pinterest': {
if(!text) return reply(`Masukan Query`)
try {
hx.pinterest(args.join(" ")).then(async(res) => {
imgnyee = res[Math.floor(Math.random() * res.length)]
let buttons = [
{buttonId: `.pinterest ${args.join(" ")}`, buttonText: {displayText: 'Get Again'}, type: 1}
]
let buttonMessage = {
image: { url: imgnyee },
caption:  `*• Title:* ` + args.join(" ") + `\n*• Media Url:* `+imgnyee,
footer: ``,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`Pinterest by Elaina`,
body:``,
showAdAttribution: true,
thumbnail: logoAd,
mediaType:1,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}
}
elaina.sendMessage(m.chat, buttonMessage, { quoted: m })
}).catch(_ => _)
} catch {
reply("Error")
}
}
addCmd(command.slice(1), 1, commund)
break  

//────────────────────[ Groub Menu]────────────────────

case prefix+'kick': case prefix+'kik': {
	   if (!m.isGroup) return reply(mess.Onlygroup)
       if (!isBotAdmins) return reply(mess.OnlybotAdmin)
       if (!isAdmins) return reply(mess.Onlyadmin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await elaina.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	addCmd(command.slice(1), 1, commund)
   break  
	case prefix+'add': {
       if (!m.isGroup) return reply(mess.Onlygroup)
       if (!isBotAdmins) return reply(mess.OnlybotAdmin)
       if (!isAdmins) return reply(mess.Onlyadmin)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await elaina.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	addCmd(command.slice(1), 1, commund)
   break  
	case prefix+'promote': case prefix+'pm': {
       if (!m.isGroup) return reply(mess.Onlygroup)
       if (!isBotAdmins) return reply(mess.OnlybotAdmin)
       if (!isAdmins) return reply(mess.Onlyadmin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await elaina.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	addCmd(command.slice(1), 1, commund)
   break  
	case prefix+'demote': case prefix+'dm': {
	   if (!m.isGroup) return reply(mess.Onlygroup)
       if (!isBotAdmins) return reply(mess.OnlybotAdmin)
       if (!isAdmins) return reply(mess.Onlyadmin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await elaina.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	addCmd(command.slice(1), 1, commund)
   break  
case prefix+'setnamegc': case prefix+'setsubject': {
       if (!m.isGroup) return reply(mess.Onlygroup)
       if (!isBotAdmins) return reply(mess.OnlybotAdmin)
       if (!isAdmins) return reply(mess.Onlyadmin)
       if (!text) return reply(`Text ?`)
       await elaina.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
   }
   addCmd(command.slice(1), 1, commund)
   break  
 case prefix+'setdesc': case prefix+'setdesk': {
       if (!m.isGroup) return reply(mess.Onlygroup)
       if (!isBotAdmins) return reply(mess.OnlybotAdmin)
       if (!isAdmins) return reply(mess.Onlyadmin)
       if (!text) return reply(`Text ?`)
       await elaina.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
   }
   addCmd(command.slice(1), 1, commund)
   break   
  case prefix+'setppgroup': case prefix+'setppgrup': case prefix+'setppgc': {
       if (!m.isGroup) return reply(mess.Onlygroup)
       if (!isBotAdmins) return reply(mess.OnlybotAdmin)
       if (!isAdmins) return reply(mess.Onlyadmin)
       if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${command}`)
       if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${command}`)
       if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${command}`)
       let media = await elaina.downloadAndSaveMediaMessage(quoted)
       await elaina.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
       reply(mess.success)
       }
       addCmd(command.slice(1), 1, commund)
   break  
   case prefix+'tagall': {
       if (!m.isGroup) return reply(mess.Onlygroup)
       if (!isBotAdmins) return reply(mess.OnlybotAdmin)
       if (!isAdmins) return reply(mess.Onlyadmin)
let teks = `*👥 Tag All
 
*Msg : ${q ? q : 'kosong'}*\n\n`
  for (let mem of participants) {
  teks += `◦ @${mem.id.split('@')[0]}\n`
 }
 elaina.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
addCmd(command.slice(1), 1, commund)
   break  
 case prefix+'hidetag': {
       if (!m.isGroup) return reply(mess.Onlygroup)
       if (!isBotAdmins) return reply(mess.OnlybotAdmin)
       if (!isAdmins) return reply(mess.Onlyadmin)
   elaina.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
   }
addCmd(command.slice(1), 1, commund)
   break  	 		
      case prefix+'group': case prefix+'grup': {
       if (!m.isGroup) return reply(mess.Onlygroup)
       if (!isBotAdmins) return reply(mess.OnlybotAdmin)
       if (!isAdmins) return reply(mess.Onlyadmin)
       if (args[0] === 'close'){
  await elaina.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
       } else if (args[0] === 'open'){
  await elaina.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
       } else {
       let buttons = [
      { buttonId: '.group open', buttonText: { displayText: 'Open' }, type: 1 },
      { buttonId: '.group close', buttonText: { displayText: 'Close' }, type: 1 }
  ]
  await elaina.sendButtonText(m.chat, buttons, `Mode Group`, elaina.user.name, m)

    }
   }
   addCmd(command.slice(1), 1, commund)
   break  
   case prefix+'editinfo': {
       if (!m.isGroup) return reply(mess.Onlygroup)
       if (!isBotAdmins) return reply(mess.OnlybotAdmin)
       if (!isAdmins) return reply(mess.Onlyadmin)
    if (args[0] === 'open'){
       await elaina.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Sukses Membuka Edit Info Group`)).catch((err) => reply(jsonformat(err)))
    } else if (args[0] === 'close'){
       await elaina.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group`)).catch((err) => reply(jsonformat(err)))
    } else {
    let buttons = [
      { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
      { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
  ]
  await elaina.sendButtonText(m.chat, buttons, `Mode Edit Info`, elaina.user.name, m)

   }
   }
   addCmd(command.slice(1), 1, commund)
   break  
   case prefix+'antilink': {
       if (!m.isGroup) return reply(mess.Onlygroup)
       if (!isBotAdmins) return reply(mess.OnlybotAdmin)
       if (!isAdmins) return reply(mess.Onlyadmin)
       if (args[0] === "on") {
       if (db.data.chats[m.chat].antilink) return reply(`Sudah Aktif Sebelumnya`)
       db.data.chats[m.chat].antilink = true
       reply(`Antilink Aktif !`)
       } else if (args[0] === "off") {
       if (!db.data.chats[m.chat].antilink) return reply(`Sudah Tidak Aktif Sebelumnya`)
       db.data.chats[m.chat].antilink = false
       reply(`Antilink Tidak Aktif !`)
       } else {
        let buttons = [
      { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
      { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await elaina.sendButtonText(m.chat, buttons, `Mode Antilink`, elaina.user.name, m)
       }
    }
    addCmd(command.slice(1), 1, commund)
   break  
    
   case prefix+'linkgroup': case prefix+'linkgc': {
       if (!m.isGroup) return reply(mess.Onlygroup)
       let response = await elaina.groupInviteCode(m.chat)
       elaina.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
   }
   addCmd(command.slice(1), 1, commund)
   break  

//────────────────────[ DOWNLOADER ]────────────────────
 
case prefix+'play': {		
if (!text) return reply(`Masukan Query, Contoh ${command} majo no tabi`)
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let buttons = [
{buttonId: `${prefix}ytmp3 ${anu.url}`, buttonText: {displayText: 'Audio'}, type: 1},
{buttonId: `${prefix}ytmp4 ${anu.url}`, buttonText: {displayText: 'Video'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `
*° Title:* ${anu.title}
*° Duration:* ${anu.timestamp}
*° Viewers:* ${anu.views}
*° Uploaded:* ${anu.ago}
*° Author:* ${anu.author.name}
*° Channel:* ${anu.author.url}
*° Description:* ${anu.description}
*° Url:* ${anu.url}`,
footer: `©skylarkaf`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `08:02 ━━━━━━━━●─────── 20:08
⇆ㅤ    ㅤ  ◁ㅤ   ❚❚   ㅤ▷ ㅤ       ㅤ↻`,
body: ``,
thumbnail: logoyt,
mediaType:2,
showAdAttribution: true,
mediaUrl: anu.url,
sourceUrl: anu.url
}}
}
elaina.sendMessage(m.chat, buttonMessage, { quoted: m })
}
addCmd(command.slice(1), 1, commund)
break  
case prefix+'ytmp4': case prefix+'ytvideo': {
   let { ytv } = require('./src/lib/y2mate')
   if (!text) return reply(`Masukan Link`)
   reply(mess.wait)
   let urlnya = text
   let quality = args[1] ? args[1] : '360p'
   let media = await ytv(text, quality)
   elaina.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, contextInfo:{externalAdReply:{
   title:`${media.title}`,
   body:``,
   thumbnail: logoyt,
   mediaType:1,
   showAdAttribution: true,
   mediaUrl: `${global.websitex}`,
   sourceUrl: `${global.websitex}`
    }}
   },  { quoted: m })
    }
addCmd(command.slice(1), 1, commund)
   break          
 case prefix+'ytmp3': case prefix+'ytaudio': {
                let { yta } = require('./src/lib/y2mate')
                if (!text) throw `Contoh : ${prefix + command} https://youtu.be/Cv1Sc4sep9k 320kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 999999) return reply('Size Media Terlalu Besar! '+util.format(media))
                elaina.sendMessage(m.chat, {document: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3`}, { quoted : m })
            }  
            addCmd(command.slice(1), 1, commund)
            break         			

   case prefix+'tiktok': case prefix+'tiktokdl': case prefix+'ttdl': case prefix+'tiktoknowm': case prefix+'ttnowm': {	 
   if (!text) return reply(`Masukan Link`)
   reply(mess.wait)
   cph.downloader.tiktok(q).then( data => {
   elaina.sendMessage(m.chat, {
   video: { url: data.nowm },
   showAdAttribution: true,
   caption: `${data.title}`,
   buttons: [{buttonId: `${prefix}ttaudio ${args[0]} ${m.sender}`, buttonText: { displayText: "Tiktok Audio" }, type: 1 }],
   footer: "Untuk Mengubah Ke Audio Silahkan Pencet Button Di Bawah"
   }, { quoted: m })
   })
   }
   addCmd(command.slice(1), 1, commund)
   break  
   case prefix+'ttaudio': case prefix+'tiktokmp3': case prefix+'tiktokaudio': {
   if (!text) return reply(`Masukan Link`)
   reply(mess.wait)
   hx.ttdownloader(q).then( data => {
   elaina.sendMessage(m.chat, { audio: { url: data.nowm }, mimetype: 'audio/mp4' }, { quoted: m })
   })
   }
  addCmd(command.slice(1), 1, commund)
   break  
  case prefix+'ig': case prefix+'igdl': case prefix+'instagram': {
    reply(`maaf fitur ini sedang error`)
   }		
   addCmd(command.slice(1), 1, commund)
   break  
  case prefix+'igs': case prefix+'igstory': case prefix+'instagramstory': {
       if (!text) return reply(`Masukkan Username!`)  
       reply(mess.wait)       
	   hx.igstory(text)
	   .then(async(result) => {
		        for(let i of result.medias){
			    if(i.url.includes('mp4')){
				let link = await getBuffer(i.url)
       elaina.sendMessage(m.chat, { video: link, }, { quoted: m })
       } else {
  let link = await getBuffer(i.url)
elaina.sendMessage(m.chat, { image: link, }, { quoted: m })
       }
   }
   }).catch((err) => reply(`Sorry the username was not found`))
   }
   addCmd(command.slice(1), 1, commund)
   break  

//────────────────────[ Owner menu ]────────────────────

case prefix+'setppbot':
  if (!isCreator) return reply(mess.Onlyowner)
            if (quoted) {
                var media = await elaina.downloadAndSaveMediaMessage(quoted)
                if (args[1] == 'panjang') {
                    var { img } = await generateProfilePicture(media)
                    await elaina.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type:'set', 
                            xmlns: 'w:profile:picture'
                        },
                        content: [
                        {
                            tag: 'picture',
                            attrs: { type: 'image' },
                            content: img
                        }
					    ]
                    })
					fs.unlinkSync(media)
					reply(`Sukses`)
				} else {
					var data = await elaina.updateProfilePicture(botNumber, { url: media })
			        fs.unlinkSync(media)
				    reply(`Sukses`)
				}
            } else {
                reply(`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil bot`)
            }
            break



//────────────────────[ Converter ]────────────────────

      
     case prefix+'bass': case prefix+'blown': case prefix+'deep': case prefix+'earrape': case prefix+'fast': case prefix+'fat': case prefix+'nightcore': case prefix+'reverse': case prefix+'robot': case prefix+'slow': case prefix+'smooth': case prefix+'tupai':
       try {
       let set
       if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
       if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
       if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
       if (/earrape/.test(command)) set = '-af volume=12'
       if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
       if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
       if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
       if (/reverse/.test(command)) set = '-filter_complex "areverse"'
       if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
       if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
       if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
       if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
       if (/audio/.test(mime)) {
       reply(mess.wait)
       let media = await elaina.downloadAndSaveMediaMessage(quoted)
       let ran = getRandom('.mp3')
       exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
       fs.unlinkSync(media)
       if (err) return reply(err)
       let buff = fs.readFileSync(ran)
       elaina.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
       fs.unlinkSync(ran)
       })
       } else reply(`Balas audio yang ingin diubah dengan caption *${command}*`)
       } catch (e) {
       reply(e)
       }
       addCmd(command.slice(1), 1, commund)
   break  
   case prefix+'attp': {
   const buff = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
   elaina.sendMessage(m.chat, { sticker : buff}) 
   }
   addCmd(command.slice(1), 1, commund)
   break
   case prefix+'sticker': case prefix+'s': case prefix+'stiker': case prefix+'sgif': {
   if (!quoted) return reply(`Balas Video/Image Dengan Caption ${command}`)
  if (/image/.test(mime)) {
       let media = await quoted.download()
       let encmedia = await elaina.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
       await fs.unlinkSync(encmedia)
   } else if (/video/.test(mime)) {
       if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
       let media = await quoted.download()
       let encmedia = await elaina.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
       await fs.unlinkSync(encmedia)
   } else {
       return reply(`Kirim Gambar/Video Dengan Caption ${command}\nDurasi Video 1-9 Detik`)
       }
   }
   addCmd(command.slice(1), 1, commund)
   break     
   case prefix+'emojis': {
	    if (!text) return reply(`Contoh : ${command} 😅`)
	    reply(mess.wait)
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await elaina.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    addCmd(command.slice(1), 1, commund)
   break  
   case prefix+'emojimix': {
	    if (!text) return reply(`Contoh : ${command} 😅+🤔`)
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await elaina.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    addCmd(command.slice(1), 1, commund)
   break  
   case prefix+'toimage': case prefix+'toimg': {
       if (!quoted) return reply(`Reply Image`)
       if (!/webp/.test(mime)) return reply(`balas stiker dengan caption *${command}*`)
       reply(mess.wait)
       let media = await elaina.downloadAndSaveMediaMessage(quoted)
       let ran = await getRandom('.png')
       exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  fs.unlinkSync(media)
  if (err) throw err
  let buffer = fs.readFileSync(ran)
  elaina.sendMessage(m.chat, { image: buffer }, { quoted: m })
  fs.unlinkSync(ran)
       })
   }
   addCmd(command.slice(1), 1, commund)
   break  
	  case prefix+'tomp4': case prefix+'tovideo': {
       if (!quoted) return reply(`Reply stc`)
       if (!/webp/.test(mime)) return reply(`balas stiker dengan caption *${command}*`)
       reply(mess.wait)
		let { webp2mp4File } = require('./src/lib/uploader')
       let media = await elaina.downloadAndSaveMediaMessage(quoted)
       let webpToMp4 = await webp2mp4File(media)
       await elaina.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
       await fs.unlinkSync(media)
   }
   addCmd(command.slice(1), 1, commund)
   break  
case prefix+'tomp3': {
 if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${command}`)
 if (!m.quoted) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${command}`)
 reply(mess.wait)
 let media = await quoted.download()
 let { toAudio } = require('./src/lib/converters')
 let audio = await toAudio(media, 'mp4')
 elaina.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert by elaina-md.mp3`}, { quoted : m })
  }
  addCmd(command.slice(1), 1, commund)
   break
case prefix+'togif': {
       if (!quoted) return reply(`Reply Image`)
       if (!/webp/.test(mime)) return reply (`balas stiker dengan caption *${command}*`)
       reply(mess.wait)
		let { webp2mp4File } = require('./src/lib/uploader')
       let media = await elaina.downloadAndSaveMediaMessage(quoted)
       let webpToMp4 = await webp2mp4File(media)
       await elaina.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
       await fs.unlinkSync(media)
   }
   addCmd(command.slice(1), 1, commund)
   break  
	        case prefix+'tourl': {
       reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./src/lib/uploader')
       let media = await elaina.downloadAndSaveMediaMessage(quoted)
       if (/image/.test(mime)) {
  let anu = await TelegraPh(media)
  reply(util.format(anu))
       } else if (!/image/.test(mime)) {
  let anu = await UploadFileUgu(media)
  reply(util.format(anu))
       }
       await fs.unlinkSync(media)
   }
   addCmd(command.slice(1), 1, commund)
   break  
   	    

//────────────────────[ ANONYMOUS CHAT ]────────────────────

	    case prefix+'anonymous': {
       if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
  { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
       ]
       elaina.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await elaina.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, elaina.user.name, m)
   }
			break
   case prefix+'keluar': case prefix+'leave': {
       if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
       this.anonymous = this.anonymous ? this.anonymous : {}
       let room = Object.values(this.anonymous).find(room => room.check(m.sender))
       if (!room) {
  let buttons = [
      { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
  ]
  await elaina.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
  throw false
       }
       reply('Ok')
       let other = room.other(m.sender)
       if (other) await elaina.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
       delete this.anonymous[room.id]
       if (command === 'leave') break
   }
   case prefix+'mulai': case prefix+'start': {
       if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
       this.anonymous = this.anonymous ? this.anonymous : {}
       if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
  let buttons = [
      { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
  ]
  await elaina.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, elaina.user.name, m)
  throw false
       }
       let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
       if (room) {
  let buttons = [
      { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
      { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
  ]
  await elaina.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, elaina.user.name, m)
  room.b = m.sender
  room.state = 'CHATTING'
  await elaina.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, elaina.user.name, m)
       } else {
  let id = + new Date
  this.anonymous[id] = {
      id,
      a: m.sender,
      b: '',
      state: 'WAITING',
      check: function (who = '') {
 return [this.a, this.b].includes(who)
      },
      other: function (who = '') {
 return who === this.a ? this.b : who === this.b ? this.a : ''
      },
  }
  let buttons = [
      { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
  ]
  await elaina.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, elaina.user.name, m)
       }
       break
   }
   case prefix+'next': case prefix+'lanjut': {
       if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
       this.anonymous = this.anonymous ? this.anonymous : {}
       let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
       if (!romeo) {
  let buttons = [
      { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
  ]
  await elaina.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
  throw false
       }
       let other = romeo.other(m.sender)
       if (other) await elaina.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
       delete this.anonymous[romeo.id]
       let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
       if (room) {
  let buttons = [
      { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
      { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
  ]
  await elaina.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, elaina.user.name, m)
  room.b = m.sender
  room.state = 'CHATTING'
  await elaina.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, elaina.user.name, m)
       } else {
  let id = + new Date
  this.anonymous[id] = {
      id,
      a: m.sender,
      b: '',
      state: 'WAITING',
      check: function (who = '') {
 return [this.a, this.b].includes(who)
      },
      other: function (who = '') {
 return who === this.a ? this.b : who === this.b ? this.a : ''
      },
  }
  let buttons = [
      { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
  ]
  await elaina.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, elaina.user.name, m)
       }
       break
   }
   
//────────────────────[ OWNER MENU ]────────────────────
   
   case prefix+'public': {
       if (!isCreator) return reply(mess.Onlyowner)
       elaina.public = true
       reply('Sukse Change To Public Usage')
   }
   addCmd(command.slice(1), 1, commund)
   break  
   case prefix+'self': {
       if (!isCreator) return reply(mess.Onlyowner)
       elaina.public = false
       reply('Sukses Change To Self Usage')
   }
   addCmd(command.slice(1), 1, commund)
   break  
   case prefix+'chat': {
       if (!isCreator) return reply(mess.Onlyowner)
       if (!q) return reply(`Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete`)
       if (args[0] === 'mute') {
  elaina.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
       } else if (args[0] === 'unmute') {
  elaina.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
       } else if (args[0] === 'archive') {
  elaina.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
       } else if (args[0] === 'unarchive') {
  elaina.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
       } else if (args[0] === 'read') {
  elaina.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
       } else if (args[0] === 'unread') {
  elaina.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
       } else if (args[0] === 'delete') {
  elaina.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
       }
   }
   addCmd(command.slice(1), 1, commund)
   break	       
   case prefix+'react': {
       if (!isCreator) return reply(mess.Onlyowner)
       reactionMessage = {
  react: {
      text: args[0],
      key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
  }
       }
       elaina.sendMessage(m.chat, reactionMessage)
   }
   addCmd(command.slice(1), 1, commund)
   break  
   case prefix+'join': {
       if (!isCreator) return reply(mess.Onlyowner)
       if (!text) return reply (`Masukkan Link Group!`)
       if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(`Link Invalid`)
       reply(mess.wait)
       let result = args[0].split('https://chat.whatsapp.com/')[1]
       await elaina.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
   }
   addCmd(command.slice(1), 1, commund)
   break  
   case prefix+'leave': {
       if (!isCreator) return reply(mess.Onlyowner)
       await elaina.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
   }
   addCmd(command.slice(1), 1, commund)
   break  
   case 'setexif': case 'getexif': {
               if (!isCreator) return reply(mess.owner)
               if (!text) return reply(`Contoh : ${command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          reply(`Exif berhasil diubah menjadi\n\n> Packname : ${global.packname}\n> Author : ${global.author}`)
            }
   addCmd(command.slice(1), 1, commund)
   break  
   case prefix+'block': {
		if (!isCreator) return reply(mess.Onlyowner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await elaina.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	addCmd(command.slice(1), 1, commund)
   break  
   case prefix+'unblock': {
		if (!isCreator) return reply(mess.Onlyowner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await elaina.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	addCmd(command.slice(1), 1, commund)
   break  
   

//────────────────────[ INFO BOT ]────────────────────

case prefix+'owner': case prefix+'creator': {
  elaina.sendContact(m.chat, global.owner, fkontak)
  reply(`Owner tidak menerima chat sok asik + minta sv :v`)
  }  
addCmd(command.slice(1), 1, commund)
   break  
case prefix+'sc': case prefix+'script': case prefix+'source':{
reply(`*MALING PANGSIT!*\n\nMau ngapain bang? Banyak sc yg udah open source di Gh. bingung? pake Hisoka aja bagus tu`)			    
 }
addCmd(command.slice(1), 1, commund)
   break  
case prefix+'ping': case prefix+'test': case prefix+'botstatus': case prefix+'statusbot': {
 var used = process.memoryUsage()
 var cpus = os.cpus().map(cpu => {
     cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
	return cpu
    })
     var cpu = cpus.reduce((last, cpu, _, { length }) => {
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
       let timestamp = speed()
       let latensi = speed() - timestamp
       neww = performance.now()
       oldd = performance.now()
       respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
       `.trim()
       reply(respon)
   }
  addCmd(command.slice(1), 1, commund)
   break  
 
 
 
 
//────────────────────[ Maker Menu ]────────────────────
 
case prefix+'smeme': case prefix+'smm': {
if (!args.join(" ")) return reply("Masukan Textnya!")
reply(mess.wait)
if (/image/.test(mime)) {
var media = await elaina.downloadAndSaveMediaMessage(quoted, "smeme")
imgbbUploader('d93e8fb82c35cb38fe3790f28d003118', media)
.then(async (data) => {
var bgsd = args.join(" ")
var urls = data.display_url
let meme = `https://api.memegen.link/images/custom/ /${bgsd}.png?background=${urls}`
elaina.sendImageAsSticker(m.chat, meme, m, { packname:global.packname, author: global.author })
})
.catch(err => {
throw err
})
} else {
reply("Kirim foto dengan caption smeme")
}
}
addCmd(command.slice(1), 1, commund)
break 
case prefix+'glitch3':
if(!q) return reply(`Penggunaan ${command} teks|teks`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
case prefix+'3dbox':
if(!q) return elaina(`Penggunaan ${command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
.catch((err) => console.log(err));
addCmd(command.slice(1), 1, commund)
break
case prefix+'drapwater':
if(!q) return reply(`Penggunaan ${command} teks`)
reply(mess.wait)
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${q}`,])
    .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
    .catch((err) => console.log(err));
     addCmd(command.slice(1), 1, commund)
break
case prefix+'lion2':
  if(!q) return reply(`Penggunaan ${command} teks`)
  reply(mess.wait)
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
     .catch((err) => console.log(err));
     addCmd(command.slice(1), 1, commund)
break
case prefix+'papercut':
      if(!q) return reply(`Penggunaan ${command} teks`)
      reply(mess.wait)
      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
         .catch((err) => console.log(err));
         addCmd(command.slice(1), 1, commund)
break
case prefix+'transformer':
      if(!q) return reply(`Penggunaan ${command} teks`)
      reply(mess.wait)
      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
.catch((err) => console.log(err));
addCmd(command.slice(1), 1, commund)
break
case prefix+'herryp':
       if(!q) return reply(`Penggunaan ${command} teks|teks`)
       reply(mess.wait)
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
 .catch((err) => console.log(err));
 addCmd(command.slice(1), 1, commund)
break
case prefix+'neondevil':
      if(!q) return reply(`Penggunaan ${command} teks`)
      reply(mess.wait)
      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
         .catch((err) => console.log(err));
         addCmd(command.slice(1), 1, commund)
break
case prefix+'3dstone':
if(!q) return reply(`Penggunaan ${command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
case prefix+'3davengers':
if(!q) return reply(`Penggunaan ${command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
case prefix+'thunder':
if(!q) return reply(`Penggunaan ${command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
case prefix+'window':
if(!q) return reply(`Penggunaan ${command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
case prefix+'graffiti':
   case prefix+'grafiti':
if(!q) return reply(`Penggunaan ${command} teks|teks`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
case prefix+'pornhub':
if(!q) return reply(`Penggunaan ${command} teks`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
case prefix+'blackpink':
if(!q) return reply(`Penggunaan ${command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
case prefix+'glitch':
if(!q) return reply(`Penggunaan ${command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
  .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
case prefix+'glitch2':
if(!q) return reply(`Penggunaan ${command} teks|teks`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
case prefix+'glitch3':
if(!q) return reply(`Penggunaan ${command} teks|teks`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
case prefix+'3dspace':
if(!q) return reply(`Penggunaan ${command} teks|teks`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
case prefix+'lion':
if(!q) return reply(`Penggunaan ${command} teks|teks`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
case prefix+'3dneon':
if(!q) return reply(`Penggunaan ${command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
case prefix+'neon':
if(!q) return reply(`Penggunaan ${command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
case prefix+'greenneon':
if(!q) return reply(`Penggunaan ${command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break  
case prefix+'bokeh':
if(!q) return reply(`Penggunaan ${command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
case prefix+'hollographic':
if(!q) return reply(`Penggunaan ${command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
case prefix+'bear':
if(!q) return reply(`Penggunaan ${command} teks`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
case prefix+'wolf':
if(!q) return reply(`Penggunaan ${command} teks`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
case prefix+'joker':
if(!q) return reply(`Penggunaan ${command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
case prefix+'dropwater':
if(!q) return reply(`Penggunaan ${command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
  .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
case prefix+'neonlight':
if(!q) return reply(`Penggunaan ${command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
case prefix+'natural':
if(!q) return reply(`Penggunaan ${command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
case prefix+'carbon':
if(!q) return reply(`Penggunaan ${command} teks`)
reply(mess.wait)
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
case prefix+'pencil':
if(!q) return reply(`Penggunaan ${command} teks`)
reply(mess.wait)
textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => elaina.sendMessage(m.chat, { image: { url: data }, caption: `Succes!` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break 
case prefix+'candy': case prefix+'christmas': case prefix+'3dchristmas': case prefix+'sparklechristmas':
case prefix+'deepsea': case prefix+'scifi': case prefix+'rainbow': case prefix+'waterpipe': case prefix+'spooky': 
case prefix+'pencil': case prefix+'circuit': case prefix+'discovery': case prefix+'metalic': case prefix+'fiction': case prefix+'demon': 
case prefix+'transformer': case prefix+'berry': case prefix+'thunder': case prefix+'magma': case prefix+'3dstone': 
case prefix+'neonlight': case prefix+'glitch': case prefix+'harrypotter': case prefix+'brokenglass': case prefix+'papercut': 
case prefix+'watercolor': case prefix+'multicolor': case prefix+'neondevil': case prefix+'underwater': case prefix+'graffitibike':
case prefix+'snow': case prefix+'cloud': case prefix+'honey': case prefix+'ice': case prefix+'fruitjuice': case prefix+'biscuit': case prefix+'wood': 
case prefix+'chocolate': case prefix+'strawberry': case prefix+'matrix': case prefix+'blood': case prefix+'dropwater': case prefix+'toxic': 
case prefix+'lava': case prefix+'rock': case prefix+'bloodglas': case prefix+'hallowen': case prefix+'darkgold': case prefix+'joker': case prefix+'wicker':
case prefix+'firework': case prefix+'skeleton': case prefix+'blackpink': case prefix+'sand': case prefix+'glue': case prefix+'1917': case prefix+'leaves': {
             if (!q) return reply(`Example : ${command} Elaina`) 
             reply(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
             if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
   let anu = await maker.textpro(link, q)
 elaina.sendMessage(m.chat, { image: { url: anu }, caption: `Succes!` }, { quoted: m })
}
 addCmd(command.slice(1), 1, commund)
break

//────────────────────[ Anime Menu ]────────────────────

case prefix+'quotesanime': case prefix+'quoteanime': {
	let { quotesAnime } = require('./src/lib/scraper')
        let anu = await quotesAnime()
         result = anu[Math.floor(Math.random() * anu.length)]
         let buttons = [
         {buttonId: `.quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
             ]
          let buttonMessage = {
          text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
          footer: ``,
          buttons: buttons,
          headerType: 4,
         contextInfo:{externalAdReply:{
         title:`Pinterest by Elaina`,
         body:``,
         showAdAttribution: true,
         thumbnail: logoAd,
         mediaType:1,
         mediaUrl: `${global.websitex}`,
         sourceUrl: `${global.websitex}`
         }}
           }
         elaina.sendMessage(m.chat, buttonMessage, { quoted: m })
           }
         addCmd(command.slice(1), 1, commund)
   break  	      
         case prefix+'ppcp': {
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                elaina.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                elaina.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
          addCmd(command.slice(1), 1, commund)
   break  
   case prefix+'randomwaifu': {
		reply(mess.wait)
		axios.get(`https://api.waifu.pics/sfw/waifu`)
		.then(({data}) => {
		elaina.sendImage(m.chat, data.url, mess.success, m)
		 })
		}
   addCmd(command.slice(1), 1, commund)
   break  
   case prefix+'randomloli': {
		reply(mess.wait)
		axios.get(`https://api-lolis.vercel.app/loli`)
		.then(({data}) => {
		elaina.sendImage(m.chat, data.url, mess.success, m)
		 })
		}
   addCmd(command.slice(1), 1, commund)
   break  
  case prefix+'hloli': {
		reply(mess.wait)
		axios.get(`https://api-lolis.vercel.app/nsfwloli`)
		.then(({data}) => {
		elaina.sendImage(m.chat, data.url, mess.success, m)
		 })
		}
   addCmd(command.slice(1), 1, commund)
   break  
   
   
//────────────────────[ Game ]────────────────────
 
 case prefix+'tebakanime':{
 if (_tebakanime.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih ada permainan yang sedang berlangsung")   
   let datta = tebakanime
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.jawaban
   let gambar = data.image
   let japan = data.name_jp
   let teks = `*TEBAK ANIME*\n\nSiapa nama Karakter pada gambar tersebut!\n${japan}\nWaktu : ${waktu}s`
   _tebakanime[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
  fs.writeFileSync("./src/game/dbgame/tebakanime.json", JSON.stringify(_tebakanime))
  elaina.sendMessage(m.chat, { image: { url: gambar }, caption: teks }, { quoted: m })
   await sleep(_tebakanime[m.sender.split('@')[0]].time)
   if (_tebakanime.hasOwnProperty(m.sender.split('@')[0])) {
      elaina.sendMessage(m.chat, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tebakanime[m.sender.split('@')[0]]
      fs.writeFileSync("./src/game/dbgame/tebakanime.json", JSON.stringify(_tebakanime))
    }
 }
addCmd(command.slice(1), 1, commund)
break
case prefix+'tebakbendera':{
 if (_tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih ada permainan yang sedang berlangsung")      
   /*
   / 1000 = 1 detik
   / 60000 = 1 menit
   >_tebakbendera
   */
   let datta = tebakbendera
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.name
   let gambar = data.img
   let teks = `*TEBAK BENDERA*\n\nApa nama bendera pada gambar tersebut!\nWaktu : ${waktu}s`
   _tebakbendera[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
  fs.writeFileSync("./src/game/dbgame/tebakbendera.json", JSON.stringify(_tebakbendera))
  elaina.sendMessage(m.chat, { image: { url: gambar }, caption: teks }, { quoted: m })
   await sleep(_tebakbendera[m.sender.split('@')[0]].time)
   if (_tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
      elaina.sendMessage(m.chat, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tebakbendera[m.sender.split('@')[0]]
      fs.writeFileSync("./src/game/dbgame/tebakbendera.json", JSON.stringify(_tebakbendera))
 
    }
 }
addCmd(command.slice(1), 1, commund)
break
case prefix+'caklontong':{
 if (_caklontong.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih ada permainan yang sedang berlangsung")
   let datta = caklontong
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.jawaban
   let soal = data.soal
   let desk = data.deskripsi
   let teks = `𝗖𝗔𝗞 𝗟𝗢𝗡𝗧𝗢𝗡𝗚\n\n*Soal :* ${soal}\n\nWaktu : ${waktu}s`
   _caklontong[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
  fs.writeFileSync("./src/game/dbgame/caklontong.json", JSON.stringify(_caklontong))
  elaina.sendMessage(m.chat, { text : teks}, { quoted: m })
   await sleep(_caklontong[m.sender.split('@')[0]].time)
   if (_caklontong.hasOwnProperty(m.sender.split('@')[0])) {
      elaina.sendMessage(m.chat, { text: `${jawaban}\n\n${desk}`, mentions: [m.sender] },
{ quoted : m }) 
      delete _caklontong[m.sender.split('@')[0]]
      fs.writeFileSync("./src/game/dbgame/caklontong.json", JSON.stringify(_caklontong))
    }
 }
addCmd(command.slice(1), 1, commund)
break
case prefix+'tebaklagu':{
 if (_tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih ada permainan yang sedang berlangsung")
   let datta =  tebaklagu
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.title
   let soal = data.artists
   let songs = data.songs
   let teks = `𝗧𝗘𝗕𝗔𝗞 𝗟𝗔𝗚𝗨\n_Apa Nama Judulnya_\n*Artist:* ${soal}\n\nWaktu : ${waktu}s`
   _tebaklagu[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
  fs.writeFileSync("./src/game/dbgame/tebaklagu.json", JSON.stringify(_tebaklagu))
elaina.sendMessage(m.chat, { text : teks}, { quoted: m })
await elaina.sendMessage(m.chat, { audio: {url : songs }, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
  await sleep(_tebaklagu[m.sender.split('@')[0]].time)
   if (_tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
      elaina.sendMessage(m.chat, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tebaklagu[m.sender.split('@')[0]]
      fs.writeFileSync("./src/game/dbgame/tebaklagu.json", JSON.stringify(_tebaklagu)) 
    }
 }
addCmd(command.slice(1), 1, commund)
break
case prefix+'tebaklirik':{
 if (_tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih ada permainan yang sedang berlangsung")
   let datta =  tebaklirik
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.jawaban
   let soal = data.soal
   let teks = `𝗧𝗘𝗕𝗔𝗞 𝗟𝗜𝗥𝗜𝗞\n\n*Soal :* ${soal}\n\nWaktu : ${waktu}s`
   _tebaklirik[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
  fs.writeFileSync("./src/game/dbgame/tebaklirik.json", JSON.stringify(_tebaklirik))
  elaina.sendMessage(m.chat, { text : teks}, { quoted: m })
   await sleep(_tebaklirik[m.sender.split('@')[0]].time)
   if (_tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
      elaina.sendMessage(m.chat, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tebaklirik[m.sender.split('@')[0]]
      fs.writeFileSync("./src/game/dbgame/tebaklirik.json", JSON.stringify(_tebaklirik))
    }
 }
addCmd(command.slice(1), 1, commund)
break
case prefix+'tekateki':{
 if (_tekateki.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih ada permainan yang sedang berlangsung")
   let datta = tekateki
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.jawaban
   let soal = data.soal
   let teks = `𝗧𝗘𝗞𝗔 𝗧𝗘𝗞𝗜;\n\n*Soal :* ${soal}\n\nWaktu : ${waktu}s`
   _tekateki[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
  fs.writeFileSync("./src/game/dbgame/tekateki.json", JSON.stringify(_tekateki))
  elaina.sendMessage(m.chat, { text : teks}, { quoted: m })
   await sleep(_tekateki[m.sender.split('@')[0]].time)
   if (_tekateki.hasOwnProperty(m.sender.split('@')[0])) {
      elaina.sendMessage(m.chat, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tekateki[m.sender.split('@')[0]]
      fs.writeFileSync("./src/game/dbgame/tekateki.json", JSON.stringify(_tekateki))
    }
 }
addCmd(command.slice(1), 1, commund)
break
case prefix+'tebakkalimat':{
 if (_tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih ada permainan yang sedang berlangsung")
   let datta = tebakkalimat
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.jawaban
   let soal = data.soal
   let hint = data.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
   let teks = `𝗧𝗘𝗕𝗔𝗞 𝗞𝗔𝗟𝗜𝗠𝗔𝗧;\n\n*Soal :* ${soal}\n\nWaktu : ${waktu}s\nHint : ${hint}`
   _tebakkalimat[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
  fs.writeFileSync("./src/game/dbgame/tebakkalimat.json", JSON.stringify(_tebakkalimat))
  elaina.sendMessage(m.chat, { text : teks}, { quoted: m })
   await sleep(_tebakkalimat[m.sender.split('@')[0]].time)
   if (_tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
      elaina.sendMessage(m.chat, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tebakkalimat[m.sender.split('@')[0]]
      fs.writeFileSync("./src/game/dbgame/tebakkalimat.json", JSON.stringify(_tebakkalimat))
    }
 }
addCmd(command.slice(1), 1, commund)
break
case prefix+'susunkata':{
 if (_susunkata.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih ada permainan yang sedang berlangsung")
   let datta = susunkata
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.jawaban
   let soal = data.soal
   let tipe = data.tipe
   let teks = `𝗦𝗨𝗦𝗨𝗡 𝗞𝗔𝗧𝗔;\n\n*Soal :* ${soal}\n*Tipe :* ${tipe}\n\nWaktu : ${waktu}s`
   _susunkata[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
  fs.writeFileSync("./src/game/dbgame/susunkata.json", JSON.stringify(_susunkata))
  elaina.sendMessage(m.chat, { text : teks}, { quoted: m })
   await sleep(_susunkata[m.sender.split('@')[0]].time)
   if (_susunkata.hasOwnProperty(m.sender.split('@')[0])) {
      elaina.sendMessage(m.chat, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _susunkata[m.sender.split('@')[0]]
      fs.writeFileSync("./src/game/dbgame/susunkata.json", JSON.stringify(_susunkata))
 
    }
 }
addCmd(command.slice(1), 1, commund)
break
case prefix+'asahotak':{
 if (_asahotak.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih ada permainan yang sedang berlangsung")   
   let datta = asahotak
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.jawaban
   let soal = data.soal
   let teks = `𝗔𝗦𝗔𝗛 𝗢𝗧𝗔𝗞\n\n*Soal :* ${soal}adalah\n\nWaktu : ${waktu}s`
   _asahotak[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
  fs.writeFileSync("./src/game/dbgame/asahotak.json", JSON.stringify(_asahotak))
  elaina.sendMessage(m.chat, { text : teks}, { quoted: m })
   await sleep(_asahotak[m.sender.split('@')[0]].time)
   if (_asahotak.hasOwnProperty(m.sender.split('@')[0])) {
      elaina.sendMessage(m.chat, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _asahotak[m.sender.split('@')[0]]
      fs.writeFileSync("./src/game/dbgame/asahotak.json", JSON.stringify(_asahotak))
    }
 }
 addCmd(command.slice(1), 1, commund)
break
 
//────────────────────[ NonCategory ]────────────────────
 

case prefix+'donate': case prefix+'donasi':{
menu = `_Ah Yg Bener Luwh_

• Dana ✓ : 6282331660134
• Gopay ✓ : 6282331660134
• Pulsa ✓ : 082331660134

Makasih Buat yg bener-bener donate, kalo buat yg boong parah lu bg, Tukang PhP 😅👆`
reply(menu)
}
addCmd(command.slice(1), 1, commund)
break

case prefix+'sewabot': case prefix+'sewa': { // Nemu di Sc chika
var tod = await reSize(logo, 200, 200) 
var messa = await prepareWAMessageMedia({ image: logo}, { upload: elaina.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "5652230961488707",
"title": `Elaina`,
"description": `Jika harap langsung to the point`,
"footerText":  `elaina-md`,
"currencyCode": "IDR",
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "5000000",
"retailerId": `SkylarKaf`,
"url": `kntl`
},
"businessOwnerJid": "6282331660134@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: m })
elaina.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
addCmd(command.slice(1), 1, commund)
break

case prefix+'tqtq': case prefix+'tqto': {
anu = `*• Sepuh*
° DikaArdnt
° Fatih Aridho
° Caf-ID
° Deff
° Alya

*• Penyedia Api*
° Calliph
° Yogipw
° Hexa
° Xfar
° Hardi
° Bochil
° Kotz`
reply(anu)
}
break
case prefix+'dashboard': case prefix+'db': {
var jumlahCmd = commund.length
if (jumlahCmd > 15) jumlahCmd = 15
teks = `*• Total Hit*\n\n> globatHit : ${hit.all || 'Load Detect'}\n> todayHit : ${hit.today || 'Load Detect'}\n\n*• globalSub*\n`
for (let i = 0; i < jumlahCmd ; i ++) {
teks += `\n> ${prefix + commund[i].id} : ${commund[i].total}`
}
reply(teks) 
}
addCmd(command.slice(1), 1, commund)
break

//────────────────────[ TampilanMenu ]────────────────────
		  
case prefix+'menu': case prefix+'help': {			
let buttons = [
{buttonId: `${prefix}command`, buttonText: {displayText: 'Command'}, type: 1},
{buttonId: `${prefix}dashboard`, buttonText: {displayText: 'Dashboard'}, type: 1}
]
let buttonMessage = {
document: logo,
mimetype: `application/pdf`,
fileName: `@ＳｋｙｌａｒＫａｆ`,
fileLength: 9999999999,
pageCount: 15, // berapa halaman?
caption: `Hai Saya adalah Elaina-bot yg bisa kamu andalkan untuk mempermudah kamu dalam membuat sticker, mendownload media dan lain-lain.`,
footer: `console.log('Elaina desu~')`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `${sayTime} ${pushname}`,
body: ``,
jpegThumbnail: logo,
thumbnail: logo,
mediaType: 2,
renderLargerThumbnail: true, 
showAdAttribution: true,
"previewType": "VIDEO",
"mediaUrl": `${global.websitex}`,
sourceUrl: "https://chat.whatsapp.com/GPTXOwhiGyO8zusN5OZHGb"
}}
}
elaina.sendMessage(m.chat, buttonMessage, { quoted: m })
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'listmenu': case prefix+'command': {
 var sks = `*• Information*`
 var ghs = ` ⫹⫺ Language: Javascript
 ⫹⫺ Type: NodeJs
 ⫹⫺ Library: Baileys-Md
 ⫹⫺ Prefix: ( Multi )
 ⫹⫺ HostName: ${os.hostname()}
 ⫹⫺ Platform: ${os.platform()}
 ⫹⫺ TotalUser: ${Object.keys(global.db.data.users).length}
 ⫹⫺ GlobalHit: ${hit.all || 'Load Detect'}`
 const sections = [
				   {
					title: "[ + ] Berminat Sewabot?",
					rows: [{
						title: "[ 💰 ] Sewa Bot",
						rowId: ".sewabot",
						description: "Udang bot untuk grub kamu!"
						}			
					]
				},
				{
					title: "[ • ] List Sub Menu",
					rows: [ {
					    	title: "[ ⛩ ] All Menu",
					    	rowId: ".allmenu",
					    	description: "Menampilkan semua fitur bot"
					     	}, {
							title: "[ 🔎 ] Search Menu",
							rowId: ".searchmenu",
							description: "Berguna Untuk Mencari Sesuatu Di Internet"
						    }, {
							title: "[ 👥 ] Groub Menu",
							rowId: ".menugrup",
							description: "Menu Yg Hanya Bisa Di Akses Dalam Grub"
					    	}, {
							title: "[ 📥 ] Menu Downloader",
							rowId: ".downloader",
							description: "Memudahkan Kamu Untuk Mendownload Media"
					    	}, {
							title: "[ ♻️ ] Menu Converter",
							rowId: ".converter",
							description: "Berfungsi Untuk Membuat Sticker Merubah Media Dll"
					    	}, {
							title: "[ 🇯🇵 ] Anime Manga",
							rowId: ".animanga",
							description: "Khusus untuk kamu penyuka anime dan manga"
				     		}, {
							title: "[ ✒ ] Textpro",
							rowId: ".textpro",
							description: "Berfungsi untuk membuat logo text yang indah"
				     		}, {
							title: "[ 🎲 ] Fun Games",
							rowId: ".fungames",
							description: "Menu untuk menghilangkan rasa stres?"
					    	}, {
							title: "[ 👻 ] Anonymous Chat",
							rowId: ".anonymchat",
							description: "Terinspirasi dari bot telegram"
					    	}, {
							title: "[ 👑 ] Owner Menu",
							rowId: ".ownermenu",
							description: "Menu yg hanya bisa di akses owner"
					    	}, {
							title: "[ 🗑 ] Other Menu",
							rowId: ".other",
							description: "Random"
					    	}
					]
				},
			]
	const listMessage = {
		 text: sks,
		 footer: ghs,
		 title: "",
		 buttonText: "MENU",
		 sections
	  }
    const sendMsg = await elaina.sendMessage(m.chat, listMessage, {quoted: fkontak })
	}
	addCmd(command.slice(1), 1, commund)
	break 
case prefix+'allmenu':{
 var teks = `${(ind.allmenuTxT(prefix))}`
 var tegs = `𝗌𝗎𝗉𝗉𝗈𝗋𝗍 @𝗌𝗄𝗒𝗅𝖺𝗋𝗄𝖺𝖿_`			   
elaina.sendMessage(m.chat, { caption: teks, location: { jpegThumbnail: globaltamnel }, templateButtons: buttonsList, footer: tegs})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'searchmenu': case prefix+'searching': case prefix+'menupencarian': {
 var teks = `${(ind.searchTxT(prefix))}`
 var tegs = `𝗌𝗎𝗉𝗉𝗈𝗋𝗍 @𝗌𝗄𝗒𝗅𝖺𝗋𝗄𝖺𝖿_`			   
elaina.sendMessage(m.chat, { caption: teks, location: { jpegThumbnail: globaltamnel }, templateButtons: buttonsList, footer: tegs})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'menugrup': case prefix+'groubmenu': case prefix+'groupmenu': {
 var teks = `${(ind.groubTxT(prefix))}`
 var tegs = `𝗌𝗎𝗉𝗉𝗈𝗋𝗍 @𝗌𝗄𝗒𝗅𝖺𝗋𝗄𝖺𝖿_`			   
elaina.sendMessage(m.chat, { caption: teks, location: { jpegThumbnail: globaltamnel }, templateButtons: buttonsList, footer: tegs})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'downloader': case prefix+'downloadmenu': case prefix+'downloadermenu': {
 var teks = `${(ind.downloaderTxT(prefix))}`
 var tegs = `𝗌𝗎𝗉𝗉𝗈𝗋𝗍 @𝗌𝗄𝗒𝗅𝖺𝗋𝗄𝖺𝖿_`			   
elaina.sendMessage(m.chat, { caption: teks, location: { jpegThumbnail: globaltamnel }, templateButtons: buttonsList, footer: tegs})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'converter': case prefix+'convertmenu': {
 var teks = `${(ind.converterTxT(prefix))}`
 var tegs = `𝗌𝗎𝗉𝗉𝗈𝗋𝗍 @𝗌𝗄𝗒𝗅𝖺𝗋𝗄𝖺𝖿_`			   
elaina.sendMessage(m.chat, { caption: teks, location: { jpegThumbnail: globaltamnel }, templateButtons: buttonsList, footer: tegs})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'animanga': case prefix+'animemenu': {
 var teks = `${(ind.animangaTxT(prefix))}`
 var tegs = `𝗌𝗎𝗉𝗉𝗈𝗋𝗍 @𝗌𝗄𝗒𝗅𝖺𝗋𝗄𝖺𝖿_`			   
elaina.sendMessage(m.chat, { caption: teks, location: { jpegThumbnail: globaltamnel }, templateButtons: buttonsList, footer: tegs})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'textpro': case prefix+'textpromenu': {
 var teks = `${(ind.textproTxT(prefix))}`
 var tegs = `𝗌𝗎𝗉𝗉𝗈𝗋𝗍 @𝗌𝗄𝗒𝗅𝖺𝗋𝗄𝖺𝖿_`			   
elaina.sendMessage(m.chat, { caption: teks, location: { jpegThumbnail: globaltamnel }, templateButtons: buttonsList, footer: tegs})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'fungames': case prefix+'funmenu': {
 var teks = `${(ind.fungamesTxT(prefix))}`
 var tegs = `𝗌𝗎𝗉𝗉𝗈𝗋𝗍 @𝗌𝗄𝗒𝗅𝖺𝗋𝗄𝖺𝖿_`			   
elaina.sendMessage(m.chat, { caption: teks, location: { jpegThumbnail: globaltamnel }, templateButtons: buttonsList, footer: tegs})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'anonymchat': case prefix+'anonymousmenu': {
 var teks = `${(ind.anonymousTxT(prefix))}`
 var tegs = `𝗌𝗎𝗉𝗉𝗈𝗋𝗍 @𝗌𝗄𝗒𝗅𝖺𝗋𝗄𝖺𝖿_`			   
elaina.sendMessage(m.chat, { caption: teks, location: { jpegThumbnail: globaltamnel }, templateButtons: buttonsList, footer: tegs})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'ownermenu': {
 var teks = `${(ind.ownermenuTxT(prefix))}`
 var tegs = `𝗌𝗎𝗉𝗉𝗈𝗋𝗍 @𝗌𝗄𝗒𝗅𝖺𝗋𝗄𝖺𝖿_`			   
elaina.sendMessage(m.chat, { caption: teks, location: { jpegThumbnail: globaltamnel }, templateButtons: buttonsList, footer: tegs})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'other': case prefix+'othermenu': {
 var teks = `${(ind.othermenuTxT(prefix))}`
 var tegs = `𝗌𝗎𝗉𝗉𝗈𝗋𝗍 @𝗌𝗄𝗒𝗅𝖺𝗋𝗄𝖺𝖿_`			   
elaina.sendMessage(m.chat, { caption: teks, location: { jpegThumbnail: globaltamnel }, templateButtons: buttonsList, footer: tegs})
}
addCmd(command.slice(1), 1, commund)
break


//────────────────────[ BATAS TEMAN ]────────────────────
  
    default:
       if (budy.startsWith('=>')) {
  if (!isCreator) return reply(mess.Onlyowner)
  function Return(sul) {
      sat = JSON.stringify(sul, null, 2)
      bang = util.format(sat)
 if (sat == undefined) {
     bang = util.format(sul)
 }
 return reply(bang)
  }
  try {
      reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
      reply(String(e))
  }
       }

       if (budy.startsWith('>')) {
  if (!isCreator) return reply(mess.Onlyowner)
  try {
      let evaled = await eval(budy.slice(2))
      if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
      await reply(evaled)
  } catch (err) {
      await reply(String(err))
  }
       }

       if (budy.startsWith('$')) {
  if (!isCreator) return reply(mess.Onlyowner)
  exec(budy.slice(2), (err, stdout) => {
      if(err) return reply(err)
      if (stdout) return reply(stdout)
  })
       }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
  this.anonymous = this.anonymous ? this.anonymous : {}
  let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
  if (room) {
      if (/^.*(next|leave|start)/.test(m.text)) return
      if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
      let other = [room.a, room.b].find(user => user !== m.sender)
      m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
 contextInfo: {
     ...m.msg.contextInfo,
     forwardingScore: 0,
     isForwarded: true,
     participant: other
 }
      } : {})
  }
  return !0
       }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    elaina.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }       
    } catch (err) {
        
    }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

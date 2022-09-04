const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "help",
  description:
    "Get list of all command and even get to know every command detials",
  usage: "help <cmd>",
  category: "info",
  run: async (client, message, args) => {
    
   let helpEmbed = new MessageEmbed()
      .setTitle("**__کامند__ های ربات**")
      .setDescription("****")
      .addField(
        "• **ادمین**",
        "```emojiadd, add-these, announce, bug, addrole, ban, purge, hackban, kick, lock, mute, removerole, resetwarns, setnick, setmodlog, slowmode, unlock, unmute, voicekick, warn, warnings, setwelcome , nuke```"
      )
      .addField(
        "• **جنرال**",
        "```servericon , calculator , invite , membercount ,  help , serverinfo , leaderboard``` "
      )
      .addField(
        "• **پیشنهاد**",
        "```sreply, setsuggest, suggest```"
      )
      .addField(
        "• **ابزار**",
        "```discriminator, findemoji, haste, sudo , timedifference```"
      )
    
      .addField(
        "• **لول**",
        "```lb, rank```"
      )
      .addField(
        "• **سرچ**",
        "```anime, discord, github, ig, npm, twitter, yt, imdb,```"
      )
      .addField(
        "• **بانک و خرید**",
        "```balance, daily, fish, addmoney, beg, buy, deposit, leaderboard, pay, removemoney, roulette, sell, slots, shop, coins-system, withdraw, work```"
      )
      .addField(
        "• **پشتیبان گیری**",
        "```backup-load, info-backup, backup-create```"
      )
      .addField(
        "• **اطلاعات**",
        "```inv, help, invite, invites, badges, botinfo, embedgen, ping, pokemon, serverinfo, servericon, snipe, uptime, userinfo``` "
      )
      .addField(
        "• **آهنگ**",
        "```loop, clear, disable-loop, join, leave, nowplaying, play, playlist, pause, queue, resume, shuffle, skip, stop, volume```"
      )
      .addField(
        "• **چلنج**",
        "```neko, slap, jail, love, triggered, achievement, avatarfusion, panda, rip, affect``` "
      )
      .addField(
        "• **ماد**",
        "```lockchannel , purge , slowmode , mute , unmute ,   nuke```"
      )
      .addField(
        "• **اونر**",
        "```eval , getinv , serverlist , stats```"
      )
      .addField(
        "• **سرگرمی**",
        "```advice, ascii, cat, cry, dog, fact, hug, joke, kiss, kpop, math, meme, pat, punch, avatar``` "
      )
  
      .addField('**v1.2**')
     
      
      .setFooter(
      `Dev: ARSAM`,
      client.user.displayAvatarURL(),
      message.delete()
    );

      message.channel.send(helpEmbed)

  },
};
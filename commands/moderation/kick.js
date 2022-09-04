const { MessageEmbed } = require("discord.js")
const moment = require('moment')

module.exports = {
name: "kick",
category: "moderation",
description: "kick a user",
cooldown: 5,
userPerms: ["KICK_MEMBERS"],
clientPerms: ["KICK_MEMBERS"],
run: async(client, message, args) => {  
const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
const reason = args.slice(1).join(" ")
          if (!args[0]) return message.channel.send(":x: | **یک نفر را برای کیک کردن مشخص کنید.**")
        if (!mentionedMember) return message.channel.send(":x: | **نمیتونم ممبر رو پیدا کنم.**")
        if (mentionedMember.id === message.author.id) return message.channel.send(":x: | تو نمیتونی خودتو کیک کنی 0_0")
        if (mentionedMember.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.owner.id) {
            return message.channel.send(":x: | **تو نمیتونی فرد مورد نظر رو کیک کنی.**")
        }
        if (mentionedMember.kickable) {
            const embed = new MessageEmbed()
            .setAuthor(`${message.author.username} - (${message.author.id})`, message.author.displayAvatarURL({dynamic: true}))
            .setThumbnail(mentionedMember.user.displayAvatarURL({dynamic: true}))
            .setColor(`RANDOM`)
            .setDescription(`
**ممبر:** ${mentionedMember.user.username} - (${mentionedMember.user.id})
**دلیل:** ${reason || "بدون دلیل"}
            `)
        message.channel.send(embed)
        mentionedMember.kick()
        } else {
            return message.channel.send(":x: | **من نمیتونم شخص مورد نظر رو کیک کنم. مطمعن شو رول طرف از من پایین تره.**")
        }
        return undefined
    let channel = db.fetch(`modlog_${message.guild.id}`)
            if (!channel) return;

            const embed = new MessageEmbed()
                .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
                .setColor("#ff0000")
                .setThumbnail(kickMember.user.displayAvatarURL({ dynamic: true }))
                .setFooter(message.guild.name, message.guild.iconURL())
                .addField("**Moderation**", "kick")
                .addField("**یوزر کیک شد**", kickMember.user.username)
                .addField("**توسط**", message.author.username)
                .addField("**دلیل**", `${reason || "**بدون دلیل**"}`)
                .addField("**زمان**", message.createdAt.toLocaleString())
                .setTimestamp();

            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(embed)
        }
    }

const { MessageEmbed }= require("discord.js");
const db = require("quick.db");

module.exports = {
    
        name: "removemoney",
        aliases: ["rm"],
        category: "economy",
        description: "Removes money from a user",
        usage: "[ mention | ID]",
        accessableby: "Administrator, Owner"
    ,
    run: async (bot, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR", "MANAGE_GUILD")) return message.channel.send("❌ تو اجازه نداری پول هات رو کم کنی");
        if (!args[0]) return message.channel.send("**یک شخص رو منشن کن**")

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!user) return message.channel.send("**یک شخص درست رو منشن کن**")

        if (!args[1]) return message.channel.send("**مقدار رو وارد کن**")
        if (isNaN(args[1])) return message.channel.send("**یک مقدار صحیح وارد کن**");
        let bal = await db.fetch(`money_${user.id}`)

        if (args[0] > bal) return message.channel.send("**اونقدر نمیشه کم کرد**")
        db.subtract(`money_${user.id}`, args[1])
        let bal2 = await db.fetch(`money_${user.id}`)

        let moneyEmbed = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`✅ Removed ${args[1]} coins\n\nموجودی جدید: ${bal2}`);
        message.channel.send(moneyEmbed)

    }
}
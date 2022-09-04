const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
   
        name: "addmoney",
        aliases: ["am"],
        category: "economy",
        description: "Adds Money to a user",
        usage: "[ mention | ID]",
        accessableby: "Administrator, Owner"
    ,
    run: async (bot, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("❌ You Do Not Have Permissions To Add Money! - [ADMINISTRATOR]");
        if (!args[0]) return message.channel.send("**یک نفرو منشن کن**")

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!user) return message.channel.send("**یک شخص درست رو منشن کن**")
        if (!args[1]) return message.channel.send("**مقدار رو وارد کن**")
        if (isNaN(args[1])) return message.channel.send(`**❌ مقدار وارد شده عدد نیست**`);
        if (args[0] > 10000) return message.channel.send("**انقدر نمیشه ادد کرد!**")
        db.add(`money_${user.id}`, args[1])
        let bal = db.fetch(`money_${user.id}`)

        let moneyEmbed = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`✅ ادد شد ${args[1]} coins\n\nموجودی جدید: ${bal}`);
        message.channel.send(moneyEmbed)

    }
}
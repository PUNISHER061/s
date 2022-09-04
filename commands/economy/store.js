const { MessageEmbed } = require('discord.js');
const { default_prefix } = require('../../config.json');
const db = require('quick.db');
const colors = require('../../colors.json')

module.exports = {
   
        name: "shop",
    run: async (client, message, args) => {
        let target = db.get(`userb_${message.author.id}`);

		const ban_error = new MessageEmbed()
		.setDescription(':no: **You are banned from using this section | Reason : Abuse\n with the owner ARSAM#0001 to appeal a permanent ban**')
		.setColor(colors.main)

		if(target) {
			return message.channel.send(ban_error)
		}

		let prefix = await db.get(`prefix_${message.guild.id}`);
		if(prefix === null) prefix = default_prefix;
 

     let embed = new MessageEmbed()
	    .setTitle('شاپ')
        .addField('ایتم', '**Shovel : 25,000 :coin: \nFishing Pole : 25,000 :coin: \nHeadphone : 50,000 :coin: \nCell Phone : 120,000 :coin: \nLaptop : 200,000 :coin: \nDB Coin : 1,000,000 :coin: **', true)
        .addField('حیوان خونگی', '**Turtle : 1,700 :coin: \nBird : 2,000 :coin: \nCat : 5,000 :coin: \nDog : 5,500 :coin: \nSnake : 10,000 :coin: **', true)
        .addField('اسلحه', '**Pistol : 350,000 :coin: \nRifle : 650,00 :coin: \nSniper : 700,000 :coin:\nShotgun : 700,000 :coin:**', true)
        .addField('قدرت', '**Ghost : 1,500,000 :coin:\nNinja : 2,500,000 :coin:\nMind Reading : 5,000,000 :coin:\nInvisible : 15,000,000 :coin:**', true)
        .addField('نشان', '**Copper : 200,000 :coin:\nBronze : 1,000,000 :coin:\nSilver : 2,000,000 :coin:\nGold : 3,000,000 :coin:\nDiamond : 5,000,000 :coin:\nImmortal : 10,000,000:coin:**', true)
        .addField('ماشین', '**Tesla : 3,000,000 :coin:\nFerrari : 5,000,000 :coin:\nBugatti : 8,000,000 :coin:\nLamborghini : 12,000,000 :coin:\nMercedes-Benz : 15,000,000 :coin:\nRolls-Royce : 20,000,000:coin:**', true)
        .addField('خونه', '**Apartment : 10,000,000 :coin:\nVilla : 15,000,000 :coin:\nOcean View : 20,000,000 :coin:\nMansion : 30,000,000 :coin:\nCastle : 50,000,000 :coin:**', true)
        .setColor(colors.main)
		.setFooter(`${client.user.username}`, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
        message.channel.send(embed)
    }
}

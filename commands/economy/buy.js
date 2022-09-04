const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const { default_prefix } = require('../../config.json');
const colors = require('../../colors.json')

module.exports = {
    
        name: "buy",
    run: async (bot, message, args) => {
        let target = db.get(`userb_${message.author.id}`);

		const ban_error = new MessageEmbed()
		.setDescription(':no:')
		.setColor(colors.main)

		if(target) {
			return message.reply(ban_error)
		}

        let user = message.author;

		let prefix = await db.get(`prefix_${message.guild.id}`);
		if(prefix === null) prefix = default_prefix;
      
        let author = db.fetch(`money_${user.id}`)

        let Embed = new MessageEmbed()
            .setColor(colors.main)
            .setDescription(`**تو 25000 :coin: نیاز داری تا بتونی بیل رو بخری**`);


        if (args.join(' ').toLocaleLowerCase() == 'shovel') {
            if (author < 25000) return message.channel.send(Embed)

            await db.fetch(`shovel_${user.id}`);
            db.add(`shovel_${user.id}`, 1)

            let Embed2 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**بیل خریده شد به قیمت 25000 :coin:**`)
                .setImage('https://cdn.discordapp.com/attachments/804288026401964042/886183063757918258/ae235.jpg');

            db.subtract(`money_${user.id}`, 25000)
            message.channel.send(Embed2)
        } else if (args.join(' ').toLocaleLowerCase() == 'fishing pole') {
            let Embed3 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 25000 :coin: نیاز داری که بتونی قلاب ماهی گیری بخری**`);

            if (author < 25000) return message.channel.send(Embed3)

            await db.fetch(`fp_${user.id}`)
            db.add(`fp_${user.id}`, 1)

            let Embed4 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**قلاب ماهی گیری خریده شد به قیمت 25000 :coin:**`)
                .setImage('https://cdn.discordapp.com/attachments/804288026401964042/886183143353229333/060420-cottage-dock-fishing-fish-sportfishing-adobestock_242597321.jpeg')

            db.subtract(`money_${user.id}`, 25000)
            message.channel.send(Embed4)
        } else if (args.join(' ').toLocaleLowerCase() == 'headphone') {
            let Embed5 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 50000 :coin: نیاز داری تا بتونی هدفون بخری**`);

            if (author < 50000) return message.channel.send(Embed5)

            await db.fetch(`hp_${user.id}`)
            db.add(`hp_${user.id}`, 1)

            let Embed6 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**هدفون خریده شد به قیمت 50000 :coin:**`)
                .setImage('https://cdn.discordapp.com/attachments/804288026401964042/886183074176581643/razer-nari-category-500x500.jpg')

            db.subtract(`money_${message.guild.id}_${user.id}`, 50000)
            message.channel.send(Embed6)
        } else if (args.join(' ').toLocaleLowerCase() == 'cell phone') {
            let Embed7 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 120,000 :coin: نیاز داری تا بتونی گوشی بخری**`)
                .setImage('https://cdn.discordapp.com/attachments/804288026401964042/886183105927479386/iphone12promax-2-scaled.jpg')

            if (author < 120000) return message.channel.send(Embed7)

            await db.fetch(`cp_${user.id}`)
            db.add(`cp_${user.id}`, 1)

            let Embed8 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**گوشی خریده شد به قیمت 120,000 :coin:**`);

            db.subtract(`money_${user.id}`, 120000)
            message.channel.send(Embed8)
			
		} else if (args.join(' ').toLocaleLowerCase() == 'laptop') {
            let Embed9 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 200,000 :coin: نیاز داری تا بتونی لپتاپ بخری**`)
                .setImage('https://cdn.discordapp.com/attachments/804288026401964042/886183101905129552/Untitled-design-24.jpg')

            if (author < 200000) return message.channel.send(Embed9)

            await db.fetch(`lp_${user.id}`)
            db.set(`lp_${user.id}`, 1)

            let Embed10 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**لپتاپ خریده شد به قیمت 200,000 :coin:**`);

            db.subtract(`money_${user.id}`, 200000)
            message.channel.send(Embed10)
		} else if (args.join(' ').toLocaleLowerCase() == 'db coin') {
            let Embed11 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 1,000,000 :coin: نیاز داری تا بتونی سکه رهبر بخری**`);

            if (author < 1000000) return message.channel.send(Embed11)

            await db.fetch(`dc_${user.id}`)

            let Embed12 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**سکه رهبر خریده شد به قیمت 1,000,000 :coin:**`);

            db.subtract(`money_${user.id}`, 1000000)
            message.channel.send(Embed12)
		} else if (args.join(' ').toLocaleLowerCase() == 'pistol') {
            let Embed13 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 350,000 :coin: نیاز داری تا بتونی پیستول بخری**`);

            if (author < 350000) return message.channel.send(Embed13)

            await db.fetch(`pt_${user.id}`)
            db.set(`pt_${user.id}`, 1)

            let Embed14 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**پیستول خریده شد به قیمت 350,000 :coin:**`)
                .setImage('https://cdn.discordapp.com/attachments/804288026401964042/886180665031262208/Profile-Left-sm-1024x683-1024x683.jpg')

            db.subtract(`money_${user.id}`, 350000)
            message.channel.send(Embed14)
		} else if (args.join(' ').toLocaleLowerCase() == 'rifle') {
            let Embed15 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 650,000 :coin: نیاز داری تا بتونی رایفل بخری**`);

            if (author < 650000) return message.channel.send(Embed15)

            await db.fetch(`rf_${user.id}`)
            db.set(`rf_${user.id}`, 1)

            let Embed16 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**رایفل خریداری شد به قیمت 650,000 :coin:**`)
                .setImage('https://cdn.discordapp.com/attachments/804288026401964042/886180674736902204/d269f9a104efc67c98c2014f323a41af_1.jpg')

            db.subtract(`money_${user.id}`, 650000)
            message.channel.send(Embed16)
		} else if (args.join(' ').toLocaleLowerCase() == 'sniper') {
            let Embed17 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 700,000 نیاز داری تا بتونی اسنایپر بهری**`);

            if (author < 700000) return message.channel.send(Embed17)

            await db.fetch(`sp_${user.id}`)
            db.add(`sp_${user.id}`, 1)

            let Embed18 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**اسنایپر خریده شد به قیمت 700,000 :coin:**`)
                .setImage('https://cdn.discordapp.com/attachments/804288026401964042/886180672455188480/b0de9445fed5ceca9fb337bddba2d73a.jpg')

            db.subtract(`money_${user.id}`, 700000)
            message.channel.send(Embed18)
        } 
        else if (args.join(' ').toLocaleLowerCase() == 'shotgun') {
            let Embed20 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 700,000 :coin: نیاز داری تا بتونی شاتگان بخری**`);

            if (author < 700000) return message.channel.send(Embed20)

            await db.fetch(`sg_${user.id}`)
            db.add(`sg_${user.id}`, 1)

            let Embed21 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**شاتگان خریداری شد به قیمت 700,000 :coin:**`)
                .setImage('https://cdn.discordapp.com/attachments/804288026401964042/886180670089596958/engraved-shotguns-too-beautiful-to-shoot-20201007-1003-716x1024.jpg')

            db.subtract(`money_${user.id}`, 700000)
            message.channel.send(Embed21)
        }
        else if (args.join(' ').toLocaleLowerCase() == 'ghost') {
            let Embed22 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 1,500,000 :coin: نیاز داری تا بتونی روح بخری**`);

            if (author < 1500000) return message.channel.send(Embed22)

            await db.fetch(`gh_${user.id}`)
            db.add(`gh_${user.id}`, 1)

            let Embed23 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**روح خریداری شد به قیمت 1,500,000 :coin:**`);

            db.subtract(`money_${user.id}`, 1500000)
            message.channel.send(Embed23)
        }
        else if (args.join(' ').toLocaleLowerCase() == 'ninja') {
            let Embed24 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 2,500,000 نیاز داری تا بتونی نینجا رو بخری**`);

            if (author < 2500000) return message.channel.send(Embed24)

            await db.fetch(`nj_${user.id}`)
            db.add(`nj_${user.id}`, 1)

            let Embed25 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**نینجا خریداری شد به قیمت 2,500,000 :coin:**`);

            db.subtract(`money_${user.id}`, 2500000)
            message.channel.send(Embed25)
        }
        else if (args.join(' ').toLocaleLowerCase() == 'mind reading') {
            let Embed26 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 5,000,000 نیاز داری تا بتونی ذهن بقیه رو بخونی**`);

            if (author < 5000000) return message.channel.send(Embed26)

            await db.fetch(`mr_${user.id}`)
            db.add(`mr_${user.id}`, 1)

            let Embed27 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**ذهن خونی خریده شد به قیمت 5,000,000 :coin:**`);

            db.subtract(`money_${user.id}`, 5000000)
            message.channel.send(Embed27)
        }
        else if (args.join(' ').toLocaleLowerCase() == 'invisible') {
            let Embed28 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 15,000,000 نیاز داری تا بتونی غیب شد رو بخری**`);

            if (author < 15000000) return message.channel.send(Embed28)

            await db.fetch(`invb_${user.id}`)
            db.add(`invb_${user.id}`, 1)

            let Embed29 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**قدرت غیب شدن خریده شد به قیمت 15,000,000 :coin:**`);

            db.subtract(`money_${user.id}`, 15000000)
            message.channel.send(Embed29)
        }
        else if (args.join(' ').toLocaleLowerCase() == 'copper') {
            let Embed30 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 250,000 :coin: نیاز داری تا بتونی کوپر رو بخری**`);

            if (author < 200000) return message.channel.send(Embed30)

            await db.fetch(`cpr_${user.id}`)
            db.add(`cpr_${user.id}`, 1)

            let Embed31 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**کوپر خریداری شد به قیمت 200,000 :coin:**`);

            db.subtract(`money_${user.id}`, 2000000)
            message.channel.send(Embed31)
        }
        else if (args.join(' ').toLocaleLowerCase() == 'bronze') {
            let Embed32 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 1,000,000 نیاز داری تا بتونی برونز رو بخری**`);

            if (author < 1000000) return message.channel.send(Embed32)

            await db.fetch(`brz_${user.id}`)
            db.add(`brz_${user.id}`, 1)

            let Embed33 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**برونز خریداری شد به قیمت 1,000,000**`);

            db.subtract(`money_${user.id}`, 1000000)
            message.channel.send(Embed33)
        }
        else if (args.join(' ').toLocaleLowerCase() == 'silver') {
            let Embed34 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 2,000,000 :coin: نیاز داری تا بتونی سیلور رو بخری**`);

            if (author < 2000000) return message.channel.send(Embed34)

            await db.fetch(`silv_${user.id}`)
            db.add(`silv_${user.id}`, 1)

            let Embed35 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**سیلور خریداری شد به قیمت 2,000,000 :coin:**`);

            db.subtract(`money_${user.id}`, 2000000)
            message.channel.send(Embed35)
        }
        else if (args.join(' ').toLocaleLowerCase() == 'gold') {
            let Embed36 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 3,000,000 نیاز داری تا بتونی گلد رو بخری**`);

            if (author < 3000000) return message.channel.send(Embed36)

            await db.fetch(`gold_${user.id}`)
            db.add(`gold_${user.id}`, 1)

            let Embed37 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**گلد خریداری شد به قیمت 3,000,000 :coin:**`);

            db.subtract(`money_${user.id}`, 3000000)
            message.channel.send(Embed37)
        }
        else if (args.join(' ').toLocaleLowerCase() == 'diamond') {
            let Embed38 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 5,000,000 نیاز داری تا بتونی دایمند رو بخری**`);

            if (author < 5000000) return message.channel.send(Embed38)

            await db.fetch(`dd_${user.id}`)
            db.add(`dd_${user.id}`, 1)

            let Embed39 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**دایمند خریداری شد به قیمت 5,000,000 :coin:**`);

            db.subtract(`money_${user.id}`, 5000000)
            message.channel.send(Embed39)
        }
        else if (args.join(' ').toLocaleLowerCase() == 'immortal') {
            let Embed40 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 10,000,000 نیاز داری که بتونی جاودانگی رو بخری**`);

            if (author < 10000000) return message.channel.send(Embed40)

            await db.fetch(`imt_${user.id}`)
            db.add(`imt_${user.id}`, 1)

            let Embed41 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**جاودانگی خریداری شد به قیمت 10,000,000 :coin:**`);

            db.subtract(`money_${user.id}`, 10000000)
            message.channel.send(Embed41)
        }
        else if (args.join(' ').toLocaleLowerCase() == 'turtle') {
            let Embed43 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 1,700 نیاز داری که لاکپشت بخری**`);

            if (author < 1700) return message.channel.send(Embed43)

            await db.fetch(`tt_${user.id}`)
            db.add(`tt_${user.id}`, 1)

            let Embed44 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**لاکپشت خریداری شد به قیمت 1,700 :coin:**`)
                .setImage('https://cdn.discordapp.com/attachments/804288026401964042/886182212674936862/2326.jpg')

            db.subtract(`money_${user.id}`, 1700)
            message.channel.send(Embed44)
        } else if (args.join(' ').toLocaleLowerCase() == 'bird') {
            let Embed45 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 2000 نیاز داری که چرنده بخری**`);

            if (author < 2000) return message.channel.send(Embed45)

            await db.fetch(`bd_${user.id}`)
            db.add(`bd_${user.id}`, 1)

            let Embed46 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`*پرنده خریداری شد به قیمت 2,000 :coin:**`)
                .setImage('https://cdn.discordapp.com/attachments/468141324906921984/886185398412402688/download.jpg')

            db.subtract(`money_${user.id}`, 2000)
            message.channel.send(Embed46)
        } else if (args.join(' ').toLocaleLowerCase() == 'cat') {
            let Embed47 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 5000 نیاز داری تا بتونی گربه بخری**`);

            if (author < 5000) return message.channel.send(Embed47)

            await db.fetch(`ct_${user.id}`)
            db.add(`ct_${user.id}`, 1)

            let Embed48 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**گربه خریده شد به قیمت 5,000 :coin:**`)
                .setImage('https://cdn.discordapp.com/attachments/804288026401964042/886182215724175400/AWQQ-1080x675.jpg')

            db.subtract(`money_${user.id}`, 5000)
            message.channel.send(Embed48)
        } else if (args.join(' ').toLocaleLowerCase() == 'dog') {
            let Embed49 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 5,500 نیاز داری تا سگ بخری**`);

            if (author < 5500) return message.channel.send(Embed49)

            await db.fetch(`dg_${user.id}`)
            db.add(`dg_${user.id}`, 1)

            let Embed50 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**سگ خریده شد به قیمت 5,000 :coin:**`)
                .setImage('https://cdn.discordapp.com/attachments/804288026401964042/886182218794414100/0fe5f8fd54b6a7fdb5c98658ab752329.jpg')

            db.subtract(`money_${user.id}`, 5500)
            message.channel.send(Embed50)
        }
        else if (args.join(' ').toLocaleLowerCase() == 'snake') {
            let Embed51 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 10,000 نیاز داری تا بتونی مار بخری**`);

            if (author < 10000) return message.channel.send(Embed51)

            await db.fetch(`sn_${user.id}`)
            db.add(`sn_${user.id}`, 1)

            let Embed52 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**مار خریداری شد به قیمت 10,000 :coin:**`)
                .setImage('https://cdn.discordapp.com/attachments/804288026401964042/886182213861908480/Snake-header.jpg')

            db.subtract(`money_${user.id}`, 10000)
            message.channel.send(Embed52)
        }
        else if (args.join(' ').toLocaleLowerCase() == 'tesla') {
            let Embed53 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 3,000,000 نیاز داری که بتونی تسلا بخری*`);

            if (author < 3000000) return message.channel.send(Embed53)

            await db.fetch(`tes_${user.id}`)
            db.add(`tes_${user.id}`, 1)

            let Embed54 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تسلا خریداری شد به قیمت 3,000,000 :coin:**`)
                .setImage('https://cdn.discordapp.com/attachments/804288026401964042/886180564648984626/2017-Tesla-Model-S-P100D-white-sedan-Max-Klamus-1001x565-1_1_0-1024x578.jpg')

            db.subtract(`money_${user.id}`, 3000000)
            message.channel.send(Embed54)
        }else if (args.join(' ').toLocaleLowerCase() == 'ferrari') {
            let Embed55 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 5,000,000 نیاز داری تا بتونی فراری بخری**`);

            if (author < 5000000) return message.channel.send(Embed55)

            await db.fetch(`fr_${user.id}`)
            db.add(`fr_${user.id}`, 1)

            let Embed56 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**فراری خریداری شد به قیمت 5,000,000 :coin:**`)
                .setImage('https://cdn.discordapp.com/attachments/804288026401964042/886180636807802950/Novitec_Ferrari_SF90_Stradale.jpg')

            db.subtract(`money_${user.id}`, 5000000)
            message.channel.send(Embed56)
        }else if (args.join(' ').toLocaleLowerCase() == 'bugatti') {
            let Embed57 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 8,000,000 نیاز داری تا بتونی بوگاتی بخری**`);

            if (author < 8000000) return message.channel.send(Embed57)

            await db.fetch(`bgt_${user.id}`)
            db.add(`bgt_${user.id}`, 1)

            let Embed58 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**بوگاتی خریداری شد به قیمت 8,000,000 :coin:**`)
                .setImage('https://cdn.discordapp.com/attachments/804288026401964042/886180652725194762/bugatti-la-voiture-noire_100794247.jpg')

            db.subtract(`money_${user.id}`, 8000000)
            message.channel.send(Embed58)
        }else if (args.join(' ').toLocaleLowerCase() == 'lamborghini') {
            let Embed59 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 12,000,000 نیاز داری تا بتونی لامبورگینی بخری**`);

            if (author < 12000000) return message.channel.send(Embed59)

            await db.fetch(`lam_${user.id}`)
            db.add(`lam_${user.id}`, 1)

            let Embed60 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**لامبورگینی شما خریداری شد به قیمت 12,000,000 :coin:**`)
                .setImage('https://cdn.discordapp.com/attachments/804288026401964042/886180647150944266/carpixel.net-2014-lamborghini-veneno-roadster-97625-hd.jpg')

            db.subtract(`money_${user.id}`, 12000000)
            message.channel.send(Embed60)
        }else if (args.join(' ').toLocaleLowerCase() == 'mercedes-benz') {
            let Embed61 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 15,000,000 نیاز داری تا بتونی مرسدس بخری**`);

            if (author < 15000000) return message.channel.send(Embed61)

            await db.fetch(`bez_${user.id}`)
            db.add(`bez_${user.id}`, 1)

            let Embed62 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**مرسدس خریداری شد به قیمت 15,000,000**`)
                .setImage('https://cdn.discordapp.com/attachments/804288026401964042/886180713681018900/db138bea04216cc59bbb3413f29d1c42.jpg')

            db.subtract(`money_${user.id}`, 15000000)
            message.channel.send(Embed62)
        }
        else if (args.join(' ').toLocaleLowerCase() == 'rolls-royce') {
            let Embed63 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 20,000,00 نیاز داری که رولز رویس بخری**`);

            if (author < 20000000) return message.channel.send(Embed63)

            await db.fetch(`rrc_${user.id}`)
            db.add(`rrc_${user.id}`, 1)

            let Embed64 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**رولز رویس خریداری شد به قیمت 20,000,000 :coin:**`)
                .setImage('https://cdn.discordapp.com/attachments/804288026401964042/886180640825954304/rolls-royce-sweptail-at-villa-deste.jpg')

            db.subtract(`money_${user.id}`, 20000000)
            message.channel.send(Embed64)
        }
        else if (args.join(' ').toLocaleLowerCase() == 'apartment') {
            let Embed65 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 10,000,000 نیاز داری تا بتونی اپارتمان بخری**`);

            if (author < 10000000) return message.channel.send(Embed65)

            await db.fetch(`apr_${user.id}`)
            db.add(`apr_${user.id}`, 1)

            let Embed66 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**اپارتمان خریداری شد به قیمت 10,000,000**`)
                .setImage('https://cdn.discordapp.com/attachments/468141324906921984/886687417912926238/apartment.jpg')

            db.subtract(`money_${user.id}`, 10000000)
            message.channel.send(Embed66)
        }else if (args.join(' ').toLocaleLowerCase() == 'villa') {
            let Embed67 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 15,000,000 نیاز داری تا بتونی ویلا بخری**`);

            if (author < 15000000) return message.channel.send(Embed67)

            await db.fetch(`vill_${user.id}`)
            db.add(`vill_${user.id}`, 1)

            let Embed68 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**ویلا خریده شد به قیمت 15,000,000 :coin:**`)
                .setImage('https://cdn.discordapp.com/attachments/468141324906921984/886687433566060554/villa.jpg')

            db.subtract(`money_${user.id}`, 15000000)
            message.channel.send(Embed68)
        }else if (args.join(' ').toLocaleLowerCase() == 'ocean view') {
            let Embed69 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 20,000,000 نیاز داری که بتونی خونه لب دریا بخری**`);

            if (author < 20000000) return message.channel.send(Embed69)

            await db.fetch(`ov_${user.id}`)
            db.add(`ov_${user.id}`, 1)

            let Embed70 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**خانه لب درا خریداری شد به قیمت 20,000,000**`)
                .setImage('https://cdn.discordapp.com/attachments/468141324906921984/886687456039174235/ocean_view.jpg')

            db.subtract(`money_${user.id}`, 20000000)
            message.channel.send(Embed70)
        }else if (args.join(' ').toLocaleLowerCase() == 'mansion') {
            let Embed71 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 30,000,000 نیاز داری تا بتونی عمارت بخری**`);

            if (author < 30000000) return message.channel.send(Embed71)

            await db.fetch(`mans_${user.id}`)
            db.add(`mans_${user.id}`, 1)

            let Embed72 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**عمارت خریداری شد به قیمت 30,000,000 :coin:**`)
                .setImage('https://cdn.discordapp.com/attachments/468141324906921984/886687736336113685/mansion.jpg')

            db.subtract(`money_${user.id}`, 30000000)
            message.channel.send(Embed72)
        }else if (args.join(' ').toLocaleLowerCase() == 'castle') {
            let Embed73 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**تو 50,000,000 نیاز داری که بتونی قلعه بخری**`);

            if (author < 50000000) return message.channel.send(Embed73)

            await db.fetch(`cast_${user.id}`)
            db.add(`cast_${user.id}`, 1)

            let Embed74 = new MessageEmbed()
                .setColor(colors.main)
                .setDescription(`**قلعه خریداری شد به قیمت 50,000,000 :coin:**`)
                .setImage('https://cdn.discordapp.com/attachments/468141324906921984/886689701950545930/castle.jpg')

            db.subtract(`money_${user.id}`, 50000000)
            message.channel.send(Embed74)
        }
        else {
            if (message.content.toLowerCase() === `${prefix}buy`) {
                let embed19 = new MessageEmbed()
                    .setColor(colors.main)
                    .setDescription(`**Enter an item to buy\nType \`${prefix}shop\` to see list of items**`)
                return message.channel.send(embed19)
            }
        }
    }
}
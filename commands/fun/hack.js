const colors = require('./../../colors.json')
const Discord = require("discord.js");
const ms = require("ms")
module.exports = {
  name: "hack",
  aliases: ["hax"],
  run: async(client, message, args) => {
    const hacked = message.mentions.users.first();
    const user = message.mentions.users.first();
    if(user == client.users.cache.get(message.author.id))
    {
      return message.channel.send(" ok, You are hacked Pick someone else")
    }
            function wait(ms){
            let start = new Date().getTime();
            let end = start;
            while(end < start + ms) {
              end = new Date().getTime();
           }
         }

if(!user)
{
  return message.reply("کیو میخوای حاک کنی؟ منشن کن");
}
const prompt = await message.channel.send(`درحال حاک کردن ${user ? hacked.username : hacked} `);
    
   await wait(2700);
     await  prompt.edit('پیدا کردن اطلاعات دیسکورد...');
     await wait(2700);
     await  prompt.edit(`پیدا شد:\n**ایمیل**: \`${hacked.username}***@gmail.com\`\n**رمز**: \`*******\``);
     await  wait(3700);
     await  prompt.edit('بالا کشیدن پیام ها...');
     await  wait(3700);
     await prompt.edit('گوش دادن به حرف ها...');
     await  wait(2700);
     await  prompt.edit(`وارد کردن ویروس #${hacked.discriminator}`);
    await  wait(3700);
     await  prompt.edit('ویروس شیاف شد');
     await  wait(3700);
    
   await prompt.edit('پیدا کردن ایپی آدرس...');
    await wait(5000);
   await  prompt.edit('اسپم ایمیل...');
   await wait(6700);
   await  prompt.edit('فروختن اطلاعات داخل دارک وب...');
  await   wait(3700);
  let embed = new Discord.MessageEmbed()
  .setDescription(`یک عملیات فوق خطرناک انجام شد ${user ? hacked.username : hacked} حاک شد`)
  .setImage("https://media1.tenor.com/images/5ba5501d9ee356cc0c478daa57306c19/tenor.gif?itemid=20964053");
  await prompt.delete
   await  message.channel.send(embed);
    

  }
}
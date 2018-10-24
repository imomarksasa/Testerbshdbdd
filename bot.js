const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "#";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'zg') {
        message.reply('pong');
      }
});


client.on("guildMemberAdd", msg => {
  var AlphaE = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(msg.user.username, msg.user.avatarURL)
.setThumbnail(msg.user.avatarURL)
.setTitle(`
AsH افضل سيرفر حياة واقعية لاتحرمنا من تواجدك
`)
.addField("هذي الرساله خاصه بك يا قلبي", `${msg.user.tag}`, true)
.addField(`هذا الرابط خاص بك`,`https://discord.gg/ZpbAQ2E`, true)
 .setFooter(msg.user.tag, msg.user.avatarURL, true)
msg.user.sendMessage(AlphaE);
});







// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

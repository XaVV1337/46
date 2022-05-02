const Discord = require("discord.js");
const fs = require("fs");
const ImageURLOPT = { format: "png", dynamic: true, size: 1024 };

module.exports.run = async (_client, message) => {
  const channels = [
    "946101031916437564", "946101494711746560",
 ];
 if (!channels.includes(message.channel.id)) {
  const embedErr = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setAuthor("Nie ten kanał!", message.author.displayAvatarURL(ImageURLOPT))
  return message.channel.send(embedErr);
} 
    
    fs.readFile("./accounts/nitro.txt", "utf8", function(err, data) {
        if(err) return require("../scripts/fserr.js")(message, error);

        data = data + "";
        var lines = data.split("\n");
        let account = lines[Math.floor(Math.random() * 1)];

        if (!account) {
            const embedErr = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setAuthor("Nie ma już kont", message.author.displayAvatarURL(ImageURLOPT))
            .setDescription("**Jak narazie nie ma kont poczekaj kilka dni aby zaktualizować konta!**");
            return message.channel.send(embedErr);
        }

        fs.writeFile("./accounts/nitro.txt", lines.slice(1).join("\n"), function(err) {
            if(err) return require("../scripts/fserr.js")(message, error);
        });

        const embed = new Discord.MessageEmbed()
        .setTitle(":purple_heart:V3S GEN:purple_heart:", message.author.displayAvatarURL(ImageURLOPT))
        .setURL("https://discord.gg/5ekkw9sYnt", message.author.displayAvatarURL(ImageURLOPT))
        .addField("`NITRO`", account)
        .setDescription("**Gratulacje! Twój link nitro został dostarczony!Aby sprawdzić czy nitro działa kliknij w link!**")
        .setThumbnail("https://images-ext-1.discordapp.net/external/gfdqdv-24xV6OuXJYABMmD-rLJrjzM1Zm90kPX7oHtE/%3Fsize%3D1024/https/cdn.discordapp.com/icons/814614181554028595/a_926f1bedaf1357f1041164e0f5291ece.gif?width=80&height=80")
        .setColor("#6600cc")
        .setImage("https://media0.giphy.com/media/Z7Jg8qkTdri1TiNKRj/200w.webp?cid=ecf05e47tbb7134vyolo4v7osa9pf3duco933btbnnkm22ts&rid=200w.webp&ct=g")
        .setFooter("pamiętaj że nie kazdy kod nitro działa")
        .setTimestamp();

        message.author.send(embed);
        const embedErr = new Discord.MessageEmbed()
        .setColor("#6600cc")
        .setAuthor("NITRO",)
        .setDescription("wysłałem kod sprawdź pv")
        .setFooter("NIE KAŻDY KOD NITRO DZIAŁA", message.author.displayAvatarURL(ImageURLOPT))
        .setTimestamp();
        return message.channel.send(embedErr);
    });
};
module.exports.help = {
    name: "nitro",
    name:  "Nitro",
    name:  "NITRO"
};

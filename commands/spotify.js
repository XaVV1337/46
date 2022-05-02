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
    
    fs.readFile("./accounts/spotify.txt", "utf8", function(err, data) {
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

        fs.writeFile("./accounts/spotify.txt", lines.slice(1).join("\n"), function(err) {
            if(err) return require("../scripts/fserr.js")(message, error);
        });

        const embed = new Discord.MessageEmbed()
        .setTitle(":purple_heart:V3S GEN:purple_heart:", message.author.displayAvatarURL(ImageURLOPT))
        .setURL("https://discord.gg/bs8pnVKszS")
        .addField("`konto spotify`", account)
        .setDescription("**Gratulacje!Twoje konto zostało dostarczone! \n Teraz możesz cieszyć z niego Login i hasło są oddzielone od siebie poprzez : \n Zawsze najpierw jest Login a potem hasło**")
        .setThumbnail("https://images-ext-1.discordapp.net/external/gfdqdv-24xV6OuXJYABMmD-rLJrjzM1Zm90kPX7oHtE/%3Fsize%3D1024/https/cdn.discordapp.com/icons/814614181554028595/a_926f1bedaf1357f1041164e0f5291ece.gif?width=80&height=80")
        .setColor("#6600cc")
        .setImage("https://media2.giphy.com/media/6GwFchI7IwZmKhtEno/200w.webp?cid=ecf05e47o8rx4tpkf2s80ohqa0vn2iv8ebo6n5srum31vjp2&rid=200w.webp&ct=g")
        .setFooter("pamiętaj że nie każde konto działa", message.author.displayAvatarURL(ImageURLOPT))
        .setTimestamp();

        message.author.send(embed);
        const embedErr = new Discord.MessageEmbed()
        .setColor("#6600cc")
        .setAuthor("Konto spotify",)
        .setDescription("wysłałem konto sprawdź pv")
        .setFooter("NIE KAŻDE KONTO DZIAŁA!")
        .setTimestamp();
        return message.channel.send(embedErr);
    });
};
module.exports.help = {
    name: "spotify",
    name:  "Spotify",
    name:  "SPOTIFY"
};

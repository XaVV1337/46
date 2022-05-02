const Discord = require("discord.js");
const fs = require("fs");
const config = require("./config.json");
const client = new Discord.Client();
client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if(err) console.error(err);
    let jsfile = files.filter((f) => f.split(".").pop() === "js");
    if(jsfile.length <= 0) return console.log("Katalog 'commands' jest pusty!");
    jsfile.forEach((f) => {
        let props = require("./commands/" + f);
        client.commands.set(props.help.name, props);
    });
});

client.on("ready", () => {
    console.log(`Bot ${client.user.username} jest gotowy!`);
    console.log("JESTEM GOTOWY DO GENEROWANIA KONT ")
    client.user.setActivity("XaVV#2592",{
        type: "PLAYING"
    });
});


client.on("message", async (message) => {
    if(message.author.bot) return;
    
    if(message.channel.type === "dm") return;

    if(!message.content.startsWith(config.prefix)) return;

    let messageArray = message.content.split(" ");

    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = client.commands.get(cmd.slice(config.prefix.length).toUpperCase());
    console.log(commandfile)
    if(commandfile) 
    {
    commandfile.run(client, message, args);
    }
});

client.login(process.env.token);

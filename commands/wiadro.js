const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("W MAJTACH TRZYMAM BAKE")
        .setColor("#ffee00")
        .setThumbnail(bicon)
        .addField("Ksywka", bot.user.username)
        .addField("Lufe nabija", "@Nimfke#8221")
        .addField("Jaram od", bot.user.createdAt);
        return message.channel.send(botembed);
    
}

module.exports.help = {
    name: "wiadro"
}
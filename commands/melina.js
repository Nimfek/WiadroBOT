const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("Info o melinie")
        .setColor("#ffee00")
        .setThumbnail(sicon)
        .addField("Aktualna melinka", message.guild.name)
        .addField("Wiadro zmontowane", message.guild.createdAt)
        .addField("Jarasz z nami od", message.member.joinedAt)
        .addField("Prawilnych mord", message.guild.memberCount);
        return message.channel.send(serverembed);
    
}

module.exports.help = {
    name: "melina"
}
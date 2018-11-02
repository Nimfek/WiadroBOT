const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
            message.delete().catch(O_o=>{});
        let komendyEmbed = new Discord.RichEmbed()
        .setDescription("KSIĘGA ULICY")
        .setColor("#ffee00")
        .setThumbnail("https://i.gyazo.com/bf5fbebce3f1cb2d3cbaca882068cead.png")
        .addField("$997 @ktoś powód", "zgłasza ryja na komende")
        .addField("$wiadro", "informacje o WiadroBocie")
        .addField("$melina", "informacje o naszej melince (serwerze)")
        .addField("$motto", "złote myśli osiedlowych poetów")
        return message.channel.send(komendyEmbed);
    
}

module.exports.help = {
    name: "komendy"
}
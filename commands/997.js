const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("Byku, nikt z osiedla nie zna tego typa. Użyj komendy $komendy");
        let reason = args.join(" ").slice(22);
        
        let reportEmbed = new Discord.RichEmbed()
        .setDescription("UPRZEJxMIE DONOSZE")
        .setColor("#0008ff")
        .setThumbnail("https://6.allegroimg.com/s512/03e461/25616425456289475d255532c816")
        .addField("Zgłoszony wariacik", `${rUser} o ID: ${rUser.id}`)
        .addField("Przykonfidencił", `${message.author} o ID ${message.author.id}`)
        .addField("Na kanale", message.channel)
        .addField("Dnia", message.createdAt)
        .addField("Powód", reason)
        
        let reportschannel = message.guild.channels.find(`name`, "wiadrobot");
        if(!reportschannel) return message.channel.send("Nie wykryto komisariatu w promieniu 20m.");
        
        
        message.delete().catch(O_o=>{});
        reportschannel.send(reportEmbed);
    
}

module.exports.help = {
    name: "997"
}

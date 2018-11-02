const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    let tomute = message.guild.member(message.mentions.users.first() || messsage.guild.members.get(args[0]));
    if(!tomute) return message.reply("Byku, nikt z osiedla nie zna tego typa. Użyj komendy $komendy");
    if(tomute.hasPermission("ADMINISTRATOR")) return message.reply("Ten kolo nie moze zamknąć mordy.");
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole)
        {
            try{
                muterole = await message.guild.createRole({
                    name: "muted",
                    color: "#000000",
                    permissions: []
                })
                message.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    });
                });
            }catch(e){
                console.log(e.stack);
            }
        }
    let mutetime = args[1];
    if(!mutetime) return message.reply("Te, a na ile ma zamknąć morde?")
    
    
    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> zamknął morde na ${ms(ms(mutetime))}`);
    
    setTimeout(function(){
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> może już otworzyć morde.`);
    }, ms(mutetime));
    
}

module.exports.help = {
    name: "morda"
}

const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Byku, nikt z osiedla nie zna tego typa. Użyj komendy $komendy");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let muterole = message.guild.roles.find(`name`, "utkany");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "utkany",
        color: "#000000",
        permissions:[]
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
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Te, a na ile mu tego knebla włożyć?");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> zamknął morde na ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> może już otworzyć morde!`);
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "morda"
}

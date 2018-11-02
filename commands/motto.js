const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
        const random_motto = Math.floor(Math.random() * 12);
        
        switch(random_motto) {
            case 0:
                message.delete().catch(O_o=>{});
                return message.channel.send("Uważaj jak tańczysz, bo życiowy parkiet bywa śliski!");
                break;
            case 1:
                message.delete().catch(O_o=>{});
                return message.channel.send("Pedał do wora, a wór do jeziora!");
                break;
            case 2:
                message.delete().catch(O_o=>{});
                return message.channel.send("Twarde łokcie chronią miękkie serce.");
                break;
            case 3:
                message.delete().catch(O_o=>{});
                return message.channel.send("Twarda garda i zaciśnięte pięści!");
                break;
            case 4:
                message.delete().catch(O_o=>{});
                return message.channel.send("Kto nie ryzykuje, ten gieta z ziomami nie jara.");
                break;
            case 5:
                message.delete().catch(O_o=>{});
                return message.channel.send("Piwo to moje paliwo!");
                break;
            case 6:
                message.delete().catch(O_o=>{});
                return message.channel.send("W chuj jest doskonały, kto wprowadza w błąd pały!");
                break;
            case 7:
                message.delete().catch(O_o=>{});
                return message.channel.send("Kto kupuje piwerko zagrzane, ten chyba ma we łbie pojebane.");
                break;
            case 8:
                message.delete().catch(O_o=>{});
                return message.channel.send("Kto lamusowi dwa razy mniejszemu wrypał, ten będzie miał przypał.");
                break;
            case 9:
                message.delete().catch(O_o=>{});
                return message.channel.send("Kto od tyłu zachodzi jak pedał, ten... ten pedał.");
                break;
            case 10:
                message.delete().catch(O_o=>{});
                return message.channel.send("Kto w weekend przynajmniej jednego piwerka nie wydoi, ten sobie weekend spierdoli.");
                break;
            case 11:
                message.delete().catch(O_o=>{});
                return message.channel.send("Kto przy szczaniu deski nie obleje, en jest albo babą, albo gejem.");
                break;
    
}
}

module.exports.help = {
    name: "motto"
}
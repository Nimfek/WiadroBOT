const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    
    if(err) console.log(err);
    
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Nie wykryto komend");
        return;
    }
    
    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} - komenda załadowana`);
        bot.commands.set(props.help.name, props);
    });
});


bot.on("ready", async () => {
 console.log(`${bot.user.username} ŚMIGA!`);   
    
    
    const random_activity = Math.floor(Math.random() * 4);
    
    switch(random_activity) {
            case 0:
                bot.user.setActivity("Marsz niepodległości 2014", {type: "WATCHING"});
                break;
            case 1:
                bot.user.setActivity("Zwijanie lolka simulator", {type: "PLAYING"});
                break;
            case 2:
                bot.user.setActivity("z ziomalami po osiedlu", {type: "STREAMING"});
                break;
            case 3:
                bot.user.setActivity("Hymn Polski NIGHTCORE", {type: "LISTENING"});
                break;
    }
    
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);
    /*komendy
    
    if(cmd === `${prefix}komendy`){
        let komendyEmbed = new Discord.RichEmbed()
        .setDescription("KSIĘGA ULICY")
        .setColor("#ffee00")
        .setThumbnail("https://i.gyazo.com/bf5fbebce3f1cb2d3cbaca882068cead.png")
        .addField("$997 @ktoś powód", "zgłasza ryja na komende(kanał chat-ogólny)")
        .addField("$wiadro", "informacje o WiadroBocie")
        .addField("$melina", "informacje o naszej melince (serwerze)")
        .addField("$motto", "nic ciekawego")
        return message.channel.send(komendyEmbed);
    }
    */
    //komenda $997 (report)
    /*
    if(cmd === `${prefix}997`){
        //$997 @nimfek jara pod blokiem
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("Byku, nikt z osiedla nie zna tego typa. Użyj komendy $komendy");
        let reason = args.join(" ").slice(22);
        
        let reportEmbed = new Discord.RichEmbed()
        .setDescription("UPRZEJMIE DONOSZE")
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

        
        return;
    }
    */
    
    /* Komenda $motto
    if(cmd === `${prefix}motto`) {
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
    */
    /*Info o serwerze
    if(cmd === `${prefix}melina`){
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
    */
       /*Info o bocie 
    if(cmd === `${prefix}wiadro`){
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
    */
})
bot.login(process.env.BOT_TOKEN);
bot.login(botconfig.token);
const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = "!";


var botGameStatut = "Type !help";
bot.on('ready', function () {
	bot.user.setPresence({game: { name: botGameStatut, type: 1} });
});
bot.on('message', function(message) {
	if(message.content === '!help' || message.content === '!Help' || message.content === "!aide" || message.content === '!Aide') {
		var help_embed = new Discord.RichEmbed()
		.setColor('#ff2e1c')
		.setAuthor("", 'https://kawaii.kawaii.at/img/solid-red-fabric-Robert-Kaufman-USA-Red-179485-1.JPG')
		.setTitle("Centre d'aide | Commandes disponibles")
		.setDescription("»--------------------------------------------«")
		.setThumbnail("http://cdn.mysitemyway.com/icons-watermarks/flat-rounded-square-white-on-red/bfa/bfa_question/bfa_question_flat-rounded-square-white-on-red_512x512.png")
		.setImage("https://img00.deviantart.net/909a/i/2016/147/b/5/freljord_taliyah_by_nyukashiro-da3z5o3.jpg")
		.addField("!pfc [Pierre | Feuille | Ciseaux]", "Le jeu incontournable du Pierre-Feuille-Ciseaux !")
		message.channel.send(help_embed);
	}
});

bot.on('message', function(message) {
	if(message.content[0] === PREFIX) {
		let splitMessage = message.content.split(" "); // split le message en deux [!pfc] & [contenu]
		if(splitMessage[0] === '!pfc') {
			if(splitMessage.length === 2) {
				// message.channel.send('Command + ' + splitMessage[1]);
				var userChoice = splitMessage[1]; // Autre partie du message (sans !pfc)
				var botChoice = Math.floor(Math.random() * 3); // Nombre choisi aléatoirement [0; 1; 2]
				// Smileys
				var stone = ":white_circle:"; // Pierre
				var leaf = ":maple_leaf:"; // Feuille
				var scissors = ":scissors:"; // Ciseaux
				// console.log(botChoice); // Debug (choix du bot en console)
				switch ( botChoice ) {
					case 0:
					var botChoice = "Pierre"
					break;
					case 1:
					var botChoice = "Feuille"
					break;
					case 2:
					var botChoice = "Ciseaux"
					break;
					default:
					message.channel.send(":warning:")
				}
				switch ( userChoice ) {
					case "Pierre":
					case "pierre":
					if (botChoice === "Pierre") {
						message.reply("Égalité ! J'avais également choisi la pierre ! " + stone);
						message.react("🔁");
					} else if (botChoice === "Feuille") {
						message.reply("Perdu ! J'avais choisi la feuille. " + leaf);
						message.react("👎");
					} else if (botChoice === "Ciseaux") {
						message.reply("Gagné ! J'avais choisi les ciseaux... " + scissors);
						message.react("🎉");
					}
					break;
					case "Feuille":
					case "feuille":
					if (botChoice === "Pierre") {
						message.reply("Gagné ! J'avais choisi la pierre... " + stone);
						message.react("🎉");
					} else if (botChoice === "Feuille") {
						message.reply("Égalité ! J'avais également choisi la feuille ! " + leaf);
						message.react("🔁");
					} else if (botChoice === "Ciseaux") {
						message.reply("Perdu ! J'avais choisi les ciseaux ! " + scissors);
						message.react("👎");
					}
					break;
					case "Ciseaux":
					case "ciseaux":
					if (botChoice === "Pierre") {
						message.reply("Perdu ! J'avais choisi la pierre ! " + stone);
						message.react("👎");

					} else if (botChoice === "Feuille") {
						message.reply("Gagné ! J'avais choisi la feuille... " +leaf)
						message.react("🎉");
						
					} else if (botChoice === "Ciseaux") {
						message.reply("Égalité ! J'avais également choisi les ciseaux ! " + scissors)
						message.react("🔁");
					}
					break;
					default:
					message.channel.send(":warning: Vous devez entrer votre choix ! :warning: \n **Pierre** " +stone+ " ; **Feuille** " +leaf+ " ou **Ciseaux** " +scissors+ " !")
					message.reply()
				}
			}
		}
	}
});



bot.login('VOTRE TOKEN');
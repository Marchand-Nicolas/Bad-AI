

module.exports.run = (client, message, args) => {

    message.channel.send({
		embed: {
			color: 0xe43333,
            title: `Une simple IA un peut débile...`,
            description: `M'inviter : https://discord.com/oauth2/authorize?client_id=732251716547903508&scope=bot&permissions=3072`
		}
	});
	

   
};


module.exports.help = {
    name: 'help'
};
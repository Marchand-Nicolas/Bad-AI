const { MessageButton } = require('discord-buttons');
module.exports.run = (client, message, args) => {
    const yes = new MessageButton();
    yes.setStyle("green");
    yes.setLabel("Valider");
    yes.setID("yes")
    const no = new MessageButton();
    no.setStyle("red");
    no.setLabel("Refuser");
    no.setID("no")

    if (message.author.id == '483526944881639426')
message.channel.send({
    embed: {
        color: 0xe43333,
        title: `Ajouter du savoir à BadAi.`,
        description: `Validez si la réponse est adaptée au message. Le cas échant refusez.`
    },
    buttons: [yes, no]
});  
};


module.exports.help = {
    name: 'setup_knowledge'
};
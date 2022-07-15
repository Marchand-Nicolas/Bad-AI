const Discord = require('discord.js');
const fs = require('fs');
const messages = require('../stockage/messages.json')
const potential_messages = require('../stockage/potential_messages.json')
const { MessageButton } = require('discord-buttons');
const array = messages
module.exports = async(client) => {
    client.user.setPresence({ activity: { name: '*help  | discute sur ' + client.guilds.cache.size + ' serveurs | ' + array.length + " data_messages"}, status: 'dnd' })
/*
   client.guilds.cache.forEach(guild => {
       guild.channels.cache.forEach(channel => {
           if (channel.name.split('bad-ai').length >= 2) {
            let embed = new Discord.MessageEmbed()
            .setDescription(`**Je suis disponible <:panda_amour:730701856124174358>**`)
            channel.send(embed)
           }
       })
   });
   */
/*
client.channels.cache.get("864857958356353034").messages.fetch("864890323729383445").then(message => {
 const yes = new MessageButton();
 yes.setStyle("green");
 yes.setLabel("Valider");
 yes.setID("yes")
 const no = new MessageButton();
 no.setStyle("red");
 no.setLabel("Refuser");
 no.setID("no")

 const max = potential_messages.length

 const potential_message_id = getRandomArbitrary(max)
 if (potential_messages.length > 0) {
 const potential_message = potential_messages[potential_message_id]
const embed = new Discord.MessageEmbed
embed.setTitle(`Ajouter du savoir à BadAi.`);
embed.setColor(0xe43333);
embed.setDescription(`Validez si la réponse est adaptée au message. Le cas échant refusez.`);
embed.addField("Message :", potential_message[0])
embed.addField("Réponse :", potential_message[1])


 message.edit(embed, {
     buttons: [yes, no]
 })
}
})
*/


const array2 = []


            messages.forEach(my_message => {
                if(symbols(my_message[0]))  {
                    console.log("deleted data")
                }
                else {
                  if (Array.isArray(my_message[1])) {
                    array2.push(my_message)
                  }
                  else {
                    if(symbols(my_message[1]))  {
                        console.log("deleted data")
                    }
                    else {
                        array2.push(my_message)
                    }
                 
                  }
                   
                }

            })

            function symbols(text) {
                var contain_symbols = false
               /* const symbols = ['臘‍', '', '藍', '', '', '']
                var i = 0
                while(contain_symbols === false && i < symbols.length) {
                    if (text.split(symbols[i]).length > 1) {
                        contain_symbols = true
                    }
                    i = i + 1
                }
                */
                var i = 0
                const letters = text.split('')
                letters.forEach(string => {
                    if ((text.charCodeAt(i) < 10500)) {

                    }
                    else {
                        contain_symbols = true
                    }
                    i = i + 1
                })
         
               
                return contain_symbols;
              }
            
        
      
            fs.writeFile(`stockage/messages.json`, JSON.stringify(array2), err => {
                if(err) message.channel.send(err)
            })

};

function getRandomArbitrary(max) {
    return Math.floor(Math.random() * (max - 1));
  }
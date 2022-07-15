const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const messages = require('./stockage/messages.json')
const potential_messages0 = require('./stockage/potential_messages.json')
var potential_messages = potential_messages0
const weather = require('weather-js')
require('discord-buttons')(client);
const { MessageButton } = require('discord-buttons');
var stringSimilarity = require('string-similarity');

client.login("YOUR TOKEN");




fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} commande chargée !`);
            client.commands.set(commande.help.name, commande);
        });
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});




const bad_words = ['pute', 'connard', 'foutre', 'tg', 'putain', 'catain', 'conasse', 'conard','conasse','merde','TG','fdp','filsdepute', 'ta gueule', 'ptn', 'conne', 'Porn Hub', 'PH', 'ph', 'Ph', 'yp', 'YP', 'YouPorn', 'youporn','onlyfan','Onlyfan','onlyFan','cetus', 'nazi','sperm']

client.on('clickButton', async (button) => {
 
      


    const id = button.id
    if (button.message.id == "864890323729383445") {
        if (id == "no") {
            const array = potential_messages
        
            const potential_message = button.message.embeds[0].fields[0].value
            const potential_response = button.message.embeds[0].fields[1].value
        
            const array2 = []

            array.forEach(my_message => {
                if (my_message[0] != potential_message || my_message[1] != potential_response) {
                    array2.push(my_message)
                }
            })

   
            
        
      
            fs.writeFile(`stockage/potential_messages.json`, JSON.stringify(array2), err => {
                if(err) message.channel.send(err)
            })
            potential_messages = array2
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

        
        }
        if (id == "yes") {
            const potential_message = button.message.embeds[0].fields[0].value
            const potential_response = button.message.embeds[0].fields[1].value
            const array = messages
        
            const array2 = []

            array.forEach(my_message => {
                array2.push(my_message[0])
                
            })

            const index = array2.indexOf(potential_message)


            if (index === -1) {
                const element = [potential_message, potential_response]

                array.push(element)
                var enregistre_array = array

            }
            else {

                
                
                    if (Array.isArray(array[index][1])) {
                        if (!array[index][1].includes(potential_response)) {
                    const array_element = array[index][1]
                    array.splice(index, 1);

                    array_element.push(potential_response)
                    const element = [potential_message, array_element]

        
                    array.push(element)
                        }
                        
                    }
                    else {

                        if (array[index][1] != potential_response) {
                            const array_element = [array[index][1], potential_response]
                            array.splice(index, 1);
                            const element = [potential_message, array_element]

                            array.push(element)
                            
                                }

                            }
                   
                            
                            var enregistre_array = array
                            
                }

            fs.writeFile(`stockage/messages.json`, JSON.stringify(enregistre_array), err => {
                if(err) message.channel.send(err)
            })

            const array4 = potential_messages
        
            const potential_message2 = button.message.embeds[0].fields[0].value
            const potential_response2 = button.message.embeds[0].fields[1].value
        
            const array5 = []

            array4.forEach(my_message => {
                if (my_message[0] != potential_message2 || my_message[1] != potential_response2) {
                    array5.push(my_message)
                }
            })

   
            
        
      
            fs.writeFile(`stockage/potential_messages.json`, JSON.stringify(array5), err => {
                if(err) message.channel.send(err)
            })
            potential_messages = array5
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

        }
    }

}) 

client.commands = new Discord.Collection();

client.on('message', async message => { 

    if (!message.author.bot) {



        if (message.content.toLowerCase() === "fin conv") {
            let embed = new Discord.MessageEmbed()
                    .setDescription(`**Fin de la conversation**`)
                    message.channel.send(embed)
                    const array = messages
                    client.user.setPresence({ activity: { name: '*help  | discute sur ' + client.guilds.cache.size + ' serveurs | ' + array.length + " data_messages"}, status: 'dnd' })

        }
        else {
       if (message.content.split("").length >= 2) {
        const args = message.content.split(" ").slice(message.content.split(" ").length - 1)

        if (stringSimilarity.findBestMatch(message.content, ['meteo ' +  args.join(" "),'Quelle-est la météo de ' +  args.join(" "),'Quelle-est la météo à ' +  args.join(" "),'je veux la météo de ' +  args.join(" "),'Donne moi la météo de ' +  args.join(" "),'puis-je avoir la météo de ' +  args.join(" "), 'Je veux la météo à ' +  args.join(" "), 'météo ' +  args.join(" "), "j'aimerais bien avoir la météo de "  +  args.join(" ")]).bestMatch.rating > 0.84) {
    

            weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
            if(result.length === 0){
                var array = []
              
                messages.forEach(element => {
                    array.push(element[0])
                })
               

            
                if (stringSimilarity.findBestMatch(message.content, array).ratings[stringSimilarity.findBestMatch(message.content, array).bestMatchIndex].rating >= 0.55) {
                    
                    if (Array.isArray(messages[stringSimilarity.findBestMatch(message.content, array).bestMatchIndex][1])) {

                        const nombre = getRandomInt(messages[stringSimilarity.findBestMatch(message.content, array).bestMatchIndex][1].length)
                    
                        message.channel.send(messages[stringSimilarity.findBestMatch(message.content, array).bestMatchIndex][1][nombre])

                    }
                    else {
                        message.channel.send(messages[stringSimilarity.findBestMatch(message.content, array).bestMatchIndex][1])
                    }
                    
                }
                 return;
            }

                  var current = result[0].current;
                  var location = result[0].location;
                    if (err) message.channel.send(err);
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`**${current.skytext}**`)
                    .setAuthor(`Météo pour ${current.observationpoint}`)
                    .setThumbnail(current.imageUrl)
                    .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
                    .addField('Fuseau horaire', `UTC${location.timezone}, true`)
                    .addField('Type de degré', location.degreetype, true)
                    .addField('Temperature', `${current.temperature} Degrés`, true)
                    .addField('Ressenti', `${current.feelslike} Degrés`, true)
                    .addField('Les vents', current.winddisplay, true)
                    .addField('Humidité', `${current.humidity}%`, true)
                    message.channel.send(embed)
                });
                  
                
        }
        else {

        





            if (message.channel.name.split('bad-ai-talk').length > 1) {




        var contain_bad_words = 0

        bad_words.forEach(bad_word =>{
            
            if (stringSimilarity.findBestMatch(bad_word, message.content.split(' ')).ratings[stringSimilarity.findBestMatch(bad_word, message.content.split(' ')).bestMatchIndex].rating >= 0.75) {
                contain_bad_words = 1

                

            }
        })

        


    
        if (contain_bad_words < 1) {
            if (message.content.split('https:').length === 1) {
 
            

                var array = []

                messages.forEach(element => {
                    array.push(element[0])
                })
               

            
                if (await stringSimilarity.findBestMatch(message.content, array).ratings[stringSimilarity.findBestMatch(message.content, array).bestMatchIndex].rating >= 0) {
                   
                    if (Array.isArray(messages[stringSimilarity.findBestMatch(message.content, array).bestMatchIndex][1])) {

                        const nombre = getRandomInt(messages[stringSimilarity.findBestMatch(message.content, array).bestMatchIndex][1].length)
                        console.log(messages[stringSimilarity.findBestMatch(message.content, array).bestMatchIndex][1][nombre])
                        message.channel.send(messages[stringSimilarity.findBestMatch(message.content, array).bestMatchIndex][1][nombre])

                    }
                    else {
                        message.channel.send(messages[stringSimilarity.findBestMatch(message.content, array).bestMatchIndex][1])
                    }
                    
                }

                
            
            

            }
            else {
                message.channel.send('Liens interdits')
            }
              }
              else {
                message.channel.send('Surveillez votre langage')
            }
        }
    } 

}
    if (message.channel.id === '732274852454596650') {

      
const bad_words = ['pute', 'connard', 'foutre', 'tg', 'putain', 'catain', 'conasse', 'conard','conasse','merde','TG','fdp','filsdepute', 'ta gueule', 'ptn', 'conne', 'Porn Hub', 'PH', 'ph', 'Ph', 'yp', 'YP', 'YouPorn', 'youporn','onlyfan','Onlyfan','onlyFan','cetus', 'nazi','sperm']


        var contain_bad_words2 = 0

        bad_words.forEach(bad_word2 =>{
            
            if (stringSimilarity.findBestMatch(bad_word2, message.content.split(' ')).ratings[stringSimilarity.findBestMatch(bad_word2, message.content.split(' ')).bestMatchIndex].rating >= 7) {
                contain_bad_words2 = 1



            }
        })
       
    
        if (contain_bad_words2 < 1) {

            if (message.content.split('https:').length === 1) {
                
            message.channel.messages.fetch({ limit: 2 }).then(messagess => {
                let lastMessage = messagess.last()
              
                if (lastMessage.content.split("").length >= 2) {

        
                    const array = messages
        
        
        
                    const array2 = []

                    array.forEach(my_message => {
                        array2.push(my_message[0])
                        
                    })
    
                    const index = array2.indexOf(lastMessage.content)
     

                    if (index === -1) {
                        const element = [lastMessage.content, message.content]

                        array.push(element)
                        var enregistre_array = array

                    }
                    else {

                        
                        
                            if (Array.isArray(array[index][1])) {
                                if (!array[index][1].includes(message.content)) {
                            const array_element = array[index][1]
                            array.splice(index, 1);

                            array_element.push(message.content)
                            const element = [lastMessage.content, array_element]

                
                            array.push(element)
                                }
                                
                            }
                            else {

                                if (array[index][1] != message.content) {
                                    const array_element = [array[index][1], message.content]
                                    array.splice(index, 1);
                                    const element = [lastMessage.content, array_element]

                                    array.push(element)
                                    
                                        }





                                    }
                           
                                    
                                    var enregistre_array = array
                                    
                        }

                       
                    
                    
                
 

                

      
                 
                    
                
                if (messages) {
                    fs.writeFile(`stockage/messages.json`, JSON.stringify(enregistre_array), err => {
                        if(err) message.channel.send(err)
                    })


                }

            }
            }) 
                
            
        }
       
            

              }
              else {
     
                message.channel.send({
                    embed: {
                        color: 0xe43333,
                        title: `Langage inapproprié`,
                        
                    }
                });
            }

        }


}

    }
    

   
})




function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


  client.on('message', async message => { 

    if (!message.author.bot) {
  const bad_words = ['pute', 'connard', 'foutre', 'tg', 'putain', 'catain', 'conasse', 'conard','conasse','merde','TG','fdp','filsdepute', 'ta gueule', 'ptn', 'conne', 'Porn Hub', 'PH', 'ph', 'Ph', 'yp', 'YP', 'YouPorn', 'youporn','onlyfan','Onlyfan','onlyFan','cetus', 'nazi','sperm']


        var contain_bad_words2 = 0

        bad_words.forEach(bad_word2 =>{
            
            if (stringSimilarity.findBestMatch(bad_word2, message.content.split(' ')).ratings[stringSimilarity.findBestMatch(bad_word2, message.content.split(' ')).bestMatchIndex].rating >= 7) {
                contain_bad_words2 = 1



            }
        })
       
    
        if (contain_bad_words2 < 1) {

            if (message.content.split('https:').length === 1) {
                
            message.channel.messages.fetch({ limit: 2 }).then(messagess => {
                let lastMessage = messagess.last()
              
                if (lastMessage.content.split("").length >= 1) {

        
                    const array = potential_messages
        
        
        
                    const array2 = []

                    array.forEach(my_message => {
                        array2.push(my_message[0])
                        
                    })
    
                        const element = [lastMessage.content, message.content]

                        array.push(element)
                        var enregistre_array = array

                 
                   

                       
                    
                    
                
 

                

      
                 
                    
                
                if (messages) {
                    fs.writeFile(`stockage/potential_messages.json`, JSON.stringify(enregistre_array), err => {
                        if(err) message.channel.send(err)
                    })


                }

            }
            }) 
                
            
        }
       
            

              
            
            
    }
}

        })


        function getRandomArbitrary(max) {
            return Math.floor(Math.random() * (max - 1));
          }



    


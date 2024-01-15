const express = require('express');
const app = express();
const chalk = require("chalk");
let config = require('./config.json')
let prefix = config.prefix

app.get('/', (req, res) => {
  res.send('Hello Express app!')
})

app.listen(3000, () => {
  console.log(chalk.red.bold('HI IM HERE'))
});
//packaging

const { Client, Collection , MessageActionRow , MessageButton , MessageSelectMenu , Modal , TextInputComponent , MessageEmbed } = require("discord.js");
let db = require('pro.db')

//VARS

const applycategory = "1196020838223323196";

const line = "https://cdn.discordapp.com/attachments/1196009191635165194/1196103651526185020/Media_230831_223516-2-1-1-1.gif?ex=65b66955&is=65a3f455&hm=f0759192a23e5507007c0d4da8df9fad2a03a4a8c60d27ac7547382598108b6f&"
const lineof = "https://cdn.discordapp.com/attachments/1196009191635165194/1196103651526185020/Media_230831_223516-2-1-1-1.gif?ex=65b66955&is=65a3f455&hm=f0759192a23e5507007c0d4da8df9fad2a03a4a8c60d27ac7547382598108b6f&"
const linetr = "https://cdn.discordapp.com/attachments/1196009191635165194/1196103651526185020/Media_230831_223516-2-1-1-1.gif?ex=65b66955&is=65a3f455&hm=f0759192a23e5507007c0d4da8df9fad2a03a4a8c60d27ac7547382598108b6f&"
const linegi = "https://cdn.discordapp.com/attachments/1196009191635165194/1196103651526185020/Media_230831_223516-2-1-1-1.gif?ex=65b66955&is=65a3f455&hm=f0759192a23e5507007c0d4da8df9fad2a03a4a8c60d27ac7547382598108b6f&"
const linene = "https://cdn.discordapp.com/attachments/1196009191635165194/1196103651526185020/Media_230831_223516-2-1-1-1.gif?ex=65b66955&is=65a3f455&hm=f0759192a23e5507007c0d4da8df9fad2a03a4a8c60d27ac7547382598108b6f&"
const offersroom = "1196020953059172443"
const logroom = "1177911106770063411"
const feedbackroom = "1196020958469828618"
const teamrole = "1196020669788471398"
let sugchannel = ""
let fedchannel = "1196020958469828618"
let ordercategory = "1188932079044542464"
var netflixrole = "<@&1126556132819869736>"
var instarole = "<@&1126247948192321711>"
var nitrorole = "<@&1126248017847124070>"
var visarole = "<@&1126248025858265098>"
var botrole = "<@&1126247833574580375>"
var ucrole = "<@&1126247884065619979>"
var voterole = "<@&1126556117154136204>"
var boostrole = "<@&1126556089274605699>"
var spotifyrole = "<@&1126556131939057705>"
var shahidrole = "<@&1126556133876838501>"
var creditrole = "<@&1126556083998163064>"
var tiktokrole = "<@&1126556126813622333>"
var taxchannel = "1196020956766933022"
var welcome = "1196020863527555163"
let order = "1196020945010307082"
let applyteam = "1196020960399204456"
let yes = "✅"
let no = "🚫"
let tag = "𝐃𝐌 |"
let link = "https://discord.com/invite/emPXveVD8Q"
let upgraderoom = "1196020902245171211"
let welcomesellerroom = "1196020900194156595"
let co = "#EB0303"
let newsteam = "1196020907479683162"
let rulesteam = "1196020909115445311"
let trans1 = "1196020955009519616"
let trans2 = ""
let trans3 = ""

const client = new Client({
  intents: 32767
}).setMaxListeners(0);
/*client.on('guildCreate', async(guild) => {
  if(guild.id != "1112081713322004691") {
    await guild.leave();*/
  

//
module.exports = client;
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");
require("./handler")(client);
//


 process.on("unhandledRejection", error => {
  return console.log(error)
}); 
 process.on("unhandledRejection", error => {
  return 
}); 
 process.on("unhandledRejection", error => {
  return 
}); 


client.on("messageCreate", async(message) => {
   if(message.author.bot) return;
  if(message.channel.id != offersroom) return;
  message.react("<a:cs:1128067430405648394>")
})

client.on("messageCreate", async(message) => {
   if(message.author.bot) return;
  if(message.channel.id != offersroom) return;
  message.channel.send(lineof)
})

client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  let channels =["1098934189941850254","1098934191623774238","1088291077796147200"]
  if(!channels.includes(message.channel.id)) return;
  message.channel.send(linene)
})

      client.on("messageCreate", async(message) => {
   if(message.author.bot) return;
  if(message.channel.id != "1196020933786337301") return;
        
   
  message.react("✅")
        message.channel.send(line)
})



const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const targetGuild = client.guilds.cache.find(guild => guild.id === "1142202299868008538");
  const targetChannel = targetGuild.channels.cache.find(channel => channel.id === "1196020861782732880");
  const connection = joinVoiceChannel({
    channelId: targetChannel.id,
    guildId: targetGuild.id,
    adapterCreator: targetGuild.voiceAdapterCreator,
  });
});

					 
//welcome
client.on('guildMemberAdd' , async(member) => {
  let welcomefukenembed = new MessageEmbed()
  .setAuthor({name: member.user.username , iconURL : member.user.displayAvatarURL({dynamic: true})})
  .setFooter({ text : member.user.username , iconURL: member.user.displayAvatarURL({dynamic: true})})
  .setImage(line)
.setThumbnail(member.user.displayAvatarURL({dynamic: true}))
  .setTimestamp()
  .setDescription(`

> **For Order <#1188916557028540506> 😍**

> **Member Id  \`${member.id}\` 🤗**

> **You Are Member Number \`${member.guild.memberCount}\` <:mwah:1147502777694691460>**

> **Enjoy <3 <:mwah:1147502777694691460>**
`) 
  
  .setColor(co)
  
  member.guild.channels.cache.get(welcome).send({ content: `> **Hey** <@!${member.user.id}> **Welcome To ** __${member.guild.name}__ <:mwah:1147502777694691460>` , embeds: [welcomefukenembed]})
  
  member.send(`**
> Welcome To ${member.guild.name}

> \`#\` بەخێریبێیت بۆ باشترینی سێرڤەری کوردی لە بواری کڕین و فرۆشتن دا 



> \`#\`پێناسەی سادە: فرۆشگای موون نایت سێرڤەرێکی کوردیە کە هەموو خزمەتگوزارییەکان دابین دەکات، چونکە لە ستافێکی نایاب پێکهاتووە و کار دەکات بۆ پەرەپێدانی خزمەتگوزارییەکانی هەمیشە بە شێوەیەک کە لەگەڵ تۆدا بگونجێت. هەموو فرۆشتن - دیزاین - هەژمار - و زیاتر لە یەک شوێن دابین دەکات



> \`#\` بۆ کڕین و فرۆشنی هەموو شتێک : <#${order}> <a::🤗😍😍>
> \`#\` بۆ پەیوەندی کردن بە تیمەکەوە  : <#${applyteam}> <:mwah:1147502777694691460>

 

# بە هیوای کاتێکێ خۆش لەگەڵ ئێمە <:mwah:1147502777694691460>
**`)
})
///
client.on('messageCreate', message => {
  if (message.content.startsWith('Slaw')) {
    return message.reply(`**\`-\`Slaw La Tosh Baxer Bey**
**\`-\` Welcome To Moon Night**`)
  }
});

//

client.on('messageCreate', async(message) => {
  if(message.author.bot) return;
  if(message.content === "+rep") {
    message.delete()
    message.channel.send(`**\`-\` بۆ ڕاپۆرتکردنی سیلەر فۆرمەکە پڕبکەرەوە بۆ ئەوەی بتوانین قەرەبووت بکەینەوە

ناو :
ناوی سێڵەر لە دیسکۆرد :
ئایدی ئەکاونتەکەی :
چیرۆکەکە :
**`)
  }
  if(message.content === "yaمقبوeل") {
 message.delete()
message.channel.send(`**
>  مقبول <a:cs:1126632114775916605>

>  شوف الـ  <#${newsteam}> <a:cs:1126632114775916605>

>  والـ  <#${rulesteam}> <a:cs:1126632114775916605>  

>  نورتنا <a:cs:1126632114775916605>
---------------------------------------------------

>  Acceptable <a:cs:1126632114775916605>

>  Read <#${newsteam}> <a:cs:1126632114775916605>

>  And <#${rulesteam}> <a:cs:1126632114775916605> 

>  You enlightened <a:cs:1126632114775916605>
**`)
}
if(message.content === "+ws") {
    message.delete()
    message.channel.send(`
**__ئەگەر لە ماوەی 30 خولەکدا وەڵام نەدرایەوە ئەوا  ticket دادەخرێت بەهۆی فشاری تیکەرەوە سوپاس بۆ تێگەیشتنتان__

__If there is no response within 30 minutes, the ticket will be closed due to the pressure of tickets, and thank you for your understanding__**<a:C_6T5:1132440553699676220>
`)
}
  if(message.content === "LINKasez") {
    message.channel.send(`**> Server Invite Link <a:redheart:1053478392923688960>
** { ${link} } **
> Enjoy <a:cs:1126638387609210920>
**`)
  }
    if(message.content === "Libsjnk") {
    message.channel.send(`**> Server Invite Link <a:1030405044975194202:1082116929025757235>
** { ${link} } **
> Enjoy  <a:emoji_247:1126632120123670598>
**`)
  }
  if(message.content === "need nitro") {
    message.delete()
    message.channel.send(`$rename need nitro`)
  }
   
    if(message.content === "لينك" || message.content === "link" || message.content === "Link") {
      message.delete()
    message.channel.send(`
> **بانگهێشتی لینکی سێرڤەر بکە** 
{ https://discord.gg/moon-night01 } ♥️
`)
  }
  if(message.content === prefix + "point") {
    if(!message.member.roles.cache.has(teamrole)) return message.reply("**This Command For Only Seller**")
    let pointss = db.get(`points_${message.author.id}`)
  let points = pointss.count;

      let fb = db.get(`feedback_${message.author.id}`)
      if(fb == null) fb = 0

      let offers = db.get(`offers_${message.author.id}`)
      if(offers == null) offers = 0
    message.channel.send(`\`\`\` 
    DM STORE𝖴𝗌𝖾𝗋 𝖯𝗈𝗂𝗇𝗍𝖲
\`\`\`

\`-\` DM STORE 𝖯𝗈𝗂𝗇𝗍𝖲 𝖥𝗈𝗋 :<@${message.author.id}>

----------------------------------------------------------------


\`-\` 𝖯𝗈𝗂𝗇𝗍𝖲 𝖢𝗈𝗎𝗇𝗍 : ${points}

----------------------------------------------------------------

\`-\` 𝖥𝖾𝖾𝖽𝖡𝖺𝖼𝗄𝖲 𝖢𝗈𝗎𝗇𝗍 : ${fb}

----------------------------------------------------------------

\`-\` 𝖮𝖿𝖿𝖾𝗋𝖲 𝖢𝗈𝗎𝗇𝗍 : ${offers} 

----------------------------------------------------------------`)
      }
  if(message.content === "لاين" || message.content === "line" || message.content === "Line") {
    message.delete();
    message.channel.send(line)
  }


    


if(message.content === "لاينن" || message.content === "linee" || message.content === "خطط") {
    message.delete();
    message.channel.send(linegi)
  }
  if(message.content === "Bank" || message.content === "بنك" || message.content === "bank") {
    message.reply(`* **I'd Bank : 476666339927523329**
* **Tag Bank : <@476666339927523329>**`)
  }


  if(message.content === "+fb" || message.content === "+Fb") {
    message.reply(`
 ♥️ **سوپاس بۆ هەڵبژاردنی ئێمە ${message.guild.name}** 
 
 <a:😌:♥️> **Thanks For Choosing ${message.guild.name}**

**بۆچوونەکەت بۆ ئێمە گرنگە، هیوادارین کە کاردانەوە پێشکەش بکەیت و ئاماژەکە لەبیر بکەیت ${message.author}**

**Your opinion matters , Please give feedback and mention the name of the person** ${message.author}

**----------------------------------------------**
 **Here :**
 <#${fedchannel}>
 <#${fedchannel}>
 `)
  }
    
})

client.on("messageCreate", async message => {
  if (!message.content.startsWith(prefix) || message.author.message) return;
  const argss = message.content.slice(prefix.length).trim().split(/ +/);
  const command = argss.shift().toLowerCase();
  if(command === "tag") {
   if (!message.member.permissions.has("BAN_ROLES")) return message.reply(`**  You don't have permission **`);
    let args = message.content.split(" ");
    let user = message.mentions.members.first() || client.users.cache.get(args[1]);
    user.setNickname(`${tag}${user.user.username}`)
    message.reply("~~**Done,Pls Dont Spam**~~")
  }
  if(command === "come") {
    let args = message.content.split(" ");
    let user = message.mentions.users.first() || client.users.cache.get(args[1]);


let args2 = args.slice(3).join(' ');

    if(!user) return message.reply("__**~~Mention~~**__")
    if(!args2) Message = 'empty'
    message.reply(`~~**Done,Pls Dont Spam**~~`)
    user.send(`> **Hey** ${user} ♥️

> **SomeOne Needed You** 😌

> **Pls Come** <#${message.channel.id}> ♥️


> **😌 Notes** : ${args2}


> **Server Link : ** ${link} `)
  }
  
  if(command === "dm") {
    let args = message.content.split(" ");
    let user = message.mentions.users.first() || client.users.cache.get(args[1]);
let args2 = args.slice(3).join(' ');

    if(!user) return message.reply("__**~~Mention~~**__")
    if(!args2) return message.reply("__**~~Put Message~~**__")
    message.reply(`~~**Done,Pls Dont Spam**~~`)
    user.send(`**${args2}**
>  <#${message.channel.id}>  
${user}`)
}
    if(command === "Fvgwubb") {
    message.reply(`
  <a:emoji_10:1126638774160457749> **شكرا لاختيارك ${message.guild.name}** 
 
 <a:emoji_10:1126638774160457749> **Thanks For Choosing ${message.guild.name}**

**رايك يهمنا , نتمني ان تعطي فيدباك و تذكر بلمنشن ${message.author}**

**Your opinion matters , Please give feedback and mention the name of the person** ${message.author}

**----------------------------------------------**
 **Here :**
 <#${fedchannel}>
 <#${fedchannel}>
 `)
  }
  //ban
  if (command === "ban") {
    if (!message.member.permissions.has("BAN_ROLES")) return message.reply(`**  You don't have permission **`);
    if (!message.guild.me.permissions.has('BAN_ROLES')) return message.reply(`**  I couldn't edit the channel permissions. Please check my permissions and role position. **`);

    let argss = message.content.split(' ')
    let user = message.guild.members.cache.get(argss[1]) || message.mentions.members.first();
    if (!user) return message.reply(`**  Please mention or id **`);
    if (user.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.fetchOwner().id) return message.reply(`**  You can't ban this user**`);

    if (!user.bannable) return message.reply(`**  You can't ban this user**`);
    await user.ban().catch(err => { console.log(err) });
    await message.reply(`**${user.user.tag} banned from the server!**✈️`);
  }//unban
  if (command === "unban") {
    if (!message.member.permissions.has("BAN_ROLES")) return message.reply(`**  You don't have permission **`);
    if (!message.guild.me.permissions.has('BAN_ROLES')) return message.reply(`**  I couldn't edit the channel permissions. Please check my permissions and role position. **`);

    let args = message.content.split(' ')
    let id = args[1];
    if (!id) return message.reply(`**  Please mention or id **`);
    if (isNaN(id)) {
      return message.reply(`**  Please mention or id **`);
    } else {
      message.guild.members.unban(id).then(mmm => {
        message.reply(` ** ${mmm.tag} unbanned!**`)
      }).catch(err => message.reply(`**I can't find this member in bans list**`));
    }
  }
  if (command === "unbanall") {

    if (!message.member.permissions.has('BAN_MEMBERS')) return message.reply(`**  You don't have permission **`);

    const serverban = client.guilds.cache.get(message.guild.id)
    message.guild.bans.fetch().then(bans => {
      bans.forEach(ban => {
        serverban.members.unban(ban.user.id)
      })
    }).then(() => {
      message.reply({ content: `> ** Done __Unbanned__ All Banlist **` })
    })

  }//kick
  if (command === "kick") {
    if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply(`**  You don't have permissions **`);

    if (!message.guild.me.permissions.has('BAN_MEMBERS')) return message.reply(`**  I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    let id = message.content.split(' ').slice(1).join(' ')
    let user = message.mentions.members.first() || message.guild.members.cache.get(id)
    if (!user) return message.reply(`**  Please mention or id **`)
    if (user.roles.highest.position > message.guild.members.resolve(message.author).roles.highest.position) return
    message.reply(`**  You can't ban this user **`)
    if (user.roles.highest.position > message.guild.members.resolve(client.user).roles.highest.position) return message.reply(`**  You can't ban this user **`)
    user.kick().then(() => message.reply(`** @${user.user.username} kicked from the server!**`)).catch(err => message.reply(err))
  }
  if (command === "lock") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`**  You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`**  I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.permissionOverwrites.edit(everyone, {
      SEND_MESSAGES: false
    }).then(() => {
      message.reply(`** ${message.channel} has been looked.** `)
    })
  }
  if (command === "unlock") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`**  I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.permissionOverwrites.edit(everyone, {
      SEND_MESSAGES: true
    }).then(() => {
      message.reply(`** ${message.channel} has been unlooked.** `)
    })
  }
  if (command === "lockall") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`**  You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`**  I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    message.guild.channels.cache.each((channel) => {
      channel.permissionOverwrites.edit(channel.guild.roles.everyone, {
        SEND_MESSAGES: false
      });
    });
    message.reply("> ** Done __locked__ All Server Channels**")
  }
  if (command === "unlockall") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`** You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`**  I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    message.guild.channels.cache.each((channel) => {
      channel.permissionOverwrites.edit(channel.guild.roles.everyone, {
        SEND_MESSAGES: true
      });
    });
    message.reply("> ** Done __Unlocked__ All Server Channels**")
  }
  if (command === "show") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`**  You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`**  I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.permissionOverwrites.edit(everyone, {
      VIEW_CHANNEL: true
    }).then(() => {
      message.reply(`** ${message.channel} Done show this room.**`)
    })
  }
  if (command === "hide") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`**  You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`** I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.channel.permissionOverwrites.edit(everyone, {
      VIEW_CHANNEL: false
    }).then(() => {
      message.reply(`** ${message.channel} Done hide this room.**`)
    })
  }
  if (command === "showall") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`**  You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`**  I couldn't edit the channel permissions. Please check my permissions and role position.**`);

    message.guild.channels.cache.each((channel) => {
      channel.permissionOverwrites.edit(channel.guild.roles.everyone, {
        VIEW_CHANNEL: true
      });
    });
    message.reply("> ** Done __Showed__ All Server Channels**")
  }
  if (command === "hideall") {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`**  You don't have permissions **`);

    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply(`**  I couldn't edit the channel permissions. Please check my permissions and role position.**`);

     let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
    message.guild.channels.cache.each((channel) => {
      channel.permissionOverwrites.edit(channel.guild.roles.everyone, {
        VIEW_CHANNEL: false
      });
    });
    message.reply("> ** Done __Hidedd__ All Server Channels**")
  }
  if (command === "say") {
    let say = message.content.split(" ").slice(1).join(" ");
    if (!say) message.reply("Please Put Text")
    let embed = new MessageEmbed()
      .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
      .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setImage(line)
      .setDescription(`**${say}**`)
    message.delete();
    message.channel.send({ embeds: [embed] })
  }
  if (command === "line") {
    message.delete()
    message.channel.send({
      embeds: [
        new MessageEmbed()
          .setColor("BLACK")
          .setImage(line)

      ]
    })
  }
})
//
client.on("messageCreate", async message => {
  if (!message.content.startsWith(prefix) || message.author.message) return;
  const argss = message.content.slice(prefix.length).trim().split(/ +/);
  const command = argss.shift().toLowerCase();

  if (command === "avatar-server") {
    var button = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setStyle('LINK')
          .setEmoji('✨')
          .setLabel(`Download Server Avatar`)
          .setURL((`${message.guild.iconURL({ dynamic: true, size: 4096 })}`))
      );
    message.reply({
      embeds: [
        new MessageEmbed()
          .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setDescription(`[Server Avatar link](${message.guild.iconURL({ dynamic: true, size: 4096 })})`)
          .setImage(`${message.guild.iconURL({ dynamic: true, size: 4096 })}`)
      ], components: [button]
    })
  }
  if (command === "avatar") {
    let ff = message.mentions.users.first() || message.author;
    let userr = message.member.guild.members.cache.get(ff.id)

    var button = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setStyle('LINK')
          .setEmoji('✨')
          .setLabel(`DOWNLOAD AVATAR`)
          .setURL(userr.displayAvatarURL({ dynamic: true })));


    message.reply({
      embeds: [
        new MessageEmbed()
          .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setDescription(`[Avatar link](${userr.user.displayAvatarURL({ dynamic: true, size: 4096 })})`)
          .setImage(userr.displayAvatarURL({ dynamic: true, size: 4096 }))
      ], components: [button]
    })

  }
  if (command === "inrole") {
    let role = message.mentions.roles.first()
    if (!role) return message.reply("pls mention role")
    let map = message.guild.roles.cache.get(role.id).members.map(rr => `> **<@${rr.id}> ( ${rr.id} )**`).join("\n")

    message.reply({
      embeds: [
        new MessageEmbed()
          .setTitle(` **Info About \`${role.name}\`**  `)
          .setColor('#7800FF')
          .setDescription(`> **Role Name : **\`${role.name}\`

> **Members Count Have This Role :** \`${message.guild.roles.cache.get(role.id).members.size}\`


✨ **Members :**
${map}


> **Role Is Created At : **\`${moment(role.createdAt).format('DD/MM/YYYY h:mm')} \`

`)
          .setTimestamp()
          .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
      ], split: true
    })


  }
  if (command === "invites") {
    var invite = await inviteTracker.getMemberInvites(message.member);
    message.reply(`✨ ${message.author.username} Has Got ${invite.count} Invite(s) 
`);
  }
  if (command === "ping") {
    message.reply({
      embeds: [
        new MessageEmbed()
          .setDescription(`**
    🏓 Pong 🏓 
    
   Latency is ${message.createdTimestamp - message.createdTimestamp}ms. 
   API Latency is ${Math.round(client.ws.ping)}ms
   Ws Ping Is ${client.ws.ping} **`)
          .setColor('#7800FF')
          .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
          .setFooter({ text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
      ]
    })
  }
  if (command === "server") {
    await message.guild.members.fetch();
    const members = message.guild.members.cache;
    const channels = message.guild.channels.cache;
    const emojis = message.guild.emojis.cache.size;
    const firstFiveEmojis = message.guild.emojis.cache.map(emoji => emoji).slice(0, 5).join(' ');
    const boostCount = message.guild.premiumSubscriptionCount;
    const verificationLevel = message.guild.verificationLevel;
    const rolesCount = message.guild.roles.cache.size;

    await message.reply({
      embeds: [
        new MessageEmbed()
          .setColor("#7800FF")
          .setAuthor({ name: `${message.guild.name} Info`, iconURL: message.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }) })
          .setThumbnail(message.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
          .addFields(
            { name: '🆔 Server ID:', value: `${message.guildId}`, inline: true },
            { name: '📆 Created On:', value: `**<t:${Math.floor(message.guild.createdTimestamp / 1000)}:R>**`, inline: true },
            { name: '👑 Owned by:', value: `<@!${message.guild.ownerId}>`, inline: true },
            { name: `👥  Members (${message.guild.memberCount}):`, value: `**${members.filter(member => member.presence?.status === 'online').size + members.filter(member => member.presence?.status === 'idle').size + members.filter(member => member.presence?.status === 'dnd').size}** Online | Idle | DND\n**${members.filter(member => !['online', 'idle', 'dnd'].includes(member.presence?.status)).size}** Offline\n**${members.filter(member => member.user.bot).size}** Bot`, inline: true },
            { name: `💬 Channels (${message.guild.channels.cache.size}):`, value: `**${channels.filter(channel => channel.type === 0).size}** Text | **${channels.filter(channel => channel.type === 2).size}** Voice\n**${channels.filter(channel => channel.type === 4).size}** Category`, inline: true },
            { name: `🌐 Others:`, value: `Verification Level: **${verificationLevel}**\nBoosts: **${boostCount}** <a:BoostBadges:1013231177651458139>\nRoles: **${rolesCount}**`, inline: true },
            { name: `🛡️ Emojis (${emojis}):`, value: `**${firstFiveEmojis}**`, inline: true },
          )
      ], ephemeral: true
    })
  }
    if(command === "tax") {
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" "); 
    if (message.author.bot) return;
      if (args.endsWith("m")) args =  args.replace(/m/gi, "") * 1000000;
  else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
  else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
  else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
  else if (args.endsWith("b")) args = args.replace(/b/gi, "") * 1000000000;
else if (args.endsWith("B")) args = args.replace(/B/gi, "") * 1000000000;
      let args2 = parseInt(args)
      let tax = Math.floor(args2 * (20) / (19) + (1))
      let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
      let tax3 = Math.floor(tax2 * (20) / (19) + (1))
      let tax4 = Math.floor(tax2 + tax3 + args2)
      if (!args2) return message.reply(`
> ** Error It Must Be A Number ⚠⚠ **`);
      if (isNaN(args2)) return message.reply(`
> ** Error It Must Be A Number ⚠⚠ **`);
      if (args2 < 1) return message.reply(`
> ** Error It Must Be Larger Than 1 ⚠⚠ **`);
        let row = new MessageActionRow()
			.addComponents(
        				new MessageButton()
        .setCustomId(`first_embed`)
        .setLabel("Mediator")
        .setEmoji("<:mwah:1147502777694691460>")
        .setStyle('SUCCESS')
      );
      let row2 = new MessageActionRow()
			.addComponents(
        new MessageButton()
        .setCustomId(`2_embed`)
        .setLabel("Back")
        .setEmoji("<a:♥️:😌>")
        .setStyle('DANGER')
);
        let m = await message.reply({ content: `
> **Your Tax is** **__${tax}__**` , components: [row]});
        let collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 3600000 ,max: 2 })
        collector.on('collect', async i => {
          if (i.customId === 'first_embed') {
                  m.edit({ content: `
> **Your Tax is** **__${tax4}__**`, components: [row2]})
                  row
                  i.deferUpdate()
          }
          if (i.customId === '2_embed') {
          m.edit({ content: `
> **Your Tax is** **__${tax}__**`, components: [row] })
            
                  i.deferUpdate()
          } else {
            return;
          }
       });
  }
})
client.on('channelCreate' , async(message) => {
  if(message.parentId != applycategory) return;
  setTimeout(() => {    
  message.send({ content: `> ** Click On The Button To Start Team Apply Submition ** <:mwah:1147502777694691460>

  
> **تکایە کرتە لەسەر پیتێنەکە بکە بۆ دەستکردن بە داواکاری بۆ ستافەکە** <a:😌:♥️>

ئەگەر تۆ بۆ ئەوەی شتێک بکڕی تیکت کردۆتەوە ئەوەی کەس وڵامی تۆ ناداتەوە بە هیوای تێگەیشتن
` , components: [
    new MessageActionRow()
    .addComponents(
      new MessageButton()
      .setLabel("Click Here")
      .setStyle("PRIMARY")
      .setCustomId("hh")
    )
  ]})
     }, 2000);  
  client.on('interactionCreate' , async(interaction) => {
    if(interaction.customId == "hh") {
      		const modal = new Modal()
			.setCustomId('myModal')
			.setTitle('Apply Team Submit');
		const rname = new TextInputComponent()
			.setCustomId('rname')
			.setLabel("ناوی سیانی ڕاستەقینەی خۆت")
			.setStyle('SHORT');

      		const age = new TextInputComponent()
			.setCustomId('age')
			.setLabel("تەمەنت")
			.setStyle('SHORT');

      		const svcount = new TextInputComponent()
			.setCustomId('svcount')
			.setLabel("ژمارە تەلەفۆنی خۆت")
			.setStyle('SHORT');

      		const fbcount = new TextInputComponent()
			.setCustomId('fb')
			.setLabel("ئایا 15 فیدباکت هەیە")
			.setStyle('SHORT');

      		const roles = new TextInputComponent()
			.setCustomId('roles')
			.setLabel("ئەو ڕۆڵانەی دەتەوێ چین")
			.setStyle('SHORT');
      
		const name = new MessageActionRow().addComponents(rname);
		const agge = new MessageActionRow().addComponents(age);
      const svvcount = new MessageActionRow().addComponents(svcount);
      const fbvcount = new MessageActionRow().addComponents(fbcount);
      const rovles = new MessageActionRow().addComponents(roles);
		// Add inputs to the modal
		modal.addComponents(name , agge,svvcount,fbvcount,rovles);
		// Show the modal to the user
		await interaction.showModal(modal);

        client.on('interactionCreate', async(interaction) => {
	if (!interaction.isModalSubmit()) return;

	if (interaction.customId === 'myModal') {
    
    const name = interaction.fields.getTextInputValue('rname');
    const rname = interaction.fields.getTextInputValue('age');
    const rrname = interaction.fields.getTextInputValue('svcount');
    const rrrname = interaction.fields.getTextInputValue('fb');
    const rrrrname = interaction.fields.getTextInputValue('roles');
await interaction.reply({ content: `**
> The Apply Team Has Been Submited , If you don't have 30 credits، you have to pay 500k credits <:mwah:1147502777694691460>


> تکایە ئەگەر ۳۰ فیدباکت نییە ئەوا پێویستە 500k کریدیت بدەی
**`,embeds: [
      new MessageEmbed()
        .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
        .setAuthor({ name: interaction.guild.name , iconURL: interaction.guild.iconURL({dynamic: true}) })
        .setFooter({ text: interaction.guild.name , iconURL: interaction.guild.iconURL({dynamic: true}) })
        .setTimestamp()
      .setDescription(`
\`\`\` New Apply Team Submition \`\`\`

> Seller Name : ${name} 😍

> Seller Age: ${rname} 😁

> Seller Phone Number: ${rrname} 📞

> Does He Have Feedback : ${rrrname} ✨️

> Sell Roles : ${rrrrname} 🤗
`)
  .setImage(line)
  .setColor(co)
    ] });
    interaction.channel.send("> **Pls Wait Tester **@here")
    
	}
});
    }
  })
})
//
//offer
client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  if(message.channel.id != offersroom) return;
  if(!message.member.roles.cache.has(teamrole)) return;
  let pointSs = db.get(`points_${message.author.id}`)
  if( pointSs == null) {
      await db.set(`points_${message.author.id}` , {
    userId : message.author.id,
    count : 0
  })
  }
  let points = db.get(`points_${message.author.id}`)
  let poi = points.count
  let po = Math.floor((poi * 1) + (8 * 1))
  await db.set(`points_${message.author.id}` , {
    userId : message.author.id,
    count : po
  })
  db.add(`offers_${message.author.id}` , 1)
  message.guild.channels.cache.get(logroom).send({embeds: [
    new MessageEmbed()
    .setColor(co)
    .setTitle("New Notification")
    .setDescription(`
> New Offers Point Gived To : ${message.author}`)
  ]})
})

//اتفضل ضن



client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  if(!message.member.roles.cache.has(teamrole)) return;
  if(message.content === "Farmu") {
  let pointSs = db.get(`points_${message.author.id}`)
  if( pointSs == null) {
      await db.set(`points_${message.author.id}` , {
    userId : message.author.id,
    count : 0
  })
  }
  let points = db.get(`points_${message.author.id}`)
  let poi = points.count
  let po = Math.floor((poi * 1) + (2 * 1))
  await db.set(`points_${message.author.id}` , {
    userId : message.author.id,
    count : po
  })
    
      message.guild.channels.cache.get(logroom).send({embeds: [
    new MessageEmbed()
    .setColor(co)
    .setTitle("New Notification")
    .setDescription(`
> New Respond Ticket Point Gived To : ${message.author}`)
  ]})
  }
})


client.on('messageCreate' , async(message) => {
  if(message.content === "Re") {
    if(!message.channel.name.startsWith("ticket")) return;
    message.channel.setName(`by-${message.author.username}`)
  }
})
client.on('messageCreate' , async(message) => {
  if(message.content === "Re") {
    if(!message.channel.name.startsWith("need")) return;
    message.channel.setName(`by-${message.author.username}`)
  }
})

client.on('messageCreate' , async(message) => {
  if(message.content === "re") {
    if(!message.channel.name.startsWith("ticket")) return;
    message.channel.setName(`by-${message.author.username}`)
  }
})
client.on('messageCreate' , async(message) => {
  if(message.content === "re") {
    if(!message.channel.name.startsWith("need")) return;
    message.channel.setName(`by-${message.author.username}`)
  }
})


//feedback

client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  if(message.channel.id != feedbackroom) return;
      let role = message.guild.roles.cache.get("1196020669788471398")
    message.member.roles.add(role)
  let user = message.mentions.members.first();
  if(message.author.id == user.id) return;
  let pointSs = db.get(`points_${user.id}`)
  if( pointSs == null) {
      await db.set(`points_${user.id}` , {
    userId : user.id,
    count : 0
  })
  }
  let points = db.get(`points_${user.id}`)
  let poi = points.count
  let po = Math.floor((poi * 1) + (11 * 1))
  await db.set(`points_${user.id}` , {
    userId : user.id,
    count : po
  })
  db.add(`feedback_${user.id}` , 1)
    message.guild.channels.cache.get(logroom).send({embeds: [
    new MessageEmbed()
    .setColor(co)
    .setTitle("New Notification")
    .setDescription(`
> New Offers Feedback Gived To : ${user}

> By Client : ${message.author}`)
  ]})
})
//p




//feedbck
client.on("messageCreate", async(message) => {
   if(message.author.bot) return;
  if(message.channel.id != fedchannel) return;
  message.reply({embeds: [
    new MessageEmbed()
    .setTimestamp()
    .setAuthor({name : message.author.username , iconURL : message.author.displayAvatarURL({ dynamic: true })})
    .setFooter({text : message.author.username , iconURL : message.author.displayAvatarURL({ dynamic: true })})
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setDescription(`
> **Thanks For Giving Us Feedback 😍**

> **We Hope You Visit Us Again 🤗👋**
`)
    .setImage(line)
    .setColor(co)
  ]})
})
//react

client.on("messageCreate", async(message) => {
   if(message.author.bot) return;
  if(message.channel.id != fedchannel) return;
  message.react("<a:cs:1126638387609210920>")
  message.react("<a:red_crown:1127300312747753513>")
})
//sug
client.on("messageCreate", async(message) => {
   if(message.author.bot) return;
  if(message.channel.id != sugchannel) return;
  message.channel.send({embeds: [
    new MessageEmbed()
    .setTimestamp()
    .setAuthor({name : message.author.username , iconURL : message.author.displayAvatarURL({ dynamic: true })})
    .setFooter({text : message.author.username , iconURL : message.author.displayAvatarURL({ dynamic: true })})
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setDescription(`
**
${message.content}
**
`)
    .setImage(line)
    .setColor(co)
  ]}).then(async(m) => {
    m.react(yes)
    m.react(no)
  })
  message.delete()
})

//
client.on('channelCreate', message => {

  if (message.parentId !== ordercategory) return;
  const pricelistembed = new MessageEmbed()
    .setImage(line)
    .setColor(co)
    .setTimestamp()
    .setDescription(`__**برجاء تحديد طلبك بالاختيار من اسفل البوتن وسوف يتواصل معك احد من رول المنتج**  

**إن لم تلقي المنتج فيرجي توضيح ماذا تريد في التكت وسوف يقوم احد من فريق الدعم بمنشن لرول السلعه**  

**يتم ترك التكت لمده معينه ان لم يتوفر طلبك وتم قفل التكت فاعلم ان طلبك غير متواجد حاليآ**__

__**Please specify your order by choosing from the button below, and someone from the product roll will contact you**

**If you did not receive the product, please indicate what you want in the tiktok, and someone from the support team will mention the product roll**

** The ticket is left for a certain period. If your request is not available and the ticket has been closed, know that your request is not available at this time **__`)
  const row = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
        .setCustomId('select')
        .setPlaceholder('Select prices here')
        .addOptions([
          {
            label: '𝖭𝖾𝗍𝖿𝗅𝗂𝗑',
            description: '𝖭𝖾𝗍𝖿𝗅𝗂𝗑 𝗉𝗋𝗂𝖼𝖾𝗌',

            emoji: '<:cs:1126636967858278621>',

            value: 'Netflix',
          },
          {
            label: '𝖨𝗇𝗌𝗍𝖺',

            description: '𝖨𝗇𝗌𝗍𝖺 𝖯𝗋𝗂𝖼𝖾𝗌',
            emoji: '<:insta:1128010290429182003>',
            value: 'Insta',
          }, {
            label: '𝖭𝗂𝗍𝗋𝗈',
            description: '𝖭𝗂𝗍𝗋𝗈 𝖯𝗋𝗂𝖼𝖾𝗌',
            emoji: '<:NITRO:1128009962573021184>',
            value: 'nitro',
          }, {
            label: '𝖵𝗂𝗌𝖺',
            emoji: "<:Visa:1128010125995671632>",
            description: '𝖵𝗂𝗌𝖺 𝖯𝗋𝗂𝖼𝖾𝗌',

            value: 'visa',
          }, {
            label: '𝖡𝗈𝗍',

            emoji: "<:Bot:1128009845535154177>",
            description: '𝖡𝗈𝗍 𝖯𝗋𝗂𝖼𝖾𝗌',
            value: 'bot',
          }, {
            label: '𝖵𝗈𝗍𝖾',
            description: '𝖵𝗈𝗍𝖾 𝗉𝗋𝗂𝖼𝖾𝗌',
            emoji: "<a:aeagle_vote:1128009723329912972>",
            value: 'vote',
          }, {
            label: '𝖴𝖼',
            description: '𝖴𝖼 𝖯𝗋𝗂𝖼𝖾𝗌',
            emoji: "<:UC:1128009539158024313>",
            value: 'uc',
          }, {
            label: '𝖡𝗈𝗈𝗌𝗍',
            description: '𝖡𝗈𝗈𝗌𝗍 𝖯𝗋𝗂𝖼𝖾𝗌',
            emoji: "<:BOOST:1128009451216048158>",
            value: 'boost',
          }, {
            label: '𝖲𝗉𝗈𝗍𝗂𝖿𝗒',
            description: '𝖲𝗉𝗈𝗍𝗂𝖿𝗒 𝖯𝗋𝗂𝖼𝖾𝗌',
            emoji: "<:SPOTIFY:1128009293472485417>",
            value: 'spotify',
          }, {
            label: '𝖲𝗁𝖺𝗁𝗂𝖽',
            description: '𝖲𝗁𝖺𝗁𝗂𝖽 𝖯𝗋𝗂𝖼𝖾𝗌',
            emoji: "<:Shahid:1128009043265458236>"
,
            value: 'shahid',
          }, {
            label: '𝖢𝗋𝖾𝖽𝗂𝗍',
            description: '𝖢𝗋𝖾𝖽𝗂𝗍 𝖯𝗋𝗂𝖼𝖾𝗌',
            emoji: "<:Credits:1128008839611043971>",
            value: 'credit',
          }, {
            label: '𝖳𝗂𝗄𝖳𝗈𝗄',
            description: '𝖳𝗂𝗄𝖳𝗈𝗄 𝖯𝗋𝗂𝖼𝖾𝗌',
            emoji: "<:TikTok_j4j:1128008669922078910>",
            value: 'tiktok',
          }

        ]),
    );
  setTimeout(() => {
    message.send({ embeds: [pricelistembed], components: [row] }).then(message => {
    })
  }, 2000);
})
//
client.on("interactionCreate", (interaction) => {
  if (!interaction.isSelectMenu()) return;

  if (interaction.values == "Netflix") {
    const netflixembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setTitle(`\`\#\`\ Netflix Prices In ${interaction.guild.name}`)
      .setDescription(`
𝖧𝖾𝗋𝖾 𝖨𝗌 𝖠𝗅𝗅 𝖭𝖾𝗍𝖿𝗅𝗂𝗑 𝖯𝗋𝗂𝖼𝖾𝗌 

<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>

-<:cs:1126636967858278621> 𝖴𝗌𝖾𝗋 𝟣 𝗆𝗈𝗇𝗍𝗁 : 𝟪𝟢𝖪  

-<:cs:1126636967858278621> 𝖠𝖼𝖼 𝟣 𝗐𝖾𝖾𝗄 : 𝟦𝟢𝖪  

-<:cs:1126636967858278621> 𝖠𝖼𝖼 𝟣 𝗆𝗈𝗇𝗍𝗁 : 𝟣𝟧𝟢𝖪 

<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>

- 𝖸𝗈𝗎 𝖢𝖺𝗇 𝖬𝖾𝗇𝗍𝗂𝗈𝗇 𝖳𝗁𝖾 𝖲𝖾𝗅𝗅𝖾𝗋 𝖢𝗅𝗂𝖼𝗄 𝖳𝗁𝖾  <:cs:1126636967858278621> 𝖡𝗎𝗍𝗍𝗈𝗇
`)
      .setImage(`https://aramobi.com/wp-content/uploads/2021/08/Netflix-768x432.jpg`)
      .setColor(co)

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`netbutton`)
          .setLabel("Mention Seller")
          .setEmoji("<:cs:1126636967858278621>")
          .setStyle('SUCCESS')
      );
    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [netflixembed], components: [row] })
  }
  if (interaction.values == "Insta") {
    const instaembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor('#FB13B2')
      .setTitle(`\`\#\`\ InstaGram Prices In ${interaction.guild.id}`)
      .setDescription(`𝖧𝖾𝗋𝖾 𝖨𝗌 𝖠𝗅𝗅 𝖨𝗇𝗌𝗍𝖺𝗀𝗋𝖺𝗆 𝖯𝗋𝗂𝖼𝖾𝗌 

<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>

𝖥𝗈𝗅𝗅𝗈𝗐𝖾𝗋𝗌

- <:insta:1128010290429182003>𝟣𝟢𝟢 𝖥𝗈𝗅𝗅𝗈𝗐𝖾𝗋 : 𝟣5𝖪

- <:insta:1128010290429182003>𝟧𝟢𝟢 𝖥𝗈𝗅𝗅𝗈𝗐𝖾𝗋 : 7𝟢𝖪

- <:insta:1128010290429182003>𝟣𝗄 𝖥𝗈𝗅𝗅𝗈𝗐𝖾𝗋 : 2𝟢𝟢𝖪

𝖫𝗂𝗄𝖾𝗌

- <:insta:1128010290429182003>𝟣𝟢𝟢 𝖫𝗂𝗄𝖾 : 𝟣𝟢𝖪

- <:insta:1128010290429182003>𝟧𝟢𝟢 𝖫𝗂𝗄𝖾 : 𝟧𝟢𝖪

- <:insta:1128010290429182003>𝟣𝗄 𝖫𝗂𝗄𝖾 : 𝟣𝟢𝟢𝖪

<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>

- 𝖸𝗈𝗎 𝖢𝖺𝗇 𝖬𝖾𝗇𝗍𝗂𝗈𝗇 𝖳𝗁𝖾 𝖲𝖾𝗅𝗅𝖾𝗋 𝖢𝗅𝗂𝖼𝗄 𝖳𝗁𝖾  <:insta:1128010290429182003> 𝖡𝗎𝗍𝗍𝗈𝗇`)
      .setImage("https://img.freepik.com/free-vector/social-media-instagram-banner_228198-596.jpg")

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`insbutton`)
          .setLabel("Mention Seller")
          .setEmoji("<:insta:1128010290429182003>")
          .setStyle('SUCCESS')
      );

    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [instaembedembed], components: [row] })
  }
  if (interaction.values == "visa") {
    const visaembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor('#AF13FB')
      .setTitle(`\`\#\`\ Visa Prices In ${interaction.guild.name}`)
      .setDescription(`𝖧𝖾𝗋𝖾 𝖨𝗌 𝖠𝗅𝗅 𝖵𝗂𝗌𝖺 𝖯𝗋𝗂𝖼𝖾𝗌

<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>

<:Visa:1128010125995671632> (𝖮𝗇𝗅𝗒 𝖭𝗂𝗍𝗋𝗈 𝖠𝖼𝗍𝗂𝗏𝖺𝗍𝗂𝗈𝗇) : 30k

<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>

- 𝖸𝗈𝗎 𝖢𝖺𝗇 𝖬𝖾𝗇𝗍𝗂𝗈𝗇 𝖳𝗁𝖾 𝖲𝖾𝗅𝗅𝖾𝗋 𝖢𝗅𝗂𝖼𝗄 𝖳𝗁𝖾  <:Visa:1128010125995671632> 𝖡𝗎𝗍𝗍𝗈𝗇`)
      .setImage("https://cdn.discordapp.com/attachments/1082119118838317067/1082136107342376990/images.png")

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`visbutton`)
          .setLabel("Mention Seller")
          .setEmoji("<:Visa:1128010125995671632>")
          .setStyle('SUCCESS')
      );

    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [visaembedembed], components: [row] })
  }
  if (interaction.values == "nitro") {
    const nitroembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor('#FB13B2') 
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setTitle(`\`\#\`\ Nitro Prices In ${interaction.guild.name}`)
      .setDescription(`𝖧𝖾𝗋𝖾 𝖨𝗌 𝖠𝗅𝗅 𝖭𝗂𝗍𝗋𝗈 𝖯𝗋𝗂𝖼𝖾𝗌 <:NITRO:1128009962573021184>

<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>

-<:NITRO:1128009962573021184> 𝖭𝗍𝗂𝗋𝗈 𝖦𝖺𝗆𝗂𝗇𝗀 𝟣 𝖬𝗈𝗇𝗍𝗁 𝖦𝗂𝖿𝗍 : 𝟣𝖬 

-<:NITRO:1128009962573021184> 𝖭𝗂𝗍𝗋𝗈 𝖢𝗅𝖺𝗌𝗌𝗂𝖼 𝟣 𝖬𝗈𝗇𝗍𝗁 𝖦𝗂𝖿𝗍 : 𝟨𝟧𝟢𝖪 

-<:NITRO:1128009962573021184>  𝖭𝗂𝗍𝗋𝗈 𝖦𝖺𝗆𝗂𝗇𝗀 𝟥 𝖬𝗈𝗇𝗍𝗁 : 25𝟢𝖪 

-<:NITRO:1128009962573021184> 𝖭𝗂𝗍𝗋𝗈 𝖦𝖺𝗆𝗂𝗇𝗀 𝟣 𝖬𝗈𝗇𝗍𝗁 : Stopped

-<:NITRO:1128009962573021184>  𝖭𝗍𝗂𝗋𝗈 𝖦𝖺𝗆𝗂𝗇𝗀 𝟣 𝖬𝗈𝗇𝗍𝗁 𝖳𝗎𝗋𝗄𝖾𝗒 : 𝟧𝟧𝟢𝗄

<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>

- 𝖸𝗈𝗎 𝖢𝖺𝗇 𝖬𝖾𝗇𝗍𝗂𝗈𝗇 𝖳𝗁𝖾 𝖲𝖾𝗅𝗅𝖾𝗋 𝖢𝗅𝗂𝖼𝗄 𝖳𝗁𝖾 <:NITRO:1128009962573021184> 𝖡𝗎𝗍𝗍𝗈𝗇
`)
      .setImage("https://cdn.discordapp.com/attachments/1082119118838317067/1082135574133080064/images_1.jpeg")

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`nitbutton`)
          .setLabel("Mention Seller")
          .setEmoji("<:NITRO:1128009962573021184>")
          .setStyle('SUCCESS')
      );

    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [nitroembedembed], components: [row] })
  }
  if (interaction.values == "bot") {
    const botembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor(co)
      .setTitle(`\`\#\`\ Bot Prices In ${interaction.guild.name}`)
      .setDescription(`**𝖧𝖾𝗋𝖾 𝖨𝗌 𝖠𝗅𝗅 𝖡𝗈𝗍 𝖯𝗋𝗂𝖼𝖾𝗌

<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>

-  <:Bot:1128009845535154177>𝖥𝗎𝗅𝗅 𝖲𝗒𝗌𝗍𝖾𝗆 𝖵𝗂𝗉 Host 𝖡𝗈𝗍 : 𝟪𝟢𝟢𝖪 

-  <:Bot:1128009845535154177>𝖥𝗎𝗅𝗅 𝖲𝗒𝗌𝗍𝖾𝗆 𝖡𝗈𝗍 : 𝟧𝟢𝟢𝖪 

-  <:Bot:1128009845535154177>𝖡𝗋𝗈𝖽𝖼𝖺𝗌𝗍 𝖡𝗈𝗍 : 𝟣𝟧𝟢𝖪 

-  <:Bot:1128009845535154177>𝖠𝗏𝖺𝗍𝖺𝗋 𝖡𝗈𝗍 : 𝟣𝟢𝟢𝖪 

-  <:Bot:1128009845535154177>𝖠𝗎𝗍𝗈 𝖫𝗂𝗇𝖾 & 𝖱𝖾𝖺𝖼𝗍 : 𝟪𝟢𝖪 

-  <:Bot:1128009845535154177>𝖳𝖺𝗑 (𝖨𝗇 𝖲𝗉𝖾𝖼𝗂𝖿𝗂𝖼 𝖱𝗈𝗈𝗆) : 𝟨𝟢𝖪

-  <:Bot:1128009845535154177>𝖳𝖺𝗑 : 𝟦𝟢𝖪  

-  <:Bot:1128009845535154177>𝖠𝗎𝗍𝗈 𝖱𝖾𝖺𝖼𝗍 𝖡𝗈𝗍 : 𝟣𝟧𝟢𝖪
 

<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>

- __𝖸𝗈𝗎 𝖢𝖺𝗇 𝖬𝖾𝗇𝗍𝗂𝗈𝗇 𝖳𝗁𝖾 𝖲𝖾𝗅𝗅𝖾𝗋 𝖢𝗅𝗂𝖼𝗄 𝖳𝗁𝖾 <:Bot:1128009845535154177>𝖡𝗎𝗍𝗍𝗈𝗇__**
`)
      .setImage("https://media.discordapp.net/attachments/967015425990852648/968613515873099806/images_4.jpeg")

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`botbutton`)
          .setLabel("Mention Seller")
          .setEmoji("<:Bot:1128009845535154177>")
          .setStyle('SUCCESS')
      );

    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [botembedembed], components: [row] })
  }
  if (interaction.values == "vote") {
    const botembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor(co)
      .setTitle(`\`\#\`\ Vote Prices In ${interaction.guild.name}`)
      .setDescription(`**𝖧𝖾𝗋𝖾 𝖨𝗌 𝖠𝗅𝗅 𝖵𝗈𝗍𝖾 𝖯𝗋𝗂𝖼𝖾𝗌

<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>

 <a:aeagle_vote:1128009723329912972> 𝗏𝗈𝗍𝖾 : 5k 

<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>

- __𝖸𝗈𝗎 𝖢𝖺𝗇 𝖬𝖾𝗇𝗍𝗂𝗈𝗇 𝖳𝗁𝖾 𝖲𝖾𝗅𝗅𝖾𝗋 𝖢𝗅𝗂𝖼𝗄 𝖳𝗁𝖾 <a:aeagle_vote:1128009723329912972> 𝖡𝗎𝗍𝗍𝗈𝗇__**
`)
      .setImage("https://media.discordapp.net/attachments/967015425990852648/968613946653302926/download.jpeg")

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`votbutton`)
          .setLabel("Mention Seller")
          .setEmoji("<a:aeagle_vote:1128009723329912972>")
          .setStyle('SUCCESS')
      );

    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [botembedembed], components: [row] })
  }
  if (interaction.values == "uc") {
    const botembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor(co)
      .setTitle(`\`\#\`\ Uc Prices In ${interaction.guild.name}`)
      .setDescription(`𝖧𝖾𝗋𝖾 𝖨𝗌 𝖠𝗅𝗅 𝖴𝖼 𝖯𝗋𝗂𝖼𝖾𝗌

<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224> 𝖦𝗅𝗈𝖻𝖺𝗅 

<:UC:1128009539158024313> 𝟨𝟢𝗎𝖼 : 32 𝖫𝖤

<:UC:1128009539158024313> 𝟣𝟪𝟢𝗎𝖼 : 105 𝖫𝖤

<:UC:1128009539158024313> 𝟥𝟤𝟧𝗎𝖼 : 155 𝖫𝖤 

<:UC:1128009539158024313> 𝟨𝟨𝟢𝗎𝖼 : 270 𝖫𝖤 

<:UC:1128009539158024313> 𝟫𝟪𝟧𝗎𝖼 : 470 𝖫𝖤 

<:UC:1128009539158024313>𝟣𝟪𝟢𝟢𝗎𝖼 : 890 𝖫𝖤 

<:UC:1128009539158024313>  𝟥𝟪𝟧𝟢𝗎𝖼 : 1525 𝖫𝖤

<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>


- **__𝖸𝗈𝗎 𝖢𝖺𝗇 𝖬𝖾𝗇𝗍𝗂𝗈𝗇 𝖳𝗁𝖾 𝖲𝖾𝗅𝗅𝖾𝗋 𝖢𝗅𝗂𝖼𝗄 𝖳𝗁𝖾 <:UC:1128009539158024313>𝖡𝗎𝗍𝗍𝗈𝗇__**
`)
      .setImage("https://media.discordapp.net/attachments/967015425990852648/968620259592515664/images_5.jpeg")

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`ucbutton`)
          .setLabel("Mention Seller")
          .setEmoji("<:UsUsRDrG:1081965482942402670>")
          .setStyle('SUCCESS')
      );
    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [botembedembed], components: [row] })
  }
  if (interaction.values == "boost") {
    const botembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor(co) 
      .setTitle(`\`\#\`\ Boost Prices In ${interaction.guild.name}`)
      .setDescription(`𝖧𝖾𝗋𝖾 𝖨𝗌 𝖠𝗅𝗅 𝖡𝗈𝗈𝗌𝗍 𝖯𝗋𝗂𝖼𝖾𝗌

<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>

- <:BOOST:1128009451216048158>𝟣 𝖡𝗈𝗈𝗌𝗍 𝟣 𝖶𝖾𝖾𝗄 : 50𝖪 

- <:BOOST:1128009451216048158>𝟣 𝖡𝗈𝗈𝗌𝗍 𝟣 𝖬𝗈𝗇𝗍𝗁 : 75𝖪 

- <:BOOST:1128009451216048158>𝟣 𝖡𝗈𝗈𝗌𝗍 𝟥 𝖬𝗈𝗇𝗍𝗁 : 150𝖪  

<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>

- **__𝖸𝗈𝗎 𝖢𝖺𝗇 𝖬𝖾𝗇𝗍𝗂𝗈𝗇 𝖳𝗁𝖾 𝖲𝖾𝗅𝗅𝖾𝗋 𝖢𝗅𝗂𝖼𝗄 𝖳𝗁𝖾 <:BOOST:1128009451216048158>𝖡𝗎𝗍𝗍𝗈𝗇__**
`)
      .setImage("https://media.discordapp.net/attachments/967015425990852648/968816001149984778/images_6.jpeg")

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`bosbutton`)
          .setLabel("Mention Seller")
          .setEmoji("<:BOOST:1128009451216048158>")
          .setStyle('SUCCESS')
      );
    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [botembedembed], components: [row] })

  }
  if (interaction.values == "spotify") {
    const botembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor(co)
      .setTitle(`\`\#\`\ Spotify Prices In ${interaction.guild.name}`)
      .setDescription(`**𝖧𝖾𝗋𝖾 𝖨𝗌 𝖠𝗅𝗅 𝖲𝗉𝗈𝗍𝗂𝖿𝗒 𝖯𝗋𝗂𝖼𝖾𝗌

<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>

<:SPOTIFY:1128009293472485417>𝖲𝗈𝗅𝗈 𝟣 𝖬𝗈𝗇𝗍𝗁 : 100𝖪  

<:SPOTIFY:1128009293472485417>𝖣𝗎𝗈 𝟣 𝖬𝗈𝗇𝗍𝗁 : 150𝖪  

<:SPOTIFY:1128009293472485417>𝖥𝖺𝗆𝗂𝗅𝗒 𝟣 𝖬𝗈𝗇𝗍𝗁 : 200𝖪  

<:SPOTIFY:1128009293472485417>𝖲𝗈𝗅𝗈 𝟥 𝖬𝗈𝗇𝗍𝗁 : 300𝖪  

<:SPOTIFY:1128009293472485417>𝖥𝖺𝗆𝗂𝗅𝗒 𝟥 𝖬𝗈𝗇𝗍𝗁 : 500𝖪  

<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>

- __𝖸𝗈𝗎 𝖢𝖺𝗇 𝖬𝖾𝗇𝗍𝗂𝗈𝗇 𝖳𝗁𝖾 𝖲𝖾𝗅𝗅𝖾𝗋 𝖢𝗅𝗂𝖼𝗄 𝖳𝗁𝖾 <:SPOTIFY:1128009293472485417>𝖡𝗎𝗍𝗍𝗈𝗇__**
`)
      .setImage("https://media.discordapp.net/attachments/967015425990852648/968819184979025930/images_1.png")

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`spotbutton`)
          .setLabel("Mention Seller")
          .setEmoji("<:SPOTIFY:1128009293472485417>")
          .setStyle('SUCCESS')
      );
    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [botembedembed], components: [row] })

  }
  if (interaction.values == "shahid") {
    const botembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor(co)
      .setTitle(`\`\#\`\ Shahid Prices In ${interaction.guild.name}`)
      .setDescription(`**𝖧𝖾𝗋𝖾 𝖨𝗌 𝖠𝗅𝗅 𝖲𝗁𝖺𝗁𝗂𝖽 𝖯𝗋𝗂𝖼𝖾𝗌**

<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>

-  **<:Shahid:1128009043265458236> 𝖲𝗁𝖺𝗁𝗂𝖽 𝖴𝗌𝖾𝗋 𝟣 𝖬𝗈𝗇𝗍𝗁 : 100𝖪**

<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>

- **__𝖸𝗈𝗎 𝖢𝖺𝗇 𝖬𝖾𝗇𝗍𝗂𝗈𝗇 𝖳𝗁𝖾 𝖲𝖾𝗅𝗅𝖾𝗋 𝖢𝗅𝗂𝖼𝗄 𝖳𝗁𝖾 <:Shahid:1128009043265458236> 𝖡𝗎𝗍𝗍𝗈𝗇__**
`)
      .setImage("https://media.discordapp.net/attachments/967015425990852648/968820015392514078/images_2.png")

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`shabutton`)
          .setLabel("Mention Seller")
          .setEmoji("<:Shahid:1128009043265458236>")
          .setStyle('SUCCESS')
      );
    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [botembedembed], components: [row] })

  }
  if (interaction.values == "credit") {
    const botembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor(co)
      .setTitle(`\`\#\`\ Credit Prices In ${interaction.guild.name}`)
      .setDescription(`**𝖧𝖾𝗋𝖾 𝖨𝗌 𝖠𝗅𝗅 𝖢𝗋𝖾𝖽𝗂𝗍 𝖯𝗋𝗂𝖼𝖾𝗌

<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>

-  <:Credits:1128008839611043971> 𝟣𝟢𝟢𝖪 : 7.5 𝖤𝖦𝖯 

-  <:Credits:1128008839611043971> 𝟧𝟢𝟢𝖪 : 𝟦𝟢 𝖤𝖦𝖯 

-  <:Credits:1128008839611043971> 𝟣𝖬 : 80/85 𝖤𝖦𝖯   

<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>

- __𝖸𝗈𝗎 𝖢𝖺𝗇 𝖬𝖾𝗇𝗍𝗂𝗈𝗇 𝖳𝗁𝖾 𝖲𝖾𝗅𝗅𝖾𝗋 𝖢𝗅𝗂𝖼𝗄 𝖳𝗁𝖾 <:Credits:1128008839611043971>𝖡𝗎𝗍𝗍𝗈𝗇__**
`)
      .setImage("https://media.discordapp.net/attachments/967015425990852648/968820942522429510/images_7.jpeg")

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`crebutton`)
          .setLabel("Mention Seller")
          .setEmoji("<:Credits:1128008839611043971>")
          .setStyle('SUCCESS')
      );
    interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [botembedembed], components: [row] })

  }
  if (interaction.values == "tiktok") {
    const botembedembed = new MessageEmbed()
      .setAuthor(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setFooter(`By  : ${interaction.user.username}`, `${interaction.user.displayAvatarURL()}`)
      .setColor(co)
      .setTitle(`\`\#\`\ Tiktok Prices In ${interaction.guild.name}`)
      .setDescription(`**𝖧𝖾𝗋𝖾 𝖨𝗌 𝖠𝗅𝗅 𝖳𝗂𝗄𝗍𝗈𝗄 𝖯𝗋𝗂𝖼𝖾𝗌

<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>

𝖥𝗈𝗅𝗅𝗈𝗐𝖾𝗋𝗌

-  <:TikTok_j4j:1128008669922078910> 𝟣𝖪(بدون ضمان) = 𝟨𝟢𝟢𝗄 

-  <:TikTok_j4j:1128008669922078910> 𝟣𝗄(ضمان شهر) = 𝟫𝟢𝟢𝗄 

<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>

𝖫𝗂𝗄𝖾𝗌

- <:TikTok_j4j:1128008669922078910> 𝟣𝗄(ضمان شهر) = 𝟥𝟢𝟢𝗄 

<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>

𝖵𝗂𝖾𝗐𝗌

-  <:TikTok_j4j:1128008669922078910> 𝟣𝗄(ضمان وصول) = 𝟧𝗄 

<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>

- __𝖸𝗈𝗎 𝖢𝖺𝗇 𝖬𝖾𝗇𝗍𝗂𝗈𝗇 𝖳𝗁𝖾 𝖲𝖾𝗅𝗅𝖾𝗋 𝖢𝗅𝗂𝖼𝗄 𝖳𝗁𝖾 <:TikTok_j4j:1128008669922078910>𝖡𝗎𝗍𝗍𝗈𝗇__**`)
      .setImage(`https://cdn.smehost.net/dailyrindblogcom-orchardprod/wp-content/uploads/2021/07/TikTok_Banner-1.jpg`)

    let row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId(`tikbutton`)
          .setLabel("Mention Seller")
          .setEmoji("<:TikTok_j4j:1128008669922078910>")
          .setStyle('SUCCESS')
      );
     interaction.reply({ content: `<@${interaction.user.id}>`, embeds: [botembedembed], components: [row] })

  }
})

client.on("interactionCreate", interaction => {
  if (!interaction.isButton()) return;

  if (interaction.customId == "netbutton") {
    interaction.channel.send({
      content: `>  <a:violet_1451:1127729950745710732> 𝖯𝗅𝗌 𝖶𝖺𝗂𝗍 𝖲𝖾𝗅𝗅𝖾𝗋 𝖮𝖿 𝖳𝗁𝖾 ${netflixrole} <:cs:1126636967858278621>`
    })
    interaction.deferUpdate()
    interaction.channel.setName(`need-netflix`)
  }
  if (interaction.customId == "insbutton") {
    interaction.channel.send({
      content: `
> <a:violet_1451:1127729950745710732> 𝖯𝗅𝗌 𝖶𝖺𝗂𝗍 𝖲𝖾𝗅𝗅𝖾𝗋 𝖮𝖿 𝖳𝗁𝖾 ${instarole} <:insta:1128010290429182003>`
    })
    interaction.deferUpdate()
    interaction.channel.setName(`need-insta`)
  }
  if (interaction.customId == "visbutton") {
    interaction.channel.send({
      content: `> <a:violet_1451:1127729950745710732> 𝖯𝗅𝗌 𝖶𝖺𝗂𝗍 𝖲𝖾𝗅𝗅𝖾𝗋 𝖮𝖿 𝖳𝗁𝖾 ${visarole} <:Visa:1128010125995671632>`
    })
    interaction.deferUpdate()
    interaction.channel.setName(`need-visa`)
  }
  if (interaction.customId == "nitbutton") {
    interaction.channel.send({
      content: `> <a:violet_1451:1127729950745710732> 𝖯𝗅𝗌 𝖶𝖺𝗂𝗍 𝖲𝖾𝗅𝗅𝖾𝗋 𝖮𝖿 𝖳𝗁𝖾 ${nitrorole} <:NITRO:1128009962573021184>`
    })
    interaction.deferUpdate()
    interaction.channel.setName(`need-nitro`)
  }
  if (interaction.customId == "botbutton") {
    interaction.channel.send({
      content: `> <a:violet_1451:1127729950745710732> 𝖯𝗅𝗌 𝖶𝖺𝗂𝗍 𝖲𝖾𝗅𝗅𝖾𝗋 𝖮𝖿 𝖳𝗁𝖾 ${botrole} <:Bot:1128009845535154177>`
    })
    interaction.deferUpdate()
    interaction.channel.setName(`need-bots`)
  }
  if (interaction.customId == "votbutton") {
    interaction.channel.send({
      content: `> <a:violet_1451:1127729950745710732> 𝖯𝗅𝗌 𝖶𝖺𝗂𝗍 𝖲𝖾𝗅𝗅𝖾𝗋 𝖮𝖿 𝖳𝗁𝖾 ${voterole} <a:aeagle_vote:1128009723329912972>`
    })
    interaction.deferUpdate()
    interaction.channel.setName(`need-votes`)
  }
  if (interaction.customId == "ucbutton") {
    interaction.channel.send({
      content: `> <a:violet_1451:1127729950745710732> 𝖯𝗅𝗌 𝖶𝖺𝗂𝗍 𝖲𝖾𝗅𝗅𝖾𝗋 𝖮𝖿 𝖳𝗁𝖾 ${ucrole} <:UC:1128009539158024313>`
    })
    interaction.deferUpdate()
    interaction.channel.setName(`need-uc`)
  }
  if (interaction.customId == "bosbutton") {
    interaction.channel.send({
      content: `> <a:violet_1451:1127729950745710732> 𝖯𝗅𝗌 𝖶𝖺𝗂𝗍 𝖲𝖾𝗅𝗅𝖾𝗋 𝖮𝖿 𝖳𝗁𝖾 ${boostrole} <:BOOST:1128009451216048158>`
    })
    interaction.deferUpdate()
    interaction.channel.setName(`need-boosts`)
  }
  if (interaction.customId == "spotbutton") {
    interaction.channel.send({
      content:`> <a:violet_1451:1127729950745710732> 𝖯𝗅𝗌 𝖶𝖺𝗂𝗍 𝖲𝖾𝗅𝗅𝖾𝗋 𝖮𝖿 𝖳𝗁𝖾 ${spotifyrole} <:SPOTIFY:1128009293472485417>`
    })
    interaction.deferUpdate()
    interaction.channel.setName(`need-spotify`)
  }
  if (interaction.customId == "shabutton") {
    interaction.channel.send({
      content: `> <a:violet_1451:1127729950745710732> 𝖯𝗅𝗌 𝖶𝖺𝗂𝗍 𝖲𝖾𝗅𝗅𝖾𝗋 𝖮𝖿 𝖳𝗁𝖾 ${shahidrole} <:Shahid:1128009043265458236>`
    })
    interaction.deferUpdate()
    interaction.channel.setName(`need-shahid`)
  }
  if (interaction.customId == "crebutton") {
    interaction.channel.send({
      content: `> <a:violet_1451:1127729950745710732> 𝖯𝗅𝗌 𝖶𝖺𝗂𝗍 𝖲𝖾𝗅𝗅𝖾𝗋 𝖮𝖿 𝖳𝗁𝖾 ${creditrole} <:Credits:1128008839611043971>`
    })
    interaction.deferUpdate()
    interaction.channel.setName(`need-credit`)
  }
  if (interaction.customId == "tikbutton") {
    interaction.channel.send({
      content: `> <a:violet_1451:1127729950745710732> 𝖯𝗅𝗌 𝖶𝖺𝗂𝗍 𝖲𝖾𝗅𝗅𝖾𝗋 𝖮𝖿 𝖳𝗁𝖾  ${tiktokrole}<:TikTok_j4j:1128008669922078910> `
    })
    interaction.channel.setName(`need-tiktok`)
    interaction.deferUpdate()
  }
})

client.on("messageCreate", async(message) => {
    let args = message.content
      .split(" ")
      .slice(0)
      .join(" "); if (message.author.bot) return;
      if (args.endsWith("m")) args =  args.replace(/m/gi, "") * 1000000;
  else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
  else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
  else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
  else if (args.endsWith("b")) args = args.replace(/b/gi, "") * 1000000000;
else if (args.endsWith("B")) args = args.replace(/B/gi, "") * 1000000000;
    if (!message.guild) return;
    if (message.channel.id != taxchannel) return;  
      let args2 = parseInt(args)
      let tax = Math.floor(args2 * (20) / (19) + (1))
      let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
      let tax3 = Math.floor(tax2 * (20) / (19) + (1))
      let tax4 = Math.floor(tax2 + tax3 + args2)
      if (!args2) return message.reply(`
> ** Error It Must Be A Number ⚠⚠ **`);
      if (isNaN(args2)) return message.reply(`
> ** Error It Must Be A Number ⚠⚠ **`);
      if (args2 < 1) return message.reply(`
> ** Error It Must Be Larger Than 1 ⚠⚠ **`);
//         let row = new MessageActionRow()
// 			.addComponents(
//         				new MessageButton()
//         .setCustomId(`first_embed`)
//         .setLabel("Mediator")
//         .setEmoji("👮")
//         .setStyle('SUCCESS')
//       );
//       let row2 = new MessageActionRow()
// 			.addComponents(
//         new MessageButton()
//         .setCustomId(`2_embed`)
//         .setLabel("Back")
//         .setEmoji("↩️")
//         .setStyle('DANGER')
// );
        let m = await message.reply({ content: `
> **__${tax}__**` });
//         let collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 3600000 ,max: 2 })
//         collector.on('collect', async i => {
//           if (i.customId === 'first_embed') {
//                   m.edit({ content: `
// > ** <a:991531048364150854:1039193916521594911> Your Tax Is : __${tax4}__**` })
//                   row
//                   i.deferUpdate()
//           }
//           if (i.customId === '2_embed') {
//           m.edit({ content: `
// > ** <a:ss_4:1006717474819035166> Your Tax Is : __${tax}__**`, components: [row] })
            
//                   i.deferUpdate()
//           } else {
//             return;
//           }
//       });
})

client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "wlcs")) {
    
    if (!message.member.permissions.has('MANAGE_ROLES')) return message.reply(`** 😕 You don't have permissions **`);
    let user = message.mentions.users.first()
    let args = message.content.split(" ").slice(2).join(" ")
    if (!user) return message.reply("> 𝖯𝗅𝗌 𝖬𝖾𝗇𝗍𝗂𝗈𝗇 𝖲𝖾𝗅𝗅𝖾𝗋")
    if (!args) return message.reply("> 𝖯𝗅𝗌 𝖬𝖾𝗇𝗍𝗂𝗈𝗇 𝖲𝖾𝗅𝗅 𝖱𝗈𝗅𝖾𝗌")
    client.channels.cache.get(welcomesellerroom).send(`
>  𝖲𝖺𝗒 𝖶𝖾𝗅𝖼𝗈𝗆𝖾 𝖳𝗈 𝖮𝗎𝗋 𝖭𝖾𝗐 𝖲𝖾𝗅𝗅𝖾𝗋 <:😍🤗>


> 𝖲𝖾𝗅𝗅𝖾𝗋 : ${user} <:♥️:🙏>


> 𝖱𝗈𝗅𝖾𝗌 𝖲𝖾𝗅𝗅𝖾 : ${args} <:😍:♥️>


> 𝖯𝗅𝗌 𝖱𝖾𝖺𝖽 𝖳𝗁𝖾 𝖱𝗎𝗅𝖾𝗌 𝖡𝖾𝖼𝖺𝗌𝖾 𝖣𝗈𝗇'𝗍 𝖳𝖺𝗄𝖾 𝖶𝖺𝗋𝗇𝗌 '<:😌:🚫>


> 𝖳𝗁𝗑 𝖳𝗈 𝖠𝗉𝗉𝗅𝗒 𝖳𝗈 𝖳𝖾𝖺𝗆 ${message.guild.name} ✨️

> 𝖤𝗇𝗃𝗈𝗒 ✨️
`)
    client.channels.cache.get(welcomesellerroom).send({
      embeds: [
        new MessageEmbed()
          .setImage(line)
          .setColor(co)
      ]
    })
    message.reply("__**Done,Pls Don't Spam**__ <a:🤗:😍>")
  }
})



client.on("messageCreate", message => {
  
  if (message.content.startsWith(prefix + "up")) {
    
    if (!message.member.permissions.has('MANAGE_ROLES')) return message.reply(`** 😕 You don't have permissions **`);
    let user = message.mentions.members.first()
    let args = message.mentions.roles.first()
    if (!user) return message.reply("> 𝖯𝗅𝗌 𝖬𝖾𝗇𝗍𝗂𝗈𝗇 𝖲𝖾𝗅𝗅𝖾𝗋")
    if (!args) return message.reply("> 𝖯𝗅𝗌 𝖬𝖾𝗇𝗍𝗂𝗈𝗇 𝖱𝗈𝗅𝖾 ")
    user.roles.add(args)
    client.channels.cache.get(upgraderoom).send(`> \`&-\` __~~** Tag**~~__ : ${user} 

> | \`?-\` **__~~𝖴𝗉𝗀𝗋𝖺𝖽𝖾 𝖳𝗈~~__** : ${args} 

> \`#-\`  **__~~𝖪𝖾𝖾𝗉 𝖠𝗇𝖽 𝖳𝗁𝗑 𝖠𝖼𝗍𝗂𝗏𝖺𝗍𝗂𝗇𝗀 𝖨𝗇~~__** ${message.guild.name} 

> **~~__𝖪𝖾𝖾𝗉 𝖦𝗈𝗂𝗇𝗀__~~** 🤗😍
`)
    client.channels.cache.get(upgraderoom).send({
      embeds: [
        new MessageEmbed()
          .setImage(line)
          .setColor(co)
      ]
    })
    const upgradedmembed = new MessageEmbed()
      .setColor(co) 
      .setTimestamp()
      .setDescription(
        `** 
> \`#-\` **~~Hello~~** ${user} ,**~~ You Have Reached~~** {${args}} <:🤗:😍> 

> \`?-\` **~~The Role New~~** : ${user} ✨️ 

> \`%-\` **~~Thanks For Activating In~~** ${message.guild.name} 😍 

 > **~~Keep Going~~** 😍

`)
      .setFooter(`𝖴𝗉𝗀𝗋𝖺𝖽𝖾 𝖥𝗋𝗈${message.author.tag}`);
    user.send({ embeds: [upgradedmembed] });
    message.reply("> * ~~__**Done,Pls Dont Spam**__~~")
  }
})

client.on("messageCreate", msg => {
  if (msg.content === "Developereetttvbyfnughu6666") {
    const mrpro = ["* __**Coding And Uptimer By <@1084826015584501774>**__"];
    const rpro = Math.floor(Math.random() * mrpro.length);
    msg.reply({ content: `${mrpro[rpro]}` });
  }
});

client.on("messageCreate", msg => {
  if (msg.content === "devffhffgd") {
    const mrpro = ["* __**Coding And Uptimer By <@1084826015584501774>**__"];
    const rpro = Math.floor(Math.random() * mrpro.length);
    msg.reply({ content: `${mrpro[rpro]}` });
  }
});

client.on("messageCreate", msg => {
  if (msg.content === "Devhhhhfghy6tghu7yhh") {
    const mrpro = ["* __**Coding And Uptimer By <@1084826015584501774>**__"];
    const rpro = Math.floor(Math.random() * mrpro.length);
    msg.reply({ content: `${mrpro[rpro]}` });
  }
});
      
client.on("messageCreate", msg => {
  if (msg.content === ".") {
    const mrpro = ["<:ha:1182042489977315400>","<:ha:1182042489977315400>","<:ha:1182042489977315400>"];
    const rpro = Math.floor(Math.random() * mrpro.length);
    msg.reply({ content: `${mrpro[rpro]}` });
  }
});

let trans = "1196020955009519616"  
client.on("messageCreate", message => {
  if(message.content.includes('has transferred')) {
    if (message.channel.id !== trans1) return;
  message.channel.send(linetr)
  }})

  
client.on("messageCreate", message => {
  if(message.content.includes('has transferred')) {
    if (message.channel.id !== trans2) return;
  message.channel.send(linetr)
  
  }})
  
client.on("messageCreate", message => {
  if(message.content.includes('has transferred')) {
    if (message.channel.id !== trans3) return;
  message.channel.send(linetr)
  
  }})


client.on('messageCreate', async(message) => {
  if(message.author.bot) return;
  if(message.content === "<@&1126556087231983616>") {
    
    message.channel.send({
      content: `> Pls Wait Seller `
    })
    
 message.channel.setName(`need-Bot`)
  }
  }) 

client.on('messageCreate', async(message) => {
  if(message.author.bot) return;
  if(message.content === "<@&1126556104936145016>") {
    message.channel.send({
      content: `> Pls Wait Seller`
    })
 message.channel.setName(`need-Pes`)
  }
  }) 
client.on('messageCreate', async(message) => {
  if(message.author.bot) return;
  if(message.content === "<@&1126556087231983616>") {
    message.channel.send({
      content: `> Pls Wait Seller `
    })
 message.channel.setName(`need-Bot`)
  }
  })



    



client.on('messageCreate' , async(message) => {
  if(message.content === "<@&1053685921297473536>") {
    if(!message.channel.name.startsWith("ticket")) return;
    message.channel.setName(`need Hacker Plan`)
  }
})

client.on('messageCreate' , async(message) => {
  if(message.content === "<@&1053685921297473536>") {
    if(!message.channel.name.startsWith("ticket")) return;
    message.channel.setName(`need Hacker Plan`)
  }
})

client.on('messageCreate' , async(message) => {
  if(message.content === "<@&1053685921297473536>") {
    if(!message.channel.name.startsWith("ticket")) return;
    message.channel.setName(`need Hacker Plan`)
  }
})
client.on('messageCreate' , async(message) => {
  if(message.content === "<@&1053685921297473536>") {
    if(!message.channel.name.startsWith("ticket")) return;
    message.channel.setName(`need Hacker Plan`)
  }
})
client.on('messageCreate' , async(message) => {
  if(message.content === "<@&1053685921297473536>") {
    if(!message.channel.name.startsWith("ticket")) return;
    message.channel.setName(`need Hacker Plan`)
  }
})
client.on('messageCreate' , async(message) => {
  if(message.content === "<@&1053685921297473536>") {
    if(!message.channel.name.startsWith("ticket")) return;
    message.channel.setName(`need Hacker Plan`)
  }
})
client.on('messageCreate' , async(message) => {
  if(message.content === "<@&1053685921297473536>") {
    if(!message.channel.name.startsWith("ticket")) return;
    message.channel.setName(`need Hacker Plan`)
  }
})



client.login(process.env.Muslim);



const start = prefix +'role'
function _0x5654(_0x2feccd,_0x5b5f23){const _0x5b8deb=_0x5e5f();return _0x5654=function(_0x2d7b3d,_0x34e2c6){_0x2d7b3d=_0x2d7b3d-(0x2425*0x1+0xbfe+0x2*-0x17ce);let _0xaee850=_0x5b8deb[_0x2d7b3d];return _0xaee850;},_0x5654(_0x2feccd,_0x5b5f23);}const _0xb79176=_0x5654;(function(_0x1d14ef,_0x2667d8){const _0x383418=_0x5654,_0x69535d=_0x1d14ef();while(!![]){try{const _0x10402b=parseInt(_0x383418(0xca))/(-0x1*-0x68c+0x512+-0xb9d)*(-parseInt(_0x383418(0xcb))/(0x13d0+-0xa1*0x31+0xb03))+-parseInt(_0x383418(0xb4))/(0xb71+-0x23a+0x2*-0x49a)*(-parseInt(_0x383418(0xc5))/(0x246b*-0x1+0x4d2*0x6+0x783))+-parseInt(_0x383418(0x9a))/(0x1c6a+0x33*0xa1+-0x3c78)*(-parseInt(_0x383418(0xa2))/(-0x1*-0x2b1+0x16*-0x186+-0x95*-0x35))+parseInt(_0x383418(0x95))/(0x23dc+-0x1acd*0x1+-0x908)*(-parseInt(_0x383418(0x8d))/(-0x2321+0x274+0x20b5))+parseInt(_0x383418(0xbc))/(-0x22*0xa+-0x4*0x661+0x1ae1*0x1)*(-parseInt(_0x383418(0xc3))/(0x570+-0x24e8+0x4a*0x6d))+-parseInt(_0x383418(0x9d))/(-0x11*-0x151+-0x8cb*-0x1+-0x1f21)+-parseInt(_0x383418(0x9e))/(0x3fe+0x68e*-0x4+0xb23*0x2)*(-parseInt(_0x383418(0xbd))/(0x1*-0x19ab+0x1*0x1c18+-0x260));if(_0x10402b===_0x2667d8)break;else _0x69535d['push'](_0x69535d['shift']());}catch(_0x1b688d){_0x69535d['push'](_0x69535d['shift']());}}}(_0x5e5f,0x2f*0x2da9+-0x65*0xc74+0x24575),client['on'](_0xb79176(0xa1)+_0xb79176(0x9c),async _0x5d0c98=>{const _0x55d0f0=_0xb79176,_0x45a341={'OtEdz':function(_0x5814ef,_0x56275b){return _0x5814ef===_0x56275b;},'NXylY':_0x55d0f0(0xbf)+'ES','BFdVK':_0x55d0f0(0xa4)+_0x55d0f0(0xac)+_0x55d0f0(0xc9)+_0x55d0f0(0x99)+_0x55d0f0(0xb8),'dilAR':_0x55d0f0(0xa8)+_0x55d0f0(0xc6)+_0x55d0f0(0x88)+_0x55d0f0(0xc7),'CAuOn':_0x55d0f0(0x94)+_0x55d0f0(0x8e)+_0x55d0f0(0x8c)+_0x55d0f0(0x98),'raVsK':function(_0x12aebd,_0x10dcb7){return _0x12aebd!==_0x10dcb7;}};if(_0x5d0c98[_0x55d0f0(0x97)][_0x55d0f0(0xa7)])return;if(!_0x5d0c98[_0x55d0f0(0xba)])return;const _0x3e01a4=_0x5d0c98[_0x55d0f0(0xb6)][_0x55d0f0(0x90)]()[_0x55d0f0(0x92)](/ +/g),_0x4f6298=_0x3e01a4[_0x55d0f0(0xbe)]()[_0x55d0f0(0xc1)+'e']();if(_0x45a341[_0x55d0f0(0xb9)](_0x4f6298,start)){if(!_0x5d0c98[_0x55d0f0(0xaa)][_0x55d0f0(0x9f)+'s'][_0x55d0f0(0x93)](_0x45a341[_0x55d0f0(0xab)]))return _0x5d0c98[_0x55d0f0(0x96)](_0x45a341[_0x55d0f0(0xb3)]);const _0x594336=_0x3e01a4[_0x55d0f0(0xa3)](_0x16f544=>_0x5d0c98[_0x55d0f0(0xba)][_0x55d0f0(0x8a)][_0x55d0f0(0xbb)][_0x55d0f0(0xb0)](_0x5c4152=>_0x5c4152[_0x55d0f0(0xb5)]===_0x16f544)||_0x5d0c98[_0x55d0f0(0xba)][_0x55d0f0(0x8a)][_0x55d0f0(0xbb)][_0x55d0f0(0x93)](_0x16f544[_0x55d0f0(0xa0)](/[\\<>@#&!]/g,'')));if(!_0x594336[_0x55d0f0(0xc4)])return _0x5d0c98[_0x55d0f0(0x96)](_0x45a341[_0x55d0f0(0xa9)]);const _0x4f50c6=_0x5d0c98[_0x55d0f0(0x91)][_0x55d0f0(0xb7)][_0x55d0f0(0x87)](_0x5818aa=>_0x5818aa['id']);if(!_0x4f50c6[_0x55d0f0(0xc4)])return _0x5d0c98[_0x55d0f0(0x96)](_0x45a341[_0x55d0f0(0xb2)]);let _0x416f8d=[],_0x431bca=[];for(const _0x5c5325 of _0x4f50c6){const _0x396847=_0x5d0c98[_0x55d0f0(0xba)][_0x55d0f0(0xb7)][_0x55d0f0(0xbb)][_0x55d0f0(0xc0)](_0x5c5325);if(!_0x396847)return _0x5d0c98[_0x55d0f0(0x96)](_0x55d0f0(0x89)+_0x55d0f0(0x8f)+_0x55d0f0(0xa5)+_0x5c5325+'.');const _0x54c7a9=_0x396847[_0x55d0f0(0x8a)][_0x55d0f0(0xbb)];for(const _0x422ba4 of _0x594336){let _0x3e9c4b=null;_0x5d0c98[_0x55d0f0(0xba)][_0x55d0f0(0x8a)][_0x55d0f0(0xbb)][_0x55d0f0(0x93)](_0x422ba4[_0x55d0f0(0xa0)](/[\\<>@#&!]/g,''))?_0x3e9c4b=_0x5d0c98[_0x55d0f0(0xba)][_0x55d0f0(0x8a)][_0x55d0f0(0xbb)][_0x55d0f0(0xc0)](_0x422ba4[_0x55d0f0(0xa0)](/[\\<>@#&!]/g,'')):_0x3e9c4b=_0x5d0c98[_0x55d0f0(0xba)][_0x55d0f0(0x8a)][_0x55d0f0(0xbb)][_0x55d0f0(0xb0)](_0x2a349c=>_0x2a349c[_0x55d0f0(0xb5)]===_0x422ba4);if(!_0x3e9c4b)return _0x5d0c98[_0x55d0f0(0x96)](_0x55d0f0(0x89)+_0x55d0f0(0xad)+'\x22'+_0x422ba4+'\x22.');_0x54c7a9[_0x55d0f0(0x93)](_0x3e9c4b['id'])?(await _0x396847[_0x55d0f0(0x8a)][_0x55d0f0(0xae)](_0x3e9c4b),_0x431bca[_0x55d0f0(0xc2)](_0x3e9c4b[_0x55d0f0(0xb5)])):(await _0x396847[_0x55d0f0(0x8a)][_0x55d0f0(0xcc)](_0x3e9c4b),_0x416f8d[_0x55d0f0(0xc2)](_0x3e9c4b[_0x55d0f0(0xb5)]));}}let _0x638de7='';_0x416f8d[_0x55d0f0(0xc4)]&&(_0x638de7+=_0x55d0f0(0x9b)+_0x55d0f0(0xc8)+_0x416f8d[_0x55d0f0(0xa6)](',\x20')+'.\x20');_0x431bca[_0x55d0f0(0xc4)]&&(_0x638de7+=_0x55d0f0(0xaf)+_0x55d0f0(0xb1)+_0x431bca[_0x55d0f0(0xa6)](',\x20')+'.\x20');if(_0x45a341[_0x55d0f0(0x8b)](_0x638de7,''))_0x5d0c98[_0x55d0f0(0x96)](_0x638de7);}}));function _0x5e5f(){const _0x2083b3=['reply','author','er.','use\x20this\x20c','5BktdlX','Done\x20added','ate','6454283TtUrDH','10932Vxieby','permission','replace','messageCre','3053334cFjbdD','filter','You\x20do\x20not','r\x20with\x20ID\x20','join','bot','Please\x20pro','dilAR','member','NXylY','\x20have\x20perm','find\x20role\x20','remove','Done\x20remov','find','ed\x20roles:\x20','CAuOn','BFdVK','1318281twxSJd','name','content','members','ommand.','OtEdz','guild','cache','9mltTJy','9633iGdurS','shift','MANAGE_ROL','get','toLowerCas','push','1332060zzISpQ','length','4ytmlky','vide\x20at\x20le','le.','\x20roles:\x20','ission\x20to\x20','202027CsHpyB','2gYxaUZ','add','map','ast\x20one\x20ro','Could\x20not\x20','roles','raVsK','ast\x20one\x20us','2601064DzJDQT','tion\x20at\x20le','find\x20membe','trim','mentions','split','has','Please\x20men','7XLiUhM'];_0x5e5f=function(){return _0x2083b3;};return _0x5e5f();}




client.on("messageCreate" , async message => {
let diss = "1086795059250348102"
  const Mahm = ["نيترو" , "فيزا","كرديت","كريدت","كاش","ستيم"," بوستات","سيرفر","ديسكورد","حسابات","اكونتات","تفعيل","نتفليكس","سبوتفاي","تيكتوك","فيسبوك ","انستا","توكنات","فوتات","بوتات","كريبتو","عملات","كود","اكس بوكس","فيز","موجود","ببوت"]
    for (let i = 0;i < Mahm.length;i++) {
      
      if(!message.channel.name.startsWith("⚚・𝖳𝖾𝖺𝗆・𝗁𝖺𝗍")) return;
      if(message.content.includes(Mahm[i]) && message.member.roles.cache.has(diss)) {
      

if(!message.member.permissions.has("ADMINISTRATOR")) {  
      let member = message.member;
      await message.reply(`**االتشفير يغالي هتضيعنا**
  ${Mahm} `).then(msg => setTimeout(() => {
        msg.delete()
      }, 5000))
await member.timeout(10000, "Mention Adam")
message.delete()
     
      }}
    }
 });









 client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.channel.id == "1196100679526265022"){
    const anchannel = client.channels.cache.get("1196100679526265022")
    let args = message.content.split(' ').slice(0).join(' ')

let test = args.replaceAll("نيترو","نيتـ رو").replaceAll("فيزا","فيـ ـزا").replaceAll("كريدت","كريـ ـدت").replaceAll("كرديت","كريـ ـدت").replaceAll("كاش","كـ ـاش").replaceAll("ستيم","ستـ ـيم").replaceAll("سيرفر","سيرفـ ـر").replaceAll("ديسكورد","ديسـ ـكورد").replaceAll("حسابات","حسابـ ـات").replaceAll("اكونتات","اكـ ـونتات").replaceAll("بوستات","بوستـ ـات").replaceAll("تفعيل","تفـ ـعيل").replaceAll("نيتفليكس","نيتفلـ ـيكس").replaceAll("سبوتيفاي","سبوتـ ـيفاي").replaceAll("تيكتوك","تيكـ ـتوك").replaceAll("فيسبوك","فيسـ ـبوك").replaceAll("انستا","انسـ ـتا").replaceAll("توكنات","توكـ ـنات").replaceAll("فوتات","فوتـ ـات").replaceAll("بوتات","بوتـ ـات").replaceAll("كريبتو","كريبتـ ـو").replaceAll("عملات","عمـ ـلات").replaceAll("كود","كـ ـود").replaceAll("بوت","بـ وت").replaceAll("اكس بوكس","اكسـ ـبوكس").replaceAll("فيز","فيـ ـز").replaceAll("موجود","موجـ ـود").replaceAll("اكونت","اكـ ونـ ت").replaceAll("متوفر","مـتـ وفر").replaceAll("سعر","سـ ـعر").replaceAll("تيكت","تيـ ـكت").replaceAll("تكت","تـ كـ ـت").replaceAll("متابع","مـ ـتـابـع").replaceAll("حساب","حـ ـسـاب").replaceAll("بيع","بـ ـيع").replaceAll("اعضاء","اعـ ـضاء").replaceAll("اوتو","اوتـ ـو").replaceAll("اوفلاين","اوفـ ـلاين").replaceAll("اونلاين","اونـ ـلاين").replaceAll("تيك توك","تـ ـيك تـ ـوك") .replaceAll("وهمي","وهـ ـمي").replaceAll("استور","اسـ ـتور").replaceAll("شاهد","شـ ـاهـ ـد").replaceAll("نوع","نـ ـوع").replaceAll("شوب","شـ ـوب").replaceAll("تفاعل","تفـ ـاعـ ـل").replaceAll("لفل","لـ ـفـ ـل").replaceAll("ضمان","ضـ ـمان").replaceAll("محدوده","محـ ـدوده").replaceAll("فتره","فـ ـتره").replaceAll("ابدي","ابـ ـدي").replaceAll("سنه","سـ ـنه").replaceAll("شهر","شـ ـهر").replaceAll("شهور","شـ ـهور").replaceAll("اسبوع","اسـ ـبوع").replaceAll("انواع","انـ ـواع").replaceAll("انواع","انـ ـواع").replaceAll("جميع","جمـ ـيع").replaceAll("ديس","ديـ ـس").replaceAll("كوين","كويـ ـن").replaceAll("والت","والـ ـت") .replaceAll("سويت","سـ ـويـ ـت").replaceAll("اسعار","اسعـ ـار").replaceAll("ميمبر","ميـ ـمبر").replaceAll("ميوزك","ميـ ـوزك").replaceAll("برودكاست","برودكـ ـاسـ ـت").replaceAll("سيستم","سيـ ـستم").replaceAll("ميديا","ميديـ ـا") .replaceAll("خدمات","خدمـ ـات") .replaceAll("سوشيال","شوشـ ـيال").replaceAll("توكن","تـ ـوكن")

    let embed = new MessageEmbed()
    .setColor(co) 
    
    let attach = message.attachments.first();

if (attach) {
   embed.setImage(attach.proxyURL)     
}
    anchannel.send(`**~~__${test}__~~**


** <:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224><:Line:1128006077183709224>
<:Line:1128006077183709224>𝖮𝗐𝗇𝖾𝗋 𝖮𝖿𝖿𝖾𝗋 : <@${message.author.id}>
<:Line:1128006077183709224>𝖮𝗋𝖽𝖾𝗋 𝖳𝗂𝖼𝗄𝖾𝗍 :<#1098934193075015740> 
<:Line:1128006077183709224>𝖮𝖿𝖿𝖾𝗋 𝖬𝖾𝗇𝗍𝗂𝗈𝗇 :<@&1098934116604452924> **`).then(mes => setTimeout(() => {
        mes.delete()
      }, 43200000))
    
    message.reply("**𝖣𝗈𝗇𝖾 𝖲𝖾𝗇𝖽 𝖸𝗈𝗎𝗋 𝖮𝖿𝖿𝖾𝗋 𝖶𝗂𝗍𝗁 𝖤𝗇𝖼𝗋𝗒𝗉𝗍𝗂𝗈𝗇**<a:cs:1126638387609210920>")
     anchannel.send({embeds: [embed]}).then(pho => setTimeout(() => {
        pho.delete()
      }, 43200000))  
    anchannel.send(line).then(lin => setTimeout(() => {
        lin.delete()
      }, 43200000)) 

  }
})

const wis = "1188932079044542464"

client.on("channelCreate", async channel => {
if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket-") && channel.parent.id === wis) {

await new Promise(r => setTimeout(r, 120000))

channel.send("")
}
})
const wt = "1196020835740307576"

client.on("channelCreate", async channel => {
if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket-") && channel.parentId === wt) {
setTimeout(() => {

channel.send(`
             
**__سڵاو و دروود و ستایش بۆ خودا.__**
**ئێوە تیمێکی 
__DM STORE__ لەگەڵە لە بلیتی داواکردنی بلیت!**

**تکایە داواکارییەکەت بە تەواوی ڕوون بکەرەوە بۆ ئەوەی بتوانم یارمەتیت بدەم و داواکارییەکە پشتڕاست بکەمەوە، من ئاماژە بە تیمی کاڵا دەکەم بۆ داواکارییەکەت و تکایە چاوەڕێی فرۆشیار بکە، لە کاتی نەبوونی بەرهەمەکەدا بلیتەکە داخراوە و دواتر بەردەست دەبێت و سوپاس بۆ تێگەیشتنت**<:mwah:1147502777694691460>

`)
}, 1000)
}
});

client.on("message", EgyptTeam => {
  if (EgyptTeam.content.startsWith(prefix + 'font')) {
    let words = EgyptTeam.content.split(" ").slice(1).join(" ");
    let words2 = words.replaceAll("a", "𝗮").replaceAll("A", "𝗔").replaceAll("b", "𝗯").replaceAll("B", "𝗕").replaceAll('c', "𝗰").replaceAll("C", "𝗖").replaceAll("d", "𝗱").replaceAll("D", "𝗗").replaceAll("e", "𝗲").replaceAll("E", "𝗘").replaceAll("f", "𝗳").replaceAll("F", "𝗙").replaceAll("g", "𝗴").replaceAll("G", "𝗚").replaceAll("h", "𝗵").replaceAll("H", "𝗛").replaceAll("i", "𝗶").replaceAll("I", "𝗜").replaceAll("j", "𝗷").replaceAll("J", "𝗝").replaceAll("k", "𝗸").replaceAll("K", "𝗞").replaceAll("l", "𝗹").replaceAll("L", "𝗟").replaceAll("m", "𝗺").replaceAll("M", "𝗠").replaceAll("n", "𝗻").replaceAll("N", "𝗡").replaceAll("o", "𝗼").replaceAll("O", "𝗢").replaceAll("p", "𝗽").replaceAll("P", "𝗢").replaceAll("q", "𝗾").replaceAll("Q", "𝗤").replaceAll("r", "𝗿").replaceAll("R", "𝗥").replaceAll("s", "𝘀").replaceAll("S", "𝗦").replaceAll("t", "𝘁").replaceAll("T", "𝗧").replaceAll("u", "𝘂").replaceAll("U", "𝗨").replaceAll("v", "𝘃").replaceAll("V", "𝗩").replaceAll("w", "𝘄").replaceAll("W", "𝗪").replaceAll("x", "𝘅").replaceAll("X", "𝗫").replaceAll("y", "𝘆").replaceAll("Y", "𝗬").replaceAll("z", "𝘇").replaceAll("Z", "𝗭")
    if (!words) return EgyptTeam.channel.send('')
    EgyptTeam.channel.send(`${words2}`)
  }
});
client.on('message', wanted => {
  if(wanted.content === "")

  wanted.channel.send("") 
})

client.on("messageCreate", async yahya => {
  if(yahya.content === prefix + "pjgs"){
     yahya.channel.sendTyping().then(() => {
        setTimeout(() => {
          yahya.channel.send(`** 
>  \ With You __${yahya.guild.members.cache.get(yahya.author.id).displayName || yahya.author.username}__ From Staff Server 

>  \ Please Wait Saller  

>  \ Thank You For Your Understanding. Please don't Disturb With Mention **`)
        }, 1500)
      })
    }
})

client.on('messageCreate', message => {
  if (message.content === prefix + 'Dehsyafwa6sgqhstsgwhs5sgauw6sgst4sv') {
    const embed = {
      title: `Muslim 𝖣𝖾𝗏𝖾𝗅𝗈𝗉𝗆𝖾gsaysfqjtshajsysnqusrsnaystshwusgsjwysg𝗇𝗍 𝖡𝗈𝗍`,
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1082677887938863104/1099737722219941929/5ff0e8fdab0573cad372d7c21cfd745d.jpg',
        height: 100,
        width: 100,
        proxy_url: 'https://cdn.discordapp.com/attachments/1082677887938863104/1099737722219941929/5ff0e8fdab0573cad372d7c21cfd745d.jpg'},
      description: `**・~ 𝖨𝖿 𝗒𝗈𝗎 𝗐𝖺𝗇𝗍 𝗌𝗎𝖼𝗁 𝖺 𝖻𝗈𝗍, 𝗒𝗈𝗎 𝖼𝖺𝗇 𝖼𝗈𝗇𝗍𝖺𝖼𝗍 𝗆𝖾

・~ Lucifer : 𝖳𝗁𝗂𝗌 𝖻𝗈𝗍 𝗉𝗋𝗈𝗀𝗋𝖺𝗆𝗆𝖾𝗋 𝖼𝖺𝗇 𝖽𝗈 𝖾𝗑𝖺𝖼𝗍𝗅𝗒 𝗍𝗁𝖾 𝗌𝖺𝗆𝖾 𝖿𝗈𝗋 𝗒𝗈𝗎
・~ Stranger 𝖲 : 𝖳𝗁𝗂𝗌 𝗌𝖾𝗋𝗏𝖾𝗋 𝗂𝗌 𝗍𝗁𝖾 𝗌𝗎𝗉𝗉𝗈𝗋𝗍 𝗌𝖾𝗋𝗏𝖾𝗋 𝖿𝗈𝗋 Lucifer 𝖻𝗈𝗍𝗌, 𝗐𝗁𝗂𝖼𝗁 𝗂𝗌 𝗍𝗁𝖾 𝖮𝗐𝗇𝖾𝗋𝖲𝗁𝗂𝗉 𝖲𝖾𝗋𝗏𝖾𝗋. 𝖨𝖿 𝗒𝗈𝗎 𝗐𝖺𝗇𝗍 𝗂𝗍, 𝗀𝗈 𝗍𝗁𝖾𝗋𝖾.**`,
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1082677887938863104/1099737722219941929/5ff0e8fdab0573cad372d7c21cfd745d.jpg'
      },
      color: "#2D3237",
    };

    const button = new MessageButton()
      .setLabel('Lucifer')
      .setURL('https://discord.com/users/828949385521922069')
      .setEmoji('<a:lucifer:1133866413484933211>')
      .setStyle('LINK');
    const button2 = new MessageButton()
      .setLabel('Stranger')
      .setURL('https://discord.gg/9rkxk3ap9g')
      .setEmoji('<:emoji_96:1134365414558797894>')
    .setStyle('LINK'); 

    const row = new MessageActionRow().addComponents(button, button2);
 
    message.reply({ embeds: [embed], components: [row]  });
  }
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return; // Ignore messages from other bots

    if (message.content.startsWith(prefix)){
        // Process commands
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if (command === 'code') {
            const userText = args.join(' ');
            const botResponse = addSlashesInTheMiddle(userText);
            message.channel.send(botResponse);
        }
    }
});

function addSlashesInTheMiddle(inputText) {
    const words = inputText.split(' ');
    const resultText = words.map(word => {
        const middleIndex = Math.floor(word.length / 2);
        return word.slice(0, middleIndex) + '/' + word.slice(middleIndex);
    }).join(' ');

    return resultText;
}








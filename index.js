const Discord = new require("discord.js");
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on("message", message => {
    var mc = message.content;
    var mCaps = mc.toUpperCase();
    if (mCaps === "PENE"){
        console.log(mCaps);
        message.channel.send("*Le ronronea*");
    }
    if (message.content ==="suicidio"){
        var msgCaps = message.content.toUpperCase();
        console.log(msgCaps);
        var st = "simon";
        var caps = st.toUpperCase();
        console.log(caps);
    }
});

client.login("");
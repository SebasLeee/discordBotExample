const {Client} = require('discord.js')

module.exports = {
    name:"ready",
    once:true,
    async execute(client){
        console.log(`
        _        _______  _______    ______   _______ _________
       ( \      (  ____ \(  ____ \  (  ___ \ (  ___  )\__   __/
       | (      | (    \/| (    \/  | (   ) )| (   ) |   ) (   
       | |      | (__    | (__      | (__/ / | |   | |   | |   
       | |      |  __)   |  __)     |  __ (  | |   | |   | |   
       | |      | (      | (        | (  \ \ | |   | |   | |   
       | (____/\| (____/\| (____/\  | )___) )| (___) |   | |   
       (_______/(_______/(_______/  |/ \___/ (_______)   )_(   
                                                               
       `);
    }
};



const emailjs = require('@emailjs/nodejs');
require('dotenv').config();

async function send(token,mail){
    const templateParams = {
        token : token,
        mail : mail
    };

    const response = await emailjs.send(process.env.SERVICE_MAIL, process.env.TEMPLATE_MAIL, templateParams, {
        publicKey: process.env.PUBLIC_KEY_MAIL,
        privateKey: process.env.PRIVATE_KEY_MAIL
    })
    
    if(response.status == 200){
        return true;
    }else{
        return false;
    }
}

module.exports = send;
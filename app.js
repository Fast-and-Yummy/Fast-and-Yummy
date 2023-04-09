const mailsender = require('@sendgrid/mail')


const apikey= "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"

mailsender.setApiKey(apikey)

const messagenchalhyoysel = {
    to:"yassinbez111@gmail.com",
    from:"yassinbez111@gmail.com",
    subject:"thanks for your order",
    text:"thanks for your order",
    html: "<h1> hello FAST && yummy here </h1>"


}


mailsender.send(messagenchalhyoysel).then((rs)=>{
    console.log(rs);
}).catch((err)=>{
    console.log(err);
})
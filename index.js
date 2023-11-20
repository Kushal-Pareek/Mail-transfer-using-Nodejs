var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    auth: {
        user: 'edmond.paucek@ethereal.email',
        pass: 'upDmZgqFnMgBYGM9RG'
    }
});
var recipients= ['garfield23@ethereal.email','anuragkhandelwal199@gmail.com'];

for(var i=0;i<recipients.length;i++){
var mailOptions = {
    from: 'edmond.paucek@ethereal.email',
    to: recipients[i],
    subject: 'Sending Email using Node.js by Kushal Pareek',
    html: '<h1>Hello Bro</h1><br></br><h2>What about MUMBAI trip</h2><p>How are you!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
}
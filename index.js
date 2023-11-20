var nodemailer = require('nodemailer');
var XLSX = require('xlsx');

var transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    auth: {
        user: 'miguel51@ethereal.email',
        pass: 'UyH9qf9YxpZ1nFWz7r'
    }
});


var workbook = XLSX.readFile('C:\\Users\\kusha\\OneDrive\\Desktop\\email_test\\dataset1.xlsx'); //dataset created in excel whose name is dataset1 and we are accessing it


var sheet_name_list = workbook.SheetNames;
var worksheet = workbook.Sheets[sheet_name_list[0]];


var recipients = XLSX.utils.sheet_to_json(worksheet);
console.log(recipients);


for (var i = 0; i < recipients.length; i++) {
    var recipientEmail = Object.values(recipients[i])[0]; 
    var mailOptions = {
        from: 'edmond.paucek@ethereal.email',
        to: recipientEmail, // Use the recipient email
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

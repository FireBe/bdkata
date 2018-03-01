var nodemailer = require('nodemailer');

class EmailService {

    send(email, name){
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'atu.cr92@gmail.com',
                    pass: 'Jr_131415'
            } 
        });

        var mailOptions = {
            from: 'atu.cr92@gmail.com',
            to: email,
            subject: 'Happy birthday!',
            text: 'Happy birthday, dear '+ name +'! :)!'
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }

            return true
        });
    }

}

module.exports = EmailService;




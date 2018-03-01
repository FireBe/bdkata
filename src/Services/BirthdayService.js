const moment = require('node-moment');

class BirthdayService {
    constructor(fileService, emailService){
        this.fileService = fileService;
        this.emailService = emailService;
    }
 
    sendTodayMessages(){
        var file = this.fileService.readFile();
        const that = this;
        try {
            file.forEach( person => {
                var now = moment().format("DD,MM,YYYY");
                var date = moment(person.birth).format("DD,MM,YYYY");
                if(now == date){
                    that.emailService.send(person.email, person.first_name);
                }
            });

            return true;
        } catch (error) {

            return false;
        }
    }
}

module.exports = BirthdayService;

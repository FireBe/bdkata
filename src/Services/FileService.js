var fs = require("fs");

class FileService {
  readFile() {
    var objectData = [];
    var array = fs
      .readFileSync("names.txt")
      .toString()
      .split("\n");
      var i = 0;
      array.forEach(function(element) {
        if(i){
            var array = element.split(",");
            var obj = {
                last_name: array[0],
                first_name: array[1],
                birth: array[2],
                email: array[3]
            };

            objectData.push(obj);
        }
        i++;
      });

    return objectData;
  }
}

module.exports = FileService;

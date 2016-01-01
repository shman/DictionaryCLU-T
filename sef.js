#!/usr/bin/env node
var jquery = require("jquery");
if(process.argv[2]) {
    var input = process.argv.slice(2);
}
jquery.getJSON("http://dictionaryapi.net/api/definition/"+input,         function(data) {
        var returnVal= "";
        for(var i = 0; i< data.length; i++) {
            returnVal += i+1+"."+input+","+data[i]["PartOfSpeech"]+": ";
            for(var k = 0; k<data[i].length; k++) {
                returnVal += data[i]["Definitions"][k];
            }
        };

        console.log(returnVal);
    
 });

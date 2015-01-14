#!/usr/bin/env node
var jquery = require("jquery");
if(process.argv[2]) {
    var input = process.argv[2].replace("_", " ");
}
jquery.getJSON("http://www.sefaria.org/api/texts/"+input+"?commentary=0&context=0&callback=?",         function(data) {
        var psuk= "";
        for(var i = 0; i< data["text"].length; i++) {
            psuk+=data["text"][i];
        };

        console.log(psuk);
    
 });
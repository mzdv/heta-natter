/**
 * Created by mzdv on 16.11.14..
 */
var http = require("http");
//var url = require("url");

http.createServer(function(req, res) {

    var boilerplate = "http://www.";
    var content = [];

    if(req.url === '/')
        res.end("Enter the URL after the / in the browser URL.");
    else if(req.url === "/favicon.ico")
        console.log("Favicon detected; ignoring...");
    else {
        var parsedURL = req.url.substr(1);

        console.log(parsedURL);
        var destinationURL = boilerplate + parsedURL + '/';
        console.log(destinationURL);

        http.get(destinationURL, function(res) {
            console.log(res.statusCode);

        })
            .on("error", function(e) {
                console.log("Error in HTTP GET: " + e.message)
            })
            .on("data", function(chunk) {    //something in here
                console.log(chunk);
                content += chunk;
            })
            .on("end", function() {
                console.log(content)
            });
    }
})
    .on("error", function(e) {
        console.log("Error in server creation: " + e.message);
    })

    .listen(1337);
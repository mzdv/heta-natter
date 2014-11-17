/**
 * Created by mzdv on 16.11.14..
 */
var http = require("http");
//var url = require("url");

http.createServer(function(req, res) {

    var boilerplate = "www.";

    if(req.url === '/')
        res.end("Enter the URL after the / in the browser URL.");
    else if(req.url === "/favicon.ico")
        console.log("Favicon detected; ignoring...");
    else {
        var parsedURL = req.url.substr(1);

        console.log(parsedURL);
        var destinationURL = boilerplate + parsedURL;
        console.log(destinationURL);

        var options = {
            hostname: destinationURL,
            port: 80,
            path: '/',
            method: 'GET'
        };

        http.request(options, function(res) {
            res.setEncoding("utf8");

            res.on("data", function(chunk) {
                console.log(chunk);
            })
        }).end();

    }
})
    .on("error", function(e) {
        console.log("Error in server creation: " + e.message);
    })

    .listen(1337);
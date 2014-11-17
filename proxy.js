/**
 * Created by mzdv on 16.11.14..
 */
var http = require("http");
//var url = require("url");

http.createServer(function(req, res) {

    var boilerplate = "www.";
    var serverData = [];

    if(req.url === '/')
        res.end("Enter the URL after the / in the browser URL.");
    else if(req.url === "/favicon.ico")
        console.log("Favicon detected; ignoring...");
    else {
        var parsedURL = req.url.substr(1);
        var httpMethod = req.method;

        console.log(parsedURL);
        var destinationURL = boilerplate + parsedURL;
        console.log(destinationURL);

        var options = {
            hostname: destinationURL,
            port: 80,
            path: '/',
            method: httpMethod
        };

        http.request(options, function(res) {
            res.setEncoding("utf8");

            res.on("data", function(chunk) {

                serverData.push(chunk);
            });

            res.on("end", function() {
                console.log(serverData);
            })
        }).end();

    }
})
    .on("error", function(e) {
        console.log("Error in server creation: " + e.message);
    })

    .listen(1337);

    console.log("heta-natter running.");
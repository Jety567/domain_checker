#! /usr/bin/env node

var ping = require('ping');
var tlds = require('tld-list');

console.log("Welcome to Domain Checker");


if(process.argv.length < 3) 
   return console.log("No Arguemnt");


let test_domain = process.argv.pop();

console.log("Checking Domain " + test_domain);

tlds.forEach((domain,index)=> {
   tlds[index] = test_domain + "."  + domain;
})

var hosts = ['192.168.1.1', 'google.com', 'yahoo.com'];
tlds.forEach(function(host){
    ping.sys.probe(host, function(isAlive){
       	if(isAlive)
		console.log("Domain " + host + " is Alive!") 
    });
});

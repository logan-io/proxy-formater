var fs = require('fs');

var proxy = []
var finished = []

function getProxies(callback) {
    var proxies = fs.readFileSync('proxies.txt').toString().split('\n');
    for(let i = 0; i < proxies.length; i++) {
        proxies[i] = proxies[i].replace('\r', "").replace('\n', "");
        if(proxies[i] != "") {
            proxy.push(proxies[i]);
        }
    }
    callback()
}
//http://user:pass@127.121.115.3:23082
//127.121.115.3:23082:user:pass
//http://127.121.114.3:23082
function format() {
    for(let i =0; i < proxy.length; i++) {
        let g = proxy[i].split(":").length
        if(proxy[i].indexOf('http://') > -1) { // Format to standard ex: 127.121.115.3:23082:user:pass (user:pass optional)  
            if(g > 3) { // Means it has user:pass
                var userPassSplit = proxy[i].split('http://').pop().split("@");
                var formated = userPassSplit[1] + ":" + userPassSplit[0]
            }else{ // No user:pass :O
                var userPassSplit = proxy[i].split('http://').pop().split(":");
                var formated = userPassSplit[0] + ":" + userPassSplit[1]
                }
            }else if(proxy[i].indexOf("http://") == -1) { // Format with http:// and @ ex: http://user:pass@127.121.115.3:23082 (user:pass optional)
            if(g > 3) { // Means it has user:pass
                var userPassSplit = proxy[i].split(":")
                var formated = '"http://' + userPassSplit[2] + ":" + userPassSplit[3] + "@" + userPassSplit[0] + ":" + userPassSplit[1] + '"'
            }else { //No user pass :O
                var userPassSplit = proxy[i].split(":")
                var formated = '"http://' + userPassSplit[0] + ":" + userPassSplit[1] + '"'
            }
        }
        finished.push(formated)
    }
    saveToFile()
}

function saveToFile() {
    for(let i = 0; i < finished.length; i++) {
        fs.appendFile('done.txt', finished[i] + "\r\n", function(error) {
            if(error) { console.log(error)}
    
          });
    }

}


getProxies(format);
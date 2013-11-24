/* Author: Ben Hardill http://www.hardill.me.uk/wordpress/2013/09/07/node-red-pause-node/ */


// Simple node to introduce a pause into a flow
 
//Require main module
var RED = require(process.env.NODE_RED_HOME+"/red/red");

function PauseNode(n) {
   RED.nodes.createNode(this,n);
 
   this.timeout = n.timeout * 1000;
 
   this.on("input", function(msg) {
       var node= this;
       setTimeout(function(){node.send(msg);}, node.timeout);
   });
}
 
RED.nodes.registerType("pause",PauseNode);

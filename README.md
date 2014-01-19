aquaponics-node-red
===================

The node-red component of the aquaponics control system


dependencies
============

* node-js
* node-red (v0.4.0)
* pause node
* wiring-pi library
* wiring-pi node.js module
* aquaponics-arduino

installation notes
==================
Assuming you have node-js and the standard wiring-pi library installed ...

```
cd ~
git clone git@github.com:layerzerolabs/aquaponics-node-red.git
npm install node-red
cd node_modules/node-red
npm install wiring-pi
```

Open up ~/node_modules/node-red/settings.js and make these changes:
```
flowFile: '/home/pi/aquaponics-node-red/aquaponics.json',
userDir: '/home/pi/aquaponics-node-red/',
nodesDir: '/home/pi/aquaponics-node-red/nodes',

functionGlobalContext: { wpi: require('wiring-pi') }
```
We also added a startup script so that node-red starts on boot.

attributions
============
pause node from here http://www.hardill.me.uk/wordpress/2013/09/07/node-red-pause-node/

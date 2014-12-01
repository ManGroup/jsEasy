#!/bin/sh
forever stopall

cd public

grunt

cd ..

forever start -l /home/centos/jsEasy/logs/forever.log -o /home/centos/jsEasy/logs/out.log -e /home/centos/jsEasy/logs/err.log -a --sourceDir /home/centos/jsEasy/ app.js

cat elist.js | egrep function | sed -r "s/function (.*)\((.*)\) \{/\1/"

npm install jsdoc -g
jsdoc elist.js -d docs

webpack

#how to bind a domain name 
# https://www.jianshu.com/p/a2b647f4c999

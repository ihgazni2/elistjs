cat elist.js | egrep function | sed -r "s/function (.*)\((.*)\) \{/\1/"

npm install jsdoc -g

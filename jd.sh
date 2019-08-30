git rm -r docs
jsdoc elist.js -d docs
webpack
git add .
git commit -m "docs"

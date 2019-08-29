git rm -r docs
jsdoc elist.js -d docs
git add .
git commit -m "docs"

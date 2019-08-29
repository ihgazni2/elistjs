git rm -r docs
jsdoc elist.js -o docs
git add .
git commit -m "docs"

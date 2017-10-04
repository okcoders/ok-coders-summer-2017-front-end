## Quick Instructions

mkdir thingy
cd thingy
heroku login
git init .
npm init
npm install cors --save
npm install express --save
heroku create
git push heroku master
heroku ps:scale web=1
heroku open

### Debuggin

heroku logs --tail
heroku ps
heroku local web

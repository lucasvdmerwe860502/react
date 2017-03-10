Tech stack:
gulp
browserify
ES6
redux and react-redux
babel
less
npm
jest unit testing framework

Frameworks and libraries used:
React
jQuery
phpjs
Bootstrap
font-awesome

Styling:
Flexbox
Media queries
Other responsive design principles

HTML:
content-security-policy
HTML5 file api

Design patterns used:
UI - strategy pattern and observer pattern

Side note:
All the text input components have a max length. Once the limit is reached, a warning is given. Just in case you miss it :)

Assumptions:
That the API would accept the selected privacy options as a string, being the chosen value.
That the API would handle stripping javascript tags (to prevent security risks)
That the CORS is enabled server side so that cross-domain ajax requests can be made
That the API endpoint for this request is /idea/create - .htaccess makes this sort of url structure possible 

Setup instructions (for windows) - please only install the software that you don't yet have installed on your computer:
Please install nodejs
Please install browserify - npm install -g browserify
Please install the gulp cli - npm install -g gulp-cli
Install LESS: npm install -g less
With a terminal go to the root directory and run "npm install" to install all the dependancies

Other functionality:
Unit testing: Navigate to the root of the site with a terminal and run "npm test"
Gulp: I have specified 3 tasks in the gulpfile.js file. To run them navigate to the root of the site with a terminal and run "gulp bundle_js","gulp transpile_less" or "gulp watch"








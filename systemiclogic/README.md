Tech stack:
Gulp, browserify, ES2015/ES2016, redux, react-redux, babel, less, npm and the Jest unit testing framework.

Frameworks and libraries used:
React, jQuery, phpjs, Twitter Bootstrap and Font-Awesome

Responsive design: Flexbox, media queries and other responsive design principles.

HTML:
content-security-policy, HTML5 file api

Design patterns used: The strategy pattern and the observer pattern.

Some functionality that might be overlooked:
All the text input components have a max length. Once the limit is reached, a warning is given.

Assumptions:
That the API accepts the selected privacy option as a string.  
That the API handles stripping javascript and HTML tags (to prevent security risks). 
That the API protects against SQL injection attacks. 
That CORS is enabled server side so that cross-domain ajax requests can be made.

Setup instructions (for windows) - please only install the software that you don't yet have installed on your computer:
Please install nodejs. 
Please install browserify - npm install -g browserify. 
Please install the gulp cli - npm install -g gulp-cli. 
Install LESS: npm install -g less. 
With a terminal go to the root directory and run "npm install" to install all the dependancies. 

Other functionality:
Unit testing: Navigate to the root of the site with a terminal and run "npm test". 
Gulp: I have specified 3 tasks in the gulpfile.js file. To run them navigate to the root of the site with a terminal and run "gulp bundle_js","gulp transpile_less" or "gulp watch".








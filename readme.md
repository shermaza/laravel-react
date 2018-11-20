# Installation

##PHP storm
* In Docker for Windows, make sure you enable exposing on the localhost port
* Create a new Docker configuration at the top bar
* Create a new docker-compose configuration and select the laradock compose file
* The startup containers are nginx and mysql

 
The next part is independent of IDE
* Copy laradock/env-example to laradock/env
* Copy /.env.example to /.env
* Start your containers (composer or run configuration in PHPStorm)
* In the workspace container, npm install && composer install && php artisan key:generate

All set, visit localhost in your browser and you should see a React driven Laravel page
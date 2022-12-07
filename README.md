# Discord Bot Project #

## Requirements ##
* Node.js
* Angular-cli
* Python 3

## Structure ##
* BotFront - Angular project
* FlaskServer - Flask project
  * templates - place for `index.html` genereted from Angular project with `ng build`
  * front - place for static files generated by Angular project (`.js`, `.css`, etc.) 

## Installation ##
1. Go to `BotFront`
    * Serve project `npm serve`
      * for development and live reload
    * Build project `npm run build:flask`
      * This command automatically builds project and move generated files to `FlaskServer`
1. Go to `FlaskServer`
1. Install all required python libs `pip install -r requirements.txt`
1. Run server `python server.py`

### Manual Front Installation ###
1. Go to `BotFront`
1. Build project `ng build --deploy-url front/`
    * flag `--deploy-url` is required so `index.html` points to scripts in `front` (static in Flask project) directory
1. Move `dist/index.html` to `FlaskServer/templates`
1. Move `dist` directory content to `FlaskServer/front`
// the main file that is used as an entry point to run the api
import app from './app'
import debug from 'debug'
import https from 'https'
import http from 'http'
import config from 'dotenv'

// Read the config values from .env
config.config()

// get the port from the environment and store it in express
let port = normalizePort(process.env.APP_PORT || 3000)
app.set('port', port)

// Create the HTTP server
let server = http.createServer(app)


// connect to the database
import './app/config/database'
import './app/models'
// import './app/database/seeders'

//Listent on the provided port
server.listen(port)
server.on('listening', onListening)
server.on('error', onError)

// Normalize a port into a number , string or false
function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}

//Event listener for HTTP server "error" event.
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

// Event listener for HTTP server "listening" event.
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);

    console.log('The app : ' + process.env.APP_NAME + ' Server started on : ' + process.env.APP_URL + ":" + port);
    console.log('The app : ' + process.env.APP_NAME + ' http Server started on : ' + process.env.APP_URL + ":" + 3000);

}
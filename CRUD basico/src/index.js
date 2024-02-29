import app from './app'
// const app = require('./app')

app.listen(app.get('port'))

console.log('Servidor corriendo por el puerto '+ app.get('port'))
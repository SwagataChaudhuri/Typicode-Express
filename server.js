require('dotenv').config()
const
    express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    logger = require('morgan'),
    helmet = require('helmet'),
    actuator = require('express-actuator'),
    error = require('./models/error');

const
    actuatorOptions = {
        basePath: '/actuator',
        infoGitMode: 'full',
        infoBuildOptions: null,
        infoDateFormat: null,
        customEndpoints: []
    };

app.use(helmet());
app.use(express.json());
app.use(logger('dev'));
app.use(actuator(actuatorOptions));

app.use('/posts', require('./routes/posts'));
app.use('/comments', require('./routes/comments'));
app.use('/albums', require('./routes/albums'));
app.use('/photos', require('./routes/photos'));
app.use('/todos', require('./routes/todos'));
app.use('/users', require('./routes/users'));
app.all('*', (req, res) => {
    let errorResponse = new error(404, `No routes matched : ${req.method} ${req.path}`, Date.now());
    res.status(404).json(errorResponse);
});

var server = app.listen(port, () => {
    console.log(`Express server listening on port : ${port} with pid : ${process.pid}`);
});
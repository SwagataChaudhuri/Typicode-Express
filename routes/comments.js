const
    express = require('express'),
    router = express.Router(),
    axios = require('axios'),
    apicache = require('apicache'),
    error = require('../models/error');

var cache = apicache.middleware;

var url = "https://jsonplaceholder.typicode.com/comments";

/* GET Method for all comments */
router.get("/", cache('5 minutes'), async function (request, response) {
    axios.get(url)
        .then(res => {
            response.status(200).json(res.data);
        })
        .catch(err => {
            let errorResponse = new error(err.response.status, err.message, Date.now());
            response.status(err.response.status).json(errorResponse);
        });
});

/* GET Method for specific comment via id path parameter */
router.get('/:id', cache('5 minutes'), async function (request, response) {
    url = url + "/" + request.params.id;
    axios.get(url)
        .then(res => {
            response.status(200).json(res.data);
        })
        .catch(err => {
            let errorResponse = new error(err.response.status, err.message, Date.now());
            response.status(err.response.status).json(errorResponse);
        });
});

module.exports = router;
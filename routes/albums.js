const
    express = require('express'),
    router = express.Router(),
    axios = require('axios'),
    apicache = require('apicache'),
    error = require('../models/error');

var cache = apicache.middleware;

var url = "https://jsonplaceholder.typicode.com/albums";

/* GET Method for all albums */
router.get("/", cache('5 minutes'), async function (_request, response) {
    axios.get(url)
        .then(res => {
            response.status(200).json(res.data);
        })
        .catch(err => {
            let errorResponse = new error(err.response.status, err.message, Date.now());
            response.status(err.response.status).json(errorResponse);
        });
});

/* GET Method for specific album via id path parameter */
router.get('/:id', cache('5 minutes'), async function (request, response) {
    let requestURL = url + "/" + request.params.id;
    axios.get(requestURL)
        .then(res => {
            response.status(200).json(res.data);
        })
        .catch(err => {
            let errorResponse = new error(err.response.status, err.message, Date.now());
            response.status(err.response.status).json(errorResponse);
        });
});

module.exports = router;
const
    express = require('express'),
    router = express.Router(),
    axios = require('axios'),
    apicache = require('apicache'),
    error = require('../models/error');

var cache = apicache.middleware;

var url = "https://jsonplaceholder.typicode.com/posts";

/* GET Method for all posts */
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

/* GET Method for specific post via id path parameter */
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

/* GET Method for specific post's comment via id path parameter */
router.get('/:id/comments', cache('5 minutes'), async function (request, response) {
    let requestURL = url + "/" + request.params.id + "/comments";
    axios.get(requestURL)
        .then(res => {
            response.status(200).json(res.data);
        })
        .catch(err => {
            let errorResponse = new error(err.response.status, err.message, Date.now());
            response.status(err.response.status).json(errorResponse);
        });
});

/* POST Method to create a new post */
router.post('/', async function (request, response) {
    axios.post(url, request.body)
        .then(res => {
            response.status(201).json(res.data);
        })
        .catch(err => {
            let errorResponse = new error(err.response.status, err.message, Date.now());
            response.status(err.response.status).json(errorResponse);
        });
});

/* PUT Method to update a specific post via id path parameter */
router.put('/:id', async function (request, response) {
    let requestURL = url + "/" + request.params.id;
    axios.put(requestURL, request.body)
        .then(res => {
            response.status(200).json(res.data);
        })
        .catch(err => {
            let errorResponse = new error(err.response.status, err.message, Date.now());
            response.status(err.response.status).json(errorResponse);
        });
});

/* PATCH Method to update a specific post via id path parameter */
router.patch('/:id', async function (request, response) {
    let requestURL = url + "/" + request.params.id;
    axios.patch(requestURL, request.body)
        .then(res => {
            response.status(200).json(res.data);
        })
        .catch(err => {
            let errorResponse = new error(err.response.status, err.message, Date.now());
            response.status(err.response.status).json(errorResponse);
        });
});

/* DELETE Method to delete a specific post via id path parameter */
router.delete('/:id', async function (request, response) {
    let requestURL = url + "/" + request.params.id;
    axios.delete(requestURL, request.body)
        .then(res => {
            response.status(200).json(res.data);
        })
        .catch(err => {
            let errorResponse = new error(err.response.status, err.message, Date.now());
            response.status(err.response.status).json(errorResponse);
        });
});

module.exports = router;
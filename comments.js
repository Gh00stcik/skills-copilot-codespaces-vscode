// Create Web Server
// Create API to get all comments
// Create API to get comment by id
// Create API to create new comment
// Create API to update comment
// Create API to delete comment
// Create API to delete all comments

// Import express
const express = require('express');

// Import body-parser
const bodyParser = require('body-parser');

// Create web server
const app = express();

// Use body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Use JSON
app.use(bodyParser.json());

// Set port
const port = process.env.PORT || 3000;

// Create router
const router = express.Router();

// Create API
router.get('/', (request, response) => {
    response.json({ message: 'Hello World!' });
});

// Create API to get all comments
router.get('/comments', (request, response) => {
    response.json({ message: 'Get all comments!' });
});

// Create API to get comment by id
router.get('/comments/:id', (request, response) => {
    response.json({ message: 'Get comment by id!' });
});

// Create API to create new comment
router.post('/comments', (request, response) => {
    response.json({ message: 'Create new comment!' });
});

// Create API to update comment
router.put('/comments/:id', (request, response) => {
    response.json({ message: 'Update comment!' });
});

// Create API to delete comment
router.delete('/comments/:id', (request, response) => {
    response.json({ message: 'Delete comment!' });
});

// Create API to delete all comments
router.delete('/comments', (request, response) => {
    response.json({ message: 'Delete all comments!' });
});

// Register router
app.use('/api', router);

// Start server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
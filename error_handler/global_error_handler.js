// errorHandler.js
export default function errorHandler(err, req, res, next) {
    console.error('Error:', err.message);
    res.status(500).send({ message: 'Internal server error. Please try again later.' }); // Or a more specific message if possible
}

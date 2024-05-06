// index.js

import express, { json } from 'express';
const app = express();
const port = 3000;

// Middleware
app.use(json());
app.use(errorHandler);
// Routes
import authRoutes from './routes/auth_routes.js';
import errorHandler from './error_handler/global_error_handler.js';
app.use('/api', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Internal server error' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

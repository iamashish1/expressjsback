// authController.js

import auth_services from '../services/auth_services.js';

async function signUpAuth(req, res, next) {
    const { email, password } = req.body;
    try {
        const user = await auth_services.signUp(email, password);
        res.status(200).send({ user });
    } catch (error) {
        console.error('Signup error:', error.message);

        // If authService.signUp throws an error, send an error response back to the client
        res.status(500).send({ message: error.message });
    }
}


export default { signUpAuth };

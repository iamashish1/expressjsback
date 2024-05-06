// validationMiddleware.js

function validateSignUp(req, res, next) {
   
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send({ message: 'Email and password are required' });
    }
    console.log(email)
    console.log(password)

    next();
}

export  { validateSignUp };

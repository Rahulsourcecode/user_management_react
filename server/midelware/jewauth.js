
const jwt = require('jsonwebtoken')



export const verifyLogin = (req, res, next) => {
    const token = req.headers['x-access-token']
    const verified = jwt.verify(token, 'SKey5flwx')
    console.log(verified);
    if (verified) {
        next()


    } else {
        // Access Denied
        return res.status(401).send(error);
    }
}

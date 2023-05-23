const { response } = require('express');
let express = require('express');
let router = express.Router();
let userHelper = require('../helpers/userHelpers')
const jwt = require('jsonwebtoken')

//sing up
router.post('/api/register', async (req, res) => {
    console.log(req.body)

    userHelper.userRegister(req.body).then((response) => {

        if (response.phoneFound) {
            res.json({ status: 'error', error: 'Duplicate email' })
        } else {
            res.json({ status: 'Successfull updated' })
        }

    }).catch((error) => {
        res.json({ status: 'error', error: 'Duplicate email' })
    })
})
//login

router.post('/api/login', (req, res) => {

    userHelper.douserLogin(req.body).then((response) => {
        console.log(response);
        if (response.status) {
            const token = jwt.sign({
                userId: response.user._id,
                name: response.user.name,
                email: response.user.email
            },
                'SKey5flwx'
            )
            return res.json({ status: 'ok', user: token })
        } else {

            res.json({ status: 'error', user: false })
        }

    })
})

// //api/quote
// router.get('/api/quote', async (req, res) => {
//     const token = req.headers['x-access-token']
//     try {
//         const decoded = jwt.verify(token, 'SKey5flwx')
//         console.log(decoded);
//         const email = decoded.email
//         const user = await userHelper.findUser(email)
//         return res.json({ status: 'ok', quote: user })
//     } catch (error) {
//         console.log(error);
//         res.json({ status: 'error', error: 'invalid token' })

//     }



// })

// router.post('/api/quote', async (req, res) => {
//     const token = req.headers[x - access - token]
//     try {
//         const decoded = jwt.verify(token, 'SKey5flwx')
//         console.log(decoded);
//         const email = decoded.email
//         await userHelper.updateQuote(email, req.body.quote)
//         return { status: 'ok' }
//     } catch (error) {
//         console.log(error);
//         res.json({ status: 'error', error: 'invalid token' })

//     }



// })

module.exports = router;
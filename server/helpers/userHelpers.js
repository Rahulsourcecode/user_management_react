let db = require('../config/connection')
let collection = require('../config/collection')
const bcrypt = require('bcrypt')
const { ObjectId, Db } = require('mongodb')
const { response, json } = require('express')


module.exports = {

    userRegister: async (userData, callback) => {

        return new Promise(async (resolve, reject) => {



            let Email = await db.get().collection(collection.User_COLLECTION).findOne({ email: userData.email })

            if (Email == null) {

                return new Promise(async (resolve, reject) => {


                    userData.password = await bcrypt.hash(userData.password, 10)

                    db.get().collection(collection.User_COLLECTION).insertOne(userData).then((data) => {

                        resolve(data)

                    }).catch((error) => {
                        reject(error)
                    })

                })
                    .then((data) => {
                        resolve(data)

                    }).catch((error) => {
                        reject(error)
                    })

            } else {

                resolve({ Email: true })
            }
        })




    },
    douserLogin: (userData) => {
        return new Promise(async (resolve, reject) => {

            let response = {}
            let user = await db.get().collection(collection.User_COLLECTION).findOne({ email: userData.email })
            if (user) {

                bcrypt.compare(userData.password, user.password).then((status) => {
                    if (status) {

                        response.user = user
                        response.status = true
                        resolve(response)
                    } else {

                        resolve({ status: false })
                    }
                })
            }

            else {

                resolve({ status: false })
            }
        })





    },
    findUser: (email) => {
        return new Promise(async (resolve, reject) => {
            let user = await db.get().collection(collection.User_COLLECTION).findOne({ email: email })
            console.log(user);
            resolve(user)
        })


    },
    updateQuote: (email, data) => {
        return new Promise(async (resolve, reject) => {
            let user = await db.get().collection(collection.User_COLLECTION).updateOne(
                { email: email },
                {
                    $set: { quote: data }
                })
            console.log(user);
            resolve(user)
        })
    }

}

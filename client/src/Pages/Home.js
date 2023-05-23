import React, { useEffect } from 'react'
import { Footer, UserNav, CounterBtn } from '../Components'
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode'



function Home() {


    const navigate = useNavigate();


    // async function populateQuote() {
    //     const req = await fetch('http://localhost:3001/api/quote', {
    //         headers: {
    //             'x-access-token': localStorage.getItem('token'),
    //         },
    //     })
    //     const data = req.json()
    //     console.log(data);
    //     if (data.status === 'ok') {
    //         setQuete(data.quote)
    //     } else {
    //         alert(data.error)
    //     }
    // }
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {

            const user = jwt(token);


            // setUserName(user.name);

            if (!user) {
                localStorage.removeItem('token')
                navigate('/');
            } else {
                // populateQuote()
            }
        } else {
            navigate('/');
        }
    }, [navigate])

    return (
        <div>
            <UserNav />
            <CounterBtn />
            <Footer />
        </div>
    )
}

export default Home

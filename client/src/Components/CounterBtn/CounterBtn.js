import React from 'react'
import './CounterBtn.css'
// import { useSelector } from 'react-redux'
const Username = localStorage.getItem("userDetails")
const Useremail = localStorage.getItem("userEmail")

function CounterBtn() {
    // const { userDeatils } = useSelector((state) => state.user)
    // console.log(userDeatils[0]);

    return (
        <div>

            <div className="profile-wrap">
                <div class="mt-4">
                    <div
                        class="col"
                        style={{ display: "flex", justifyContent: "center" }}
                    >
                        <h2 style={{ color: "black" }}>Welcome &#160;</h2>
                        <h2 class="text-info"></h2>
                        <h2> &#160;</h2>
                    </div>
                </div>

                <div className="Profile_photo">
                    <img
                        src="https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                        alt=""
                    style={{width :140 , height: 136 }}/>
                </div>
                <div className="user_data">
                    <p>Name: {Username ? Username : ""}</p>
                    <p>Email: {Useremail ? Useremail : ""}</p>
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    padding: "30px",
                }}
            >

            </div>

            {/* <h1>igdhsgjhsjkhfkgfskj</h1>
            {userDeatils[0] ? <span>details :{userDeatils[0].name} </span> : " "} */}

        </div>
    )
}

export default CounterBtn

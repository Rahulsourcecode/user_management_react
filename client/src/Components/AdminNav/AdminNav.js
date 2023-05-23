import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function AdminNav() {

    const { userDeatils } = useSelector((state) => state.user)
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('userDetails')
        navigate('/admin')
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark  bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/adminHome">Clear cut</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/adminHome">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/userinfo">UserInfo</Link>
                            </li>


                        </ul>

                    </div>

                    <ul className="navbar-nav">
                        <li className="nav-item d-flex">

                            <span className="nav-link" style={{ color: "white" }} ><b><i>welcome &nbsp;
                                {userDeatils ? <span>{userDeatils} </span> : " "}
                            </i></b></span>
                            <span className="nav-link" onClick={logout}>Logout</span>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default AdminNav

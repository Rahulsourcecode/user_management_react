import React from 'react'
import { Link } from 'react-router-dom'

function loginNav() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-success">
                <div className="container-fluid">

                    <Link className="navbar-brand" to="/">Clear Cut</Link>

                </div>
            </nav>
        </div>
    )
}

export default loginNav

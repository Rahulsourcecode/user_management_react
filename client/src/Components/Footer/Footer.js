import React from 'react'
import '../Footer/Footer.css'
function footer() {
    return (
        <div>
            <div
                className="d-flex flex-column flex-md-row text-md-start  py-4 px-4 px-xl-5 bg-success " >

                <div style={{justifyContent:'center'}} className="text-white mb-3 mb-md-0" >
                    Copyright © 2022. All rights reserved.
                </div>



                <div>
                    <a href="/" className="text-white me-4">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/" className="text-white me-4">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="/" className="text-white me-4">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="/" className="text-white">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default footer

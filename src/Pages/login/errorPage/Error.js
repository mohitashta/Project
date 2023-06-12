import React from 'react'
import ladybug from '../../../Images/ladybug.png'

const Error = () => {

    return (
        <div>
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center">
                    <span> <img src={ladybug} alt="" className='w-50 bg-none' /></span>
                    <h1 className="display-1 fw-bold text-danger">404</h1>
                    <h3 className="fs-1"> <span className="text-danger me-2">Opps!</span>User not found.</h3>
                    <h4 className="lead text-dark mt-3">
                        The User you’re looking for doesn’t exist.
                    </h4>
                    <a href="/" className="btn btn-outline-info rounded-pill mt-3  ">Go Back Home</a>
                </div>
            </div>
        </div>
    )
}

export default Error

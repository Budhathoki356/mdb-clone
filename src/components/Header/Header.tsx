import React from 'react'
import { Link } from 'react-router-dom'


const Header: React.FC = () => {
    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <h1 className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none ">
                        <Link to={`/`}> <h1 className="logo"><i className="fas fa-film"></i> MDB</h1></Link>
                    </h1>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" className="form-control form-control-dark" placeholder="Search Movie..." />
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Header

import React from 'react'
import './Home.css';
import NavBar from '../../util/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
        <div className="home">
            <NavBar />
            <div
                id="carouselExampleAutoplaying"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL_HSS/3000x1200-heroUnrec._CB570990004_.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/Dec23/Shoes/EOSS/Unrec/Kotak/Sports/Frame_320_3000pc._CB586293054_.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/dec23atf/eoss/unrec/kotak/WA_ETH_3000._CB586338069_.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className='bodyContainer'>
                <div className='leftContainer'>
                    <img src="https://assets-global.website-files.com/61766c42e8e50c99a04fbd4b/6179a87367a4318b2a892cd0_SMART-goals-p-1080.jpeg" alt="IMG" />
                </div>
                <div className='rightContainer'>
                    <h2>Our Mission</h2>
                    <p>Our goal is to enable people and companies by giving them access to a reliable and practical online marketplace where they can explore, purchase, and interact. We are dedicated to supporting regional and international companies, encouraging sustainability, and creating an atmosphere that is driven by the community.</p>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Home
import React from 'react'
import Product from '../product/product.component'
import './home.style.css'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                        alt="" />

                <div className="home__row">
                    <Product id="12323431"
                            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                            price={9.99}
                            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                            rating={3} />

                    <Product id="49538094"
                            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                            price={239.0}
                            image="https://m.media-amazon.com/images/I/71BtySVK6kL._AC_UY436_FMwebp_QL65_.jpg"
                            rating={4} />
                    
                </div>
                <div className="home__row">
                    <Product id="74456678"
                            title="YAMAY Smart Watch for Android and iOS Phone IP68 Waterproof, Fitness Tracker Watch with Heart Rate Monitor Step Sleep Tracker, Smartwatch Compatible with iPhone Samsung, Watch for Men Women"
                            price={28.71}
                            image="https://m.media-amazon.com/images/I/51OM+oAiKJL._QL65_AC_UL640_.jpg"
                            rating={4} />

                    <Product id="10895367"
                            title="TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless Internet Router Bundle with Echo Dot (3rd Gen) Charcoal"
                            price={102.11}
                            image="https://m.media-amazon.com/images/I/41NtffkP7uL._AC_UY436_QL65_.jpg"
                            rating={3} />

                    <Product id="88926726"
                            title="Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Silver (4th Generation)"
                            price={1049.99}
                            image="https://m.media-amazon.com/images/I/81FH2j7EnJL._AC_UY436_FMwebp_QL65_.jpg"
                            rating={5} />
                </div>
                <div className="home__row">
                    <Product id="88926726"
                            title="Samsung C49HG90DMU 124.2 cm (49 inches) Quantum Dot LED LCD Monitor - 32:9-1 ms - 3840 x 1080"
                            price={1975.00}
                            image="https://m.media-amazon.com/images/I/81vlA84pg6L._AC_UL640_FMwebp_QL65_.jpg"
                            rating={5} />
                </div>
            </div>
            
        </div>
    )
}

export default Home

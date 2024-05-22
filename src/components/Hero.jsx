const HeroSection = () => {
    return (

        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FREE DESERVE THE BEST</h1>
                <p>Nike Air technology consists of pressurised air inside a tough yet flexible bag, and provides more flexibility and spring without compromising structure.</p>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secBtn">Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available on</p>

                    <div className="brand-icons">
                        <img className="imgSize" src="/images/amazon.png" alt="amazon" />
                        <img className="imgSize" src="/images/flip.png" alt="flipcard" />
                    </div>
                </div>


            </div>
            <div className="hero-images">
                <img className="brandimg" src="/images/BrandShoos-removebg.png" alt="shoose" />
            </div>
        </main>

    );
};

export default HeroSection;
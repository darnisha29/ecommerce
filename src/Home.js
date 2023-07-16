import React from 'react';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';
import FeatureProduct from './components/FreatureProduct';
// import Colum from './components/Colum';


const Home = () => {
    const data = {name:"clothing store"}
        return (
            <div>
        <HeroSection myData={data}/>
        <FeatureProduct />
        <Services />
        <Trusted />
        {/* <Colum /> */}

        </div>
        
        );
};

export default Home;
// import React,{useContext} from 'react';
import HeroSection from './components/HeroSection';
import { useProductContext } from './context/Productcontext';
// import { AppContext } from './components/context/Productcontext';

const About = () => {
    const {myName} = useProductContext();
    const data ={name:"ecommerce store"};
    return(<>
    {myName}
    <HeroSection myData={data} /></>);
};
export default About;
import React from 'react'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import BookRecommendation from '../../../components/users/BookRecomendations/BookRecommendation';
import SectionIcons from '../../../components/users/SectionIcons/SectionIcons';
import RecentPublications from '../../../components/users/RecentPublications/RecentPublications';


import Footer from '../../../components/users/Footer/Footer';
import NavBar from '../../../components/users/NavBar/NavBar';
import HeroSection from '../../../components/users/HeroSection/HeroSection';

import "./landing.css"

const Landing = () => {
    const auth = useAuthUser();

    console.log(auth);
    return (
        <div className="container-bg">
            <HeroSection />
            <BookRecommendation />
            <SectionIcons />
            <RecentPublications />
        </div>

    )
}

export default Landing
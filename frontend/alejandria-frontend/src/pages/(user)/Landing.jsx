import React from 'react'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import BookRecommendation from '../../components/(user)/bookRecomendations/BookRecommendation';
import SectionIcons from '../../components/(user)/sectionIcons/SectionIcons';
import RecentPublications from './RecentPublications';
import NavBar from '../../components/(user)/navBar/NavBar';
import Footer from '../../components/(user)/footer/Footer';
import "./css/landing.css"

const Landing = () => {
    const auth = useAuthUser();

    console.log(auth);
    return (
        <div className="container-bg">
            <NavBar isLoggedIn={auth != null ? true : false} />
            <BookRecommendation />
            <SectionIcons />
            <RecentPublications />
            <Footer />
        </div>

    )
}

export default Landing
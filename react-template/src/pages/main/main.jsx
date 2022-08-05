import React from 'react';
import HomeSection from '../../components/HomeSection/HomeSection';
import DailySection from '../../components/DailySection/DailySection';
import VolunteerSection from '../../components/VolunteerSection/VolunteerSection';
import AboutSection from '../../components/AboutSection/AboutSection';
import DonationSection from '../../components/DonationSection/DonationSection'
import FooterSection from '../../components/Footer/Footer';
import '../main/main.css'

export default function Main() {
    return(
        <div>
            <HomeSection/>
            <DailySection/>
            <VolunteerSection/>
            <AboutSection/>
            <DonationSection/>
            <FooterSection/>
        </div>

    );
}
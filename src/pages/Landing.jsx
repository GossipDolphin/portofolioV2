import React from 'react';
import '../App.css';
import Card from '../components/Card';
import {StyledLanding} from '../styledComponents/Styles.jsx'

const Landing = () => {
    return (
            <StyledLanding>
                <Card title="01" link="/Projects" subTitle="Projects" content="I have created a number of projects from UWP apps in .NET, Nativ Android apps in Android Studio and PWA apps with REACT"></Card>
                <Card title="02" link="/About" subTitle="About" content="Hi my name is Magnus Møllevik, im a computer science student at Østfold University College"></Card>
                <Card title="03" link="/Technologies" subTitle="Technologies" content="I know a series of technologies and languages, ranging from backend, frontend, cloud computing services and UI design"></Card>
                <Card title="04" link="/Contact" subTitle="Contact" content="Feel free to contact me anytime."></Card>
            </StyledLanding>
    )
}

export default Landing;
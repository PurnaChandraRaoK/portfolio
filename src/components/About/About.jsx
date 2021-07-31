import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import aboutAnime from './../../assets/about_anime.gif';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me.'
                details='Coder | Technical Writer'
            />

            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    {/* <h3 className='about-sub-head'>Teacher</h3> */}
                    <p className='about-details'>
                    I'm a software developer and computer programmer with an avid interest in Data Structures, Algorithms and Optimization. </p>
                    <p className='about-details'>
                    As a core programmer, I love taking challenges and love being part of the solution.

Collaborative with Hands-on experience in Analysis, Development, Implementation and testing of software with a focus on quality. 
</p>
<p className='about-details'>
Solid Programming expertise in Angular 6/8, Javascript, JAVA and Object Oriented analysis/methodologies. Enthusiastic team player, a fast learner with creative problem solving skills, good coding and communication skills.

Skilled in building innovative and fully performing software in compliance with Coding Standards and Technical Design. Would be interested in getting exposure to domains providing intellectually challenging work in the field of computers for proving and enriching my knowledge and skills.

                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>Blogger</h3>
                    <p className='about-details'>
                        I've been writing blogs from around 6 months now, about latest java features and change detection in angular. Check out{' '}
                        <a
                            className='about-link-element'
                            href='https://medium.com/@purnachandraraokota97'
                        >
                            my medium blogs today!
                        </a>
                    </p>

                    {/* Sub section 3 */}
                    <h3 className='about-sub-head'>Want Referral</h3>
                    <p className='about-details'>
                         {' '}
                        <a
                            className='about-link-element'
                            href='mailto:purnachandraraokota97@gmail.com'
                        >
                            Email me the details!
                        </a>
                    </p>
                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            <FooterLink
                phrase='Check out my '
                link='projects!'
                toAdress='/projects'
            />
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
};

export default About;

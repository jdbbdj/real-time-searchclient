import React from 'react';
import Icon1 from '../../assets/pics/services1.jfif';
import Icon2 from '../../assets/pics/services2.jfif';
import Icon5 from '../../assets/pics/services3.jfif';

import {ServicesContainer,
        ServicesH1,
        ServicesWrapper,
        ServicesCard,
        ServicesIcon,
        ServicesH2,
        ServicesP
} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>

            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Explore with us</ServicesH2>
                    <ServicesP>We give a timely and accurate data through our API</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Endulge with unknowns</ServicesH2>
                    <ServicesP>Learn about a country's population,currency,capital, and its country code like an expert</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon5} />
                    <ServicesH2>Beauty of adventure</ServicesH2>
                    <ServicesP>Unlock our special membership auth tokens that returns 5% cash back.</ServicesP>
                </ServicesCard>

            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services

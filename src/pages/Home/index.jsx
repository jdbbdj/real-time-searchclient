import React,{useRef} from 'react';

import Terrain from '../../components/Terrain';
import {Canvas} from "@react-three/fiber";
import { Suspense } from 'react';
import { HomeButton,HomeDiv, HomeContainer,HomeDesc,HomeDets,HomeInfo,HomeTerrain, HomeTitle, HomeWrapper } from './HomeElements';
import SearchSection from '../../components/SearchSection';
import Footer from '../../components/Footer';
import Services from '../../components/Services';

const Home = () => {
    
    
    return (

    <>
    <HomeContainer>
        
        <HomeWrapper>
        <HomeInfo>
            <HomeDets>
            <HomeTitle>
                    Geo
                </HomeTitle>
                <HomeDesc>
                    Learn more about the countries you don't even know on this world.
                </HomeDesc>
                <HomeDiv>
                <HomeButton>
                    LEARN NOW
                </HomeButton>
                </HomeDiv>
            </HomeDets>
        </HomeInfo>
        
        <HomeTerrain>
        <Canvas style={{width:'100%'}} camera={{ fov: 25, position: [0,0, 3] }}>
        <Suspense fallback={null}>
        <Terrain />
        </Suspense>
        </Canvas>
        </HomeTerrain>
        </HomeWrapper>
    </HomeContainer>
    <SearchSection />
    <Services/>
    <Footer/>
    </>

    )
}

export default Home

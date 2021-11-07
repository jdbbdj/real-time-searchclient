import React,{useState,useRef} from 'react';

import {useFrame, useLoader} from "@react-three/fiber";

import { OrbitControls,PerspectiveCamera } from '@react-three/drei';

import { TextureLoader } from 'three';
import TerrainNormal from '../../assets/textures/NormalMap.png';
import TerrainAlpha from '../../assets/textures/TerrainAlpha.png';
import TerrainHeight from '../../assets/textures/TerrainHeight.png';
import TerrainTexture from '../../assets/textures/TerrainTexture.jfif';

const Hero = () => {
    const [normal,alpha,height,texture] = useLoader(TextureLoader,[TerrainNormal,TerrainAlpha,TerrainHeight,TerrainTexture]);
    const [actDisp, setActDisp] = useState(8);


    const terrainRef= useRef();
    useFrame(({clock}) =>{
        const elapsedTime = clock.getElapsedTime();
        terrainRef.current.rotation.z = elapsedTime/4;
    });

    let mouseY = 0;
    function animateTerrain(event){
        mouseY = event.clientY/100;
        setActDisp(mouseY);
    };

    document.addEventListener('mousemove',animateTerrain);

    return <>
        
            {/* <ambientLight intensity={1}/> */}
        <PerspectiveCamera >
        <pointLight color="#f6f3ea" position={[2,10,4.4]} intensity={1.5}/>
        

        <mesh  ref={terrainRef}  rotation={[181,0,0]}>
        <planeBufferGeometry position={[1,1,1]}  args={[3,3,64,64]} />
            <meshPhongMaterial />
            <meshStandardMaterial
            color="#273c3f"
            map={texture}
            displacementMap={height}
            displacementScale={actDisp}
            alphaMap={alpha}
            transparent={true}
            depthTest={false}
            />
        </mesh>
        
        </PerspectiveCamera>

        
        
        
        </>
}

export default Hero

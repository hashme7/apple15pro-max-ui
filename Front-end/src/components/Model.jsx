import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "../components/ModelView";
import { useRef, useState } from "react";
import { yellowImg } from "../utils";
import * as THREE from 'three';
import  { View } from '@react-three/drei'
import { Canvas } from "@react-three/fiber";

function Model() {
    const [size, setSize] = useState("small");
    const [model, setModel] = useState({
        title:'Iphone 15 pro in Natural Titanium',
        color:['#8F8A81','FFE7B9','#6F6C64'],
        img:yellowImg
    })

    const cameraControllSmall = useRef();
    const cameraControllLarge = useRef();

    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());


    const [smallRotation, setSmallRotation] = useState(0)
    const [largeRotation, setLargeRotation] = useState(0)


  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1, delay: 1 });
  }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>
      </div>
      <div className="flex flex-col items-center mt-5">
        <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
          <ModelView 
          index={1}
          groupRef={small}
          gsapType="view1"
          controlRef={cameraControllSmall}
          setRotation={setSmallRotation}
          item={model}
          size={size}
          />
          <ModelView 
          index={2}
          groupRef={large}
          gsapType="view2"
          controlRef={cameraControllLarge}
          setRotation={setLargeRotation}
          item={model}
          size={size}
          />
          <Canvas className="w-full h-full" style={{
            postion:'fixed',
            top:0,
            left:0,
            right:0,bottom:0,
            overflow:'hidden'
          }}
          eventSource={document.getElementById('root')}>
            <View.Port/>
          </Canvas>
        </div>
        <div className="mx-auto w-full">
            <p className="text-sm font">
                
            </p>

        </div>
      </div>
    </section>
  );
}

export default Model;

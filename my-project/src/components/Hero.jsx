import gsap from 'gsap';
import {useGSAP} from '@gsap/react'; 
import {heroVideo,smallHeroVideo} from '../utils'
import { useEffect, useState } from 'react';

const Hero = () => {
  let [videoSrc,setVideoSrc] = useState(window.innerWidth > 760?heroVideo:smallHeroVideo);
  useGSAP(()=>{
    gsap.to('#hero',{opacity:1,delay:1.5});
  },[])
  const handleVideoSrc = ()=>{
    if(window.innerWidth<760){
      setVideoSrc(smallHeroVideo);
    }else{
      setVideoSrc(heroVideo);
    }
  }
  useEffect(()=>{
    window.addEventListener('resize',handleVideoSrc)
    return ()=> {
      window.removeEventListener('resize',handleVideoSrc);
    }
  },[])
  return (
    <section className='w-full nav-height bg-black relative '>
      <div className='h-5/6 w-full flex-center flex-col'>
        <p className='hero-title' id='hero'>iphone 15 Pro</p>
        <div className='md:w-10/12 w-9/12'>
            <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc } >
              <source src={videoSrc} type='video/mp4'/>
            </video>
        </div>
      </div>
      <div id='cta' className='flex flex-col items-center'>
         
      </div>
    </section>
  )
}

export default Hero
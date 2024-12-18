import React from 'react';
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import {easeOut, motion} from 'framer-motion'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
        <div className="hero-content flex-col lg:flex-row">
          <div className='flex-1'>
          <motion.img
            src={image1}
            animate={{y:[50,100,50]}}
            transition={{duration:10 , repeat:Infinity}}
            className="max-w-sm w-64 h-48 rounded-lg rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-400" />
            <motion.img
            src={image2}
            animate={{x:[100,150,100]}}
            transition={{duration:10,delay:5, repeat:Infinity}}
            className="max-w-sm w-64 h-48 rounded-lg rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-400" />
          
          </div>
          <div className='flex-1'>
           
            <motion.h1 
            animate={{x:50}}
            transition={{duration: 2 , delay:1, ease:easeOut, repeat:Infinity}}
            className="text-5xl font-bold">Latest job for you</motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;
import Navbar from "./navbar";
import {useState, useEffect} from "react";
import { HeadPhoneData } from "../data/MockData";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { SlideRigh } from "../utility/animation";
const Hero = () => {
  const [ activeData, setActiveData ] = useState(HeadPhoneData[0])
  const [currentIndex, setCurrentIndex] = useState(0)


  useEffect(() =>{
    const interval = setInterval(() =>{
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HeadPhoneData.length)
    }, 3000)
  
    return () => clearInterval(interval)
  },[currentIndex])


  useEffect(() =>{
    setActiveData(HeadPhoneData[currentIndex])
  }, [currentIndex])



  return (
    <motion.section 
    initial={{ backgroundImage: `radial-gradient(circle, ${activeData.bgColor} 0%, ${activeData.bgColor} 0%)` }}
    animate={{ backgroundImage: `radial-gradient(circle, ${activeData.bgColor}aa 0%, ${activeData.bgColor} 70%)` }}
    transition={{ duration: 0.8 }}
    className="text-white">

      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2
      h-screen md:h-[700px] relative ">
        {/* headphone info section */}
        <div className="  flex flex-col justify-center py-14 md:py-0
        xl:max-w-[500px] order-2 md:order-1">
          <div className="space-y-6  md:space-y-7 text-center
          md:text-left" >

            <AnimatePresence mode="wait">
              <motion.h1
              key={activeData.id}
              variants={SlideRigh(0.4)}
              initial="hidden"
              animate='show'
              exit={'exit'}
              
              className="text-3xl md:text-4xl lg:text-5xl font-bold" >

              {activeData.title}

              </motion.h1>
            </AnimatePresence>
            <AnimatePresence mode="wait">
            <motion.p 
             key={activeData.id}
             variants={SlideRigh(0.8)}
             initial="hidden"
             animate='show'
             exit={'exit'}
             className="text-sm leading-loose text-white/80" >
            {activeData.subtitle}
            </motion.p>
            </AnimatePresence>
            <motion.p
            key={activeData.id}
            variants={SlideRigh(1.1)}
            initial="hidden"
            animate='show'
            exit={'exit'}
            className="text-3xl lg:text-4xl xl:text-5xl font-bold" >{activeData.price}

            </motion.p>

            {/* social media info section */}
            <div className="flex justify-center md:justify-start gap-4 text-3xl " >
              <FaInstagram className="cursor-pointer border rounded-full p-[6px] hover:text-gray-500 "/>
              <FaFacebook className="cursor-pointer border rounded-full p-[6px]  hover:text-gray-500 " />
              <FaTwitter className="cursor-pointer border rounded-full p-[6px]  hover:text-gray-500 " />
            </div>

          </div>
        </div>

        {/* headphone Img section */}
        <div className=" relative flex flex-col items-center justify-center order-1 md:order-2">
          <AnimatePresence mode="wait">
           <motion.img 
           key={activeData.id}
           initial={{ opacity: 0, x: 100}}
           animate = {{ opacity: 1, x: 0}}
           transition={{ duration: 0.5, ease: easeInOut }}
           exit={{ opacity: 0, x: -100}}
           src={activeData.image}  className=" w-[300px] md:w[400px] xl:w-[500px] relative z-10"/>
           </AnimatePresence>
           <div className="text-[300px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 font-poppins
           font-extrabold">
            {activeData.modal}
           </div>
        </div>


      </div>
    </motion.section>
  )
}

export default Hero
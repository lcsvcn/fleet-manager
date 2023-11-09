import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer } from '../utils/motion';
import { HttpStatusCodeMessages } from '../constants';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    var response = {};

    try {
      // this is where you would make the API call to your backend
      if (email === 'test@gmail.com' && password === 'test') {
         response = { status: 200 };
      } else {
         response = { status: 404 };
      }
      

     
        setError(HttpStatusCodeMessages[response.status]);
      
      
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className={`${styles.yPaddings} xs:pr-4 xs:pt-4 xxs:pb-32 xs:pb-48 sm:pb-32 xs:pl-4 sm:pl-8 sm:pr-8 lg:pl-12 lg:pr-12 xl:pl-18 xl:pr-18 `}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full md:mt-[50px]"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-[140px] z-[0] -top-[18px]" />

          <div className="w-full sm:h-[500px] h-[350px] relative">
          <form
            onSubmit={handleSubmit}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full xs:w-[200px] sm:w-[300px] lg:w-[400px] xl:w-[600px] z-[25]"
          >
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            {error && (
            <div
              className={`w-full flex justify-center items-center text-center ${error.color} mb-4 font-bold`}
              style={{ height: '2rem' }}
            >
              {error.message}
            </div>
          )}


            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-400"
              >
                Login
              </button>
            </div>
              
            <div
              className={`w-full flex mt-4 justify-center items-center text-center text-white font-bold`}
              style={{ height: '2rem',  cursor: "pointer" }}
                onClick={() => setError({ "message": "Please contact your administrator", color: "text-red-500" } )}
            >
              Forgot Password
            </div>
          </form>


            <img
              src="/cover.png"
              alt="hero_cover"
              className="w-full h-full object-cover rounded-[140px] z-[10] relative"
            />

           
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Login;

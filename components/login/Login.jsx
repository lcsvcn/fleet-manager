import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles';
import { slideIn, staggerContainer } from '../../utils/motion';
import { StatusCodeLoginMessages, StatusCodeRecoveryMessages, StatusCodeRegisterMessages, LoginFormTypes } from '../../constants';
import { isValidEmail } from '../../utils/validations';
import {baseUrl} from '../../constants';
const Login = () => {
  const [formType, setFormType] = useState(LoginFormTypes.LOGIN);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    var response = {};
    
    if (formType === LoginFormTypes.REGISTER) {
      try {
        const registerResponse = await fetch(`${baseUrl}/clients`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            client_email: email,
            client_password: password,
            first_name: firstName,
            last_name: lastName,
          }),
        });

        console.log('registerResponse', registerResponse);
  
        response = { status: registerResponse.status };
      } catch (error) {
        console.error('Error during registration API call:', error);
        response = { status: 500 }; // Internal server error
      }
      console.log('response status', response.status)
      setError(StatusCodeRegisterMessages[response.status]);
    } else if(formType === LoginFormTypes.LOGIN) {
      try {
        const loginResponse = await fetch(`${baseUrl}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ client_email: email, client_password: password }),
        });
        
        console.log('loginResponse', loginResponse);
        response = { status: loginResponse.status };
      } catch (error) {
        console.error('Error during login API call:', error);
        response = { status: 500 }; // Internal server error
      }
    
      setError(StatusCodeLoginMessages[response.status]);

      if (response.status == 200) {
        localStorage.setItem("client_email", email);
        setTimeout(() => {
          window.location.replace('/dashboard');
        }, 2000);
      }
    } else {
        if(!email) {
            response = { status: 400 };
        } else if (isValidEmail(email)) {
            response = { status: 200 };
        } else {
              response = { status: 404 };
        }

        
        setError(StatusCodeRecoveryMessages[response.status]);
    }

  };

  const switchFormType = (type) => {
    setError(undefined);
    setFormType(type);
  };

  const getButtonText = () => {
    switch (formType) {
      case LoginFormTypes.REGISTER:
        return "Register";
      case LoginFormTypes.LOGIN:
        return "Login";
      case LoginFormTypes.RECOVERY:
        return "Recover";
      default:
        return "Unknown";
    }
  };

  return (
    <section className={`${styles.yPaddings} xs:pr-4 xs:pt-4 xs:pb-48 sm:pb-32 xs:pl-4 sm:pl-8 sm:pr-8 lg:pl-12 lg:pr-12 xl:pl-18 xl:pr-18 `}>
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

          <div className="w-full sm:h-[500px] xs:h-[500px]  h-[350px] relative">
            <form
              id="login-form"
              onSubmit={handleSubmit}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full xs:w-[200px] sm:w-[300px] lg:w-[400px] xl:w-[600px] z-[25]"
            >
                      
            {formType == LoginFormTypes.REGISTER  && (
              <div className="mb-4">
                <div className="flex justify-between">
                  <div className="w-1/2 pr-2">
                    <input
                      type="name"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    />
                  </div>
                  <div className="w-1/2 pl-2">
                    <input
                      type="name"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}
                
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
              
            {formType != LoginFormTypes.RECOVERY && <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            }
        
              
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
                  {getButtonText()}
                </button>
              </div> 
                
              {formType == LoginFormTypes.LOGIN && <div
                  className={`w-full flex mt-4 justify-center items-center text-center text-white font-bold`}
                  style={{ height: '2rem', cursor: "pointer" }}
                  onClick={() => switchFormType(LoginFormTypes.RECOVERY)}
                >
                  Forgot your password?
                </div>
              }
              {formType == LoginFormTypes.LOGIN && <div
                  className={`w-full flex mt-4 justify-center items-center text-center text-white font-bold`}
                  style={{ height: '2rem', cursor: "pointer" }}
                  onClick={() => switchFormType(LoginFormTypes.REGISTER)}
                >
                  Don't have an account yet? Register now
                </div>
              }
              {formType != LoginFormTypes.LOGIN && <div
                className={`w-full flex mt-4 justify-center items-center text-center text-white font-bold`}
                style={{ height: '2rem', cursor: "pointer" }}
                onClick={() => switchFormType(LoginFormTypes.LOGIN)}
              >
                Already have an account? Sign in
              </div>
            }
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

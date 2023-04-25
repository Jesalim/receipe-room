import { Link } from 'react-router-dom';
import LoginLogo from '../assets/login-logo.png';
import spicesImage from '../assets/spices.jpg';

const SignUp = () => {
  return (
    <>
      <div>
        <div className="absolute top-0 left-0 -z-10 h-[100vh] w-screen">
          <img
            src={spicesImage}
            alt="counter top"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-login-gradient h-[100vh] overflow-hidden w-screen text-buff">
          <div
            className="w-screen h-screen flex items-center justify-center opacity-90 rounded-[14px]"
            style={{
              boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
            }}>
            <div className="w-[500px] h-[650px] bg-[#1F1F1F] rounded-lg flex flex-col items-center justify-center mt-[5rem]">
              <div className="flex items-center justify-between gap-10 w-full -mt-20">
                <img src={LoginLogo} alt="" className="w-[170px] h-[170px]" />
                <h1 className="text-[#D69F7E] text-4xl font-bold mr-10 uppercase">
                  SignUp
                </h1>
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-[300px] h-[40px] rounded-lg px-4 text-[#D69F7E] bg-[#1F1F1F] border-[#D69F7E] border-2 outline-none"
                />
              </div>
              <div className="mt-5">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-[300px] h-[40px] rounded-lg px-4 text-[#D69F7E] bg-[#1F1F1F] border-[#D69F7E] border-2 outline-none"
                />
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Username"
                  className="w-[300px] h-[40px] rounded-lg px-4 text-[#D69F7E] bg-[#1F1F1F] border-[#D69F7E] border-2 outline-none"
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-[300px] h-[40px] rounded-lg px-4 text-[#D69F7E] bg-[#1F1F1F] border-[#D69F7E] border-2 outline-none"
                />
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-buff hover:text-bole ml-[10rem] mt-2">
                  Forgot password?
                </a>
              </div>
              <div className="mt-5">
                <button className="bg-bole bg-opacity-80 hover:bg-bean hover:text-buff hover:bg-opacity-80 text-smoke text-[20px] uppercase font-black py-2 px-8 mt-2 mx-auto rounded w-40">
                  SignUp
                </button>
              </div>
              <div className="mt-6 text-center">
                <p className="text-[#525252]">Already have an account?</p>
                <Link
                  to="/logout"
                  className="text-buff hover:text-bole font-semibold">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
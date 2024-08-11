import Image from "next/image";
import React from "react";
import CallbackForm from "./components/CallbackForm";
import Footer from "./components/Footer";

const ContactUs = () => {
  return (
    <div className=" md:space-y-14 space-y-5">
      <nav className="  lg:bg-cyan-300 lg:h-20 w-full ">
        <div className="lg:hidden w-full p-[10px] shadow-sm  flex">
          <p className="my-auto gap-2 flex"><svg className="m-auto " width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.709852 5.39017C0.658939 5.339 0.618602 5.27831 0.591147 5.21156C0.563215 5.14509 0.548828 5.07372 0.548828 5.00163C0.548828 4.92953 0.563215 4.85816 0.591147 4.79169C0.618602 4.72494 0.658939 4.66425 0.709852 4.61309L5.10634 0.216602C5.15703 0.164114 5.21767 0.122247 5.28472 0.0934452C5.35177 0.0646433 5.42388 0.049483 5.49685 0.0488489C5.56982 0.0482148 5.64219 0.0621196 5.70973 0.089752C5.77727 0.117384 5.83863 0.158191 5.89023 0.209791C5.94183 0.26139 5.98263 0.32275 6.01027 0.390289C6.0379 0.457828 6.0518 0.530194 6.05117 0.603164C6.05054 0.676134 6.03538 0.748248 6.00657 0.815296C5.97777 0.882345 5.9359 0.942986 5.88342 0.993681L2.42503 4.45207H12.0896C12.2354 4.45207 12.3751 4.50997 12.4782 4.61303C12.5813 4.71609 12.6392 4.85587 12.6392 5.00163C12.6392 5.14738 12.5813 5.28716 12.4782 5.39022C12.3751 5.49329 12.2354 5.55119 12.0896 5.55119H2.42503L5.88342 9.00957C5.98352 9.11322 6.03892 9.25204 6.03766 9.39613C6.03641 9.54023 5.97861 9.67806 5.87672 9.77996C5.77483 9.88185 5.63699 9.93965 5.4929 9.9409C5.34881 9.94215 5.20999 9.88676 5.10634 9.78665L0.709852 5.39017Z" fill="black"/>
</svg>
 Contact Us</p>
        </div>
      </nav>
      <div className="  md:px-24 px-5 w-full  md:space-y-20 space-y-7 ">
        <div className=" w-full md:space-y-12 space-y-4">
          <h1 className="text-4xl">Contact Us</h1>
          <div>
            <p className="font-bold">
              Resolve your Education and Immigration Queries with our experts
            </p>
            <p className="text-sm text-[#025B95]">
              Reach out to us to inquire about various services offered at
              AdmitSpot
            </p>
          </div>
          <div className="  flex justify-between ">
            <div className=" border border-[#F5F5F5] shadow-md h-[152px] w-[284px] rounded-lg p-5 flex flex-col justify-between">
              <Image height={40} width={40} alt="Call" src="/call.svg" />
              <div>
                <p className="text-2xl">Call</p>
                <p className="text-base text-darkest-primary">
                  +1-905-783-7708
                </p>
              </div>
            </div>
            <div className=" border border-[#F5F5F5] shadow-md h-[152px] w-[284px] rounded-lg p-5 flex flex-col justify-between">
              <Image height={40} width={40} alt="Call" src="/email.svg" />
              <div>
                <p className="text-2xl">E-mail</p>
                <p className="text-base text-darkest-primary">xyz@gmail.com</p>
              </div>
            </div>
            <div className="md:flex hidden border border-[#F5F5F5] shadow-md h-[152px] w-[284px] rounded-lg p-5  flex-col justify-between">
              <Image height={40} width={40} alt="Call" src="/whatsapp.svg" />
              <div>
                <p className="text-2xl">Whatsapp</p>
                <p className="text-base text-darkest-primary">
                  +1-905-783-7708
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" virtual-office border border-lightest-primary rounded-lg w-full  pl-[60px] flex justify-between">
          <div className=" py-10 flex justify-between w-[891px] flex-col-reverse lg:flex-row">
            <Image
              alt="virtual-office"
              width={298}
              height={234}
              src={"/virtual-office.svg"}
            />

            <div className=" w-[275px] md:w-[555px] my-auto space-y-5 text-darkest-primary">
              <h2 className="text-[32px]">Virtual Office</h2>
              <p className="text-[20px] text-darkest-primary text-wrap">
                Schedule a session with one of our Experts.
              </p>
              <div className="text-primary w-fit">
                <div className="flex gap-4">
                  <Image height={25} width={25} src={"/tick.svg"} alt="tick" />{" "}
                  Free consultation up to 30 mins
                </div>
                <div className="flex  gap-4">
                  <Image height={25} width={25} src={"/tick.svg"} alt="tick" />
                  Join From anywhere
                </div>
                <div className="flex  gap-4">
                  <Image height={25} width={25} src={"/tick.svg"} alt="tick" />
                  Get all your queries answered
                </div>
              </div>
            </div>
          </div>
          <div className="md:bg-[#88B1FF] h-[314px] w-[96px] md:h-auto">
            <svg
            className="md:stroke-white stroke-[#88B1FF] mx-auto my-8"
              width="35"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.6066 27.3553L27.3553 2.60658M27.3553 2.60658H6.14214M27.3553 2.60658V23.8198"
             
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className=" w-full h-[605px] flex">
          <CallbackForm />
          <Image
          height={100} 
          width={100}
          className="w-full hidden md:block"
          src={'/maps.svg'}
          alt="maps"
          />
        </div>
     
      </div>  
     <Footer/>
    </div>
  );
};

export default ContactUs;

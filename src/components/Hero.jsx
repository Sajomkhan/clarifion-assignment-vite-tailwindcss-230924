import clarifion_big from "../assets/clarifion_big.png";
import women from "../assets/women.png";
import stars from "../assets/icons/Stars.svg";
import verify from "../assets/icons/verify 1.svg";
import radio_button from "../assets/icons/radio_button.svg";
import clarifion_smal from "../assets/clarifion_smal.png";
import guarantee from "../assets/guarantee.png";
import pay_all from "../assets/pay/pay all.svg";
import { PiCheckBold } from "react-icons/pi";
import { HiArrowRight } from "react-icons/hi";
import { GoLock } from "react-icons/go";

const Hero = () => {
  return (
    <main className="w-full mt-6 lg:mt-12">
      <div className="container bg-[#FAFAFA] mx-auto flex flex-col xl:flex-row gap-12 justify-center lg:px-10 py-4 lg:py-10">
        {/* -----------Left section------------ */}
        <section className="hidden flex-1 md:flex flex-col gap-12">
          {/* -----------heroOmage Image------------ */}
          <img src={clarifion_big} alt="Image" className="h-[591px]" />

          {/* -----------Text & Profile Image------------ */}
          <div className="flex-col gap-6 w-full h-[186px] px-6">
            {/* Profile Image */}
            <div className="flex gap-5 items-center">
              <img src={women} alt="Image" className="h-12" />
              <div className="flex flex-col">
                <img src={stars} alt="Stars" className="h-4 self-start" />
                <div className="flex gap-2">
                  <span className="text-lg font-semibold">Ken T.</span>
                  <img src={verify} alt="verify" />
                  <span className="text-[#5BB59A]">Verified Customer</span>
                </div>
              </div>
            </div>
            {/* text div */}
            <div className="flex gap-5 items-center">
              <p className="text_gray">
                “As soon as the Clarifions arrived I put one in my bedroom. This
                was late in the afternoon. When I went to the bedroom in the
                evening it smelled clean. When I went to bed I felt I could
                breathe better. Wonderful.”
              </p>
            </div>
          </div>
        </section>

        {/* -----------Right section------------ */}
        <section className="flex-1 flex flex-col">
          <h1 className="text-4xl text-center xl:text-left">
            <span className="text-[#2C7EF8]">ONE TIME ONLY </span>special price
            for 6 extra Clarifion for only{" "}
            <span className="text-[#2C7EF8]">$14 Each </span>
            ($84.00 total!)
          </h1>

          <img
            src={clarifion_big}
            alt="Image"
            className="md:hidden flex h-[328px] mt-6"
          />

          {/* Image Div */}
          <div className=" w-full flex gap-4 lg:gap-8 items-center lg:pr-10 mt-9">
            <div className="w-[80px] h-[80px] xl:w-[134px] xl:h-[134px] flex justify-center items-center bg-[#2C7EF8] rounded-lg">
              <img src={clarifion_smal} alt="Image" />
            </div>
            <div className="w-full flex flex-col gap-1.5">
              <div className="w-full flex justify-between items-center">
                <p className="text-lg lg:text-xl">Clarifion Air Ionizer</p>
                <div className="flex gap-2 items-center">
                  <p className="lg:text-lg text-gray-400 font-semibold text line-through">
                    $180
                  </p>
                  <p className="text-lg lg:text-2xl font-semibold text-[#2C7EF8]">
                    $84
                  </p>
                </div>
              </div>
              <img src={stars} alt="Stars" className="h-4 self-start" />
              <div className="flex gap-3">
                <img src={radio_button} alt="Radio Button" />
                <p>12 left in Stock</p>
              </div>
              <p className="hidden lg:flex text_gray">
                Simply plug a Clarifion into any standard outlet and replace
                bulky, expensive air purifiers with a simple.
              </p>
            </div>
          </div>

          {/* Check mark text div */}
          <div className="flex flex-col gap-3 text_gray mt-9 text-[13px] lg:text-base">
            <div className="flex gap-3 items-center">
              <PiCheckBold size={20} className=" text-[#2C7EF8]" />
              <p>
                Negative Ion Technology may{" "}
                <span className="font-semibold">help with allergens</span>
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <PiCheckBold size={20} className=" text-[#2C7EF8]" />
              <p>
                Designed for{" "}
                <span className="font-semibold">air rejuvenation</span>
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <PiCheckBold size={20} className=" text-[#2C7EF8]" />
              <p>
                <span className="font-semibold"> Perfect for every room </span>{" "}
                in all types of places.
              </p>
            </div>
            <div className="flex items-center w-full h-[56px] bg-[#EDF3FD] px-4 mt-5">
              <div className="flex justify-center items-center bg-[#2C7EF8] w-8 h-8 text-white rounded-full">
                %
              </div>
              <p className="ml-3">
                Save <span className=" text-[#2C7EF8]">53% </span>and get{" "}
                <span className=" text-[#2C7EF8]">6 extra Clarifision </span>
                for only <span className=" text-[#2C7EF8]">$14 Each</span>.
              </p>
            </div>
          </div>

          {/* Payment System */}
          <div className="w-full mt-9">
            <div className="w-full h-12 flex gap-3 justify-center items-center text-xl uppercase bg-[#59AE43] text-white rounded-3xl">
              <h1>Yes - Claim my discount</h1>
              <HiArrowRight />
            </div>
            <div className="w-full flex gap-2 lg:gap-0 flex-col lg:flex-row justify-between items-center text-[13px] border-2 rounded px-3 py-2 mt-4">
              <div className="flex gap-3 items-center">
                <div>Free shipping</div>
                <div className="w-[1px] h-4 bg-gray-400" />
                <div className="flex gap-2 items-center">
                  <GoLock /> Secure 256-bit SSL encryption.
                </div>
                <div className="hidden lg:flex w-[1px] h-4 bg-gray-400" />
              </div>
              <div className="lg:hidden flex w-full h-[1px]  bg-gray-400" />
              <img src={pay_all} alt="Logos" className="h-[18px]" />
            </div>
            <p className="text-red-600 text-sm md:text-lg uppercase font-semibold text-center mt-4">
              No thanks, I don’t want this.
            </p>
          </div>

          {/* Guarantee */}
          <div className="flex gap-4 items-center text_gray mt-4">
            <img src={guarantee} alt="Guarantee" />
            <p className="text-[13px] lg:text-base">
              If you are not completely thrilled with your Clarifion - We have a{" "}
              <span className="font-semibold">
                30 day satisfaction guarantee
              </span>
              . Please refer to our return policy at the bottom of the page for
              more details. Happy Shopping!
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Hero;
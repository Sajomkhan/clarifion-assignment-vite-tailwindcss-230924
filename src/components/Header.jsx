import logo from "../assets/logo.svg";
import mcafee from "../assets/mcafee.svg";
import norton from "../assets/norton.svg";
import { IoCheckmarkCircle } from "react-icons/io5";

const Header = () => {
  return (
    <main className="w-full flex flex-col justify-center items-center mt-8">
      {/* -----------Logo Section---------- */}
      <section className="container flex justify-between items-center lg:px-0 px-3">
        <div>
          <img src={logo} alt="Logo" className="h-5 lg:h-9" />
        </div>
        <div className="flex gap-8">
          <div>
            <img src={mcafee} alt="Logo" className="h-5 lg:h-9" />
          </div>
          <div>
            <img src={norton} alt="Logo" className="h-5 lg:h-9" />
          </div>
        </div>
      </section>

      {/* -----------Title Section---------- */}
      <section className="mt-6">
        <h1 className="text-4xl xl:text-6xl text-center">Wait ! Your Order In Progress.</h1>
        <p className="text_gray text-lg sm:text-xl xl:text-3xl text-center mt-4">
          Lorem Ipsum dolor Sit Amet, Consectetur Adipiscing
        </p>
      </section>

      {/* -----------Check Items Section---------- */}
      <section className="container flex justify-between text-sm lg:text-xl mt-8 lg:mt-16">
        <div className="flex flex-col lg:flex-row lg:gap-3 items-center">
          <div className="text-[#85BF55] rounded-full">
            <IoCheckmarkCircle size={36} />
          </div>
          <p className="flex gap-1"><span className="hidden lg:flex">Step 1 : </span>Cart Review</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-3 items-center">
          <div className="text-[#85BF55] rounded-full">
            <IoCheckmarkCircle size={36} />
          </div>
          <p className="flex gap-1"><span className="hidden lg:flex">Step 2 : </span>Checkout</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-3 items-center font-semibold">
          <div className="flex justify-center items-center bg-[#2C7EF8] w-7 h-7 text-white rounded-full m-1">
            3
          </div>
          <p className="flex gap-1"><span className="hidden lg:flex">Step 3 : </span>Special Offer</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-3 items-center">
          <div className="flex justify-center items-center text-[#2C7EF8] w-7 h-7 border-2  border-[#2C7EF8] rounded-full m-1">
            4
          </div>
          <p className="flex gap-1"><span className="hidden lg:flex">Step 4 : </span>Confirmation</p>
        </div>
      </section>
    </main>
  );
};

export default Header;

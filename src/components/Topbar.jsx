import { PiSealCheck, PiVan, PiHeart } from "react-icons/pi";
import { LuCheckCircle } from "react-icons/lu";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useState } from "react";

const items = [
  {
    icon: <PiSealCheck size={22} />,
    title: "30-DAY SATISFACTION GUARANTEE",
  },
  {
    icon: <PiVan size={22} />,
    title: "Free delivery on orders over $40.00",
  },
  {
    icon: <PiHeart size={22} />,
    title: "50.000+ HAPPY CUSTOMERS",
  },
  {
    icon: <LuCheckCircle size={22} />,
    title: "100% Money Back Guarantee",
  },
];

const Topbar = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const activeItem = items[activeSlide]

  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(items.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };
  const nextSlide = () => {
    if (activeSlide === items.length - 1) {
      setActiveSlide(items.length - 1 - 1);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  return (
    <main className="w-full h-[50px] bg-[#252F3D] flex justify-center items-center ">
      <section className="container text_white text-sm uppercase flex justify-between items-center">
        {items.map((item, index) => (
          // ---------------Desktop Display--------------- //
          <div key={index} className="hidden lg:flex gap-3 items-center">
            <span>{item.icon}</span>
            <p>{item.title}</p>
          </div>
        ))}
        {/* ---------------mobile Display--------------- */}
        <div className="lg:hidden w-full flex justify-between items-center text-[13px] px-1">
          <div onClick={prevSlide} className="p-2">
            <AiOutlineLeft size={20} />
          </div>
          <div className="flex items-center gap-2">
            <span>{activeItem.icon}</span>
            <p>{activeItem.title}</p>
          </div>
          <div onClick={nextSlide} className="p-2">
            <AiOutlineRight size={20} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Topbar;

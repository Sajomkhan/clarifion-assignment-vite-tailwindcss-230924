import { GoLock } from "react-icons/go";

const Footer = () => {
  return (
    <main className="w-full h-[88px] flex justify-center items-center bg-[#252F3D]">
        <section className="container flex flex-col lg:flex-row gap-4 lg:gap-0 items-center lg:justify-between text_white text-[12px] lg:text-sm">
            <div className="flex gap-4 items-center">
                <p>Copyright (c) 2023</p>
                <div className="w-[1px] h-4 bg-gray-400" />
                <p>Clarifionsupport@clarifion.com</p>
            </div>
            <div className="flex gap-2 items-center">
                <GoLock/>
                <p>Secure 256-bit SSL encryption.</p>
            </div>

        </section>

    </main>
  )
}

export default Footer
import { useEffect } from "react";
import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";

function App() {
  const IMAGES = [
    "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1497005367839-6e852de72767?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [selectedImage, setSelectedImage] = useState(0);

  const nextSlide = () => {
    setSelectedImage((prev) => (prev + 1) % IMAGES.length);
  };

  const prevSlide = () => {
    setSelectedImage((prev) => {
      const isFirst = prev === 0;
      return isFirst ? IMAGES.length - 1 : prev - 1;
    });
  };

  useEffect(() => {
    const id = setInterval(() => {
      setSelectedImage((prev) => {
        return (prev + 1) % IMAGES.length;
      });
    }, 6000);

    return () => clearInterval(id);
  }, [IMAGES.length]);

  return (
    <>
      <div
        className="w-full h-[600px] md:h-[800px] mx-auto duration-1000 bg-cover bg-center"
        style={{
          backgroundImage: `url(${IMAGES[selectedImage]})`,
          opacity: "80%",
        }}
      ></div>
      <div
        className="hidden md:block absolute top-[450px] bg-black/20 text-white p-2 rounded-full left-[15px]"
        onClick={prevSlide}
      >
        <FaArrowCircleLeft size={40} />
      </div>
      <div
        className="hidden md:block absolute top-[450px]  bg-black/20 text-white p-2 rounded-full right-[15px]"
        onClick={nextSlide}
      >
        <FaArrowCircleRight size={40} />
      </div>
      <div className="flex justify-center gap-4 text-slate-500 p-4">
        {IMAGES.map((item, idx) => (
          <FaCircleDot
            className="cursor-pointer"
            key={idx}
            onClick={() => setSelectedImage(idx)}
            size={30}
          />
        ))}
      </div>
    </>
  );
}

export default App;

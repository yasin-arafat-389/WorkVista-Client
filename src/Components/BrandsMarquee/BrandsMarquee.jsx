import Marquee from "react-fast-marquee";

const BrandsMarquee = () => {
  return (
    <div className="] py-10">
      <div className="w-[80%] mx-auto">
        <h2 className="text-center text-[30px] md:text-[40px] lg:text-[40px] font-bold leading-tight text-gray-800">
          Collaboration with more than{" "}
          <span className="text-[#19A463]">100+</span> Companies
        </h2>

        <Marquee
          speed={120}
          delay={0}
          gradient={[true, true]}
          gradientWidth={50}
        >
          <img
            className="mx-[20px] w-[250px]"
            src="https://i.ibb.co/zfKr4y5/1663220555-removebg-preview.png"
          />

          <img
            className="mx-[20px] w-[250px]"
            src="https://i.ibb.co/R3YC4Nk/1662543991-removebg-preview.png"
          />

          <img
            className="mx-[20px] w-[250px]"
            src="https://i.ibb.co/8sdYJt1/tiger-it-removebg-preview.png"
          />
          <img
            className="mx-[20px] w-[250px]"
            src="https://i.ibb.co/1fYVZT3/Apploye-logo-removebg-preview.png"
          />
        </Marquee>
      </div>
    </div>
  );
};

export default BrandsMarquee;

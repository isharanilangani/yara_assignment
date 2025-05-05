import React from "react";
import PostsFetch from "../components/PostsFetch";

const Home: React.FC = () => {
  return (
    <div className="relative">
      <section
        className="relative block overflow-hidden h-[600px] w-full bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/bg.png')",
        }}
      >
        <div className="absolute inset-0 bg-white opacity-60 z-[1]"></div>

        <div className="relative z-[2] flex flex-col justify-center items-center text-center h-full px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Innovative Solutions for Modern Businesses
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-xl">
            Empowering your vision with expertly crafted digital products that
            deliver real results.
          </p>
          <a
            href="#posts"
            className="btn btn-primary rounded-pill px-4"
          >
            Explore
          </a>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-[1]">
          <svg
            className="relative block w-full h-[100px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffffff"
              d="M0,160L60,165.3C120,171,240,181,360,176C480,171,600,149,720,133.3C840,117,960,107,1080,117.3C1200,128,1320,160,1380,176L1440,192V320H0Z"
            />
          </svg>
        </div>
      </section>

      <div id="posts" className="container mx-auto mt-10 px-4">
        <PostsFetch />
      </div>
    </div>
  );
};

export default Home;

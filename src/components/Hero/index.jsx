import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import Logo from "@/assets/bitcoin-logo.svg";

const Hero = () => {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-screen-xl flex flex-col-reverse items-center justify-between px-4 py-12 gap-8 md:flex-row md:py-16 lg:gap-16">
        <div className="md:max-w-xl text-center space-y-6 md:text-left ">
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl ">
            Explore The Largest{" "}
            <span className="bg-gradient-to-br from-gradientBlueStart to-gradientBlueEnd bg-clip-text text-transparent leading-snug">
              Crypto Marketplaces{" "}
            </span>
          </h1>

          <p className="max-w-md text-grey text-lg sm:text-xl md:text-2xl">
            Track crypto through a public API in real time. Visit the dashboard
            to do so!
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <Button variant="default">
              <Link to="/dashboard" aria-label="Go to Dashboard">
                Dashboard
              </Link>
            </Button>

            <Button variant="outline">
              <Link to="/">Share App</Link>
            </Button>
          </div>
        </div>

        <div className="flex-shrink-0">
          <img
            alt="Bitcoin Logo - Crypto Marketplace"
            src={Logo}
            className="w-48 h-auto object-cover sm:w-64 md:w-80 lg:w-96"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

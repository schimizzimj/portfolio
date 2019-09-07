import React from "react"
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./splash.sass"

const Splash = () => (
  <div className="container h-screen w-screen overflow-hidden px-2">
    <div>
      <h1 className="title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        Hello, I'm <span className="text-indigo-700">Marcus Schimizzi.</span>
      </h1>
      <h2 className="subtitle text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        Welcome to the resume, portfolio, and one-stop shop for everything me.
      </h2>
      <div className="links pt-8 flex justify-center text-4xl xl:text-6xl">
        <a
          id="linkedin"
          href="https://www.linkedin.com/in/marcus-schimizzi-56a6229b"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a id="github" href="https://github.com/schimizzimj" target="_blank">
          <FaGithub />
        </a>
        <a
          id="facebook"
          href="https://facebook.com/marcus.j.schimizzi"
          target="_blank"
        >
          <FaFacebook />
        </a>
        <a
          id="instagram"
          href="https://instagram.com/marcusschimizzi"
          target="_blank"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  </div>
)

export default Splash

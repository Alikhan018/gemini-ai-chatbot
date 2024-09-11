"use client";

import { Navbar } from "flowbite-react";
import Gemini from "../assets/images/gemini.png";

export function NavbarComponent() {
  return (
    <Navbar fluid className="rounded-lg">
      <Navbar.Brand href="https://openai.com">
        <img src={Gemini} className="mr-3 h-6 sm:h-9" alt="Open-Ai" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
      </Navbar.Brand>
      <span>
        powered by <strong>Google</strong>
      </span>
    </Navbar>
  );
}

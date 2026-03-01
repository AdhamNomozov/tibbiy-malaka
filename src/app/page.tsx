"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Gallery from "@/components/Gallery";
import License from "@/components/License";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DirectionsModal from "@/components/DirectionsModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDirection, setSelectedDirection] = useState("");

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSelectDirection = (direction: string) => {
    setSelectedDirection(direction);
    setIsModalOpen(false);
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Courses onOpenModal={handleOpenModal} />
      <Gallery />
      <License />
      <Team />
      <Contact selectedDirection={selectedDirection} />
      <Footer />
      
      <DirectionsModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onSelect={handleSelectDirection} 
      />
    </main>
  );
}

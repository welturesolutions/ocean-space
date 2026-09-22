"use client";
import CareerBanner from "./career-component/career-banner";
import CareerSection from "./career-component/career-section";
import CareerJourney from "./career-component/career-journey";
import CareerPosition from "./career-component/career-position";

export default function Career() {
  return (
    <>
      <div>
        <CareerBanner />
        <CareerSection />
        <CareerJourney />
        <CareerPosition />
      </div>
    </>
  );
}

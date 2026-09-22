"use client";
import { motion } from "framer-motion";
import CareerListingBanner from "../career-component/career-listing-banner";
import CareerListingSection from "../career-component/career-listing-section";
import CareerOpenPosition from "../career-component/career-open-position";

export default function CareerListing() {
  return (
    <>
      <CareerListingBanner />
      <CareerListingSection />
      <CareerOpenPosition />
    </>
  );
}

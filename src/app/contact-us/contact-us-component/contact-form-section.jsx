"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "./contact-form";

export default function ContactUsFormSection() {
  return (
    <>
      <div className="bg-white rounded-t-[40px] -mt-[3em]">
        <div className="mx-auto 2xl:max-w-[1600px] px-[1rem] md:px-[2.5rem] py-[5em] md:pt-[8em] md:pb-[5em] xl:py-[10em]">
          <div className="grid xl:grid-cols-2 items-center gap-[5em] md:gap-[8em] xl:gap-0">
            <div className="hidden md:flex justify-center w-[34em] h-[34em] xl:w-[85%] 2xl:w-[90%] xl:h-[80%] 2xl:h-[90%] rounded-[50%] items-center radar-bg relative py-[13em] xl:p-0 mx-auto xl:mx-0">
              <div className="flex flex-col gap-[15px] items-center absolute transform translate-x-[-90px_-140px] xl:translate-x-[-90px_-200px]">
                <div className="contact-icon-bg icon-2 rounded-[50%] p-[8px] w-max h-max">
                  <Image
                    className="w-[40px] h-[40px] p-[8px] object-contain"
                    src="/contact-us/contact-icon-1.svg"
                    alt="contactUsIcon"
                    width={500}
                    height={500}
                  />
                </div>
                <p className="bg-[#DBF4FF] rounded-[15px] py-[8px] px-[15px] text-[#313131] font-[600] !text-[12px]">
                  Back-Office IT Solutions
                </p>
              </div>
              <div className="flex flex-col gap-[15px] items-center absolute transform translate-x-[180px_-60px] xl:translate-x-[210px_-110px]">
                <div className="contact-icon-bg icon-3 rounded-[50%] p-[8px] w-max h-max">
                  <Image
                    className="w-[50px] h-[50px] p-[8px] object-contain"
                    src="/contact-us/contact-icon-2.svg"
                    alt="contactUsIcon"
                    width={500}
                    height={500}
                  />
                </div>
                <p className="bg-[#DBF4FF] rounded-[15px] py-[8px] px-[15px] text-[#313131] font-[600] !text-[12px]">
                  AI & Digital Transformation
                </p>
              </div>
              <div className="flex flex-col gap-[15px] items-center absolute transform translate-x-[160px_130px] xl:translate-x-[210px_150px]">
                <div className="contact-icon-bg icon-4 rounded-[50%] p-[8px] w-max h-max">
                  <Image
                    className="w-[40px] h-[40px] p-[8px] object-contain"
                    src="/contact-us/contact-icon-3.svg"
                    alt="contactUsIcon"
                    width={500}
                    height={500}
                  />
                </div>
                <p className="bg-[#DBF4FF] rounded-[15px] py-[8px] px-[15px] text-[#313131] font-[600] !text-[12px]">
                  IT Support & Helpdesk
                </p>
              </div>
              <div className="flex flex-col gap-[15px] items-center absolute transform translate-x-[-120px_170px] xl:translate-x-[-120px_250px]">
                <div className="contact-icon-bg icon-5 rounded-[50%] p-[8px] w-max h-max">
                  <Image
                    className="w-[50px] h-[50px] p-[8px] object-contain"
                    src="/contact-us/contact-icon-4.svg"
                    alt="contactUsIcon"
                    width={500}
                    height={500}
                  />
                </div>
                <p className="bg-[#DBF4FF] rounded-[15px] py-[8px] px-[15px] text-[#313131] font-[600] !text-[12px]">
                  Cloud & Infrastructure Management
                </p>
              </div>
              <div className="flex flex-col gap-[15px] items-center absolute transform translate-x-[-200px_20px] xl:translate-x-[-230px_20px] 2xl:translate-x-[-270px_20px]">
                <div className="contact-icon-bg icon-1 rounded-[50%] p-[8px] w-max h-max">
                  <Image
                    className="w-[50px] h-[50px] p-[8px] object-contain"
                    src="/contact-us/contact-icon-5.svg"
                    alt="contactUsIcon"
                    width={500}
                    height={500}
                  />
                </div>
                <p className="bg-[#DBF4FF] rounded-[15px] py-[8px] px-[15px] text-[#313131] font-[600] !text-[12px]">
                  Cybersecurity Solutions
                </p>
              </div>
              <div className="contact-gradient-bg rounded-[50%] p-[15px] w-max h-max z-10">
                <Image
                  className="w-[50px] h-[50px] p-[5px] object-contain"
                  src="/contact-us/contact-us-icon.svg"
                  alt="contactUsIcon"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="md:hidden">
              <Image
                className="w-full h-full object-contain"
                src="/contact-us/contact-radar-img.svg"
                alt="contactUsIcon"
                width={1000}
                height={1000}
              />
            </div>
            <div className="xl:w-[90%]">
              <h4 className="text-[#0A0D14] font-[600] mb-[15px]">
                Get in Touch
              </h4>
              <p className="text-[#555E6E]">
                Need IT support or a consultation? We're here to help!
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

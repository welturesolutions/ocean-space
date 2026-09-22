"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FormInputDropdown from "@/app/global/Input/formInputDropDown";
import Image from "next/image";
import FormInput from "@/app/global/Input/formInput";
import CountryList from "country-list-with-dial-code-and-flag";

export default function CareerForm() {
  const data = CountryList.getAll();

  const country = data
    .map((country) => {
      const { data: c } = country;
      return {
        label: c.name,
        value: c.name.toLowerCase(),
        countryFlag: c.flag,
      };
    })
    .filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.label === item.label)
    )

    .sort((a, b) => a.label.localeCompare(b.label));

  const [countryError, setCountryError] = useState(false);
  const [resumeError, setResumeError] = useState(false);

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    country: "",
    resume: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const onCareerFormSubmit = (e) => {
    e.preventDefault();

    if (!formValues.country) {
      setCountryError(true);
      return;
    } else {
      setCountryError(false);
    }

    if (!formValues.resume) {
      setResumeError(true);
      return;
    } else {
      setResumeError(false);
    }

    console.log("submited data", formValues);
  };

  return (
    <div className="mx-auto px-[1rem] pb-[5em] md:pb-[8em] md:px-[2.5rem] xl:pb-[10em] xl:max-w-[1600px]">
      <div id="career-form" className="m-auto xl:w-[60%]">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
          }}
          viewport={{ once: true }}
          className="flex flex-col gap-[2rem] bg-[#FFFFFF] rounded-[40px] px-[20px] py-[40px] md:px-[50px] md:py-[80px]"
        >
          <div className="flex flex-col gap-[1rem]">
            <h5 className="!text-[24px] !font-[600] plexSans">
              Apply for this job
            </h5>
            <p className="!text-[#555E6E] !font-[400]">
              Please complete the fields below for our hiring team to review.{" "}
              <br className="hidden md:block" />
              Thank you.
            </p>
          </div>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-[15px]"
            onSubmit={onCareerFormSubmit}
          >
            <div className="floating-input relative text-[#0A0D14]">
              <p className="mb-[10px] font-[600]">
                First Name <span className="text-[#FF0000] font-[600]">*</span>
              </p>
              <input
                type="text"
                name="firstName"
                className="bg-[#ffffff] border-[1px] border-[#CACACA] rounded-[10px] px-[20px] w-full h-[3em]"
                required
                value={formValues.firstName}
                onChange={handleInputChange}
              />
            </div>

            <div className="floating-input relative text-[#0A0D14]">
              <p className="mb-[10px] font-[600]">
                Last Name <span className="text-[#FF0000] font-[600]">*</span>
              </p>
              <input
                type="text"
                name="lastName"
                className="bg-[#ffffff] border-[1px] border-[#CACACA] rounded-[10px] px-[20px] w-full h-[3em]"
                required
                value={formValues.lastName}
                onChange={handleInputChange}
              />
            </div>

            <div className="floating-input relative text-[#0A0D14]">
              <p className="mb-[10px] font-[600]">
                Email Address
                <span className="text-[#FF0000] font-[600]">*</span>
              </p>
              <input
                name="emailAddress"
                type="email"
                className="bg-[#ffffff] border-[1px] border-[#CACACA] rounded-[10px] px-[20px] w-full h-[3em]"
                required
                value={formValues.emailAddress}
                onChange={handleInputChange}
              />
            </div>

            <div className="floating-input relative text-[#0A0D14]">
              <p className="mb-[10px] font-[600]">
                Phone Number{" "}
                <span className="text-[#FF0000] font-[600]">*</span>
              </p>
              {/* <FormInput
                isForPhoneNumber={true}
                internationalNumberOption={internationalNumber}
                setState={(val) => {
                  setFormValues((prev) => ({ ...prev, phoneNumber: val }));
                }}
                value={formValues.phoneNumber}
              /> */}

              <input
                name="phoneNumber"
                type="number"
                className="bg-[#ffffff] border-[1px] border-[#CACACA] rounded-[10px] px-[20px] w-full h-[3em]"
                required
                value={formValues.phoneNumber}
                onChange={handleInputChange}
              />
            </div>

            <div className="floating-input relative text-[#0A0D14] md:col-span-2">
              <p className="mb-[10px] font-[600]">
                Country
                <span className="text-[#FF0000] font-[600]">*</span>
              </p>
              <FormInputDropdown
                options={country}
                placeholder={"Please Select"}
                borderRadius={"10px"}
                width={"full"}
                name={"country"}
                onSelectionChange={(key) =>
                  handleInputChange({ target: { name: "country", value: key } })
                }
                selectedKey={formValues.country}
                dropdownClassName={"countryDropdown"}
                isForCountryDropdown={true}
                isRequired={true}
                stateError={countryError}
                className="h-[3em]"
              />
              {countryError && (
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                  className="!text-red-500 text-sm mt-1 font-[500] max-sm:!text-[14px]"
                >
                  Please select a country.
                </p>
              )}
            </div>

            <div className="floating-input relative text-[#0A0D14] md:col-span-2">
              <p className="mb-[10px] font-[600]">
                Resume/CV
                <span className="text-[#FF0000] font-[600]">*</span>
              </p>

              <label
                className="flex flex-col gap-[10px] items-center justify-center border-2 border-dashed w-full p-6 rounded-lg cursor-pointer text-gray-500 hover:bg-gray-50"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  const file = e.dataTransfer.files[0];
                  if (file) {
                    document.getElementById("file-label").textContent =
                      file.name;
                    setFormValues((prev) => ({
                      ...prev,
                      resume: file,
                    }));
                  }
                }}
              >
                <Image
                  className="w-[20px] h-[20px] max-sm:w-[60px] max-sm:h-[60px] md:w-[80px] md:h-[80px] xl:w-[80px] xl:h-[80px]"
                  src="/services/upload-icon.svg"
                  alt="uploadIcon"
                  width={100}
                  height={100}
                />
                <span id="file-label" className="max-sm:text-center">
                  <span className="!font-[700] !text-[14px] text-[#002991] ">
                    Upload a file{" "}
                  </span>
                  or drag and drop here
                </span>
                <input
                  type="file"
                  name="resume"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      document.getElementById("file-label").textContent =
                        file.name;
                      setFormValues((prev) => ({
                        ...prev,
                        resume: file,
                      }));
                    }
                  }}
                />
              </label>

              <p className="!text-[#555E6E] !font-[400] !text-[16px] mt-[5px]">
                Maximum file size 5 MB - acceptable file types .pdf, .doc, .docx
              </p>
              {resumeError && (
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                  className="!text-red-500 text-sm mt-1 font-[500] max-sm:!text-[14px]"
                >
                  Please select or drop a file to upload.
                </p>
              )}
            </div>
            <div className="floating-input relative text-[#0A0D14] md:col-span-2">
              <p className="text-[#555E6E] mb-[10px] font-[400] !text-[16px] mt-[1em]">
                <span className="text-[#FF0000] font-[600]">*</span>
                By submitting this application, I agree that I have read the
                privacy policy and confirm that my personal details to be able
                to process my job application.
              </p>
            </div>

            <div className="text-left md:col-span-2">
              <button
                type="submit"
                className="bg-[#60CDFF] hover:opacity-[0.8] rounded-2xl max-sm:w-full max-sm:px-[25px] md:w-auto px-[30px] py-[10px] text-[#002991] flex items-center gap-[10px] justify-center font-[700] btn-shadow cursor-pointer"
              >
                Submit Application
                <svg
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.17244 6.5007L0.222656 1.55093L1.63688 0.136719L8.00084 6.5007L1.63688 12.8646L0.222656 11.4504L5.17244 6.5007Z"
                    fill="#002991"
                  />
                </svg>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

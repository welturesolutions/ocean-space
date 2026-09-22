"use client";
import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const subjectOptions = [
    "IT Support & Helpdesk",
    "Cloud & Infrastructure Management",
    "Cybersecurity Solutions",
    "Back-Office IT Solutions",
    "AI & Digital Transformation",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubjectSelect = (option) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      subject: option,
    }));
    setIsDropdownOpen(false);
    setSelectedOption(true);
    setSubjectError(false); // Clear error when an option is selected
  };

  const onContactFormSubmit = async (e) => {
    e.preventDefault();

    // Validate if subject is selected
    if (!formValues.subject) {
      setSubjectError(true);
      return;
    }

    const formData = { ...formValues };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const text = await response.text();
      const result = text ? JSON.parse(text) : { message: "", status: "error" };

      setMessage(result.message);
      setStatus(result.status);
      setDisabled(result.status === "success");

      setFormValues({
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
        subject: "",
        message: "",
      });

      setSelectedOption(false);
    } catch (error) {
      console.error("Fetch Error:", error);
      setMessage("An error occurred while submitting the form.");
      setStatus("error");
    }
  };

  return (
    <div className="relative isolate overflow-hidden contact-form-section">
      <div className="pt-[50px]">
        <div className="">
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-[20px]"
            onSubmit={onContactFormSubmit}
          >
            {/* First Name */}
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

            {/* Last Name */}
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

            {/* Email Address */}
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

            {/* Phone Number */}
            <div className="floating-input relative text-[#0A0D14]">
              <p className="mb-[10px] font-[600]">
                Phone Number{" "}
                <span className="text-[#FF0000] font-[600]">*</span>
              </p>
              <input
                type="text"
                name="phoneNumber"
                className="bg-[#ffffff] border-[1px] border-[#CACACA] rounded-[10px] px-[20px] w-full h-[3em]"
                required
                value={formValues.phoneNumber}
                onChange={handleInputChange}
              />
            </div>

            {/* Subject Dropdown */}
            <div className="floating-input relative text-[#0A0D14] md:col-span-2">
              <p className="mb-[10px] font-[600]">
                What solution you are looking for?{" "}
                <span className="text-[#FF0000] font-[600]">*</span>
              </p>
              <div
                className={`relative bg-[#ffffff] border-[1px] border-[#CACACA] rounded-[10px] px-[20px] w-full h-[3em] flex items-center justify-between cursor-pointer text-[#0A0D14] ${
                  subjectError ? "border-red-500" : "border-gray-300"
                }`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span
                  className={`${
                    formValues.subject ? "text-[#0A0D14]" : "text-[#0A0D14]"
                  }`}
                >
                  {formValues.subject || "Please Select"}
                </span>
                <svg
                  width="14"
                  height="9"
                  viewBox="0 0 14 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transform transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-0" : "-rotate-90"
                  } ${selectedOption ? "fill-[#0A0D14]" : "fill-[#0A0D14]"}`}
                >
                  <path
                    d="M7.00014 5.6714L11.9499 0.72168L13.3641 2.13589L7.00014 8.4999L0.63623 2.13589L2.05044 0.72168L7.00014 5.6714Z"
                    fill="#0A0D14"
                  />
                </svg>
              </div>

              {isDropdownOpen && (
                <ul className="absolute top-[80px] left-0 w-full bg-white border-[1px] border-[#CACACA] rounded-[10px] z-10 shadow-lg">
                  {subjectOptions.map((option) => (
                    <li
                      key={option}
                      className="px-4 py-2 cursor-pointer hover:bg-[#60CDFF] text-[#0A0D14]"
                      onClick={() => handleSubjectSelect(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}

              {/* Error message */}
              {subjectError && (
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                  className="!text-red-500 text-sm mt-1 font-syne font-[500]"
                >
                  Please select a subject.
                </p>
              )}
            </div>

            {/* Message */}
            <div className="floating-input relative text-[#0A0D14] md:col-span-2 placeholder-text">
              <p className="mb-[10px] font-[600]">Messages</p>
              <textarea
                name="message"
                rows={4}
                className="bg-[#ffffff] border-[1px] border-[#CACACA] rounded-[10px] w-full h-[10em] p-[20px]"
                required
                value={formValues.message}
                placeholder="How can we help? (Optional)"
                onChange={handleInputChange}
              />
            </div>

            {/* Fill up */}
            <div className="md:col-span-2">
              <p className="text-[14px] text-[#555E6E]">
                <span className="text-[#FF0000] font-[600]">*</span> By filling
                out this form and clicking submit, you agree to our{" "}
                <Link
                  href="/privacy-policy"
                  className="!font-[400] !text-[18px] text-[#002991] cursor-pointer"
                >
                  Privacy Policy.
                </Link>
              </p>
            </div>

            {/* Submit Button */}
            <div className="text-left md:col-span-2">
              <button
                type="submit"
                className="bg-[#60CDFF] hover:opacity-[0.8] rounded-[20px] px-[30px] py-[10px] text-[#002991] flex items-center gap-[10px] justify-center font-[700] btn-shadow cursor-pointer"
              >
                Submit
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

          {/* Validation Message */}
          <div className="md:col-span-2">
            {message?.length > 0 && (
              <div
                className={`y-2 text-sm font-[500] mt-10 font-syne ${
                  status === "success" ? "text-green-500" : "text-red-500"
                }`}
              >
                <span>{message}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

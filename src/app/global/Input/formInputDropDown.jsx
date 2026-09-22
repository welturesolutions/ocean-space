"use client";

import { useState } from "react";
import { Autocomplete, AutocompleteItem } from "@heroui/react";
import { useEffect } from "react";
import Image from "next/image";

export default function FormInputDropdown({
  options = [],
  placeholder,
  onSelectionChange = () => {},
  selectedKey,
  borderRadius = "2rem",
  width = "100%",
  name,
  label,
  dropdownClassName = "",
  isForCountryDropdown = false,
  isRequired = false,
  stateError = false,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchCountryValue, setSearchCountryValue] = useState("");
  const widthClass = width === "full" ? "w-full" : `w-[${width}]`;
  const widthException = name === "country" ? "2xl:w-full" : "";

  const checkIcon = (
    <Image
      className="w-[15px] h-[15px] xl:w-[20px] xl:h-[20px]"
      src="/services/Check.svg"
      alt="chatIcon"
      width={100}
      height={100}
    />
  );

  useEffect(() => {
    if (dropdownOpen && isForCountryDropdown) {
      const countryDropdown = document.querySelector(`.${dropdownClassName}`);

      if (countryDropdown && !countryDropdown.querySelector(".searchInput")) {
        const searchInputDiv = document.createElement("div");
        searchInputDiv.className = "searchInput px-2 py-1 w-full";

        const inputElement = document.createElement("input");
        inputElement.id = "searchCountryInput";
        inputElement.type = "text";
        inputElement.placeholder = "Search for countries";

        inputElement.style.backgroundImage = "url('/services/search-icon.svg')";
        inputElement.style.backgroundRepeat = "no-repeat";
        inputElement.style.backgroundPosition = "left center";
        inputElement.style.backgroundSize = "15px 15px";
        inputElement.style.paddingLeft = "25px";

        inputElement.className =
          "border-b-1 text-[14px] text-[#555E6E] px-2 py-1 w-full focus:outline-none";

        inputElement.addEventListener("input", (e) => {
          setSearchCountryValue(e.target.value);
        });

        searchInputDiv.appendChild(inputElement);
        countryDropdown.prepend(searchInputDiv);
      }
    } else {
      setSearchCountryValue("");
    }
  }, [dropdownOpen]);

  const searchCountryOpt = options.filter((opt) => {
    const searchCondition = searchCountryValue
      ? opt.label.toLowerCase().includes(searchCountryValue.toLowerCase())
      : true;

    return searchCondition;
  });

  return (
    <Autocomplete
      aria-labelledby="formInputDropdown"
      name={name}
      className={` max-sm:w-full ${widthClass} ${widthException}`}
      label={label}
      placeholder={placeholder}
      variant="bordered"
      aria-label={placeholder}
      isRequired={isRequired}
      inputProps={{
        readOnly: true,
        value: selectedKey
          ? searchCountryOpt.find((opt) => opt.value === selectedKey)?.label
          : "",
        classNames: {
          inputWrapper:
            `border ${
              stateError ? "border-red-500" : "border-[#CACACA]"
            } bg-[#FFFFFF] rounded-[${borderRadius}] !ring-0 !shadow-none ` +
            "focus-within:!ring-0 focus-within:!shadow-none py-[8px] px-[18px] h-[3em] [&_svg]:transition-transform [&_svg]:duration-300" +
            (dropdownOpen ? " [&_svg]:rotate-180" : ""),

          input:
            "focus:outline-none focus:!ring-0 focus:!shadow-none text-[#0A0D14] nunitoSans font-[400]",
        },
      }}
      onOpenChange={(isOpen) => setDropdownOpen(isOpen)}
      classNames={{
        popoverContent: `${dropdownClassName} bg-white border border-[#CACACA] rounded-[1rem] shadow-md p-0`,
      }}
      onSelectionChange={onSelectionChange}
      selectedKey={selectedKey}
    >
      {searchCountryOpt.map((opt) => {
        const isSelected = selectedKey === opt.value; // check against selectedKey
        return (
          <AutocompleteItem
            key={opt.value}
            textValue={opt.value}
            className="px-4 py-2 hover:bg-[#60cdff] cursor-pointer"
          >
            <div className="flex justify-between items-center w-full">
              <span>
                {isForCountryDropdown ? opt.countryFlag + " " : ""}
                {opt.label}
              </span>
              {isSelected && checkIcon}
            </div>
          </AutocompleteItem>
        );
      })}
    </Autocomplete>
  );
}

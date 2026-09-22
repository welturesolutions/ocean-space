"use client";
import { Input, Autocomplete, AutocompleteItem } from "@heroui/react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function FormInput({
  placeholder,
  setState,
  value = "",
  isForPhoneNumber = false,
  internationalNumberOption = [],
}) {
  const searchIcon = (
    <Image
      className="w-[15px] h-[15px] xl:w-[15px] xl:h-[15px]"
      src="/services/search-icon.svg"
      alt="chatIcon"
      width={100}
      height={100}
    />
  );

  return (
    <div className={`flex flex-wrap md:flex-nowrap`}>
      <Input
        placeholder={placeholder}
        value={value}
        classNames={{
          inputWrapper: `border border-[#CACACA] bg-[#FFFFFF] rounded-[2rem] !ring-0 py-[8px] px-[18px] h-[3em]`,
          input: `focus:outline-none focus:!ring-0 focus:!shadow-none pl-[0.5em] text-[#0A0D14] nunitoSans`,
        }}
        startContent={searchIcon}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
}

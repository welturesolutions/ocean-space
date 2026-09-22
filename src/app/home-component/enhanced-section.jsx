"use client";

import React, { useCallback, useState, forwardRef, useEffect } from "react";
import dynamic from "next/dynamic";

// shadcn
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// utils
import { cn } from "@/lib/utils";

// assets
import { ChevronDown, CheckIcon, Globe } from "lucide-react";

// Dynamically import CircleFlag to avoid SSR issues
const CircleFlag = dynamic(
  () => import("react-circle-flags").then((mod) => mod.CircleFlag),
  {
    ssr: false, // Disable server-side rendering
  }
);

// data
import { countries } from "country-data-list";

const CountryDropdownComponent = (
  {
    options = countries.all.filter(
      (country) =>
        country.emoji && // Must have emoji
        country.status !== "deleted" && // Not deleted
        country.ioc !== "PRK" && // Not North Korea
        country.alpha3 && // Must have alpha3
        country.alpha3.trim() !== "" // alpha3 must not be empty
    ),
    onChange,
    defaultValue,
    disabled = false,
    placeholder = "Select a country",
    slim = false,
    ...props
  },
  ref
) => {
  const [open, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    if (defaultValue) {
      const initialCountry = options.find(
        (country) => country.alpha3 === defaultValue
      );
      if (initialCountry) {
        setSelectedCountry(initialCountry);
      } else {
        setSelectedCountry(null);
      }
    } else {
      setSelectedCountry(null);
    }
  }, [defaultValue, options]);

  const handleSelect = useCallback(
    (country) => {
      console.log("🌍 CountryDropdown value: ", country);
      setSelectedCountry(country);
      if (onChange) {
        onChange(country);
      }
      setOpen(false);
    },
    [onChange]
  );

  const triggerClasses = cn(
    "flex h-9 w-[285px] items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
    slim === true && "w-20"
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        ref={ref}
        className={triggerClasses}
        disabled={disabled}
        {...props}
        key={selectedCountry ? selectedCountry.alpha3 : "default"}
      >
        {selectedCountry ? (
          <div className="flex items-center flex-grow w-0 gap-2 overflow-hidden">
            <div className="inline-flex items-center justify-center w-5 h-5 shrink-0 overflow-hidden rounded-full">
              <CircleFlag
                countryCode={selectedCountry.alpha2.toLowerCase()}
                height={20}
              />
            </div>
            {slim === false && (
              <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                {selectedCountry.name}
              </span>
            )}
          </div>
        ) : (
          <span>{slim === false ? placeholder : <Globe size={20} />}</span>
        )}
        <ChevronDown size={16} />
      </PopoverTrigger>
      <PopoverContent
        collisionPadding={10}
        side="bottom"
        className="min-w-[--radix-popper-anchor-width] p-0"
      >
        <Command className="w-full max-h-[200px] sm:max-h-[270px]">
          <CommandList>
            <div className="sticky top-0 z-10 bg-popover">
              <CommandInput placeholder="Search country..." />
            </div>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {options
                .filter((x) => x.name)
                .map((option) => (
                  <CommandItem
                    className="flex items-center w-full gap-2"
                    key={option.alpha3} // Use alpha3 as key
                    onSelect={() => handleSelect(option)}
                  >
                    <div className="flex flex-grow w-0 space-x-2 overflow-hidden">
                      <div className="inline-flex items-center justify-center w-5 h-5 shrink-0 overflow-hidden rounded-full">
                        <CircleFlag
                          countryCode={option.alpha2.toLowerCase()}
                          height={20}
                        />
                      </div>
                      <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                        {option.name}
                      </span>
                    </div>
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4 shrink-0",
                        option.name === selectedCountry?.name
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

CountryDropdownComponent.displayName = "CountryDropdownComponent";

export const CountryDropdown = forwardRef(CountryDropdownComponent);

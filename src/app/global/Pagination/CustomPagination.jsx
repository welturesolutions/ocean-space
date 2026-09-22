"use client";
import { Button } from "@heroui/react";

const LeftChevronIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-[20px] h-[20px] xl:w-[24px] xl:h-[24px]"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5 8.25 12l7.5-7.5"
    />
  </svg>
);

const RightChevronIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-[20px] h-[20px] xl:w-[24px] xl:h-[24px]"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
);

export default function CustomPagination({
  total = 10,
  state,
  setState,
  nextPageLength,
}) {
  const handlePrev = () => setState((p) => Math.max(1, p - 1));
  const handleNext = () => setState((p) => Math.min(total, p + 1));

  return (
    <div className="flex items-center justify-center gap-4 mt-[4rem]">
      <Button
        isIconOnly
        radius="full"
        className={`w-10 h-10 ${
          state === 1 ? "bg-[#CCCCCC]" : "bg-[#60CDFF] text-[#002991]"
        }`}
        onPress={handlePrev}
        isDisabled={state === 1}
      >
        <LeftChevronIcon />
      </Button>

      <span className="text-base font-medium">
        {state} of {total}
      </span>

      <Button
        isIconOnly
        radius="full"
        className={`w-10 h-10 ${
          nextPageLength === 0 || state === total
            ? "bg-[#CCCCCC]"
            : "bg-[#60CDFF]"
        }`}
        onPress={handleNext}
        isDisabled={state === total || nextPageLength === 0}
      >
        <RightChevronIcon />
      </Button>
    </div>
  );
}

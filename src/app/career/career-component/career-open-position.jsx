"use client";
import { useEffect, useMemo, useState } from "react";
import FormInput from "@/app/global/Input/formInput";
import FormInputDropdown from "@/app/global/Input/formInputDropDown";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import CustomPagination from "@/app/global/Pagination/CustomPagination";

export default function CareerOpenPosition() {
  // Contentful-powered jobs
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dynamic job department options (from Contentful team field)
  const jobDepartment = useMemo(() => {
    const uniqueTeams = Array.from(
      new Set((jobs || []).map((j) => j?.fields?.department).filter(Boolean))
    );
    return uniqueTeams.map((team) => ({ label: team, value: team }));
  }, [jobs]);

  // Dynamic employment type options from Contentful
  const employmentType = useMemo(() => {
    const uniqueTypes = Array.from(
      new Set(
        (jobs || []).map((j) => j?.fields?.employmentType).filter(Boolean)
      )
    );
    return uniqueTypes.map((type) => ({ label: type, value: type }));
  }, [jobs]);

  const [jobDepartmentState, setJobDepartmentState] = useState("");
  const [employementTypeState, setEmploymentType] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);

  // Fetch jobs from Contentful API route
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/api/contentful?content_type=job&limit=50");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (data?.success) {
          setJobs(Array.isArray(data.data) ? data.data : []);
        } else {
          throw new Error("Failed to load jobs");
        }
      } catch (e) {
        setError(e?.message || "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const handleEmploymentTypeChange = (value) => {
    setEmploymentType(value);
  };

  const handleJobDepartmentChange = (value) => {
    setJobDepartmentState(value);
  };

  const handleClearField = () => {
    setJobDepartmentState("");
    setEmploymentType("");
    setSearchValue("");
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesTeam = jobDepartmentState
      ? job?.fields?.department === jobDepartmentState
      : true;
    const matchesEmploymentType = employementTypeState
      ? job?.fields?.employmentType === employementTypeState
      : true;
    const matchesSearch = searchValue
      ? job?.fields?.title?.toLowerCase().includes(searchValue.toLowerCase())
      : true;
    return matchesTeam && matchesEmploymentType && matchesSearch;
  });

  const filteredPosition = filteredJobs.slice((page - 1) * 6, page * 6);

  const startIndex = page * 6;
  const remaining = filteredJobs.length - startIndex;
  const nextPageLength = Math.max(0, Math.min(6, remaining));

  const totalPages = Math.ceil(filteredJobs.length / 6) || 1;

  return (
    <div className="bg-no-repeat bg-cover bg-center text-[#0A0D14] !bg-[#F6F8FA]">
      <div className="mx-auto px-[1rem] py-[5em] md:px-[2.5rem] md:py-[8em] xl:max-w-[1600px] xl:py-[10em] open-positions-dropdown">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.8 },
          }}
          viewport={{ once: true }}
        >
          <h3 className="!text-[25px] md:!text-[35px] font-[600] text-center xl:text-left">
            Browse Open Positions
          </h3>
          <div className="grid md:grid-cols-3 gap-[20px] my-[3em]">
            <FormInput
              placeholder={"Search Jobs..."}
              setState={setSearchValue}
              value={searchValue}
            />
            <FormInputDropdown
              options={jobDepartment}
              placeholder={"Choose Job Department"}
              onSelectionChange={handleJobDepartmentChange}
              selectedKey={jobDepartmentState}
            />
            <FormInputDropdown
              options={employmentType}
              placeholder={"Choose Employment Type"}
              selectedKey={employementTypeState}
              onSelectionChange={handleEmploymentTypeChange}
            />
          </div>
        </motion.div>
        {jobDepartmentState || employementTypeState || searchValue ? (
          <div className="flex align-center justify-end w-full pb-[2rem] px-[2rem] gap-[10px]">
            <Button variant="light" onPress={handleClearField}>
              <p className="text-[16px] font-medium">Clear All</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="red"
                strokeWidth="1.5"
                fill="none"
                className="w-[20px] h-[20px] xl:w-[24px] xl:h-[24px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </Button>
          </div>
        ) : null}
        <div className="">
          <div className={`grid md:grid-cols-2 xl:grid-cols-3 gap-[20px]`}>
            {filteredPosition.map((job, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8 },
                  }}
                  viewport={{ once: true }}
                  className="bg-[#FFFFFF] p-[50px] rounded-[30px] inner-career-listing"
                >
                  <div className="flex flex-col mb-[70px] xl:mb-[5em]">
                    <div className="bg-[#D9FFFD] text-[#002991] py-[8px] px-[20px] rounded-4xl w-max font-[700]">
                      <p className="text-[#006260] !text-[14px] font-[600] plexSans">
                        {(
                          job?.fields?.employmentType || "FULL TIME"
                        ).toUpperCase()}
                      </p>
                    </div>
                    <h3 className="!text-[24px] my-[15px] font-[600]">
                      {job?.fields?.title || "No title"}
                    </h3>
                    <p className="flex flex-row gap-[5px] text-[#0A0D14] font-[400]">
                      <Image
                        className="w-5 h-5 xl:w-6 xl:h-6"
                        src="/services/career-position-icon.svg"
                        alt="chatIcon"
                        width={100}
                        height={100}
                      />
                      {job?.fields?.department || "Not specified"}
                    </p>
                  </div>

                  <div>
                    <Link href={`/career/${job?.fields?.slug || "#"}`}>
                      <div
                        className={`flex items-center gap-[5px] bg-[#002991] hover:!opacity-[0.8] text-[#FFFFFF] py-[8px] pl-[25px] pr-[20px] rounded-[16px] btn-shadow w-max font-[700]`}
                      >
                        Apply Now
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="w-[20px] h-[20px] xl:w-[24px] xl:h-[24px]"
                        >
                          <path
                            d="M13.1724 12.0007L8.22266 7.05093L9.63688 5.63672L16.0008 12.0007L9.63688 18.3646L8.22266 16.9504L13.1724 12.0007Z"
                            fill={"#FFFFFF"}
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <CustomPagination
          state={page}
          setState={setPage}
          nextPageLength={nextPageLength}
          total={totalPages}
        />
      </div>
    </div>
  );
}

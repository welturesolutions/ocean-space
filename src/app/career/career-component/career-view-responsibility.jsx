"use client";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { motion } from "framer-motion";
import CareerForm from "./career-form";

export default function CareerViewResponsibility({ job, slug }) {
  if (!job) {
    return (
      <div className="text-center py-10">
        <h1>Job Not Found</h1>
        <p>No job found for slug: {slug}</p>
      </div>
    );
  }

  // Preprocess Rich Text fields
  const jobResponsibilities = job.jobResponsibilities
    ? documentToHtmlString(job.jobResponsibilities)
    : "No responsibilities available";

  const qualifications = job.qualifications
    ? documentToHtmlString(job.qualifications)
    : "No qualifications available";

  return (
    <>
      <div className="bg-[#F6F8FA] rounded-t-[40px] -mt-[3em]">
        <div className="flex justify-between mx-auto py-[5em] px-[1rem] md:px-[2.5rem] xl:pt-[10em] xl:max-w-[1600px]">
          <div className="flex flex-col justify-center gap-[5rem] m-auto xl:w-[60%]">
            <div>
              <motion.h5
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8 },
                }}
                viewport={{ once: true }}
                className="font-[600] !text-[24px] mb-4 text-left plexSans"
              >
                Key Responsibility
              </motion.h5>
              <motion.div
                className="ml-[20px] job-content-desc"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8 },
                }}
                viewport={{ once: true }}
              >
                {/* Append dynamic jobResponsibilities */}
                <div
                  className="text-[#555E6E]"
                  dangerouslySetInnerHTML={{ __html: jobResponsibilities }}
                />
              </motion.div>
            </div>
            <div>
              <motion.h5
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8 },
                }}
                viewport={{ once: true }}
                className="font-[600] !text-[24px] mb-4 text-left plexSans"
              >
                Qualification and Skills
              </motion.h5>
              <motion.div
                className="ml-[20px] job-content-desc"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8 },
                }}
                viewport={{ once: true }}
              >
                {/* Append dynamic qualifications */}
                <div
                  className="text-[#555E6E]"
                  dangerouslySetInnerHTML={{ __html: qualifications }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

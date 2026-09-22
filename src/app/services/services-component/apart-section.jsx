"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ApartSection() {
  return (
    <>
      <div className="mx-auto 2xl:max-w-[1600px] px-[1rem] md:px-[2.5rem] pb-[5em] md:pb-[8em] md:pt-0 xl:py-[10em]">
        <div className="text-center mb-[5em]">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8 },
            }}
            viewport={{ once: true }}
            className="text-[#0A0D14] font-[600] m-auto mb-[25px] capitalize"
          >
            What Sets Us Apart
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1 },
            }}
            viewport={{ once: true }}
            className="xl:w-[50%] 2xl:w-[35%] m-auto text-[#555E6E] !text-[18px]"
          >
            From technical support to cutting-edge automation, we provide the
            tools and expertise your business needs to thrive. Here's how we
            make a difference:
          </motion.p>
        </div>
        <div className="grid grid-cols-6 gap-[1.5em]">
          <motion.div
            viewport={{ once: true }}
            className="bg-white rounded-[35px] apart-shadow pt-0 pb-[2em] xl:py-[2em] px-[3em] col-span-6 xl:col-span-2"
          >
            <Image
              className="w-full h-[200px] md:h-[250px] xl:h-[180px] object-contain"
              src="/services/Technical-Support-Helpdesk.svg"
              alt="Technical-Support-Helpdesk"
              width={500}
              height={500}
            />
            <h4 className="font-[600] mb-[15px] mt-[25px]">
              Technical Support & Helpdesk{" "}
            </h4>
            <p className="!text-[18px] text-[#555E6E]">
              Fast, reliable assistance for all your IT challenges, minimizing
              downtime and maximizing productivity.
            </p>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            className="bg-white rounded-[35px] apart-shadow py-[2em] px-[3em] col-span-6 md:col-span-3 xl:col-span-2"
          >
            <Image
              className="w-full h-[130px] md:h-[180px] object-contain"
              src="/services/Cloud-Backup-Recovery.svg"
              alt="Cloud-Backup-Recovery"
              width={500}
              height={500}
            />
            <h4 className="font-[600] mb-[15px] mt-[25px]">
              Cloud Backup & Recovery
            </h4>
            <p className="!text-[18px] text-[#555E6E]">
              Protect your data and ensure business continuity, even in the face
              of unexpected disruptions.
            </p>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            className="bg-white rounded-[35px] apart-shadow py-[2em] px-[3em] col-span-6 md:col-span-3 xl:col-span-2"
          >
            <Image
              className="w-full h-[130px] md:h-[180px] object-contain"
              src="/services/Cybersecurity-Management.svg"
              alt="Cybersecurity-Management"
              width={500}
              height={500}
            />
            <h4 className="font-[600] mb-[15px] mt-[25px]">
              Cybersecurity Management
            </h4>
            <p className="!text-[18px] text-[#555E6E]">
              Safeguard your systems, secure sensitive information, and stay
              ahead of evolving cyber threats.
            </p>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            className="bg-white rounded-[35px] apart-shadow py-[2em] px-[3em] col-span-6 md:col-span-3"
          >
            <Image
              className="w-full h-[130px] md:h-[180px] object-cover xl:object-contain"
              src="/services/Network-Monitoring.svg"
              alt="Network-Monitoring"
              width={500}
              height={500}
            />
            <h4 className="font-[600] mb-[15px] mt-[25px]">
              Network Monitoring
            </h4>
            <p className="!text-[18px] text-[#555E6E]">
              Proactive monitoring to keep your IT infrastructure running
              smoothly and prevent costly issues.
            </p>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            className="bg-white rounded-[35px] apart-shadow py-[2em] px-[3em] col-span-6 md:col-span-3"
          >
            <Image
              className="w-full h-[130px] md:h-[180px] object-cover xl:object-contain"
              src="/services/AI-Automation.svg"
              alt="AI-Automation"
              width={500}
              height={500}
            />
            <h4 className="font-[600] mb-[15px] mt-[25px]">AI Automation</h4>
            <p className="!text-[18px] text-[#555E6E]">
              Streamline workflows, reduce manual effort, and unlock new levels
              of productivity through digital transformation.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { IoCallOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { SiResearchgate } from "react-icons/si";

const About = () => {
  return (
    <section>
      <Container>
        <Flex
          className={`md:gap-[70px] gap-5 items-start md:items-center  md:flex-row flex-col `}
        >
          <main className=" pb-5 border-b-0 md:border-y-2 border-[#4A4A4A] md:transform md:translate-y-[-10.75rem]  lg:transform lg:translate-y-[-8.75rem] ">
            <h3 className=" font-medium font-Inter leading-9 text-[28px] text-Prmary mt-3 md:mt-7">
              Contact
            </h3>
            <Flex className={` mt-4 items-center gap-3`}>
              <IoCallOutline className=" text-[23px]" />
              <p className=" font-Inter font-light leading-8 text-[20px] duration-300 hover:font-semibold ">
                +88-01775002093
              </p>
            </Flex>
            <Flex className={` mt-4 items-center gap-3`}>
              <FiMail className=" text-[23px]" />
              <a
                href="mailto:mehedy.hasan@bu.edu.bd"
                className=" font-Inter font-light leading-8 text-[20px] duration-300  "
              >
                mehedy.hasan@bu.edu.bd
              </a>
            </Flex>
            <Flex className={` mt-4 items-center gap-3`}>
              <FaLinkedinIn className=" text-[23px]" />
              <a
                href="https://www.linkedin.com/in/mehedy-hasan-860597126/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&fbclid=IwAR0aohKbrKAWVfDqgEz_HZSnaXoYoPrnW4zr536QAVG6ImjVGP8DTiLpjcc"

                className=" font-Inter font-light leading-8 text-[20px] duration-300 hover:font-semibold "
                
              >
                mehedy hasan
              </a>
            </Flex>
            <Flex className={` mt-4 items-center gap-3`}>
              <SiResearchgate className=" text-[23px]" />
              <a
                href="https://www.researchgate.net/profile/Mehedy-Hasan-4"
                className=" font-Inter font-light leading-8 text-[20px] duration-300 hover:font-semibold "
              >
                Mehedy Hasan
              </a>
            </Flex>
          </main>
          <main className=" border-white  md:border-y-2 md:border-[#4A4A4A]">
            <h3 className=" font-medium font-Inter leading-9 text-[28px] text-Prmary mt-3 md:mt-7 ">
              About Me
            </h3>
            <p className=" pb-4 mb-10 font-Inter font-light leading-8 text-[20px] text-Prmary mt-3 md:border-b-2 md:border-[#4A4A4A] ">
              <span className=" text-[18px] font-Inter font-bold text-[#4A4A4A]">
                Mehedy Hasan
              </span>{" "}
              is a committed math teacher who is passionate about encouraging
              pupils to discover the elegance and usefulness of mathematics. He
              is a highly experienced educator and researcher who infuses the
              classroom with passion and knowledge. His approach to education
              places a significant emphasis on problem-solving, creativity, and
              clarity, enabling pupils to acquire good mathematical reasoning
              skills.
            </p>
            <div className=" pb-6">
              <h2 className=" font-Inter font-medium text-[28px] text-Prmary leading-9">
                Education
              </h2>
              <div className=" mt-6">
                <li className=" font-medium font-Inter text-[20px] leading-8 ">
                  B.Sc. in Mathematics
                </li>

                <div className="  flex items-center gap-4 md:gap-0 md:justify-between">
                  <p className=" font-Inter font-light text-[20px] leading-8">
                    Khulna University, Khulna
                  </p>
                  <p>(2012-2016)</p>
                </div>
                <div className="  flex items-center gap-4 md:gap-0 md:justify-between">
                  <p className=" font-Inter font-light text-[20px] leading-8">
                    CGPA{" "}
                  </p>
                  <p>3.88 (out of 4.00)</p>
                </div>
              </div>

              <div className=" mt-6">
                <li className=" font-medium font-Inter text-[20px] leading-8 ">
                  Higher Secondary Certificate (H.S.C)
                </li>
                <div className="  flex items-center gap-4 md:gap-0 md:justify-between">
                  <p className=" font-Inter font-light text-[20px] leading-8">
                    Govt. Sohrawardi College, Pirojpur
                  </p>
                  <p>(2009-2011)</p>
                </div>
              </div>
            </div>
          </main>
        </Flex>
      </Container>
    </section>
  );
};

export default About;

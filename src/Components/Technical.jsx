import React from "react";
import Container from "./Container";
import Flex from "./Flex";

const Technical = () => {
  return (
    <section className=" mb-10">
      <Container>
        <Flex
          className={`gap-[95px] gap-y-[25px] 
          items-start   flex-col md:flex-row `}
        >
          <main className=" ltransform lg:translate-y-[-18.5rem]   md:translate-y-[-24rem] sm:translate-y-[-24rem]  ">
            <div className="border-b-0 md:border-b-2 border-[#4A4A4A]  md:pb-5">
              <h3 className=" font-medium font-Inter leading-9 text-[28px] text-Prmary mt-3  ">
                Technical Skills
              </h3>
              <ul>
                <li className=" list-disc ml-6 mt-6 font-Inter font-light text-[20px] leading-8 duration-300 hover:font-semibold cursor-pointer hover:text-[#4A4A4A] ">
                  System Software (Windows, DOS)
                </li>
                <li className=" w-[272px] list-disc ml-6 mt-2 font-Inter font-light text-[20px] leading-8 duration-300  cursor-pointer hover:text-[#4A4A4A]">
                  Microsoft Office (Microsoft word, Microsoft Excel, Microsoft
                  Power Point, Microsoft Access, Microsoft Project, Microsoft
                  Accounting)
                </li>
                <li className=" list-disc ml-6 mt-2 font-Inter font-light text-[20px] leading-8 duration-300 hover:font-semibold cursor-pointer hover:text-[#4A4A4A]">
                  SPSS
                </li>
                <li className=" list-disc ml-6 mt-2 font-Inter font-light text-[20px] leading-8 duration-300 hover:font-semibold cursor-pointer hover:text-[#4A4A4A]">
                  Fortran
                </li>
                <li className=" list-disc ml-6 mt-2 font-Inter font-light text-[20px] leading-8 duration-300 hover:font-semibold cursor-pointer hover:text-[#4A4A4A]">
                  Mat Lab
                </li>
                <li className=" list-disc ml-6 mt-2 font-Inter font-light text-[20px] leading-8 duration-300 hover:font-semibold cursor-pointer hover:text-[#4A4A4A]">
                  C Programming
                </li>
                <li className=" list-disc ml-6 mt-2 font-Inter font-light text-[20px] leading-8 duration-300 hover:font-semibold cursor-pointer hover:text-[#4A4A4A]">
                  Adobe Photoshop
                </li>
                <li className=" list-disc ml-6 mt-2 font-Inter font-light text-[20px] leading-8 duration-300 hover:font-semibold cursor-pointer hover:text-[#4A4A4A]">
                  Mysql
                </li>
              </ul>
            </div>
            <div className="border-b-0 md:border-b-2 border-[#4A4A4A]  md:pb-5">
              <h3 className=" font-medium font-Inter leading-9 text-[28px] text-Prmary mt-3  ">
                Languages
              </h3>

              <h5 className=" font-Inter font-light text-Prmary text-[20px] leading-8 md:mt-8 mt-3 ">
                <span className=" text-[24px] font-semibold text-[#4A4A4A]">
                  English
                </span>{" "}
                - Listening-6.5, Reading-6.5, Writing-6.0, Speaking-6.0 (IELTS,
                June, 2017)
              </h5>

              <h5 className=" font-Inter font-light text-Prmary text-[20px] leading-8 md:mt-8 mt-3 ">
                <span className=" text-[24px] font-semibold text-[#4A4A4A]">
                  Bengali
                </span>{" "}
                - Mother Language (Native)
              </h5>
            </div>
            <div className="border-b-0 md:border-b-2 mt-10 border-[#4A4A4A]  md:pb-5">
              <h3 className=" font-medium font-Inter leading-9 text-[28px] text-Prmary mt-3  ">
                Teaching Experiences
              </h3>
              <p className="font-Inter font-light text-[20px] leading-8 mt-3 duration-300  cursor-pointer hover:text-[#4A4A4A]">
                <span className=" font-semibold"> Lecturer (Part-Time)</span> in
                Mathematics Department, Bangladesh University, Dhaka (May,
                2019-December, 2022)
              </p>
              <p className="font-Inter font-light text-[20px] leading-8 mt-3 duration-300  cursor-pointer hover:text-[#4A4A4A]">
                <span className=" font-semibold"> Lecturer (Full Time)</span> in
                Mathematics Department, Bangladesh University, Dhaka (January,
                2023-Present)
              </p>
            </div>
            <div>
              <h2 className=" font-Inter font-medium text-[28px] leading-9 w-[344px] mt-10 md:mt-[60px] ">
              Award and Achievements
              </h2>
              <ul>
                <li className=" list-disc ml-4 font-Inter font-medium text-Prmary text-[20px] leading-8 mt-4">Got universities scholarship in every 2 years </li>
                <li className=" list-disc ml-4 font-Inter font-medium text-Prmary text-[20px] leading-8 mt-4">	Achieved Dean Award on B.Sc. results</li>
              </ul>
            </div>
          </main>
          {/* Right part */}
          <main className="">
            <h3 className=" font-medium font-Inter leading-9 text-[28px] text-Prmary mt-3  ">
              Field of Interest & Publications
            </h3>
            <div>
              <li className=" list-disc ml-6 mt-6 font-Inter font-semibold text-[20px] leading-8 duration-300 hover:font-semibold cursor-pointer hover:text-[#4A4A4A] ">
                Field of Interest
              </li>
              <p className="font-Inter font-light text-[20px] leading-8 mt-2 duration-300  cursor-pointer hover:text-[#4A4A4A]">
                Fluid Dynamics, C. F. D., Finite Element Method, Numerical
                Analysis.
              </p>
            </div>
            <div>
              <li className=" list-disc ml-6 mt-6 font-Inter font-semibold text-[20px] leading-8 duration-300 hover:font-semibold cursor-pointer hover:text-[#4A4A4A] ">
                List of Publications
              </li>
              <p className="font-Inter font-light text-[20px] leading-8 mt-2">
                <span className=" font-semibold text-[#4A4A4A]"> M. Hasan</span>
                , R. Biswas, S. F. Ahmmed, and K. Shanchia, 2019. One
                Dimensional Mass Transfer Effects on Transient Free Convection
                Flow with Vertical Porous Plate, Advanced Science, Engineering
                and Medicine, Vol. 11, Issue 12, pp. 1249-1260.
              </p>
              <p className="font-Inter font-light text-[20px] leading-8 mt-4">
                R. Biswas,{" "}
                <span className=" font-semibold text-[#4A4A4A]">
                  {" "}
                  M. Hasan,{" "}
                </span>
                B. M. Jewel Rana. and S. F. Ahmmed, 2019. MHD Free Convection
                Maxwell Nanofluid Flow through an Exponentially Accelerated
                Vertical Surface in the Presence of Radiation, 8th BSME
                International Conference on Thermal Engineering AIP Conf. Proc.
                2121, 030007.
              </p>
              <p className="font-Inter font-light text-[20px] leading-8 mt-4">
                R. Biswas,{" "}
                <span className=" font-semibold text-[#4A4A4A]">
                  {" "}
                  M. Hasan,{" "}
                </span>{" "}
                M. Mondal, K. Shanchia, M. F. Bulbul and S. F. Ahmmed, 2019. A
                Numerical Superintendence with Stability Exploration of Casson
                Nanofluid Flow in the Effects of Variable Thermal Conductivity
                and Radiation, Advanced Science, Engineering and Medicine, Vol.
                11, pp. 1-11.
              </p>
              <p className="font-Inter font-light text-[20px] leading-8 mt-4">
                M. Mondal, R. Biswas,{" "}
                <span className=" font-semibold text-[#4A4A4A]">
                  {" "}
                  M. Hasan,{" "}
                </span>
                K. Shanchia and S. F. Ahmmed, 2019. Numerical Investigation with
                Stability Convergence Analysis of Chemically Hydromagnetic
                Casson Nanofluid Flow in the Effects of Thermophoresis and
                Brownian Motion, International Journal of Heat and Technology,
                Vol. 37, Issue 1, pp. 59-70.
              </p>
              <p className="font-Inter font-light text-[20px] leading-8 mt-4">
                M. R. Islam, R. Biswas,{" "}
                <span className=" font-semibold text-[#4A4A4A]">
                  {" "}
                  M. Hasan,{" "}
                </span>
                , M. Afikuzzaman and S. F. Ahmmed, 2024. Modeling of MHD Casson
                Fluid Flow Across an Infinite Vertical Plate with Effects of
                Brownian, Thermophoresis, and Chemical Reactivity, Arabian
                Journal for Science and Engineering.
              </p>
            </div>
          </main>
          {/* Right part end */}
        </Flex>
      </Container>
    </section>
  );
};

export default Technical;

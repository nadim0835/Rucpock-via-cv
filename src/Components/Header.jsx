import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { GrLocation } from "react-icons/gr";

const Header = () => {
  return (
    <section className=" mt-10">
      <Container>
        <Flex
          className={`gap-[100px] lg:gap-[141px] gap-y-[40px] items-center 
          lg:items-start  flex-col md:flex-row`}
        >
          <main>
            <div className="  h-[250px] w-[250px]  ">
              <img
                className="  rounded-[50%] w-full h-full"
                src="img/img.jpg"
                alt=""
              />
            </div>
          </main>

          <main>
            <div>
              <h1 className=" font-Inter text-[30px] md:text-[48px] leading-[52px] text-Prmary font-medium md:mt-[30px] mt-0  ">
                Mehedy Hasan
              </h1>
              <h5 className=" font-Inter text-[20px] md:text-[28px] leading-[26px] text-Prmary mt-3 md:mt-3">
                Lecturer (Full Time) in Mathematics
              </h5>
              <div className=" pb-2 md:pb-[38px] flex gap-3 md:gap-[17px] items-center md:mt-[35px] mt-4   ">
                <GrLocation className=" text-[20px] md:text-[32px]" />
                <h4 className="  text-[18px] md:text-[20px] leading-8 font-Inter font-medium text-Prmary">
                  Dhaka, Bangladesh
                </h4>
              </div>
            </div>
          </main>
        </Flex>
      </Container>
    </section>
  );
};

export default Header;

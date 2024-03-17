import React, { useEffect } from "react";
import Title from "../../Common/Title";
import BriefIntro from "../../Common/BriefIntro";

import Img1 from "../../Images/project1.png";
import Img2 from "../../Images/future.png";
import Img3 from "../../Images/quality.png";

import "./About.css";
import { removeActiveClass } from "../../util/ulrUtil";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    removeActiveClass();
  }, []);

  return (
    <>
      <div className="headerBottomMargin">
        <div className="banner aboutBanner"></div>
      </div>

      {/* Introduction */}
      <BriefIntro title="Welcome To HPR Infra">
        We believe that construction is a man made wonder. The thought of
        bringing imagination to real life structures excites us, each day the
        passion in us grows as we contribute to this industry.
      </BriefIntro>

      <div className="container  my-md-5 py-md-4">
        <div className="row shadow-lg">
          <div className="col-12 col-md-8  py-4 p-md-5">
            <img
              src={Img1}
              alt=""
              className="d-md-none w-100 mb-3 shadow-md rounded-2"
            />
            <Title title="About HPR Infra" cssClass="text-dark fs-4" />
            <p>
              Established in 2003 by our visionary Managing Director, D. Hari
              Srinivas, HPR Infra has been at the forefront of transforming the
              real estate landscape in Hyderabad. With a commitment to
              excellence and innovation, our journey began with a vision to
              create not just homes but enduring legacies. Over the years, we
              have completed numerous successful projects. As we continue to
              evolve, our dedication remains unwavering – shaping spaces that
              resonate with the aspirations and dreams of our valued customers.
              Join us in celebrating over a decade of excellence and trust with
              HPR Infra.
            </p>
            {/* <p>
              HPR has ventured in the real estate world with a humble beginning
              in the year 2004, with Director D. Hari Srinivas who has vision
              and has successfully completed several projects in Hyderabad.
              Riding on the growth wave of real-estate, the group has
              diversified strategically into the development of land.
            </p>
            <p>
              Adibhatla, a village in R.R.District, Telangana is most talked
              about prominent place for investmentsin plots and lands for future
              appreciation.
            </p>
            <p>
              The village is adjacent to ORR in between Nagarjuna Sagar Highway
              and Sri Salilam Highway.
            </p>
            <p className="">
              Abibaltla had become prominent because of IT SEZ & Aero Space SEZ.
              TCS, CTS, and small other companies had been allotted land in IT
              SEZ. TCS, which is about to complete the construction is expected
              to generate an employment of 27,000 employees in Adibatla Campus.
            </p>
            <p>
              Tata Advanced Systems, a group company of Tata’s started their
              manufacturing facility for Helicopter units, wings manufacturing
              in collaboration with LOCKHEED MARTIN and SIKORSKY AIRCRAFT
              CORPORATION in the Aerospace SEZ, Adibatla.
            </p>
            <p>
              SAMUHA Engineering a cluster of small manufacturing ancillary
              units had started theri operation in Aerospace SEZ. Samuha
              Engineering is expected to generate an employment of 10,000
              employees.
            </p>
            <p>
              In addition to the above companies at Adibhatla, there is
              developed land available in Fab City on Srisailam Highway,
              Thukkuguda. Celkon, a mobile company had expressed their
              willingness to start their manufacturing operation at Fab City.
              Telangan Govt. Is in talks with Various mobile manufacturing
              companies to set up their establishments in Fab city.
            </p>
            <p>
              Airport at Shamshabad is hardly 15 minutes drive from Thukkuguda.
            </p>
            <p>
              Hardware Park, near Thukkuguda is already holding so many
              companies creating an employment of 3000.
            </p>
            <p>
              The ITIR project announced by the Central Govt. is expected to
              further fuel the growth in this area. News related to this project
              can be viewed in the links provided below.
            </p> */}
          </div>
          <div className="col-12 col-md-4 d-none d-md-block p-0 ">
            <img
              src={Img1}
              alt=""
              className="w-100 h-100"
              style={{ objectFit: "cover", backgroundPosition: "center" }}
            />
          </div>
        </div>

        <div className="row shadow-lg my-5">
          <div className="col-12 col-md-4 d-none d-md-block p-0 ">
            <img
              src={Img2}
              alt=""
              className="w-100 h-100"
              style={{ objectFit: "cover", backgroundPosition: "center" }}
            />
          </div>
          <div className="col-md-8  py-4 p-md-5">
            <img
              src={Img2}
              alt=""
              className="d-md-none w-100 mb-3 shadow-md rounded-2"
            />
            <Title title="Our Vision" cssClass="text-dark fs-4" />
            <p>
              At HPR Infra, our vision is to be the beacon of innovation and
              excellence in the real estate landscape, setting new standards for
              modern living in Hyderabad and beyond.With a legacy built on
              trust, integrity, and forward-thinking, HPR Infra is dedicated to
              shaping the future, where every project becomes a testament to our
              commitment to creating spaces that inspire and endure.
            </p>
          </div>
        </div>

        <Title title="Our Partners" cssClass="text-dark fs-3 pt-3" style={{color: "#285992"}} />

        <div className="row shadow-lg my-3" style={{background: "#91d8f7"}}
        >
          
          <div className="col-md-4 py-4 p-md-5">
            {/* <img
              src={Img2}
              alt=""
              className="w-100 mb-3 shadow-md rounded-2"
            /> */}
            <Title title="Mr. Divvela Hari Srinivas" cssClass="text-dark fs-4 fw-bold mb-3" />
            <p className="text-black">
              Mr. Divvela Hari Srinivas, aged about 53 years, he is a Graduate in B Tech with over 20 years of experience in Infrastructure and Real Estate Sector. He has a rich experience in Market Analysis. 

              Mr. Divvela Hari Srinivas is a Managing Partner in M/s HPR Infra LLP and M/s HPR Homes LLP.
            </p>
          </div>
          

          <div className="col-md-4  py-4 p-md-5">
            {/* <img
              src={Img2}
              alt=""
              className="w-100 mb-3 shadow-md rounded-2"
            /> */}
            <Title title="Mr. Moluguri Kiran Kumar" cssClass="text-dark fs-4 fw-bold mb-3" />
            <p className="text-black">
              Mr. M Kiran Kumar, is a Graduate in B Tech (ECE) and PG in Electrical Engineering with over 7 years of experience in Oracle Applications Development and 10 years of experience as project coordinator and supply chain manager in USA. He has implemented couple of residential layouts in Hyderabad and residential and commercial projects in Banglaore (Pragati Builders).  

              Mr. M Kiran Kumar is a Partner in M/s HPR Infra LLP and M/s HPR Homes LLP.  
            </p>
          </div>

          <div className="col-md-4  py-4 p-md-5">
            {/* <img
              src={Img2}
              alt=""
              className="w-100 mb-3 shadow-md rounded-2"
            /> */}
            <Title title="Mrs. Beeda Jyothi" cssClass="text-dark fs-4 fw-bold mb-3" />
            <p className="text-black">
              Mrs. Beeda Jyothi, has over 18 years of experience in marketing, both print and digital media. She has successfully chaired as marketing head for most of the projects of HPR Infra and made them a grand success.  

              Mrs. Beeda Jyothi is a Designated Partner in M/s HPR Infra LLP and M/s HPR Homes LLP. 
            </p>
          </div>
        </div>

        {/* <div className="row shadow-lg ">
          <div className="col-12 col-md-8 py-4 p-md-5">
            <img
              src={Img3}
              alt=""
              className="d-md-none w-100 mb-3 shadow-md rounded-2"
            />
            <Title
              title="What makes us a futuristic group?"
              cssClass="text-dark fs-4"
            />
            <p className="lh-lg">
              <strong>To excel in delivery of work.</strong>
              <br />
              <strong>
                To adhere to the highest standards of professional ethics.
              </strong>
              <br />
              <strong> To introduce several ‘firsts’ in the industry.</strong>
            </p>
            <p>
              To maintain transparency with our Investors, Associates, Clients,
              Service Providers, Employees and contribute to the society at
              large.
            </p>
          </div>
          <div className="col-12 col-md-4 d-none d-md-block p-0">
            <img
              src={Img3}
              alt=""
              className="w-100  h-100"
              style={{ objectFit: "cover", backgroundPosition: "center" }}
            />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default About;

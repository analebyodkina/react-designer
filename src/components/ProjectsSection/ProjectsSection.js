import "./ProjectsSection.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ProjectImage1 from "../../Assets/projects-img1.png";
import ProjectImage2 from "../../Assets/projects-img2.png";
import ProjectImage3 from "../../Assets/projects-img3.png";

export default function ProjectsSection() {
  SwiperCore.use([Pagination]);
  return (
    <div className="container projects">
      <h2 className="title projects__title">Personal Projects</h2>
      <Swiper
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        spaceBetween={10}
        grabCursor={true}
        loop={true}
        breakpoints={{
          576: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
      >
        <SwiperSlide>
          <img
            src={ProjectImage1}
            alt="project example"
            width={400}
            height={560}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ProjectImage2}
            alt="project example"
            width={400}
            height={560}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ProjectImage3}
            alt="project example"
            width={400}
            height={560}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ProjectImage2}
            alt="project example"
            width={400}
            height={560}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ProjectImage3}
            alt="project example"
            width={400}
            height={560}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ProjectImage2}
            alt="project example"
            width={400}
            height={560}
          />
        </SwiperSlide>
        
       
      </Swiper>
    </div>
  );
}

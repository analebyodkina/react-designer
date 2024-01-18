import "./ProjectsSection.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import ProjectImage1 from "../../Assets/projects-img1.png";
import ProjectImage2 from "../../Assets/projects-img2.png";
import ProjectImage3 from "../../Assets/projects-img3.png";
 

export default function ProjectsSection() {
    
    return (
      <div className="container projects">
        <h2 className="title projects__title">Personal Projects</h2>
        <Swiper
        slidesPerView={1} 
        spaceBetween={24} 
        grabCursor={true} 
        loop={true}
        breakpoints={{          
          576: {            
            slidesPerView: 2,
          },          
          992: {            
            slidesPerView: 3,
          },          
        }} >
      <SwiperSlide><img src={ProjectImage1} alt="project example" /></SwiperSlide>
      <SwiperSlide><img src={ProjectImage2} alt="project example" /></SwiperSlide>
      <SwiperSlide><img src={ProjectImage3} alt="project example" /></SwiperSlide>
      <SwiperSlide><img src={ProjectImage2} alt="project example" /></SwiperSlide>
      <SwiperSlide><img src={ProjectImage3} alt="project example" /></SwiperSlide>
      <SwiperSlide><img src={ProjectImage2} alt="project example" /></SwiperSlide>
      <SwiperSlide><img src={ProjectImage3} alt="project example" /></SwiperSlide>
      <SwiperSlide><img src={ProjectImage2} alt="project example" /></SwiperSlide>
      ...
    </Swiper>

      </div> 

    );
  }
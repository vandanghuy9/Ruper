"use client";
import React, { useState } from "react";
import BannerLayout from "@component/banner/about-us/BannerLayout";
import Carousel from "react-bootstrap/Carousel";
import TestimonialItem from "./TestimonialItem";
import { testimonial } from "@utils/data";
import { GrPrevious, GrNext } from "react-icons/gr";
const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <section className="section section-padding m-b-70">
      <div className="section-container large">
        <div className="block block-testimonial layout-1">
          <div className="block-widget-wrap">
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              controls
              prevIcon={<GrPrevious color="red" />}
              nextIcon={<GrNext color="red" />}
            >
              {testimonial.map((item) => (
                <Carousel.Item key={item.id}>
                  <TestimonialItem
                    content={item.content}
                    img={item.img}
                    name={item.name}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

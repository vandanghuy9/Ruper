"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";
import { GrPrevious, GrNext } from "react-icons/gr";

const BrandCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="section section-padding top-border p-t-20 m-b-20">
      <div className="section-container">
        <div className="block block-image slider">
          <div className="block-widget-wrap">
            <div className="slick-wrap">
              <div className="slick-sliders">
                <Carousel
                  activeIndex={index}
                  onSelect={handleSelect}
                  controls
                  prevIcon={<GrPrevious color="red" />}
                  nextIcon={<GrNext color="red" />}
                >
                  <Carousel.Item>
                    <div className="row">
                      <div className="item slick-slide col">
                        <div className="item-image">
                          <Link href="#">
                            <Image
                              width={450}
                              height={450}
                              src="/brand/1.jpg"
                              alt="Brand 1"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="item slick-slide col">
                        <div className="item-image">
                          <Link href="#">
                            <Image
                              width={450}
                              height={450}
                              src="/brand/2.jpg"
                              alt="Brand 1"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="item slick-slide col">
                        <div className="item-image">
                          <Link href="#">
                            <Image
                              width={450}
                              height={450}
                              src="/brand/3.jpg"
                              alt="Brand 1"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="item slick-slide col">
                        <div className="item-image">
                          <Link href="#">
                            <Image
                              width={450}
                              height={450}
                              src="/brand/4.jpg"
                              alt="Brand 1"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="item slick-slide col">
                        <div className="item-image">
                          <Link href="#">
                            <Image
                              width={450}
                              height={450}
                              src="/brand/5.jpg"
                              alt="Brand 1"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;

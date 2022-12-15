import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import { Item } from '../Dashboard/ConstData';

import './sliderComp.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function SliderComp({ venue }) {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                slidesPerGroup={4}
                loop={false}
                loopFillGroupWithBlank={false}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                style={{ width: "1150px" }}
            >
                {venue.map(({ imgUrl, address, about }) => (
                    <Item>
                        <SwiperSlide>
                            <div className='flex' key={about}>
                                <div>
                                    <img className='venueImg' src={imgUrl} alt="" />
                                    <div className="location">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <span>{address[0].venue}</span>
                                    </div>
                                    <p className="venue">{address[0].venue}</p>
                                    <p className="location_detail">{about.length > 100 ? `${about.substring(0, 70)}...` : about}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Item>
                ))}
            </Swiper>
        </>
    );
}
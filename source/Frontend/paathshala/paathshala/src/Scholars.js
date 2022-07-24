import React from 'react';
import './Scholars.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper";


const Scholars = () => {
    return(
        <>
        <div id="body">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          centeredSlides={true}
          loop={true}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            
            data-swiper-parallax="-23%"
          ></div>
          <SwiperSlide>
            <div className="title" data-swiper-index="-300">
            "Power's not given to you. You have to take it." - Beyoncé Knowles Carter
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="title" data-swiper-index="-300">
            "Optimism is the faith that leads to achievement." - Helen Keller
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="title" data-swiper-index="-300">
            "When the whole world is silent, even one voice becomes powerful." - Malala Yousafzai
            </div>
          </SwiperSlide>
        </Swiper>
        </div>

        <div class="scholars">
            
            <div class="achievers" id="scholar1">
                <div id="about">
                    <h1>Shruti Sharma </h1>
                    <div class="designation">IAS Topper, 2021<br></br></div>
                    
                    The Shruti Sharma has topped the exam this time. All the first 3 ranks are secured by the girls this time and they are Shruti Sharma, Ankita Agarwal and Gamini Singla.<br></br>
                    <a class="link" href="https://upsacs.in/upsc-ias-result/"> Read More  </a>
                </div>
            </div>
            <div class="achievers" id="scholar2">
            <div id="about">
                    <h1>Shruti Sharma </h1>
                    <div class="designation">IAS Topper, 2021<br></br></div>
                    The Shruti Sharma has topped the exam this time. All the first 3 ranks are secured by the girls this time and they are Shruti Sharma, Ankita Agarwal and Gamini Singla.<br></br>
                    <a class="link" href="https://upsacs.in/upsc-ias-result/"> Read More  </a>
                </div>
            </div>
            <div class="achievers" id="scholar3">
            <div id="about">
                    <h1>Shruti Sharma </h1>
                    <div class="designation">IAS Topper, 2021<br></br></div>
                    The Shruti Sharma has topped the exam this time. All the first 3 ranks are secured by the girls this time and they are Shruti Sharma, Ankita Agarwal and Gamini Singla.<br></br>
                    <a class="link" href="https://upsacs.in/upsc-ias-result/"> Read More  </a>
                </div>
            </div>
            <div class="achievers" id="scholar4">
            <div id="about">
                    <h1>Shruti Sharma </h1>
                    <div class="designation">IAS Topper, 2021<br></br></div>
                    The Shruti Sharma has topped the exam this time. All the first 3 ranks are secured by the girls this time and they are Shruti Sharma, Ankita Agarwal and Gamini Singla.<br></br>
                    <a class="link" href="https://upsacs.in/upsc-ias-result/"> Read More  </a>
                </div>
            </div>
            <div class="achievers" id="scholar5">
            <div id="about">
                    <h1>Shruti Sharma </h1>
                    <div class="designation">IAS Topper, 2021<br></br></div>
                    The Shruti Sharma has topped the exam this time. All the first 3 ranks are secured by the girls this time and they are Shruti Sharma, Ankita Agarwal and Gamini Singla.<br></br>
                    <a class="link" href="https://upsacs.in/upsc-ias-result/"> Read More  </a>
                </div>
            </div>
            <div class="achievers" id="scholar6">
            <div id="about">
                    <h1>Shruti Sharma </h1>
                    <div class="designation">IAS Topper, 2021<br></br></div>
                    The Shruti Sharma has topped the exam this time. All the first 3 ranks are secured by the girls this time and they are Shruti Sharma, Ankita Agarwal and Gamini Singla.<br></br>
                    <a class="link" href="https://upsacs.in/upsc-ias-result/"> Read More  </a>
                </div>
            </div>
            <div class="achievers" id="scholar7">
            <div id="about">
                    <h1>Shruti Sharma </h1>
                    <div class="designation">IAS Topper, 2021<br></br></div>
                    The Shruti Sharma has topped the exam this time. All the first 3 ranks are secured by the girls this time and they are Shruti Sharma, Ankita Agarwal and Gamini Singla.<br></br>
                    <a class="link" href="https://upsacs.in/upsc-ias-result/"> Read More  </a>
                </div>
            </div>
            <div class="achievers" id="scholar8">
            <div id="about">
                    <h1>Shruti Sharma </h1>
                    <div class="designation">IAS Topper, 2021<br></br></div>
                    The Shruti Sharma has topped the exam this time. All the first 3 ranks are secured by the girls this time and they are Shruti Sharma, Ankita Agarwal and Gamini Singla.<br></br>
                    <a class="link" href="https://upsacs.in/upsc-ias-result/"> Read More  </a>
                </div>
            </div>            
        </div>

        </>
    )
}

export default Scholars
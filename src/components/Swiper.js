import React from "react";
import { Image, Button, Text, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination,Navigation,Mousewheel, Keyboard  } from "swiper";
import "./style.css";
import img1 from "./images/desktop/image-curiosity.jpg";
import img2 from "./images/desktop/image-deep-earth.jpg";
import img3 from "./images/desktop/image-fisheye.jpg";
import img4 from "./images/desktop/image-from-above.jpg";
import img5 from "./images/desktop/image-grid.jpg";
import img6 from "./images/desktop/image-night-arcade.jpg";
import img7 from "./images/desktop/image-pocket-borealis.jpg";
import img8 from "./images/desktop/image-soccer-team.jpg";

function swiper() {
  return (
    <Flex flexDir={'column'} m={['50px','50px','50px 100px']}>
      <Flex flexDir={['column','column','row']} justifyContent='space-between' m='10px'>
      <Text fontSize={['xl','2xl','3xl']} textAlign={['center','center','initial']}>OUR CREATIONS</Text>
      <Button display={['none','none','none','block','block']} >SEE ALL</Button>
      </Flex>
      <Swiper 
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween:1
          },
                
          768: {
            slidesPerView: 2,
            spaceBetween:3
          },
          1024: {
            slidesPerView: 4,
            spaceBetween:5
          },
        }}
      >
        <SwiperSlide>
          <Image src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img4} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img5} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img6} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img7} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img8} />
        </SwiperSlide>
      </Swiper>
      <Button display={['block','block','block','none','none']} m='10px' w='150px' justifyContent='center' >SEE ALL</Button>
    </Flex>
  );
}
 
export default swiper;

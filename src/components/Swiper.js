import React from "react";
import { Image, Button, Text, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
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
    <Flex>
      <Text>OUR CREATIONS</Text>
      <Button>SEE ALL</Button>

      <Swiper spaceBetween={5} slidesPerView={4}>
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
    </Flex>
  );
}

export default swiper;
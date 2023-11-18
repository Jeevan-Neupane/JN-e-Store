import { useState } from "react";
import {
  Arrow,
  Container,
  Desc,
  Image,
  ImageDiv,
  Slider,
  TextDiv,
  Title,
  Wrapper,
} from "./style";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";

function HeroBanner({ data }) {
  const [slideNum, setSlideNum] = useState(0);
  const OnArrowClick = (direction) => {
    if (direction === "left") {
      if (slideNum === 0) {
        setSlideNum(0);
      } else {
        setSlideNum(slideNum - 1);
      }
    } else {
      if (slideNum === data.length - 1) {
        setSlideNum(slideNum);
      } else {
        setSlideNum(slideNum + 1);
      }
    }
  };

  return (
    <Container>
      <Arrow
        direction='left'
        onClick={() => OnArrowClick("left")}
      >
        <HiArrowCircleLeft />
      </Arrow>
      <Wrapper>
        {data.map((data) => {
          return (
            <Slider
              key={data.id}
              transform={slideNum}
              background={data.backgroundColor}
            >
              <ImageDiv>
                <Image src={data.img} />
              </ImageDiv>

              <TextDiv>
                <Title>{data.title}</Title>
                <Desc>{data.desc}</Desc>
              </TextDiv>
            </Slider>
          );
        })}
      </Wrapper>

      <Arrow
        direction='right'
        onClick={() => OnArrowClick("right")}
      >
        <HiArrowCircleRight />
      </Arrow>
    </Container>
  );
}

export default HeroBanner;

import React, { useState } from "react";
import PropTypes from "prop-types";
import Slick from "react-slick";
import {
  CloseBtn,
  Global,
  Header,
  ImgWrapper,
  Indicator,
  Overlay,
  SlickWrapper,
} from "./style";
import { baseUrl } from "../../config/config";

function ImagesZoom({ images, onClose }) {
  const [currentState, setCurrentState] = useState(0);
  return (
    <Overlay>
      <Global />
      <Header>
        <h1>상세이미지</h1>
        <CloseBtn onClick={onClose}>X</CloseBtn>
      </Header>
      <SlickWrapper>
        <div>
          <Slick
            initialSlide={0}
            afterChange={(slide) => setCurrentState(slide)}
            infinite
            arrows={false}
            slidesToShow={1}
            slidesToScroll={1}
          >
            {images.map((v) => (
              <ImgWrapper key={v.src}>
                <img src={`${baseUrl}/${v.src}`} alt={v.src} />
              </ImgWrapper>
            ))}
          </Slick>
          <Indicator>
            <div>
              {currentState + 1} / {images.length}
            </div>
          </Indicator>
        </div>
      </SlickWrapper>
    </Overlay>
  );
}

ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;

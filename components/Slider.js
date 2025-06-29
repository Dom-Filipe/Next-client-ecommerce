import React from "react";
import Slider from "react-slick";
import styles from '../styles/Slider.module.css';
import Image from 'next/image';

function SliderComponent() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    autoplaySpeed: 8000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        <div className={styles.sliderItem}>
          <Image
            className={styles.img}
            src="/banners/BANNER-1.png"
            height={450}
            width={1580}
            alt="Banner 1"
          />
        </div>
        <div className={styles.sliderItem}>
          <Image
            className={styles.img}
            src="/banners/2-BANNER.png"
            height={450}
            width={1580}
            alt="Banner 2"
          />
        </div>
        <div className={styles.sliderItem}>
          <Image
            className={styles.img}
            src="/banners/3-BANNER.png"  // 👉 coloque o caminho do seu novo banner aqui!
            height={450}
            width={1580}
            alt="Banner 3"
          />
        </div>
      </Slider>
    </div>
  );
}

export default SliderComponent;

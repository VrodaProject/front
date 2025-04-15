import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import slide1 from "../../../../assets/images/why/slide-1.webp";
import slide2 from "../../../../assets/images/why/slide-2.webp";
import slide3 from "../../../../assets/images/why/slide-3.webp";
import slide4 from "../../../../assets/images/why/slide-4.webp";
import slide5 from "../../../../assets/images/why/slide-5.webp";
import slide6 from "../../../../assets/images/why/slide-6.webp";

export default function Why() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const [showPrev, setShowPrev] = useState(!isMobile);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 992;
      setIsMobile(mobile);
      setShowPrev(!mobile || (swiperRef.current?.activeIndex || 0) > 0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onSwiperInit = (swiper: SwiperType) => {
    swiperRef.current = swiper;
    swiper.on("slideChange", () => {
      setShowPrev(!isMobile || swiper.activeIndex > 0);
    });
  };

  return (
    <section className="why">
      <div className="container">
        <div className="why__top">
          <h6 className="why__title">
            <span>Ч</span>ому клуб краси?
          </h6>
          <div className="why__wrap">
            <div className="why__description">
              <p>
                Хочете виглядати бездоганно та відчути справжнє оновлення?
                Запрошуємо вас поринути у світ релаксу та догляду.
              </p>
              <p>Запишіться вже сьогодні та подаруйте собі мить насолоди!</p>
            </div>
            <div className="why__list">
              <p>Наші унікальні косметологічні процедури допоможуть:</p>
              <ul>
                <li>Усунути вікові зміни</li>
                <li>Поліпшити стан шкіри обличчя та тіла</li>
                <li>Підкреслити природну красу</li>
                <li>Оновити тіло та розслабити розум</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="why__slider_wrapper">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".why__slider_prev",
            nextEl: ".why__slider_next",
          }}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          onSwiper={onSwiperInit}
          breakpoints={{
            992: {
              slidesPerView: 1,
            },
            993: {
              slidesPerView: 1.5,
            },
          }}
        >
          <SwiperSlide>
            <img src={slide1} alt="Салон краси Врода" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="Салон краси Врода" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="Салон краси Врода" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="Салон краси Врода" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="Салон краси Врода" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide6} alt="Салон краси Врода" />
          </SwiperSlide>
        </Swiper>

        <div className="why__slider_btn">
          <button
            className="why__slider_prev"
            aria-label="Previous slide"
            style={{ display: showPrev ? "flex" : "none" }}
          >
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1L2 7L8 13" stroke="#006A60" strokeWidth="2"/>
            </svg>

          </button>
          <button
            className="why__slider_next"
            aria-label="Next slide"
          >
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L1 13" stroke="#006A60" strokeWidth="2"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

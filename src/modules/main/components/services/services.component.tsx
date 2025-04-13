import { useState, useRef, useEffect, useCallback, useLayoutEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper as SwiperType } from 'swiper';

import slideImg3 from '../../../../assets/images/services/img-3.webp';
import slideImg4 from '../../../../assets/images/services/img-4.webp';
import slideImg5 from '../../../../assets/images/services/img-5.webp';
import slideImg7 from '../../../../assets/images/services/img-7.webp';

import slideVideo1 from "../../../../assets/video/services-1.mp4";
import slideVideo2 from "../../../../assets/video/services-2.mp4";
import slideVideo3 from "../../../../assets/video/services-3.mp4";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const swiperRef = useRef<SwiperType | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1130);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 1130);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const handleSmoothScroll = (e: React.MouseEvent, offset = 100) => {
    const target = e.currentTarget as HTMLAnchorElement;
    const href = target.getAttribute('href');
    
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  useLayoutEffect(() => {
    if (isMobile) {
      if (swiperRef.current) {
        swiperRef.current.allowTouchMove = true;
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      if (containerRef.current) {
        containerRef.current.style.marginBottom = '';
      }
      return;
    } else {
      if (swiperRef.current) {
        swiperRef.current.allowTouchMove = false;
      }
    }

    const container = containerRef.current;
    const swiper = swiperRef.current;
    if (!container || !swiper) return;

    const slides = swiper.slides;
    const totalSlides = slides.length;

    const calculateTotalWidth = () => {
      const slideW = slides[0]?.offsetWidth || 0;
      const gap = parseInt(getComputedStyle(slides[0]).marginRight) || 0;
      return (slideW + gap) * totalSlides;
    };

    const getVisibleCount = () => {
      const vp = swiper.params.slidesPerView;
      if (typeof vp === 'number') return vp;
      const first = slides[0] as HTMLElement;
      const w = first.offsetWidth;
      const g = parseInt(getComputedStyle(first).marginRight) || 0;
      return Math.floor(swiper.width! / (w + g));
    };

    const setup = () => {
      const totalW = calculateTotalWidth();
      const scrollDist = totalW - swiper.width!;
      container.style.marginBottom = `${scrollDist}px`;

      ScrollTrigger.getAll().forEach(t => t.kill());

      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: `+=${scrollDist}`,
        pin: true,
        pinSpacing: false,
        scrub: 1,
        onUpdate: self => {
          const visible = getVisibleCount();
          const prog = self.progress * (totalSlides - visible);
          swiper.setProgress(prog);
        }
      });
    };

    setup();
    window.addEventListener('resize', setup);

    swiper.on('slideChange', () => {
      setShowLeftArrow(!swiper.isBeginning);
    });

    return () => {
      window.removeEventListener('resize', setup);
      ScrollTrigger.getAll().forEach(t => t.kill());
      if (container) container.style.marginBottom = '';
      swiper.off('slideChange');
    };
  }, [isMobile]);

  const slidesData = [
    {
      media: slideVideo1,
      isVideo: true,
      name: "Апаратна та доглядова косметологія",
      price: "Від 500 грн"
    },
    {
      media: slideVideo2,
      isVideo: true,
      name: "SPA програми",
      price: "Від 2000 грн"
    },
    {
      media: slideImg3,
      isVideo: false,
      name: "Ін'єкційна косметологія",
      price: "Від 1250 грн"
    },
    {
      media: slideImg4,
      isVideo: false,
      name: "Турбота про тіло (масаж, обгортання)",
      price: "Від 500 грн"
    },
    {
      media: slideImg5,
      isVideo: false,
      name: "Лазерна ELOS епіляція, лікування акне, омолодження",
      price: "Від 250 грн"
    },
    {
      media: slideVideo3,
      isVideo: true,
      name: "Антицелюлітна програма",
      price: "Від 500 грн"
    },
    {
      media: slideImg7,
      isVideo: false,
      name: "Б'юті послуги",
      price: "Від 250 грн"
    }
  ];

  return (
    <section
      className="services"
      ref={containerRef}
      id="services"
      style={{ position: 'sticky', top: 0, overflow: 'hidden' }}
    >
      <div className="container__slider">
        <h2 className="services__title">
          <span>О</span>бирайте улюблені послуги
        </h2>

        <div className="services__slider-wrapper">
          <Swiper
            spaceBetween={20}
            slidesPerView="auto"
            className="services__slider"
            onSwiper={(sw: SwiperType) => {
              swiperRef.current = sw;
              sw.allowTouchMove = isMobile;
            }}
            allowTouchMove={isMobile}
            breakpoints={{
              320: { 
                slidesPerView: 'auto', 
                spaceBetween: 20,
                centeredSlides: true
              },
              1024: { slidesPerView: 'auto', spaceBetween: 30 },
            }}
          >
            {slidesData.map((slide, index) => [
              <SwiperSlide key={`slide-${index}`}>
                <Slide 
                  media={slide.media} 
                  isVideo={slide.isVideo} 
                  name={slide.name} 
                  price={slide.price} 
                  onClick={handleSmoothScroll} 
                />
              </SwiperSlide>,
              index === 1 && (
                <SwiperSlide key="all-services">
                  <a 
                    className="services__slide services__slide-desktop" 
                    href="#cta" 
                    aria-label="Перейти до всіх послуг"
                    onClick={(e) => handleSmoothScroll(e)}
                  >
                    <div className="services__slide_link">Усі послуги</div>
                  </a>
                </SwiperSlide>
              )
            ])}
          </Swiper>

          <div className="services__btns">
            <button
              className="services__btns-prev"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Попередній слайд"
              style={{ 
                opacity: showLeftArrow ? 1 : 0,
                pointerEvents: showLeftArrow ? 'auto' : 'none',
                transition: 'opacity 0.3s ease'
              }}
            >
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1L2 7L8 13" stroke="#006A60" strokeWidth="2"/>
              </svg>
            </button>
            <button
              className="services__btns-next"
              onClick={() => {
                swiperRef.current?.slideNext();
                setShowLeftArrow(true);
              }}
              aria-label="Наступний слайд"
            >
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="#006A60" strokeWidth="2"/>
              </svg>
            </button>
          </div>
          <div className="services__link">
            <a 
              href="#cta" 
              aria-label="Перейти до всіх послуг"
              onClick={(e) => handleSmoothScroll(e)}
            >
              Усі послуги
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slide({ media, isVideo, name, price, onClick }: { 
  media: string; 
  isVideo: boolean;
  name: string; 
  price: string;
  onClick: (e: React.MouseEvent) => void;
}) {
  return (
    <a 
      href="#cta" 
      className="services__slide" 
      aria-label={`Послуга: ${name}, Ціна: ${price}`}
      onClick={onClick}
    >
      {isVideo ? (
        <video 
          className="services__slide_img" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={media} type="video/mp4" />
        </video>
      ) : (
        <img className="services__slide_img" src={media} alt={name} />
      )}
      <div className="services__slide_info">
        <div className="services__slide_name">{name}</div>
        <div className="services__slide_price">{price}</div>
      </div>
    </a>
  );
}
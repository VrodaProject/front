import React, { useState, useRef, useEffect, useCallback, useLayoutEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper as SwiperType } from 'swiper';
import { useGetMainServicesQuery } from '@app/core/types';
import { AdvancedImage } from '@cloudinary/react';
import { useCloudinaryImage } from '@app/common/hooks/use-cloudinary-image.hook';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const swiperRef = useRef<SwiperType | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1130);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const { data, loading, error } = useGetMainServicesQuery();

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

    window.history.pushState(null, '', href);
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

    const handleSlideChange = () => {
      setShowLeftArrow(!swiper.isBeginning);
    };

    swiper.on('slideChange', handleSlideChange);
    swiper.on('slideChangeTransitionEnd', handleSlideChange);

    return () => {
      window.removeEventListener('resize', setup);
      ScrollTrigger.getAll().forEach(t => t.kill());
      if (container) container.style.marginBottom = '';
      swiper.off('slideChange', handleSlideChange);
      swiper.off('slideChangeTransitionEnd', handleSlideChange);
    };
  }, [isMobile, data]);

  useEffect(() => {
    if (!loading && data) {
      ScrollTrigger.refresh();
    }
  }, [loading, data]);

  if (loading) return <div>Завантаження послуг...</div>;
  if (error) return <div>Помилка завантаження послуг. Спробуйте пізніше.</div>;

  const slidesData = data?.main_services.map(s => {
    let mediaObj: { public_id: string; resource_type: string };
    try {
      mediaObj = JSON.parse(s.media as string);
    } catch {
      mediaObj = { public_id: '', resource_type: 'image' };
    }
    return {
      id: s.id,
      publicId: mediaObj.public_id,
      resourceType: mediaObj.resource_type,
      name: s.name,
      price: s.price,
    };
  }).filter(slide => slide.publicId) || [];

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
              setShowLeftArrow(!sw.isBeginning);
            }}
            onSlideChange={(sw: SwiperType) => {
              setShowLeftArrow(!sw.isBeginning);
            }}
            allowTouchMove={isMobile}
            observer={true}
            observeParents={true}
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
              <SwiperSlide key={slide.id}>
                <Slide 
                  publicId={slide.publicId}
                  resourceType={slide.resourceType}
                  name={slide.name} 
                  price={slide.price} 
                  onClick={handleSmoothScroll} 
                />
              </SwiperSlide>,
              index === 1 && (
                <SwiperSlide key="all-services">
                <a 
            className="services__slide services__slide-desktop" 
            href="/services" 
            aria-label="Перейти до всіх послуг"
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
              href="/services" 
              aria-label="Перейти до всіх послуг"
        
            >
              Усі послуги
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

interface SlideProps { 
  publicId: string; 
  resourceType: string; 
  name: string; 
  price: string;
  onClick: (e: React.MouseEvent) => void;
}

function Slide({ publicId, resourceType, name, price, onClick }: SlideProps) {
  const transformations = ['w_1200', 'h_800', 'f_auto', 'q_auto', resourceType === 'image' ? 'c_fill' : 'c_limit'];
  const imageCld = useCloudinaryImage(publicId, transformations);
  const imageUrl = imageCld.toURL();
  const cloudName = 'de9w91bzq';
  const transStr = transformations.join(',');
  const videoUrl = `https://res.cloudinary.com/${cloudName}/video/upload/${transStr}/${publicId}.mp4`;

  return (
    <a 
      href="#cta" 
      className="services__slide" 
      aria-label={`Послуга: ${name}, Ціна: ${price}`}
      onClick={onClick}
      style={{ width: '384px' }}
    >
      {resourceType === 'video' ? (
        <video
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="services__slide_img"
          width={384}
          height={240}
        />
      ) : (
        <img 
          src={imageUrl} 
          alt={name} 
          className="services__slide_img" 
          width={384}
          height={240}
        />
      )}
      <div className="services__slide_info">
        <div className="services__slide_name">{name}</div>
        <div className="services__slide_price">{price}</div>
      </div>
    </a>
  );
}
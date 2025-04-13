import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperCore } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import heartIcon from "../../../../assets/images/review/heart.svg";
import video1 from "../../../../assets/images/review/storys/1.mov";
import video2 from "../../../../assets/images/review/storys/2.mov";
import video3 from "../../../../assets/images/review/storys/3.mov";
import video4 from "../../../../assets/images/review/storys/4.mov";
import video5 from "../../../../assets/images/review/storys/5.mov";
import video6 from "../../../../assets/images/review/storys/6.mov";

const reviewVideos = [video1, video2, video3, video4, video5, video6];

export default function Review() {
  const [realVideoIndex, setRealVideoIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const animationRef = useRef<number>();
  const swiperRef = useRef<SwiperCore>();
  const containerRef = useRef<HTMLDivElement>(null);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (!entry.isIntersecting) {
          videoRefs.current.forEach(video => {
            if (video) {
              video.pause();
              isPlayingRef.current = false;
            }
          });
          if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
          }
        }
      },
      { threshold: 0.5, rootMargin: "100px" }
    );
    
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const video = videoRefs.current[realVideoIndex];
    if (!video) return;

    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";

    const updateProgress = () => {
      if (video.paused || video.ended) return;
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
      animationRef.current = requestAnimationFrame(updateProgress);
    };

    const startPlayback = async () => {
      try {
        videoRefs.current.forEach((v, i) => {
          if (v && i !== realVideoIndex) {
            v.pause();
            v.currentTime = 0;
          }
        });

        await new Promise(resolve => setTimeout(resolve, 50));
        
        if (!isPlayingRef.current) {
          await video.play();
          isPlayingRef.current = true;
          updateProgress();
        }
      } catch (error) {
        console.error("Playback error:", error);
        isPlayingRef.current = false;
      }
    };

    const handleEnded = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
      isPlayingRef.current = false;
    };

    video.addEventListener('ended', handleEnded);
    startPlayback();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      video.removeEventListener('ended', handleEnded);
      isPlayingRef.current = false;
    };
  }, [realVideoIndex, isVisible]);

  const handleSlideChange = (swiper: SwiperCore) => {
    setRealVideoIndex(swiper.realIndex);
    setProgress(0);
  };

  const onSwiperInit = (swiper: SwiperCore) => {
    swiperRef.current = swiper;
    setRealVideoIndex(swiper.realIndex);
  };

  return (
    <section id="review" className="review" ref={containerRef}>
      <div className="review__title"><span>В</span>ідгуки</div>
      <div className="container__slider">
        <div className="review__content">
          <div className="review__container">
            <img src={heartIcon} alt="Символ відгуків" />
            <h5 className="review__container_title">
              <span>М</span>ісце,<br /> де зупиняється час<br /> і триває насолода!
            </h5>
            <p className="review__container_subtitle">— зі слів наших гостей.</p>
          </div>
          <div className="review__storys">
            <div className="review__slider-container">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: ".review__slider_prev",
                  nextEl: ".review__slider_next",
                }}
                spaceBetween={20}
                loop={true}
                onSwiper={onSwiperInit}
                onSlideChange={handleSlideChange}
                slidesPerView={3}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  1130: { slidesPerView: 3 }
                }}
                className={`review__swiper ${!isVisible ? 'hidden' : ''}`}
              >
                {reviewVideos.map((video, index) => (
                  <SwiperSlide key={index}>
                    <div className="review__slide">
                      <div className="review__video-container">
                        {realVideoIndex === index && (
                          <div className="review__progress-container">
                            <div className="review__progress-bar">
                              <div
                                className="review__progress"
                                style={{ width: `${progress}%` }}
                                role="progressbar"
                                aria-valuenow={progress}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        )}
                        <video
                          className={`review__video ${realVideoIndex === index ? 'active' : ''}`}
                          muted
                          playsInline
                          webkit-playsinline="true"
                          ref={el => videoRefs.current[index] = el}
                          aria-label={`Відгук ${index + 1}`}
                        >
                          <source src={video} type="video/mov" />
                        </video>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="review__slider_btn">
                <button className="review__slider_prev" aria-label="Previous video">
                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1L2 7L8 13" stroke="#006A60" strokeWidth="2"/>
                </svg>
                </button>
                <button className="review__slider_next" aria-label="Next video">
                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="#006A60" strokeWidth="2"/>
                </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
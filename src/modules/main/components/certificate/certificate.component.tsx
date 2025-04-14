import { useRef, useState } from "react";
import heartIcon from "../../../../assets/images/certificate/heart.svg";
import playIcon from "../../../../assets/images/certificate/play.svg";
import photo from "../../../../assets/images/certificate/photo.webp";
import preview from "../../../../assets/images/certificate/preview.webp";
import video from "../../../../assets/video/spa.mp4";

export default function Certificate() {
  const desktopVideoRef = useRef<HTMLVideoElement | null>(null);
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isDesktopPlaying, setIsDesktopPlaying] = useState(false);
  const [isMobilePlaying, setIsMobilePlaying] = useState(false);

  const handleDesktopPlayPause = () => {
    if (desktopVideoRef.current) {
      if (isDesktopPlaying) {
        desktopVideoRef.current.pause();
      } else {
        desktopVideoRef.current.play();
      }
      setIsDesktopPlaying(!isDesktopPlaying);
    }
  };

  const handleMobilePlayPause = () => {
    if (mobileVideoRef.current) {
      if (isMobilePlaying) {
        mobileVideoRef.current.pause();
      } else {
        mobileVideoRef.current.play();
      }
      setIsMobilePlaying(!isMobilePlaying);
    }
  };

  return (
    <section className="certificate">
      <div className="container">
        <div className="certificate__content">
          <div className="certificate__top">
            <div className="certificate__top_column">
              <h4 className="certificate__title">
                <span>Щ</span>о придбати<br/> щоб приємно здивувати? — Подарунковий сертифікат до
                клубу краси VRODA на SPA послуги або косметологію!
              </h4>
            </div>
            <div className="certificate__top_column">
              <div className="certificate__info">
                <div className="certificate__info_container">
                  <img src={heartIcon} alt="Символ сертифікату" />
                  <p className="certificate__info_text">
                    Сертифікати виписуються на будь-яку суму чи послугу для
                    SPA-, або косметологічних процедур
                  </p>
                </div>
                <div className="certificate__info_container">
                  <img src={heartIcon} alt="Символ сертифікату" />
                  <p className="certificate__info_text">
                    можна придбати онлайн чи в офлайн форматі
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="certificate__bottom">
            <img className="certificate__image" src={photo} alt="Фото сертифікату VRODA" />
            <div className="certificate__video desktop">
              <video
                ref={desktopVideoRef}
                src={video}
                muted
                poster={preview}
                onClick={handleDesktopPlayPause}
                aria-label="Видео о сертификатах на SPA услуги"
              />
              {!isDesktopPlaying && (
                <button
                  className="certificate__play"
                  onClick={handleDesktopPlayPause}
                  aria-label="Play video"
                >
                  <img src={playIcon} alt="Play" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="certificate__video mobile">
        <video
          ref={mobileVideoRef}
          src={video}
          muted
          poster={preview}
          onClick={handleMobilePlayPause}
          aria-label="Видео о сертификатах на SPA услуги"
        />
        {!isMobilePlaying && (
          <button
            className="certificate__play"
            onClick={handleMobilePlayPause}
            aria-label="Play video"
          >
            <img src={playIcon} alt="Play" />
          </button>
        )}
      </div>
    </section>
  );
}
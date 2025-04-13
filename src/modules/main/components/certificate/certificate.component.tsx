import { useRef, useState } from "react";
import heartIcon from "../../../../assets/images/certificate/heart.svg";
import playIcon from "../../../../assets/images/certificate/play.svg";
import photo from "../../../../assets/images/certificate/photo.webp";
import preview from "../../../../assets/images/certificate/preview.webp";
import video from "../../../../assets/video/spa.mov";

export default function Certificate() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
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
                ref={videoRef}
                src={video}
                muted
                poster={preview}
                onClick={handlePlayPause}
                aria-label="Видео о сертификатах на SPA услуги"
              />
              {!isPlaying && (
                <button
                  className="certificate__play"
                  onClick={handlePlayPause}
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
          ref={videoRef}
          src={video}
          muted
          poster={preview}
          onClick={handlePlayPause}
          aria-label="Видео о сертификатах на SPA услуги"
        />
        {!isPlaying && (
          <button
            className="certificate__play"
            onClick={handlePlayPause}
            aria-label="Play video"
          >
            <img src={playIcon} alt="Play" />
          </button>
        )}
      </div>
    </section>
  );
}

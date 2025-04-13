import { useEffect, useRef } from "react";
import iconPoint from "../../../../assets/images/map-point.svg";
import iconPhone from "../../../../assets/images/map-phone.svg";

declare global {
  interface Window {
    initMap: () => Promise<void>;
    google: typeof google;
  }
}

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existingScript = document.querySelector(
      `script[src*="maps.googleapis.com"]`
    );
    if (existingScript) {
      window.initMap = initMap;
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA3FP8qSfg1kG3U3XKXzPFEWd_NCDTsqL0&loading=async&callback=initMap&libraries=marker&map_ids=3e262c37b4454cda`;
    script.async = true;
    script.defer = true;
    script.onerror = () => {
      console.error("❌ Не вдалося завантажити скрипт Google Maps. Перевірте підключення до інтернету та правильність API ключа.");
    };
    window.initMap = initMap;
    document.head.appendChild(script);

    async function initMap() {
      if (!mapRef.current) {
        console.error("🔍 Контейнер карти не знайдено. Перевірте ref на div для карти.");
        return;
      }

      try {
        const { Map } = (await google.maps.importLibrary(
          "maps"
        )) as google.maps.MapsLibrary;
        const { AdvancedMarkerElement } = (await google.maps.importLibrary(
          "marker"
        )) as google.maps.MarkerLibrary;

        const map = new Map(mapRef.current, {
          center: { lat: 49.786097, lng: 30.127641 },
          zoom: 17,
          disableDefaultUI: true,
          mapId: "3e262c37b4454cda"
        });

        new AdvancedMarkerElement({
          position: { lat: 49.786097, lng: 30.127641 },
          map: map,
          title: "Клуб краси VRODA"
        });

        console.log("✅ Карта успішно ініціалізована");
      } catch (error) {
        console.error("❗ Помилка ініціалізації карти:", error);
      }
    }

    return () => {
      const scriptElement = document.querySelector(
        `script[src*="maps.googleapis.com"]`
      );
      if (scriptElement) {
        document.head.removeChild(scriptElement);
      }
    };
  }, []);

  return (
    <section
      id="map"
      className="map"
      style={{
        position: "relative",
        minHeight: "600px",
        overflow: "hidden",
      }}
    >
      <div
        ref={mapRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      <div className="container">
        <div className="map__info">
          <div className="map__info_title">
            будемо раді вас бачити в клубі краси "VRODA"
          </div>
          <div className="map__info_worktime">
            Графік роботи: ПН-НД 9:00-20:00
            (за попереднім записом)
          </div>
          <div className="map__info_address">
            <img src={iconPoint} alt="Адреса клубу краси VRODA" />
            <p>Біла Церква, вул. Шевченка 120</p>
          </div>
          <div className="map__info_call">
            <img src={iconPhone} alt="Контактний телефон клубу краси VRODA" />
            <a href="tel:+380961212120">+38 (096) 121-21-20</a>
          </div>
          <a
            className="map__info_link"
            href="https://www.google.com/maps/dir/?api=1&destination=49.786097,30.127641"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Прокласти маршрут до салону краси Врода"
          >
            прокласти маршрут
          </a>
        </div>
      </div>
    </section>
  );
}
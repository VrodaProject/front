import { FC, useState } from "react";
import { useQuery } from "@apollo/client";
import { Helmet } from "react-helmet";
import { Button } from "@app/common/components/button/button.component";
import { Link } from "react-router-dom";

import {
  GetServiceSectionsFullDocument,
  GetServiceSectionsFullQuery,
} from "@app/core/types";

interface SubCategory {
  id: string;
  title: string;
  price: string;
  description: string;
  subtitle?: string | null;
}

interface Category {
  id: string;
  title: string;
  image: string;
  subCategories: SubCategory[];
}

interface Section {
  id: string;
  title: string;
  categories: Category[];
}

const wrapFirstLetter = (text: string) => {
  if (!text) return text;
  const firstLetter = text.charAt(0);
  const rest = text.slice(1);
  return (
    <>
      <span>{firstLetter}</span>
      {rest}
    </>
  );
};

const AccordionItem: FC<SubCategory> = ({ title, price, description, subtitle }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`services-accordion ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setOpen(!open);
      }}
    >
      <div className="services-accordion__header">
        <div className="services-accordion__title-wrap">
          <h4 className="services-accordion__title">
            <div className="services-accordion__title-txt">
              <span className="services-accordion__text-wrap">
                <span className="services-accordion__text">
                  {title}
                </span>
                <span className={`services-accordion__icon ${open ? "rotated" : ""}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="18" fill="#006A60" />
                    <path d="M23.333 18L17.9997 23.3333L12.6663 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M23.333 12.6667L17.9997 18L12.6663 12.6667" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </span>
            </div>

            {subtitle && <span className="services-accordion__subtitle">{subtitle}</span>}
          </h4>

          
        </div>
        
        <span className="services-accordion__price">{price}</span>
      </div>
      {open && <p className="services-accordion__description">{description}</p>}
    </div>
  );
};

const CategoryBlock: FC<{ category: Category }> = ({ category }) => {
  const [visibleCount, setVisibleCount] = useState(7);
  const showMore = () => setVisibleCount((prev) => prev + 7);
  const hasMore = visibleCount < category.subCategories.length;

  return (
    <section className="services-category">
      <div className="services-category__header">
        <h3 className="services-category__title">{wrapFirstLetter(category.title)}</h3>
        <div className="services-category__button">
          <Link to="/#cta" className="button button--base" role="button" aria-label="Записатись на процедуру">
            Записатись
          </Link>
        </div>
      </div>
      <div className="services-category__content">
        <div className="services-category__image-wrapper">
          <img
            src={category.image}
            alt={category.title}
            className="services-category__image"
          />
        </div>
        <div className="services-category__list">
          {category.subCategories.slice(0, visibleCount).map((sub) => (
            <AccordionItem key={sub.id} {...sub} />
          ))}
          {hasMore && (
            <div className="services-category__more">
              <Button size="sm" onClick={showMore}>
                більше Послуг
              </Button>
            </div>
          )}
        </div>
        <div className="services-category__button services-category__button-mobile">
          <Link to="/#cta" role="button" aria-label="Записатись на процедуру" className="button">
            Записатись
          </Link>
        </div>
      </div>
    </section>
  );
};

export const ServicesPage: FC = () => {
  const { data, loading, error } = useQuery(GetServiceSectionsFullDocument);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  if (loading) return <div>Завантаження...</div>;
  if (error) {
    console.error(error);
    return <div className="preview_text">Послуг ще немає</div>;
  }

  const sections: Section[] =
    data?.service_sections.map(
      (section: GetServiceSectionsFullQuery["service_sections"][number]) => ({
        id: section.id,
        title: section.title,
        categories: section.service_categories.map(
          (category: typeof section.service_categories[number]) => ({
            id: category.id,
            title: category.title,
               image: (() => {
              try {
                const parsed = JSON.parse(category.preview);
                const { public_id } = parsed;
                if (!public_id) return "";

                return `https://res.cloudinary.com/de9w91bzq/image/upload/${public_id}`;
              } catch (err) {
                console.warn("Парсинг preview не вдалий:", category.preview, err);
                return "";
              }
            })(),


            subCategories: category.service_subcategories.map(
              (sub: typeof category.service_subcategories[number]) => ({
                id: sub.id,
                title: sub.title,
                price: sub.price,
                description: sub.description,
                subtitle: sub.subtitle, 
              })
            ),
          })
        ),
      })
    ) || [];
    
const showAllSections = () => {
  setActiveTab(null);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const showSection = (sectionId: string) => {
  setActiveTab(sectionId);
  window.scrollTo({ top: 0, behavior: "smooth" });
};


  return (
    <div className="services-page">
      <Helmet>
        <title>Послуги</title>
      </Helmet>

  <div className="services-tabs">
  <div className="services-tabs__container">
    <div
      className={`services-tabs__tab ${activeTab === null ? "active" : ""}`}
      onClick={showAllSections}
      role="button"
      tabIndex={0}
    >
      Усі послуги
    </div>
    {sections.map((section) => (
      <div
        key={section.id}
        className={`services-tabs__tab ${activeTab === section.id ? "active" : ""}`}
        onClick={() => showSection(section.id)}
        role="button"
        tabIndex={0}
      >
        {section.title}
      </div>
    ))}
  </div>
</div>

       <div className="services-tabs-divider"></div>   
      {sections.map((section) => (
        <div
          key={section.id}
          className="services-section"
          style={{ display: activeTab === null || activeTab === section.id ? "block" : "none" }}
        >
          <div className="services-section__title-wrap">
            <h2 className="services-section__title">{wrapFirstLetter(section.title)}</h2>
          </div>
          {section.categories.map((category) => (
            <CategoryBlock key={category.id} category={category} />
          ))}
        </div>
      ))}
    </div>
  );
};

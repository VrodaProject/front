import { useState, useRef, useEffect } from 'react';
import formVideo from "../../../../assets/video/form-video.mp4";

interface Option {
  value: string;
  label: string;
}

export default function Cta() {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const options: Option[] = [
    { value: 'Косметологія апаратна', label: 'Косметологія апаратна' },
    { value: 'Косметологія ін\'єкційна', label: 'Косметологія ін\'єкційна' },
    { value: 'SPA програми', label: 'SPA програми' },
    { value: 'Турбота про тіло', label: 'Турбота про тіло' },
    { value: 'Антицелюлітна програма', label: 'Антицелюлітна програма' },
    { value: 'Б\'юті послуги (Брови, макіяж)', label: 'Б\'юті послуги (Брови, макіяж)' },
    { value: 'Епіляція / депіляція', label: 'Епіляція / депіляція' },
    { value: 'подарункові Сертифікати', label: 'подарункові Сертифікати' }
  ];

  const handleSelectClick = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const handleOptionClick = (value: string, label: string) => {
    setSelectedOption(label);
    setIsSelectOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsSelectOpen(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}.${(currentDate.getMonth() + 1).toString().padStart(2, '0')}.${currentDate.getFullYear()} ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`;
    
    const formData = {
      date: formattedDate,  
      name,
      phone,
      service: selectedOption
    };
    
    console.log('Form Data:', formData);

    try {
      const response = await fetch('https://sheetdb.io/api/v1/o10gbhewn7206', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([formData]) 
      });

      const result = await response.json();
      console.log('Response Data:', result);

      if (result.created) {
        setShowThankYou(true);
        setName('');
        setPhone('');
        setSelectedOption('');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeThankYou = () => {
    setShowThankYou(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section id="cta" className="cta" aria-labelledby="cta-title">
      <div className="cta__content">
        <div className="cta__preview">
          <video aria-label="Клуб краси VRODA — місце вашої сили та релаксу" src={formVideo} autoPlay loop muted />
        </div>
        <div className="cta__form_wrap">
          <div className="cta__title" id="cta-title"><span>З</span>апрошуємо у наше місце сили та релаксу</div>
          <div className="cta__subtitle">Запишіться зараз і отримайте знижку -10% на перше відвідування*</div>
          <form onSubmit={handleSubmit} className="cta__form" aria-labelledby="cta-form">
            <div className="cta__form_container">
              <input 
                type="text" 
                placeholder="Ваше Ім'я" 
                className="cta__form_field" 
                aria-required="true" 
                aria-placeholder="Ваше Ім'я"
                title="Ваше ім'я"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="cta__form_container">
              <input 
                type="tel" 
                placeholder="Номер телефону" 
                className="cta__form_field" 
                aria-required="true" 
                aria-placeholder="Номер телефону"
                title="Ваш номер телефону"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="cta__form_container">
              <div 
                className={`cta__form_select ${isSelectOpen ? 'active' : ''}`} 
                ref={selectRef}
                onClick={handleSelectClick}
                role="combobox"
                aria-expanded={isSelectOpen}
                aria-haspopup="listbox"
                aria-labelledby="select-label"
                aria-controls="select-options" 
              >
                <div className="cta__form_select-selected" id="select-label">
                  <span className={selectedOption ? '' : 'cta__form_select-placeholder'}>
                    {selectedOption || 'Напрямок послуг'}
                  </span>
                  <svg 
                    className={`cta__form_select-arrow ${isSelectOpen ? 'active' : ''}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="14" 
                    height="9" 
                    viewBox="0 0 14 9" 
                    fill="none"
                  >
                    <path d="M13 1.5L7 7.5L1 1.5" stroke="#364A43" strokeWidth="2"/>
                  </svg>
                </div>
                <ul 
                  className="cta__form_select-options" 
                  role="listbox"
                  style={{ display: isSelectOpen ? 'block' : 'none' }}
                >
                  {options.map((option) => (
                    <li
                      key={option.value}
                      className="cta__form_select-option"
                      role="option"
                      aria-selected={selectedOption === option.label}
                      onClick={() => handleOptionClick(option.value, option.label)}
                      tabIndex={0}
                      onKeyDown={(e: React.KeyboardEvent) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleOptionClick(option.value, option.label);
                        }
                      }}
                    >
                      {option.label}
                    </li>
                  ))}
                </ul>
                <input type="hidden" name="service_direction" value={selectedOption} />
              </div>
            </div>

            <div className="cta__form_container">
              <button 
                className="cta__form_button" 
                aria-label="Записатись на прийом" 
                title="Записатись на прийом" 
                type="submit"
                disabled={isSubmitting}
              >
                Записатись
              </button>
            </div>
          </form>

          <div className="cta__form_discount">
            *Знижка -10% діє на: доглядові процедури по обличчю
            | масажі обличчя і тіла
            | апаратні процедури по обличчю і тілу | миттєва засмага
            | депіляція воском та цукровою пастою
            | б'юті процедури (макіяж, брови, ламінування вій)
          </div>
        </div>
      </div>

      {showThankYou && (
        <div className="cta__thank-you-popup">
          <div className="cta__thank-you-content">
            <h3 className="cta__thank-you-title"><span>Д</span> якуємо! заявка прийнята!</h3>
            <p className="cta__thank-you-text">Менеджер зв’яжеться з вами у робочий час (щодня з 9:00 до 20:00)!</p>
            <button 
              className="cta__thank-you-button" 
              onClick={closeThankYou}
              aria-label="Закрити вікно"
            >
              Добре
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

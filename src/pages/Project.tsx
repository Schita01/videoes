import { useState, useEffect, useCallback } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useLanguage } from "../context/LanguageContextType"; 
import { Link } from "react-router-dom";

const Project = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { selectedLanguage, languages, setSelectedLanguage } = useLanguage();

  type ItemType = {
    id: number;
    label: any;
    content: any;
    calc?: any;
  };

  // Separate selected items for each menu
  const [selectedRestaurantItem, setSelectedRestaurantItem] = useState<ItemType>({
    id: 1,
    label: languages?.[selectedLanguage]?.restaurantAboutTitel1 || 'Fallback Label 1',
    content: languages?.[selectedLanguage]?.restaurantAboutText1 || 'Fallback content 1',
  });

  const [selectedProdItem, setSelectedProdItem] = useState<ItemType>({
    id: 1,
    label: languages?.[selectedLanguage]?.prodTitle1 || 'Fallback Label 1',
    content: languages?.[selectedLanguage]?.prodText1 || 'Fallback content 1',
    calc: languages?.[selectedLanguage]?.calculatorText1 || 'Fallback content 1',
  });

  const items = [
    { id: 1, label: languages?.[selectedLanguage]?.restaurantAboutTitel1 || 'Fallback Label 1', content: languages?.[selectedLanguage]?.restaurantAboutText1 || 'Fallback content 1' },
    { id: 2, label: languages?.[selectedLanguage]?.restaurantAboutTitel2 || 'Fallback Label 2', content: languages?.[selectedLanguage]?.restaurantAboutText2 || 'Fallback content 2' },
    { id: 3, label: languages?.[selectedLanguage]?.restaurantAboutTitel3 || 'Fallback Label 3', content: languages?.[selectedLanguage]?.restaurantAboutText3 || 'Fallback content 3' },
    { id: 4, label: languages?.[selectedLanguage]?.restaurantAboutTitel4 || 'Fallback Label 4', content: languages?.[selectedLanguage]?.restaurantAboutText4 || 'Fallback content 4' },
  ];

  const items2 = [
    { id: 1, label: languages?.[selectedLanguage]?.prodTitle1 || 'Fallback Label 1', content: languages?.[selectedLanguage]?.prodText1 || 'Fallback content 1', calc: languages?.[selectedLanguage]?.calculatorText1 || 'Fallback calc 1' },
    { id: 2, label: languages?.[selectedLanguage]?.prodTitle2 || 'Fallback Label 2', content: languages?.[selectedLanguage]?.prodText2 || 'Fallback content 2', calc: languages?.[selectedLanguage]?.calculatorText2 || 'Fallback calc 2' },
    { id: 3, label: languages?.[selectedLanguage]?.prodTitle3 || 'Fallback Label 3', content: languages?.[selectedLanguage]?.prodText3 || 'Fallback content 3', calc: languages?.[selectedLanguage]?.calculatorText3 || 'Fallback calc 3' },
    { id: 4, label: languages?.[selectedLanguage]?.prodTitle4 || 'Fallback Label 4', content: languages?.[selectedLanguage]?.prodText4 || 'Fallback content 4', calc: languages?.[selectedLanguage]?.calculatorText4 || 'Fallback calc 4' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  console.log(currentSlide)
  useEffect(() => {
    if (loaded && instanceRef.current) {
      const intervalId = setInterval(() => {
        instanceRef.current?.next();
      }, 5000);
      return () => clearInterval(intervalId);
    }
  }, [loaded]);

  


  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsLanguageOpen((prev) => !prev);
  }, []);

  const handleLanguageSelection = useCallback(
    (lang: string) => {
      setSelectedLanguage(lang);
      setIsLanguageOpen(false);
    },
    [setSelectedLanguage]
  );

  return (
    <section className="first_project_section">
      <Link to={"/"}>
        <button data-aos="zoom-in-right" className="custom-button" type="button">
          <div className="button-bg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="25px" width="25px">
              <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="#fff" />
              <path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z" fill="#fff" />
            </svg>
          </div>
          <p className="button-text">{languages[selectedLanguage].backPage}</p>
        </button>
      </Link>

      <div className="navigation-wrapper">
        <div className="language-menu">
          <button className="language-btn" onClick={toggleDropdown}>
            {selectedLanguage + " ▼"}
          </button>
          {isLanguageOpen && (
            <ul className="language-dropdown">
              {Object.keys(languages).map((lang) => (
                <li key={lang} onClick={() => handleLanguageSelection(lang)} className="dropdown-item">
                  {lang}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div ref={sliderRef} className="keen-slider">
          <span className="project-slider-span">{languages[selectedLanguage].gallery}</span>
          <div className="keen-slider__slide number-x1">
            <div className="container">
              <div className="project-slider-text-container"></div>
            </div>
          </div>
          <div className="keen-slider__slide number-x2">
            <div className="container">
              <div className="project-slider-text-container"></div>
            </div>
          </div>
          <div className="keen-slider__slide number-x3">
            <div className="container">
              <div className="project-slider-text-container"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="investing">
        <div className="container">
          <div className="carousel-container">
            <div data-aos="zoom-in" className="circular-menu2">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className={`menu-item restaurant-${index + 1} ${selectedRestaurantItem.id === item.id ? 'active' : ''}`}
                  onClick={() => setSelectedRestaurantItem(item)}
                >
                  {item.label}
                </div>
              ))}
              <span className="restaurant-span-text">{languages[selectedLanguage].restaurant}</span>
            </div>
            {selectedRestaurantItem && (
              <div data-aos="fade-right" className="info-box">
                <p className="sircle-span2">{selectedRestaurantItem.content}</p>
              </div>
            )}
          </div>

          <div data-aos="zoom-in" className="carousel-container s-c-1">
            <div className="circular-menu3">
              {items2.map((item, index) => (
                <div
                  key={item.id}
                  className={`menu-item prod2-${index + 1} ${selectedProdItem.id === item.id ? 'active3' : ''}`}
                  onClick={() => setSelectedProdItem(item)}
                >
                  {item.label}
                </div>
              ))}
              <span className="restaurant-span-text">{languages[selectedLanguage].inve}</span>
            </div>
            {selectedProdItem && (
              <div className="info-boxes">
                <span className="project-sircle-p1">{selectedProdItem.content}</span>
                <span className="project-sircle-p2">{selectedProdItem.calc}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Arrow Component remains the same...

export default Project;

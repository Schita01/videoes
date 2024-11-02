import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContextType";
import { Link } from "react-router-dom";
import logo from "../assets/logox.png";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
const Home = () => {

  // Access the language context
  const { selectedLanguage, languages, setSelectedLanguage } = useLanguage();

  // State for selected item
  const [selectedItem, setSelectedItem] = useState({
    id: 1,
    label: 'Acquisitions',
    content: languages?.[selectedLanguage]?.aboutInvestmentText1 || 'Default text in case language data is missing',
  });

  // Effect to update the content when the language changes
  useEffect(() => {
    if (languages && selectedLanguage) {
      setSelectedItem((prevItem) => ({
        ...prevItem,
        content: languages[selectedLanguage]?.aboutInvestmentText1 || 'Fallback text if not found',
      }));
    }
  }, [selectedLanguage, languages]);

  // Define items based on the selected language
  const items = [
    {
      id: 1,
      label: languages?.[selectedLanguage]?.investTitle1 || 'Fallback Label 1',
      content: languages?.[selectedLanguage]?.aboutInvestmentText1 || 'Fallback content 1',
    },
    {
      id: 2,
      label: languages?.[selectedLanguage]?.investTitle2 || 'Fallback Label 2',
      content: languages?.[selectedLanguage]?.aboutInvestmentText2 || 'Fallback content 2',
    },
    {
      id: 3,
      label: languages?.[selectedLanguage]?.investTitle3 || 'Fallback Label 3',
      content: languages?.[selectedLanguage]?.aboutInvestmentText3 || 'Fallback content 3',
    },
    {
      id: 4,
      label: languages?.[selectedLanguage]?.investTitle4 || 'Fallback Label 4',
      content: languages?.[selectedLanguage]?.aboutInvestmentText4 || 'Fallback content 4',
    },
  ];

  // State for language menu visibility
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  // Functions to handle language menu toggle
  const toggleDropdown = () => setIsLanguageOpen(!isLanguageOpen);
  const handleLanguageSelection = (lang: string) => {
    setSelectedLanguage(lang);
    setIsLanguageOpen(false); // Close dropdown after selection
  };

  // Keen Slider configuration
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    rubberband: false,
    vertical: true,
  });
  sliderRef

  // Scroll to the top of the page on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videoUrl = "https://videos.ctfassets.net/6rqe4bgsojj5/3urtuXKhJcmk7k7lTgrKxa/c38da316ad6d2825dae18706d571aa59/Roofstock_LandingVideo_102523-v3.webm";

  return (
    <section className="home_section ">
      {/* Background video */}
      <video autoPlay muted loop className="main_video">
        <source src={videoUrl} type="video/webm" />
      </video>

      {/* Language menu */}
      <div className="language-menu">
        <button className="language-btn" onClick={toggleDropdown}>
          {selectedLanguage + "▼"}
        </button>
        {isLanguageOpen && (
          <ul className="language-dropdown">
            {Object.keys(languages).map((lang) => (
              <li
                key={lang}
                onClick={() => handleLanguageSelection(lang)}
                className="dropdown-item"
              >
                {lang}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Main content overlay */}
      <div className="content_overlay">
        <img data-aos="zoom-in" className="logo" src={logo} alt="" />
        <div className="content-overlay-text">
          <h1 data-aos="fade-up" className="content-h1">geoinvest</h1>
          <span data-aos="fade-up" className="content-span">
            {languages[selectedLanguage]?.mainText}
          </span>
        </div>
        <button
          data-aos="fade-up"
          onClick={() => window.scrollBy({ top: 800, behavior: "smooth" })}
          className="button"
        >
          <span className="button_lg">
            <span className="button_text">{languages[selectedLanguage]?.moreBtn}</span>
          </span>
        </button>
      </div>

      {/* Investing section */}
      <div className="investing">
        <div className="container">
          <div className="investing-container">
            <p data-aos="fade-right" className="SliceCarouselLifecycle_eyebrow__O_r1c text-eyebrow">
              {languages[selectedLanguage]?.moreBtn}
            </p>
            <div className="about">
              <span data-aos="fade-up" className="about-span">
                {languages[selectedLanguage]?.abouUsSlogan}
              </span>
              <p data-aos="fade-up" className="about-p">
                {languages[selectedLanguage]?.abouUsText}
              </p>
            </div>
            <span data-aos="fade-right" className="SliceCarouselLifecycle_headline__sIvRj text-xl1">
              {languages[selectedLanguage]?.investmentMainText}
            </span>

            {/* Info carousel */}
            <div className="container">

            <div className="carousel-container">
                    
              {/* <div data-aos="zoom-in" className="circular-menu">
                <Link className="carousel-next-page" to={"/project"}>
                {languages[selectedLanguage]?.showProject}
                </Link>
                {items.map((item, index) => (
                  <div
                  key={item.id}
                  className={`menu-item item-${index + 1} ${selectedItem.id === item.id ? 'active' : ''}`}
                  onClick={() => setSelectedItem(item)}
                  >
                  {item.label}
                  </div>
                  ))}
                  </div>
                  {selectedItem && (
                    <div data-aos="fade-right" className="info-box">
                    <p className="sircle-span">{selectedItem.content}</p>
                    </div>
                    )} */}

<div data-aos="zoom-in" className="circular-menus">
  <Link className="carousel-next-pages" to={"/project"}>
    {languages[selectedLanguage]?.showProject}
  </Link>
  {items.map((item, index) => (
    <div
    key={item.id}
    className={`menu-items items-${index + 1} ${selectedItem.id === item.id ? 'active' : ''}`}
    onClick={() => setSelectedItem(item)}
    >
      {item.label}
    </div>
  ))}
</div>
{selectedItem && (
  <div data-aos="fade-right" className="info-boxs">
    <p className="sircle-span1">{selectedItem.content}
      
    </p>
  </div>
)}
</div>



            </div>
          </div>
        </div>
      </div>  
    </section>
  );
};

export default Home;

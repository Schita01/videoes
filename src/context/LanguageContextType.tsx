import { createContext, useState, useContext, ReactNode } from "react";

// Define types for the context state
interface LanguageContextType {
  selectedLanguage: string;
  setSelectedLanguage: (lang: string) => void;
  languages: any; // You can define the type of your translations if needed
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("GE");

  const languages =  {
    EN: {
      mainText:"Special real estate investment opportunities",
      backPage: "Go Back",
      moreBtn: "more",
      investmentMainText: "investment",
      restaurantMainText: "About the Restaurant",
      investTitle1: "Premium Investment",
      investTitle2: "Safety",
      investTitle3: "Guaranteed Profit",
      investTitle4: "Premium Service",
      aboutInvestmentText1: "Invest in high-end commercial real estate and turnkey businesses at 20x market value",
      aboutInvestmentText2: "100% protected capital secured in expensive real estate, the value of which increases year by year",
      aboutInvestmentText3: "Guaranteed investment profit, which is protected by the bank guarantee of the largest bank of Georgia.",
      aboutInvestmentText4: "You can receive investment benefits on any schedule you want: at the end of every month, once every three months, once every 6 months, at the end of the year or at the beginning of the year",
      about: "About US",
      abouUsSlogan: "Special opportunities for investing in real estate, which have no analogues in the real estate investment market of Georgia.",
      abouUsText: "GeoInvest is a real estate investment company with a non-traditional business model that creates unique opportunities for individuals interested in investing in real estate. We enable 100% secure and profitable investments in million-dollar properties at prices 20 times lower than their market value, and most importantly, investors can earn profits protected by bank guarantees that are 10 times more  than traditional deposits.",
      restaurantAboutText1: "The investment object is an exclusive 5-star hotel with a premium-class restaurant. The hotel consists of 8 floors and 70 rooms. The restaurant is located on the first floor of the hotel, with an area of 160 square meters. The restaurant includes expensive, ultra-modern technological infrastructure, exclusive luxury design, furniture, and kitchen equipment.",
      restaurantAboutText2: "The Solar Energy Hotel is located in the most active area of Tbilisi, in Old Tbilisi. On one hand, this area is distinguished by the highest and consistently growing prices in the real estate market of Georgia, and on the other hand, it is characterized by particularly high tourist activity throughout the year.",
      restaurantAboutText3: "The restaurant will be managed by the experienced team of the Solar Energy Hotel Group and Geoinvest, allowing you to enjoy comfortable investment conditions, guaranteed passive income, and the advantages of quality management.",
      restaurantAboutText4: "The restaurant business is one of the most profitable and rapidly growing businesses in Georgia. Rich culinary heritage, diverse and delicious cuisine, and particularly high demand ensure the continuous stable growth and high financial benefits of this business.",
      restaurantAboutTitel1: "Premium Class",
      restaurantAboutTitel2: "Best Location",
      restaurantAboutTitel3: "25 Years of Management",
      restaurantAboutTitel4: "Profitable Business Concept",
      gallery: "Gallery",
      restaurant: "Restaurant",
      prodTitle1: "Investing",
      prodTitle2: "",
      prodTitle3: "100% Protected Profit",
      prodTitle4: "0% Tax",
      prodText1: "The investment cost of the restaurant is $1,500,000. The company's business model offers you the best opportunity to invest at an exceptionally low price, unparalleled in Georgia's real estate investment market. The minimum investment starts from $37,500, which includes a 2.5% share in the restaurant. You can invest in any share amount you desire.",
      prodText2: "100% protection of your capital investments is due to real estate worth $1,500,000. According to the amount invested, you officially become the legal owner of this real estate Guaranteed redemption of investment capital. You can sell your share and get your money back in two ways: 1. Sell to a third party at any time at the price you want, depending on the terms of the investment. 2. In 5 years, the company is guaranteed to get back your share at the original purchase price",
      prodText3: "The investment benefit is a guaranteed annual 8.8% in dollars, which is secured by the bank guarantee of the largest bank of Georgia. Getting investment profit with individual schedule. You can receive investment benefits on any schedule you want: at the end of every month, once every 3 months, once every 6 months, at the end of the year or at the beginning of the year",
      prodText4: "We believe in transparency - depending on the investment conditions you are absolutely free from any kind of commissions and taxes and therefore you keep 100% of the investment profit of your capital",
      calculatorText1:"2.5% share of real estate (restaurant) worth $37,500 Guaranteed annual return of 8.8% Annual benefit $3,300 Monthly benefit $275 Growth of investment capital in 5 years - $16,500",
      calculatorText2:"5% share of $75,000 real estate (restaurant). Guaranteed annual return of 8.8% Annual benefit $6,600 Monthly benefit of $550 Growth of investment capital in 5 years - $33,000",
      calculatorText3:"7.5% interest in real estate (restaurant) worth $112,500 Guaranteed annual return of 8.8% Annual benefit $9,000 Monthly benefit of $750 Growth of investment capital in 5 years - $45,000",
      calculatorText4:"10% share of $150,000 real estate (restaurant).Guaranteed annual return of 8.8% Annual benefit $13,200 Monthly benefit of $1,100 Growth of investment capital in 5 years - $66,000",
      inve:"investment",
      showProject: "Project",
    },
    GE: {
      
      backPage: "უკან",
      mainText: "სპეციალური საინვესტიციო შესაძლებლობები უძრავ ქონებაში",
      moreBtn: "იხილეთ მეტი",
      investmentMainText: "ინვესტიცია",
      restaurantMainText: "რესტორნის შესახებ",
       investTitle1: "პრემიუმ ინვესტიცია",
      investTitle2: "უსაფრთხოება",
      investTitle3: "გარანტირებული მოგება",
      investTitle4: "პრემიალური სერვისი",
      aboutInvestmentText1: "ინვესტირება მაღალი კლასის კომერციულ უძრავ ქონებასა  და მზა ბიზნესში საბაზრო ღირებულებაზე 20-ჯერ დაბალ ფასად",
      aboutInvestmentText2: "ძვირადღირებულ უძრავ ქონებაში გამყარებული 100% დაცული კაპიტალი  რომლის ღირებულებაც  წლიდანწლამდე იზრდება ",
      aboutInvestmentText3: "გარანტირებული საინვესტიციო მოგება ,რომელიც საქართველოს ყველაზე მსხვილი ბანკის საბანკო გარანტიით არის დაცული .",
      aboutInvestmentText4: "საინვესტიციო სარგებლის მიღება შეგიძლიათ თქვენთვის სასურველი ნებისმიერი გრაფიკით: ყოველი თვის ბოლოს, სამ თვეში ერთხელ, 6 თვეში ერთხელ,წლის ბოლოს ან წლის დასაწყისში",
      about: "შესახებ",
      abouUsSlogan: "განსაკუთრებული შესაძლებლობები უძრავ ქონებაში ინვესტირებისთვის,რომელსაც ანალოგი არ გააჩნია საქართველოს უძრავი ქონების საინვესტიციო  ბაზარზე.",
      abouUsText: "კომპანია ჯეოინვესტი წარმოადგენს უძრავი ქონების საინვესტიციო კომპანიას, რომლის არატრადიციული ბიზნეს მოდელი ქმნის განსაკუთრებულ შესაძლებლობებს უძრავ ქონებაში ინვესტირებით დაინტერესებული პირებისთვის,განახორციელონ 100% -ით დაცული და მომგებიანი ინვესტიციები მილიონ დოლარიან უძრავ ქონებაში საბაზრო  ღირებულებაზე 20 ჯერ დაბალ ფასად და რაც მთავარია მიიღონ ტრადიციულ ანაბარზე 10 ჯერ მეტი,საბანკო გარანტიით დაცული მოგება.",
      restaurantAboutText1: "საინვესტიციო ობიექტი წარმოადგენს ექსკლუზიური 5-ვარსკვლავიან სასტუმროს პრემიუმ კლასის რესტორანს. სასტუმრო მოიცავს 8 სართულსა და 70 ნომერს . რესტორანი განთავსებულია სასტუმროს პირველ სართულზე,რომლის ფართობიც 160 მ2 -ს შეადგენს. რესტორანი მოიცავს ძვირადღირებულ ულტრათანამედროვე ტექნოლოგიურ ინფრასტრუქტურას,ძვირადღირებულ ექსკლუზიურ დიზაინს, ავეჯსა და სამზარეულოს ინვენტარს.",
      restaurantAboutText2: "სასტუმრო solar energy hotel -თბილისის ყველაზე აქტიურ ზონაში  ძველ თბილისში მდებარეობს, ეს ადგილი ერთის მხრივ  ყველაზე მაღალი და სტაბილურად მზარდი ფასებით გამოირჩევა საქართველოს უძრავი ქონების ბაზარზე, ხოლო მეორე მხრივ კი განსაკუთრებით მაღალი ტურისტული დატვირთულობით ხასიათდება მთელი წლის მანძილზე . ",
      restaurantAboutText3: "რესტორნის მართვას განახორციელებს solar energy hotel group-ის და Geoinvest -ის  გამოცდილი გუნდი რაც საშუალებას გაძლევთ  ისიამოვნოთ კომფორტული საინვესტიციო პირობებით, გარანტირებული პასიური შემოსავლითა და ხარისხიანი მენეჯმენტის უპირატესობებით. ",
      restaurantAboutText4: "სარესტორნო ბიზნესი  ერთ-ერთი ყველაზე მომგებიანი და სწრაფად მზარდი ბიზნესია საქართველოში. მდიდარი კულინარიული მემკვიდრეობა,მრავალფეროვანი უგემრიელესი სამზარეულო  და განსაკუთრებული მაღალი მოთხოვნილება,ამ ბიზნესის მუდმივ სტაბილურ ზრდასა და მაღალ ფინანსურ სარგებელს უზრუნველყოფს ",
      restaurantAboutTitel1: "პრემიუმ კლასი",
      restaurantAboutTitel2: "საუკეთესო ადგილმდებარეობა",
      restaurantAboutTitel3: "25 წლიანი მენეჯმენტი",
      restaurantAboutTitel4: "მომგებიანი ბიზნეს კონცეფცია",
      restaurnat: "რესტორანი",
      gallery: "გალერეა",
      restaurant: "რესტორანი",
      prodTitle1: "ინვესტირება ",
      prodTitle2: "100% -ით დაცული კაპიტალი",
      prodTitle3: "100%-ით დაცული მოგება",
      prodTitle4: "0% გადასახადი",
      prodText1: "საინვესტიციო რესტორნის ღირებულება შეადგენს 1,500,000 $. კომპანიის ბიზნეს მოდელი გაძლევთ საუკეთესო  შესაძლებლობას განახორციელოთ  ინვესტირება განსაკუთრებულ  დაბალ ფასად, რომელსაც ანალოგი არ გააჩნია  საქართველოს უძრავი ქონების საინვესტიციო ბაზარზე. მინიმალური ინვესტირება  შესაძლებელია 37,500$-დან  რომელიც მოიცავს რესტორნის 2.5 % წილს, ინვესტირების განხორციელება შესაძლებელია თქვენთვის სასურველი  ნებისმიერი წილობრივი ოდენობით.",
      prodText2: "თქვენი კაპიტალდაბანდების 100%-იან დაცულობას 1,500,000$ ღირებულების უძრავი ქონება განაპირობებს. ინვესტირებული თანხის შესაბამისად თქვენ ოფიციალურად ხდებით ამ უძრავი ქონების კანონიერი  მესაკუთრესაინვესტიციო  კაპიტალის გარანტირებული გამოსყიდვა.თქვენ შეგიძლიათ გაყიდოთ თქვენი წილი და დაიბრუნოთ თქვენი თანხა  ორი გზით: 1. გაყიდეთ მესამე მხარეზე ნებისმიერ დროს თქვენთვის სასურველ ფასად, ინვესტიციის პირობებიდან გამომდინარე. 2.5 წელიწადში კომპანია გარანტირებულად  დაიბრუნებს თქვენს წილს თავდაპირველი შესყიდვის ფასად ",
      prodText3: "საინვესტიციო სარგებელი შეადგენს გარანტირებულ  წლიურ 8.8% დოლარში,რომელიც უზრუნველყოფილია  საქართველოს ყველაზე მსხვილი ბანკის  საბანკო გარანტიის დაცულობით  საინვესტიციო მოგების მიღება ინდივიდუალური გრაფიკით . საინვესტიციო სარგებლის მიღება შეგიძლიათ თქვენთვის სასურველი ნებისმიერი გრაფიკით: ყოველი თვის ბოლოს, 3 თვეში ერთხელ, 6 თვეში ერთხელ,წლის ბოლოს ან წლის დასაწყისში  ",
      prodText4: "ჩვენ გვჯერა გამჭვირვალობის -საინვესტიციო პირობებიდან  გამომდინარე თქვენ აბსოლიტურად თავისუფლდებით  ნებისმიერი  სახის საკომისიოსგან და გადასახადებისგან და შესაბამისად 100% -ით ინარჩუნებთ თქვენი კაპიტალის საინვესტიციო მოგებას",
      calculatorText1: "37,500$ უძრავი ქონების ( რესტორნის)  2,5% წილი გარანტირებული  წლიური სარგებელი 8.8% წლიური სარგებელი 3,300$ თვიური სარგებელი 275$ საინვესატიციო კაპიტალის ზრდა 5 წელიწადში - 16,500$",
      calculatorText2:"75,000$ უძრავი ქონების ( რესტორნის) 5 % წილი გარანტირებული წლიური სარგებელი 8,8% წლიური სარგებელი 6,600$ თვიური სარგებელი 550$ საინვესტიციო კაპიტალის ზრდა 5 წელიწადში -33,000$",
      calculatorText3:"112,500$ უძრავი ქონების ( რესტორნის) 7.5 % წილი გარანტირებული წლიური სარგებელი 8,8% წლიური სარგებელი 9,000$ თვიური სარგებელი 750$ საინვესტიციო კაპიტალის ზრდა 5 წელიწადში- 45,000$",
      calculatorText4:"150,000$ უძრავი ქონების ( რესტორნის) 10 % წილი გარანტირებული წლიური სარგებელი 8,8% წლიური სარგებელი 13,200$ თვიური სარგებელი 1,100$ საინვესტიციო კაპიტალის ზრდა 5 წელიწადში- 66,000$",
      inve:"ინვესტიცია",
      showProject: "იხილეთ პროექტი",

    },
    RU: {
      
      backPage: "назад",
      mainText: "Специальные инвестиционные возможности в недвижимост",
      moreBtn: "более",
      investmentMainText: "инвестиции",
      restaurantMainText: "О ресторане",
      investTitle1: "Премиум инвестиция",
      investTitle2: "Безопасность",
      investTitle3: "Гарантированная прибыль",
      investTitle4: "Премиальный сервис",
      aboutInvestmentText1: "Инвестируйте в элитную коммерческую недвижимость и готовый бизнес по цене, превышающей рыночную в 20 раз",
      aboutInvestmentText2: "100% защищенный капитал, обеспеченный дорогой недвижимостью, стоимость которой растет с каждым годом",
      aboutInvestmentText3: "Гарантированная инвестиционная прибыль, которая защищена банковской гарантией крупнейшего банка Грузии.",
      aboutInvestmentText4: "Вы можете получать инвестиционные выплаты по любому удобному для вас графику: в конце каждого месяца, раз в три месяца, раз в 6 месяцев, в конце года или в начале года.",
      about: "о",
      abouUsSlogan: "Особые возможности для инвестирования в недвижимость, не имеющие аналогов на инвестиционном рынке недвижимости Грузии.",
      abouUsText: "GeoInvest — это компания по инвестициям в недвижимость с нетрадиционной бизнес-моделью, которая создает уникальные возможности для людей, заинтересованных в инвестировании в недвижимость. Мы обеспечиваем 100% безопасные и прибыльные инвестиции в объекты стоимостью в миллионы долларов по ценам в 20 раз ниже рыночной стоимости, и, что самое важное, инвесторы могут получать прибыль, защищенную банковскими гарантиями, которая в 10 раз превышает традиционные депозиты.",
      restaurantAboutText1: "Инвестиционный объект представляет собой эксклюзивный 5-звездочный отель с рестораном премиум-класса. Отель состоит из 8 этажей и 70 номеров. Ресторан расположен на первом этаже отеля, его площадь составляет 160 квадратных метров. Ресторан включает в себя дорогую ультрасовременную технологическую инфраструктуру, эксклюзивный роскошный дизайн, мебель и кухонное оборудование.",
      restaurantAboutText2: "Отель Solar Energy расположен в самой активной зоне Тбилиси, в Старом Тбилиси. С одной стороны, этот район отличается самыми высокими и стабильно растущими ценами на рынке недвижимости Грузии, а с другой стороны, характеризуется особенно высокой туристической активностью в течение всего года.",
      restaurantAboutText3: "Управление рестораном будет осуществляться опытной командой Solar Energy Hotel Group и Geoinvest, что позволит вам наслаждаться комфортными инвестиционными условиями, гарантированным пассивным доходом и преимуществами качественного менеджмента.",
      restaurantAboutText4: "Ресторанный бизнес является одним из самых прибыльных и быстрорастущих видов бизнеса в Грузии. Богатое кулинарное наследие, разнообразная и вкусная кухня, а также особенно высокий спрос обеспечивают стабильный рост и высокую финансовую выгоду этого бизнеса.",
      restaurantAboutTitel1: "Премиум класс",
      restaurantAboutTitel2: "Лучшее местоположение",
      restaurantAboutTitel3: "25 лет управления",
      restaurantAboutTitel4: "Выгодная бизнес-концепция",
      gallery: "Галерея",
      restaurant: "Ресторан",
      prodTitle1: "Инвестирование",
      prodTitle2: "100% защищенный капитал",
      prodTitle3: "100% защищенная прибыль",
      prodTitle4: "0% налог",
      prodText1: "Инвестиционная стоимость ресторана составляет $1,500,000. Бизнес-модель компании предлагает вам лучшую возможность для инвестирования по исключительно низкой цене, не имеющей аналогов на рынке недвижимости Грузии.Минимальная инвестиция начинается с $37,500, что включает 2.5% доли в ресторане. Вы можете инвестировать в любой желаемый объем доли.",
      prodText2: "100% защита Ваших капиталовложений обеспечивается недвижимостью стоимостью 1 500 000$. Согласно вложенной сумме вы официально становитесь законным владельцем данной недвижимости.Гарантированный выкуп инвестиционного капитала. Продать свою долю и вернуть свои деньги можно двумя способами:1. Продайте третьему лицу в любое время по желаемой цене, в зависимости от условий инвестиции. 2. Через 5 лет компания гарантированно вернет вам долю по первоначальной цене покупки.",
      prodText3: "Инвестиционная выгода представляет собой гарантированные годовые 8,8% в долларах, которые обеспечены банковской гарантией крупнейшего банка Грузии. Получение инвестиционной прибыли по индивидуальному графику. Вы можете получать инвестиционную выгоду в любом удобном вам графике: в конце каждого месяца, раз в 3 месяца, раз в 6 месяцев, в конце года или в начале года.",
      prodText4: "Мы верим в прозрачность - в зависимости от условий инвестирования вы абсолютно свободны от каких-либо комиссий и налогов и поэтому сохраняете 100% инвестиционной прибыли вашего капитала.",
      calculatorText1:"2,5% доля недвижимости (ресторана) стоимостью $37 500 Гарантированная годовая доходность 8,8% Ежегодное пособие $3,300 Ежемесячное пособие $275 Прирост инвестиционного капитала за 5 лет - $16 500",
      calculatorText2:"5% доля в недвижимости стоимостью $75 000 (ресторан).Гарантированная годовая доходность 8,8% Ежегодное пособие $6,600 Ежемесячная выгода в размере 550 долларов США. Прирост инвестиционного капитала за 5 лет - $33 000",
      calculatorText3:"7,5% доля недвижимости (ресторана) стоимостью $112 500 Гарантированная годовая доходность 8,8% Ежегодное пособие $9,000 Ежемесячная выгода 750 долларов США. Прирост инвестиционного капитала за 5 лет - $45 000",
      calculatorText4:"10% доля в недвижимости (ресторан) стоимостью $150 000. Гарантированная годовая доходность 8,8% Ежегодное пособие $13,200 Ежемесячная выгода в размере 1100 долларов США. Прирост инвестиционного капитала за 5 лет - $66 000",
      inve:"инвестиции",
      showProject: "Проект",
    },
  };
  
  return (
    <LanguageContext.Provider
    value={{ selectedLanguage, setSelectedLanguage, languages }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to access language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

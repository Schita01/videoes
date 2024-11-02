import { useEffect, useState } from "react";

const PreLoader = () => {
  const [text, setText] = useState("");
  const [showImg, setShowImg] = useState(true);
    setText
  useEffect(() => {
    // სიმულაციურად ვაჩვენებთ ლოდერს რამდენიმე წამით
    const timer = setTimeout(() => {
      setShowImg(false);

    }, 2500); // დროის პერიოდი, რომელიც დაგჭირდება ლოდერის საჩვენებლად

    return () => clearTimeout(timer); // Cleanup ფუნქცია, რომ დროზე აიღოს ტაიმერი
  }, []);

  return (
    <>
      {showImg ? (
        <div className="preloader">
          <div className="loader">
            <div className="justify-content-center jimu-primary-loading"></div>
          </div>
        </div>
      ) : (
        <h3>{text}</h3>
      )}
    </>
  );
};

export default PreLoader;

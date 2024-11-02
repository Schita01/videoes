import logo from "../assets/logox.png";

const Footer = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <>
        <section className='footer'>
            <div className="container">
              <div className="footer-container">
                
                  <img className="logo" src={logo} alt="" />
                  <span className="foot-span">© 2024 Geoinvests- All Rights Reserved</span>
                  <ul className="list">
                    <li>
                    <svg
      fill="white"
      className="icon"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M1.885.511a1.745 1.745 0 012.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
      />
    </svg>
                      +995 599236464
                    </li>
                    <li>
                      <svg
      viewBox="0 0 24 24"
      className="icon"
      
      fill="currentColor"
      height="1.3em"
      width="1.3em"
      {...props}
      >
      <path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z" />
      <path d="M11.42 21.814a.998.998 0 001.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z" />
    </svg>
      Tbilisi...
                    </li>

                    <li>
                    <svg
      viewBox="0 0 1024 1024" 
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z" />
    </svg>
                      Mail@gmail.com
                    </li>
     
                  </ul>
              </div>
            </div>
        </section>
    </>
  )
}

export default Footer

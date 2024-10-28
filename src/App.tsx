import logo from "../src/assets/vid01.mp4";

const App = () => {
  return (
    <div>
         <video autoPlay muted loop className="main_video">
        <source src={logo} type="video/webm" />
      </video>
    </div>
  )
}

export default App

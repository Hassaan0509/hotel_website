import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Signup from "./Components/Signup/Signup";
import { useEffect } from "react";
<<<<<<< HEAD
import Contact from "./Pages/Contact/Contact";
=======
import Card from "./Components/Cards/Card";
import List from "./Pages/List/List";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
>>>>>>> 112ff7325e5fddfabbcd01c074bb23b2752e2659

function App() {
  const { visited } = useSelector((state) => state.location);
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(visited);

  useEffect(() => {
    if (location.pathname === "/signup") {
      dispatch({ type: "changeLocation", payload: false });
    } else {
      dispatch({ type: "changeLocation", payload: true });
    }
<<<<<<< HEAD
  }, [visited])

=======
  }, [visited]);
>>>>>>> 112ff7325e5fddfabbcd01c074bb23b2752e2659

  return (
    <>
      <List />
      {/* <Card /> */}
      {/* <div className="d-flex flex-column div">
        {visited && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div className=" mt-auto w-100">{visited && <Footer />}</div>
      </div> */}
    </>
  );
}

export default App;

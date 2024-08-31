import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./component/home/home";
import { About } from "./component/about/about";
import { Contact } from "./component/contact/contact";
import { Education } from "./component/education/education";
import { Project } from "./component/project/project";
import { Navbar } from "./component/navbar/navbar";
import { WrongPath } from "./component/wrongpath/wrongPath";
import { Skeleton } from "@mui/material";
import OfflinePage from "./page/offline/offlinePage";
import OnlineNotification from "./page/offline/onlineNoti";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOnlineNotification, setShowOnlineNotification] = useState(false);

  const updateOnlineStatus = () => {
    const onlineStatus = navigator.onLine;
    setIsOnline(onlineStatus);
    if (onlineStatus) {
      setShowOnlineNotification(true);
      setTimeout(() => {
        setShowOnlineNotification(false);
      }, 3000); // Show notification for 3 seconds
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  return (
    <div className="App">
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <BrowserRouter>
          <Navbar />
          {isLoading ? (
            <Skeleton />
          ) : isOnline ? (
            <>
              {showOnlineNotification && <OnlineNotification />}
              <Routes>
                <Route path="*" element={<WrongPath />} />
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/education" element={<Education />} />
                <Route path="/project" element={<Project />} />
              </Routes>
            </>
          ) : (
            <OfflinePage />
          )}
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

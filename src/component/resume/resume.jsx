import { useState } from "react";
import "./resume.css";

export function Resume() {
  const [btnValue, setBtnValue] = useState("Resume Download");
  const [downloadResumeClass, setDownloadResumeClass] = useState(
    "btn btn-outline-dark text-white border border-3"
  );

  function resumeDownloadClick() {
    const link = document.createElement("a");
    link.href = "Md Faizan Ahmad.pdf"; // Replace with the actual path to your PDF file
    link.download = "Resume_Md Faizan Ahmad.pdf"; // Set the desired name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloadResumeClass("btn btn-dark");
    setTimeout(() => {
      setBtnValue("Downloaded");
      setDownloadResumeClass("btn btn-dark");
    }, 100);
  }

  function resumeViewClick() {
    window.open(
      "https://drive.google.com/file/d/1UaY_wgMWCkkJb7Kxk2CXhB-FqD8W1zST/view?usp=sharing",
      "_blank"
    );
  }

  return (
    <div className="resume-container">
      <button
        className={`${downloadResumeClass} btn resumeDownloadBtn`}
        onClick={resumeDownloadClick}
      >
        {btnValue}
      </button>
      <button
        className="btn btn-outline-dark text-white border border-3 ml-2 viewBtn"
        onClick={resumeViewClick}
      >
        View Resume
      </button>
    </div>
  );
}

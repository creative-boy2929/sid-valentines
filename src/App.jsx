import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSlide from "./components/HeroSlide";
import OptionsSlide from "./components/OptionsSlide";
import ProposalSlide from "./components/ProposalSlide";
import Letter from "./components/Letter";
import Gallery from "./components/Gallery";
import Quiz from "./components/Quiz";

// function Letter() {
//   return <div className="h-screen bg-black text-white flex items-center justify-center text-5xl">Letter Page 💌</div>;
// }

// function Gallery() {
//   return <div className="h-screen bg-black text-white flex items-center justify-center text-5xl">Gallery Page 🖼</div>;
// }

// function Quiz() {
//   return <div className="h-screen bg-black text-white flex items-center justify-center text-5xl">Quiz Page 🎯</div>;
// }

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
          <HeroSlide />
          <OptionsSlide />
          <ProposalSlide/>
        </>} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

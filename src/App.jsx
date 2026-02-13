import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HeroSlide from "./components/HeroSlide";
import OptionsSlide from "./components/OptionsSlide";
import ProposalSlide from "./components/ProposalSlide";
import Letter from "./components/Letter";
import Gallery from "./components/Gallery";
import Quiz from "./components/Quiz";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <HeroSlide />
            <OptionsSlide />
            <ProposalSlide />
          </>
        } />
        <Route path="/letter" element={<Letter />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

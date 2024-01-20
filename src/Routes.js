import { Routes, Route } from "react-router-dom";
import HomeLayout from "./components/layout/home/HomeLayout";
import Email from "./components/layout/email/Email";
import Photo from "./components/layout/photo/Photo";
import NotFound from "./components/layout/page404/NotFound";

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/email" element={<Email />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default App;
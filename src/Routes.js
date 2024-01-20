import { Routes, Route } from "react-router-dom";
import HomeLayout from "./pages/home/HomeLayout";
import Email from "./pages/email/Email";
import Photo from "./pages/photo/Photo";
import Storage from "./pages/storage/Storage";
import NotFound from "./pages/page404/NotFound";

function App() {
  return (
    <div className="p-10">
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/email" element={<Email />} />
        <Route path="/photos" element={<Photo />} />
        <Route path="/storage" element={<Storage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
  );
}

export default App;
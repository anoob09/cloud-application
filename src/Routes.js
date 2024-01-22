import { Routes, Route } from "react-router-dom";
import HomeLayout from "./pages/home/HomeLayout";
import Email from "./pages/email/Email";
import Photo from "./pages/photo/Photo";
import Storage from "./pages/storage/Storage";
import NotFound from "./pages/page404/NotFound";
import Login from './pages/login/Login';
import { AdminRolesAuthRoute } from "./utils/Utils";
import { useSelector } from "react-redux";

function App() {
  const userRole = useSelector((store) => store.app.userDetails["role"]);
  return (
    <div className="p-10">
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/email" element={<Email />} />
        <Route path="/photos" element={<Photo />} />
        <Route path="/storage" element={<Storage />} />
        <Route
          path="/admin"
          element={
            <AdminRolesAuthRoute userRole={userRole}>
              <div>Admin Page</div>
            </AdminRolesAuthRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

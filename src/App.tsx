// import ProtectedRoute from "./Reusables/ProtectedRoute";
// @ts-expect-error no need
import { Login, Register, Dashboard } from "@/pages/index";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="flex    items-center justify-center w-full h-screen ">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

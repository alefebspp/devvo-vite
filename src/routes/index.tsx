import { Routes, Route } from "react-router";

import HomePage from "@/pages";
import EditRing from "@/pages/edit-ring";
import NotFound from "@/pages/not-found";
import CreateRingPage from "@/pages/create-ring";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreateRingPage />} />
      <Route path="/edit/:id" element={<EditRing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

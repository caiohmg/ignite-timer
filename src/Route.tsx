import { Routes, Route } from "react-router-dom";
import { DefaultLeyout } from "./leyouts/DefaultLayout";
import { History } from "./pages/HIstory";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLeyout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}

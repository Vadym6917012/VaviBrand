import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/AppRouter";
import "aos/dist/aos.css";

createRoot(document.getElementById("root")!).render(
    <AppRouter />
);

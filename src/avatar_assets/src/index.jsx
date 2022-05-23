import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"
import 'tailwindcss/tailwind.css';
import '../assets/main.css';

// root element
const root = createRoot(document.getElementById("app"))
root.render(<App />);

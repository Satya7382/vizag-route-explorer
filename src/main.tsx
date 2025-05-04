
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Set the document title
document.title = "Way 2 Go - Visakhapatnam Bus Routes Explorer";

createRoot(document.getElementById("root")!).render(<App />);

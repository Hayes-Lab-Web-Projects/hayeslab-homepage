import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage'; // Import the existing LandingPage
import ToolsPage from './pages/ToolsPage'; // Keep the ToolsPage component
import NotFound from './pages/NotFound';
import './App.css'; // Main App styles

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow" role="main">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            {/* You can add more routes here if needed in the future */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
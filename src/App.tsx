import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import BranchesPage from './pages/BranchesPage';
import ChatWidget from './components/ui/ChatWidget';

function App() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* Branches page */}
              <Route path="/branches" element={<BranchesPage />} />
            </Routes>
          </main>
          <Footer />
          <ChatWidget open={chatOpen} setOpen={setChatOpen} />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
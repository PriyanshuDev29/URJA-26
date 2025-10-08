import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hyperspeed from '../Hyperspeed/Hyperspeed';
import TextType from '../TextType/TextType';
import './Home.css';

export default function UrjaHomepage() {
  const navigate = useNavigate();

  const handleSports = () => {
    navigate('/sports');
  };

  const handlePointsTable = () => {
    navigate('/points-table');
  };

  return (
    <div className="urja-homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hyperspeed-bg">
          <Hyperspeed key="hyperspeed" />
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            <TextType
              text="Welcome to URJA 2026"
              typingSpeed={100}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="_"
              cursorBlinkDuration={0.8}
            />
          </h1>

          <h2 className="hero-subtitle">
            <TextType
              text="The Clash of Extremes, The Glory of One"
              typingSpeed={80}
              initialDelay={2200}
              pauseDuration={3000}
              showCursor={true}
              cursorCharacter="_"
              cursorBlinkDuration={0.8}
              className="subtitle-typing"
            />
          </h2>

          <div className="hero-buttons">
            <button className="hero-btn-primary" onClick={handleSports}>
              Sports <ArrowRight className="w-5 h-5" />
            </button>
            <button className="hero-btn-secondary" onClick={handlePointsTable}>
              Points Table
            </button>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-mouse" />
        </div>
      </section>
    </div>
  );
}

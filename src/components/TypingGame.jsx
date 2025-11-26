import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaKeyboard, FaPlay, FaRedo, FaTrophy } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import './TypingGame.css';

const TypingGame = () => {
  const { t } = useLanguage();
  const [text, setText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const inputRef = useRef(null);

  const sampleTexts = [
    "The quick brown fox jumps over the lazy dog. Programming is the art of telling another human what one wants the computer to do.",
    "React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components.",
    "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
  ];

  useEffect(() => {
    setText(sampleTexts[Math.floor(Math.random() * sampleTexts.length)]);
  }, []);

  useEffect(() => {
    let interval;
    if (isStarted && !isFinished) {
      interval = setInterval(() => {
        setTimeElapsed(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isStarted, isFinished, startTime]);

  useEffect(() => {
    if (userInput.length > 0 && isStarted) {
      const correctChars = userInput.split('').filter((char, i) => char === text[i]).length;
      const acc = Math.round((correctChars / userInput.length) * 100);
      setAccuracy(acc);

      const timeInMinutes = (Date.now() - startTime) / 60000;
      const wordsTyped = userInput.length / 5;
      const calculatedWpm = Math.round(wordsTyped / timeInMinutes);
      setWpm(calculatedWpm || 0);

      if (userInput.length === text.length) {
        setIsFinished(true);
      }
    }
  }, [userInput, text, startTime, isStarted]);

  const handleStart = () => {
    setIsStarted(true);
    setStartTime(Date.now());
    setUserInput('');
    setIsFinished(false);
    setTimeElapsed(0);
    inputRef.current?.focus();
  };

  const handleReset = () => {
    setIsStarted(false);
    setIsFinished(false);
    setUserInput('');
    setWpm(0);
    setAccuracy(100);
    setTimeElapsed(0);
    setText(sampleTexts[Math.floor(Math.random() * sampleTexts.length)]);
  };

  const renderText = () => {
    return text.split('').map((char, index) => {
      let className = '';
      if (index < userInput.length) {
        className = userInput[index] === char ? 'correct' : 'incorrect';
      } else if (index === userInput.length) {
        className = 'current';
      }
      return <span key={index} className={className}>{char}</span>;
    });
  };

  return (
    <section className="typing-game">
      <div className="typing-container">
        <motion.div
          className="typing-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <FaKeyboard className="typing-icon" />
          <h2 className="section-title">{t('typingGame.title')}</h2>
          <p style={{ color: '#b0b0b0', marginTop: '1rem' }}>
            {t('typingGame.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="typing-game-box"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="typing-stats">
            <div className="stat-item">
              <span className="stat-value">{wpm}</span>
              <span className="stat-label">{t('typingGame.wpm')}</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{accuracy}%</span>
              <span className="stat-label">{t('typingGame.accuracy')}</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{timeElapsed}s</span>
              <span className="stat-label">{t('typingGame.time')}</span>
            </div>
          </div>

          <div className="typing-text-display">
            {renderText()}
          </div>

          <input
            ref={inputRef}
            type="text"
            className="typing-input"
            value={userInput}
            onChange={(e) => isStarted && setUserInput(e.target.value)}
            disabled={!isStarted || isFinished}
            placeholder={isStarted ? t('typingGame.startTyping') : t('typingGame.clickStart')}
          />

          <div className="typing-controls">
            {!isStarted ? (
              <motion.button
                className="typing-btn"
                onClick={handleStart}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPlay /> {t('typingGame.start')}
              </motion.button>
            ) : (
              <motion.button
                className="typing-btn secondary"
                onClick={handleReset}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaRedo /> {t('typingGame.reset')}
              </motion.button>
            )}
          </div>
        </motion.div>

        <AnimatePresence>
          {isFinished && (
            <motion.div
              className="result-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleReset}
            >
              <motion.div
                className="result-content"
                initial={{ scale: 0.5, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0.5, rotate: 10 }}
                onClick={(e) => e.stopPropagation()}
              >
                <FaTrophy style={{ fontSize: '4rem', color: '#ffd700', marginBottom: '1rem' }} />
                <h3>{t('typingGame.complete')}</h3>
                <div className="result-stats">
                  <div className="result-stat">
                    <div className="result-stat-value">{wpm}</div>
                    <div className="result-stat-label">{t('typingGame.wordsPerMinute')}</div>
                  </div>
                  <div className="result-stat">
                    <div className="result-stat-value">{accuracy}%</div>
                    <div className="result-stat-label">{t('typingGame.accuracy')}</div>
                  </div>
                </div>
                <motion.button
                  className="typing-btn"
                  onClick={handleReset}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaRedo /> {t('typingGame.tryAgain')}
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TypingGame;

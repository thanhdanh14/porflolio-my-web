import { motion } from 'framer-motion';
import { useHoliday } from '../contexts/HolidayContext';
import './HolidayThemeSwitcher.css';

const HolidayThemeSwitcher = () => {
  const { holidayTheme, changeHolidayTheme } = useHoliday();

  const themes = [
    { id: 'normal', icon: '🌟', label: 'Normal' },
    { id: 'christmas', icon: '🎄', label: 'Christmas' },
    { id: 'tet', icon: '🌸', label: 'Tết' }
  ];

  return (
    <div className="holiday-theme-switcher">
      <div className="holiday-theme-label">Holiday Theme</div>
      <div className="holiday-theme-options">
        {themes.map((theme) => (
          <motion.button
            key={theme.id}
            className={`holiday-theme-btn ${holidayTheme === theme.id ? 'active' : ''}`}
            onClick={() => changeHolidayTheme(theme.id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="theme-icon">{theme.icon}</span>
            <span className="theme-label">{theme.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default HolidayThemeSwitcher;

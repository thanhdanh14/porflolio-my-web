import { createContext, useContext, useState, useEffect } from 'react';

const HolidayContext = createContext();

export const useHoliday = () => {
  const context = useContext(HolidayContext);
  if (!context) {
    throw new Error('useHoliday must be used within HolidayProvider');
  }
  return context;
};

export const HolidayProvider = ({ children }) => {
  const [holidayTheme, setHolidayTheme] = useState('christmas'); // 'normal', 'christmas', 'tet'

  useEffect(() => {
    const savedTheme = localStorage.getItem('holidayTheme');
    if (savedTheme) {
      setHolidayTheme(savedTheme);
    }
  }, []);

  const changeHolidayTheme = (theme) => {
    setHolidayTheme(theme);
    localStorage.setItem('holidayTheme', theme);
  };

  return (
    <HolidayContext.Provider value={{ holidayTheme, changeHolidayTheme }}>
      {children}
    </HolidayContext.Provider>
  );
};

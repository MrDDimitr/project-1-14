
import './App.css';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './locales/LanguageSelector';
import DateFormatter from './locales/DateFormatter';
import NumberFormatter from './locales/NumberFormatter';
import UnitConverter from './locales/UnitConverter';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <LanguageSelector />
      <h1>{t('welcme', 'Missing key')}</h1>
      <h1>Date Formatter</h1>
      <DateFormatter />
      <h1>Number Formatter</h1>
      <NumberFormatter />
      <h1>Unit Converter</h1>
      <UnitConverter />
    </div>
  );
}

export default App;

import Header from './components/header';
import Hero from './components/Hero';
import Services from './components/services';
import About from './components/About';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18';
function App() {
  return (
    <I18nextProvider i18n={i18n}>
    <div>
      <Header />
      <Hero />
      <About/>
      <Services />
    </div>
    </I18nextProvider>
  );
}

export default App;

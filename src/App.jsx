import Section1HeroSection from './components/sections/Section1HeroSection';
import SuperpoweredSection from './components/sections/SuperpoweredSection';
import UpgradeSection from './components/sections/UpgradeSection';
import FeelReadySection from './components/sections/FeelReadySection';
import CalendarSection from './components/sections/CalendarSection';
import CTASection from './components/sections/CTASection';
import Footer from './components/layout/Footer';

function App() {
  return (
    <main className="w-full min-h-screen">
      <Section1HeroSection />
      <SuperpoweredSection />
      <UpgradeSection />
      <FeelReadySection />
      <CalendarSection />
      <CTASection />
      <Footer />
    </main>
  );
}

export default App;
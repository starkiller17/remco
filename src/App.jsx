import { Outlet } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;

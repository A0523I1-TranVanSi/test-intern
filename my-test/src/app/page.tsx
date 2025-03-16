import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import HeroSection from './components/HeroSection';


export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col md:flex-row items-start justify-between p-10">
        {/* LoginForm ở bên trái */}
        <LoginForm />

        {/* HeroSection sát lề bên phải */}
        <div className="ml-auto">
          <HeroSection />
        </div>
      </div>
    </div>
  );
}

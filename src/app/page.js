import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ChatBox from '../components/ChatBox'; // Import the ChatBox component

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ChatBox /> {/* Added ChatBox component */}
      <Footer />
    </div>
  );
}

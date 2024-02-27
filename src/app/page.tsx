import { Navbar } from './components/Navbar';
import { Features } from './components/Features';
import { Advantages } from './components/Advantages';
import { CallToAction } from './components/CallToAction';
import { Bottom } from './components/Bottom'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Features />
      <Advantages />
      <CallToAction />
      <Bottom />
    </div>
  );
}

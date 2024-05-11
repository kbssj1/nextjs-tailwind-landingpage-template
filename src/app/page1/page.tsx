import { Navbar } from '../components/Navbar';
import { Features2, Features3, Features4 } from '../components/Features';
import { Bottom } from '../components/Bottom';

export default function Page1() {
  return (
    <div>
      <Navbar />
      <Features2 />
      <Features3 />
      <Features4 />
      <Bottom />
    </div>
  );
}
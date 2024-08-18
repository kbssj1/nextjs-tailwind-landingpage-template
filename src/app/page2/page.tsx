import { Navbar } from '../components/Navbar';
import Carousel from "../components/Carousel";
import Image from 'next/image';

export default function Page2() {
  return (
    <>
      <Navbar />
      <Carousel autoSlide={false} autoSlideInterval={0}>
        <Image src="/digital.jpg" unoptimized width={0} height={0} sizes="100vw" style={{ minWidth: '100%', height: '700px' }} alt={'image'} />
        <Image src="/code.png" unoptimized width={0} height={0} sizes="100vw" style={{ minWidth: '100%', height: '700px' }} alt={'image'} />
      </Carousel>
    </>
  );
}

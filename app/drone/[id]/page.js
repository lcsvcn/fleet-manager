"use client"
import { Footer, Navbar, DroneDashboard } from '../../../components';
import { usePathname } from 'next/navigation';

const Page = () => {
  const id = usePathname().replace('/drone/', '');

  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <DroneDashboard id={id} />
      <Footer />
    </div>
  );
};

export default Page;

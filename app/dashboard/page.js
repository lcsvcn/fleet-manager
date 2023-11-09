"use client"
import { Footer, Navbar, Dashboard} from '../../components';


const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Dashboard />
    <Footer />
  </div>
);

export default Page;

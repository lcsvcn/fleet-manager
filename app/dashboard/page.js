"use client"
import { Footer, Navbar, FleetDashboard} from '../../components';


const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <FleetDashboard />
    <Footer />
  </div>
);

export default Page;

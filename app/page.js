"use client"
import { Footer, Navbar } from '../components';
import { Login } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Login />
    <Footer />
  </div>
);

export default Page;

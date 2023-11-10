import { motion } from 'framer-motion';
import styles from '../../styles';
import { navVariants } from '../../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={
      `${styles.xPaddings} 
      relative
      xs:pt-20 xs:pb-24
      sm:pt-16 sm:pb-4
      lg:pt-16 lg:pb-0
      xl:pt-20 xl:pb-0`
    }
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-center`}
    >
      <h2 className={
        `font-extrabold
        text-[36px]
        xs:text-[32px]
        sm:text-[42px]
        lg:text-[53px]
        xl:text-[64px]
        leading-[30.24px]
        text-white`
      }>
        Fleet Manager Client Portal
      </h2>
    </div>
  </motion.nav>
);

export default Navbar;

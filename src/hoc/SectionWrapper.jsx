import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = () =>
  function HOC() {
    return (
      <motion.section>
        test
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;

import "./ShowNameLink.scss";

import { motion } from "framer-motion";

const ShowNameLink = ({ nameLink }) => {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8 }}
      transition={{ type: "spring", stiffness: 500, damping: 15 }}
      className="showNameLink"
    >
      <p>{nameLink}</p>
    </motion.div>
  );
};

export default ShowNameLink;

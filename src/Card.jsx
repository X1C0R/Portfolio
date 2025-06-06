import { div } from "three/tsl";
import placeholder from "./assets/placeholder.jpg";
import { motion } from "framer-motion";
function Card() {
  return (
    <>
      <div className="Card font-Source | sm:flex sm:flex-row sm:justify-center sm:gap-10 sm:mt-5 sm:text-smsentence | xs:text-[0.625rem] xs:text-balance xs:text-center xs:gap-5 xs:grid xs:grid-rows-2 xs:grid-cols-3 xs:w-full xs:mt-0 xs:mb-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="flex flex-col border-2 sm:w-[15%] sm:h-fit items-center rounded-lg border-[grey] xs:w-[7rem] xs:h-fit"
        >
          <img
            src={placeholder}
            alt=""
            className="w-[100%] rounded-tl-lg rounded-tr-lg"
          />
          <h2>----------------</h2>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="flex flex-col border-2 sm:w-[15%] sm:h-fit items-center rounded-lg border-[grey] xs:w-[7rem] xs:h-fit"
        >
          <img
            src={placeholder}
            alt=""
            className="w-[100%] rounded-tl-lg rounded-tr-lg"
          />
          <h2>----------------</h2>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="flex flex-col border-2 sm:w-[15%] sm:h-fit items-center rounded-lg border-[grey] xs:w-[7rem] xs:h-fit"
        >
          <img
            src={placeholder}
            alt=""
            className="w-[100%] rounded-tl-lg rounded-tr-lg"
          />
          <h2>----------------</h2>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="flex flex-col border-2 sm:w-[15%] sm:h-fit items-center rounded-lg border-[grey] xs:w-[7rem] xs:h-fit"
        >
          <img
            src={placeholder}
            alt=""
            className="w-[100%] rounded-tl-lg rounded-tr-lg"
          />
          <h2>----------------</h2>
        </motion.div>
      </div>
    </>
  );
}

export default Card;

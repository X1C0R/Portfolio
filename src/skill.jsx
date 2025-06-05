import { motion } from "framer-motion";
function skills() {
  return (
    <>
      <div id="skills" className="bg-[#E5E5E5] font-Source | sm:h-[50dvh]">
        <div className="text-5xl flex flex-col items-center mb-0 | xs:mb-0">
          <h1 className=" text-whitesentence | sm:text-[30px] sm:mt-15 | xs:text-3xl">
            Skills
          </h1>
        </div>

        <div className=" sm:w-full  sm:flex sm:justify-center  sm:flex-row p-0 sm:gap-5  sm:mt-[15px] cursor-pointer | xs:flex xs:flex-col xs:items-center xs:mt-3 xs:gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="sm:flex sm:flex-col  sm:w-fit rounded-lg bg-white border gap-1 border-[#FFFFFF] sm:p-[25px] shadow-sm h-fit sm:text-smtitle | xs:w-[80%] xs:p-[20px]"
          >
            <div className="flex flex-row items-center gap-2 w-fit text-[#0A0A0A] sm:text-smsentence sm:mb-1.5  | xs:mt-[-15px] xs:mb-2">
              <i className="fa-solid fa-less-than"></i>
              <i className="fa-solid fa-greater-than"></i>
              <h1 className="font-bold sm:text-smsentence">FrontEnd</h1>
            </div>
            <div className="grid grid-cols-2 place-content-center gap-x-1 gap-y-1">
              <p className="w-fit  rounded-2xl pl-2 pr-2 bg-[#E5E7EB]  sm:text-[12px] hover:bg-gray-300">
                React
              </p>
              <p className="w-fit rounded-2xl pl-2 pr-2 bg-[#E5E7EB] sm:text-[12px] hover:bg-gray-300">
                HTML/CSS
              </p>
              <p className="w-fit rounded-2xl pl-2 pr-2 bg-[#E5E7EB] sm:text-[12px] hover:bg-gray-300">
                Tailwind CSS
              </p>
              <p className="w-fit rounded-2xl pl-2 pr-2 bg-[#E5E7EB] sm:text-[12px] hover:bg-gray-300">
                JavaScript
              </p>
            </div>
          </motion.div>
          {/* <div className=" | xs:flex xs:flex-row xs:flex-wrap xs:items-start xs:gap-1 xs:w-full xs:h-full xs:justify-center"> */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="sm:flex sm:flex-col sm:w-fit rounded-lg bg-white border gap-1 border-[#FFFFFF] sm:p-[33px] shadow-sm sm:h-fit sm:text-smtitle | xs:w-[80%]  xs:p-[20px] xs:mt-0"
            >
              {/* mini screen view div to controll the bottom skills */}
              <div className="flex flex-row items-center gap-2 w-fit text-[#0A0A0A] sm:text-smsentence sm:mb-1.5 sm:mt-[-10px] |  xs:mb-2">
                <i className="fa-solid fa-server"></i>
                <h1 className="font-bold sm:text-smsentence">BackEnd</h1>
              </div>
              <div className="sm:flex sm:gap-1 | xs:flex xs:flex-row xs:gap-1">
                <p className="w-fit rounded-2xl pl-2 pr-2 bg-[#E5E7EB] sm:text-[12px] hover:bg-gray-300">
                  C#
                </p>
                <p className="w-fit rounded-2xl pl-2 pr-2 bg-[#E5E7EB] sm:text-[12px] hover:bg-gray-300">
                  JAVA
                </p>
                <p className="w-fit rounded-2xl pl-2 pr-2 bg-[#E5E7EB] sm:text-[12px] hover:bg-gray-300">
                  PHP
                </p>
                <p className="w-fit rounded-2xl pl-2 pr-2 bg-[#E5E7EB] sm:text-[12px] hover:bg-gray-300">
                  C++
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="sm:flex sm:flex-col sm:w-fit rounded-lg bg-white border gap-1 border-[#FFFFFF] sm:p-[35px] shadow-sm sm:h-fit sm:text-smtitle | xs:w-[80%] xs:p-[20px] xs:h-fit xs:mt-0 "
            >
              <div className="flex flex-row items-center gap-2 w-fit text-[#0A0A0A]  | sm:text-smsentence sm:mb-1.5 sm:mt-[-10px] |  xs:mb-2">
                <i class="fa-solid fa-database"></i>
                <h1 className="font-bold sm:text-smsentence">DataBase</h1>
              </div>
              <div className="grid grid-cols-2 place-contents-center gap-x-1 gap-y-1">
                <p className="w-fit rounded-2xl pl-2 pr-2 bg-[#E5E7EB] sm:text-[12px] hover:bg-gray-300">
                  MySQL
                </p>
              </div>
            </motion.div>
          </div>
           {/* <div className="sm:w-full sm:flex sm:flex-col sm:items-center sm:mt-4">
                <div className="sm:flex sm:items-center sm:text-[20px] sm:font-semibold">
                  <h1 className="">Soft Skills</h1>
                </div>
                <div className="sm:flex sm:flex-row sm:gap-3 sm:mt-2">
                  <p className="text-whitebg w-fit rounded-2xl pl-2 pr-2 bg-[#374151] sm:text-[12px] hover:bg-gray-800">Team Work</p>
                  <p className="text-whitebg w-fit rounded-2xl pl-2 pr-2 bg-[#374151] sm:text-[12px] hover:bg-gray-800">Logic</p>
                  <p className="text-whitebg w-fit rounded-2xl pl-2 pr-2 bg-[#374151] sm:text-[12px] hover:bg-gray-800">Adaptability</p>
                  <p className="text-whitebg w-fit rounded-2xl pl-2 pr-2 bg-[#374151] sm:text-[12px] hover:bg-gray-800">Emphaty</p>
                  <p className="text-whitebg w-fit rounded-2xl pl-2 pr-2 bg-[#374151] sm:text-[12px] hover:bg-gray-800">Communication</p>
                  <p className="text-whitebg w-fit rounded-2xl pl-2 pr-2 bg-[#374151] sm:text-[12px] hover:bg-gray-800">Excellent Work Ethic</p>
                </div>
              </div> */}
                    
        </div>
    </>
  );
}
export default skills;

import { div } from "framer-motion/client";
import Card from "./Card";

function Projects(){
  return(
    <div id="projects" className="font-Source bg-[#E5E5E5] p-0 | sm:mt-[-6.875rem] sm:h-[55dvh] sm:p-0.5 | xs:p-0.5">
        <div className="sm:w-full sm:flex sm:justify-center | xs:w-full xs:flex xs:justify-center">
          <h1 className="text-[1.875rem] text-whitesentence mt-14">Projects</h1>
        </div>
        <div >
          <Card></Card>
        </div>
    </div>
  )
}

export default Projects
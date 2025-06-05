import mypfp from './assets/pic.jpg';
import Card from "./Card";
import placeholder from "./assets/placeholder.png";
function About(){
  return(
    <div id="about" className="sm:h-[90dvh] font-Source text-whitesentence bg-whitebg shadow-sm | xs:h-[110dvh]"> 
      <div className="flex flex-col items-center ">
        <h1 className="text-whitetitle | sm:mt-15 sm:text-[1.875rem] | xs:text-3xl xs:mt-10">About Me</h1>
      </div>
      <div className="flex flex-row gap-[10rem] p-5 items-center | sm:gap-[2rem] sm:flex sm:justify-center | xs:gap-[0.625rem]">
          <div className="flex flex-col | sm:text-[1rem] | xs:text-[0.625rem]">
             <p className="mb-6 ">
                Hello! I'm Mark, a passionate Student of STI COLLEGE ALABANG. I enjoy creating things that <br/>
                live on the internet, whether that be websites, applications, or anything in between.
              </p>
              <p className="mb-4">
                My goal is to always build products that provide pixel-perfect, performant experiences. I'm quietly<br/>
                confident, naturally curious, and perpetually working on improving my skills.
              </p>
              <p className="">
                When I'm not coding, you'll find in the Gym, playing Games, or in School.
              </p>
          </div>
      </div>
          <div className='w-full flex flex-col items-center | sm:mt-10 sm:text-[1.375rem] xs:mt-0'>
            <h1 className='text-whitetitle | sm:text-smtitle'>Achievemnets</h1>
              <div className='sm:flex sm:flex-row | p-2 w-full justify-between'>
                <Card ></Card>
              </div>
          </div>
    </div>
  );
}
export default About
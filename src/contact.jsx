import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { form } from "framer-motion/client";
import { useRef } from "react";
function Contact() {
const form =useRef();

const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm("service_xnkaa6f", "template_5t2af2b", form.current, "KaNTZSVdU4mEXkQTg").then(
    ()=>{
      alert("message sent")
      form.current.reset();
    },
    (error)=>{
      alert("failed to send");
    }
  );
}
  return (
    <div
      id="contact"
      className="bg-[#0d1117] font-Source | sm:h-[10dvh] | xs:h-[27dvh]"
    >
      <div className="sm:w-full sm:flex sm:justify-center | xs:w-full xs:flex xs:justify-center">
        <h1 className="text-Turquoise mt-10 mb-3 | sm:text-[1.875rem] | xs:text-3xl">
          Get In Touch
        </h1>
      </div>
      <div className="sm:flex sm:flex-row w-full h-full | xs:flex xs:flex-col">
        <div className="w-fit text-Turquoise sm:ml-[20%] sm:text-[1.25rem] | sm:flex | xs:ml-4 xs:mb-1 xs:text-[1rem]">
          <div className="text-Turquoise flex flex-col sm:gap-5 | xs:gap-2">
            <h1 className="font-semibold">Contact Information</h1>
            <div className="flex flex-row items-center gap-3">
              <i class="fa-solid fa-location-dot"></i>
              <p className="sm:text-[1rem]">
                Block 7 Purok 14 South Daang Hari <br /> Taguig City
              </p>
            </div>
            <div className="flex flex-row items-center gap-3">
              <i class="fa-solid fa-envelope"></i>
              <p className="sm:text-[1rem]">marklemin606@gmail.com</p>
            </div>
            <div className="flex flex-row items-center gap-3">
              <i class="fa-solid fa-phone"></i>
              <p className="sm:text-[1rem]">0927444483</p>
            </div>
            <div className="flex flex-col gap-2">
              <h1>Connect With Me</h1>
              <div className="flex flex-row gap-3">
                <i class="fa-brands fa-github text-[1.313rem] border-1 border-gray rounded-full p-2 hover:bg-gray-800"></i>
                <i class="fa-solid fa-envelope text-[1.313rem] border-1 border-gray rounded-full p-2  hover:bg-gray-800"></i>
              </div>
            </div>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col text-Turquoise sm:ml-[15%] w-[25%] gap-5 | xs:gap-1 xs:mt-3 xs:ml-4 xs:h-full xs:w-full">
          <h1 className="font-semibold text-[1.25rem]">Send Me a Message</h1>
          <div className="flex flex-col gap-2 ">
            <p className="text-[1rem] font-semibold">Your Name</p>
            <input
              type="text"
              placeholder="Your Name"
              name="user_name"
              required
              className="bg-gray-800 w-full h-[2.188rem] rounded-sm p-4 text-[20] | xs:w-[90%]"
            />
            <p className="text-[1rem] font-semibold">Your Email</p>
            <input
              type="text"
              name="user_email"
              placeholder="Your Email"
              className="bg-gray-800 w-full h-[2.188rem] rounded-sm p-4 text-[20] | xs:w-[90%]"
            />
            <p className="text-[1rem]">Your Message</p>
            <textarea
              name="message"
              placeholder="Message"
              required
              className="bg-gray-800 rounded-sm pl-2 pt-1 |  xs:w-[90%]"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-full bg-whitebg text-whitetitleblack rounded-lg p-1 text-[1rem] mt-1 | xs:w-[90%]"
            >
              Send Message
            </motion.button>
          </div>
        </form>
          
      </div>
      <footer className="w-full flex flex-col bg-gray-800 sm:h-[8dvh] items-center p-2 sm:text-[1.125rem] | xs:w-full xs:h-fit xs:flex xs:mt-100 xs:text-[0.75rem] xs:items-center">
        <p className="text-Turquoise">&copy; {new Date().getFullYear()} Mark Lemen. All rights reserved.</p>
        </footer>

    </div>
  );
}
export default Contact;

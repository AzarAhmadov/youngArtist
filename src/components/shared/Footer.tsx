import React from "react";
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
   return (
      <>
         <div className="mt-10 border-t bg-black pb-32 pt-10 text-center text-white">
            <div className="align-item-center flex flex-wrap justify-evenly">
               <div>
                  <h2>Young Artists Hub</h2>
               </div>
               <div>
                  <h5 className="pb-5">Digər linklər</h5>
                  <ul>
                     <li className="pb-3">
                        <Link to={"/"}>Ana səhifə</Link>
                     </li>
                     <li className="pb-3">
                        <Link to={"/about"}>Haqqımızda</Link>
                     </li>
                     <li className="pb-3">
                        <Link to={"/contact"}>Əlaqə</Link>
                     </li>
                  </ul>
               </div>
               <div>
                  <h5 className="pb-5">Bizimlə əlaqə</h5>
                  <ul>
                     <li className="pb-3">
                        <a href="tel:+(994)70-998-58-65">+(994)709985865</a>
                     </li>
                     <li className="pb-3">
                        <a href="mailto:theyoungh@gmail.com">theyoungh@gmail.com</a>
                     </li>
                  </ul>
               </div>
               <div>
                  <h5 className="pb-5">Bizi izləyin</h5>
                  <ul className="flex space-x-4">
                     <li className="flex items-center rounded-[3.6px] border border-solid border-[rgba(141,144,147,0.25)] bg-transparent p-2">
                        <FaFacebookF />
                     </li>
                     <li className="flex items-center rounded-[3.6px] border border-solid border-[rgba(141,144,147,0.25)] bg-transparent p-2">
                        <FaInstagram />
                     </li>
                     <li className="flex items-center rounded-[3.6px] border border-solid border-[rgba(141,144,147,0.25)] bg-transparent p-2">
                        <FaTelegramPlane />
                     </li>
                     <li className="flex items-center rounded-[3.6px] border border-solid border-[rgba(141,144,147,0.25)] bg-transparent p-2">
                        <FaYoutube />
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </>
   );
};

export default Footer;

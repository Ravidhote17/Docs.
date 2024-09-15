import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

function Card(){

    return(

        <div className="relative w-60 h-72 bg-sky-200 rounded-[40px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden">
            <FaRegFileAlt />
            <p className="text-sm leading-tight mt-5 font-semibold">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            <div className="footer absolute bottom-0 w-full left-0">
                <div className="flex items-center justify-between mb-3 px-8 py-3">
                    <h5>.4mb</h5>
                    <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
                    <LuDownload size="0.7em" color="#fff" />
                    </span>
                </div>
                <div className="tag w-full bg-green-600 py-4 flex items-center justify-center">
                    <h3 className="text-sm font-semibold">Download Now</h3>
                </div>
                
            </div>
        </div>
            
    )
}

export default Card
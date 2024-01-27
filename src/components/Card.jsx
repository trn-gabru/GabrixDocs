import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

function Card({ data, i, reference, updateZIndex, removeCard }) {
  return (
    <motion.div
      onClick={() => updateZIndex(i)}
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      className={`relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden`}
      style={{ zIndex: data.zIndex }}
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-medium ">{data.title}</p>
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex items-center justify-between mb-3 px-8 py-3">
          <h6 className="text-sm">{data.date}</h6>
          {/* <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {!data.close ? (
              <IoClose />
            ) : (
              <MdOutlineFileDownload size=".8em" color="#fff" />
            )}
          </span> */}
        </div>

        <div
          // ${data.tag.tagColor === "[blue]" ? "bg-blue-600" : "bg-green-600"
          className={`tag w-full py-4 flex justify-center items-center`}
          style={{ backgroundColor: `${data.tagColor}` }}
        >
          {/* <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3> */}
          <div className="w-full flex justify-between items-center px-8">
            <FiEdit className="cursor-pointer" />
            <MdDeleteOutline
              onClick={removeCard}
              className="cursor-pointer"
              size="1.2em"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;

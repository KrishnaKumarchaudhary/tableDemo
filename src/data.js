import { BsFillGrid1X2Fill, BsPerson } from "react-icons/bs";
import { AiOutlineMail, AiOutlineFileProtect } from "react-icons/ai";
import { BiBarChartAlt2 } from "react-icons/bi";
import { FiFileText } from "react-icons/fi";
import { MdPhotoLibrary } from "react-icons/md";
//import { VscBellDot } from "react-icons/vs";
import { RiDonutChartFill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GrDriveCage } from "react-icons/gr";

import React from "react";

const sidebardata = [
  {
    icon: <BsFillGrid1X2Fill />,
    label: "Deshboard",
    arrow: <MdKeyboardArrowDown />,
  },
  {
    icon: <BsPerson />,
    label: "Contact",
    arrow: <MdKeyboardArrowDown />,
  },
  {
    icon: <AiOutlineMail />,
    label: "Mail",
    arrow: <MdKeyboardArrowDown />,
  },
  {
    icon: <BiBarChartAlt2 />,
    label: "Report",
    arrow: <MdKeyboardArrowDown />,
  },
  {
    icon: <AiOutlineFileProtect />,
    label: "Documents",
    arrow: <MdKeyboardArrowDown />,
  },
  {
    icon: <FiFileText />,
    label: "File",
    arrow: <MdKeyboardArrowDown />,
  },
  {
    icon: <MdPhotoLibrary />,
    label: "Photo",
    arrow: <MdKeyboardArrowDown />,
  },

  {
    icon: <GrDriveCage />,
    label: "Drives",
    arrow: <MdKeyboardArrowDown />,
  },
  {
    icon: <RiDonutChartFill />,
    label: "Reports",
    arrow: <MdKeyboardArrowDown />,
  },
];

export default sidebardata;

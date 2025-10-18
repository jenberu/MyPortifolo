import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoDjango } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoRedux } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { FaDocker } from "react-icons/fa";
import { SiRender } from "react-icons/si";
import { SiRailway } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
export const skillsData = [
  {
    label: "FRONT END",
    data: [
      {
        skillName: "HTML",
        icon: <FaHtml5 />,
        percentage: "90",
      },
      {
        skillName: "CSS",
        percentage: "80",
        icon: <FaCss3 />,
      },
      {
        skillName: "JAVASCRIPT/typescript",
        percentage: "95",
        icon: <TbBrandJavascript />,
      },
      {
        skillName: "REACT.JS",
        percentage: "95",
        icon: <FaReact />,
      },
      {
        skillName: "next.JS",
        percentage: "80",
        icon: <RiNextjsFill />,
      },
      {
        skillName: "Redux",
        percentage: "70",
        icon: <BiLogoRedux />,
      },
    ],
  },
  {
    label: "BACK END",
    data: [
      {
        skillName: "PYTHON /Django ",
        percentage: "90",
        icon: <BiLogoDjango />,
      },
      {
        skillName: "node js",
        percentage: "60",
        icon: <FaNodeJs />,
      },
      {
        skillName: "JAVA",
        percentage: "80",
        icon: <FaJava />,
      },
      {
        skillName: "PHP",
        percentage: "70",
        icon: <FaPhp />,
      },
    ],
  },
  {
    label: "DATABASES",
    data: [
      {
        skillName: "PostgreSQL",
        percentage: "90",
        icon: <BiLogoPostgresql />,
      },
      {
        skillName: "MySQL",
        percentage: "90",
        icon: <SiMysql />,
      },
      {
        skillName: "MongoDB",
        percentage: "50",
        icon: <BiLogoMongodb />,
      },
    ],
  },
  {
    label: "Cloud & Deployment",
    data: [
      {
        skillName: "Docker",
        percentage: "70",
        icon: <FaDocker />,
      },
      {
        skillName: "Render",
        percentage: "90",
        icon: <SiRender />,
      },
      {
        skillName: "Railway",
        percentage: "90",
        icon: <SiRailway />,
      },
      {
        skillName: "Vercel",
        percentage: "90",
        icon: <IoLogoVercel />,
      },
    ],
  },
  {
    label: "Tools & Libraries",
    data: [
      {
        skillName: "Django Rest Framework",
        percentage: "90",
        
      },
      {
        skillName: "Redux Toolkit",
        percentage: "90",
      },
      {
        skillName: "Axios,Formik",
        percentage: "90",
      },
      {
        skillName: "Tailwind CSS",
        percentage: "80",
      },

      {
        skillName: "Postman",
        percentage: "90",
      },

      {
        skillName: "Material-UI",
        percentage: "90",
      },
    ],
  },
];

import { MdAddTask } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaSignInAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { FaHome } from "react-icons/fa";

export const PublicRoutes = [
    {
        name:"Home",
        path:"/",
        icon: <FaHome />
    },
    {
        name:"about",
        path:"/about",
        icon: <FcAbout />
    },
    {
        name:"login",
        path:"/login",
        icon: <FaSignInAlt />
    },
    {
        name:"registro",
        path:"/register",
        icon: <IoMdPersonAdd />
    }
]

export const PrivateRoutes = [
    {
        name:"perfil",
        path:"/profile",
        icon: <CgProfile />
    },
    {
        name:"tareas",
        path:"/tareas",
        icon: <MdAddTask />
    }
]
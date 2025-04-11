
import { IoHome } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";


const Sidebar=()=>{
    return(
        <div>
            <DesktopSidebar />
        <MobileSidebar />
        </div>
    )
}
export default Sidebar;

const DesktopSidebar=()=>{
    return(
        <div className="min-h-screen w-[100px] sm:flex flex-col gap-5 md:w-[230px] pt-[20px] sm:pt-[10px] md:px-[30px] px-[10px] sm:border-r  md:border-r ">
            <div className=" sticky left-0 top-10 w-full">
                <div className="w-full">
                <img className="h-[120px] w-full  hidden md:block " src="/desktoplogo.png" alt="logo1" />
                <img className="z-1 h-[100px] mb-[20px] block md:hidden " src="/mobilelogo.jpeg" alt="logo2" />
                </div>

                <div className="flex flex-col gap-4 lg:block">
                <div className=" flex flex-col gap-2 md:flex-row  items-center font-bold ">
                <IoHome size={"20px"}/>
                <h1 className="hidden md:block">Home</h1>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-2 font-bold text-[15px]">
            <FaRegHeart size={"20px"}/>
            <h1 className="hidden md:block">Favorites</h1> 
        </div>
        </div>

       </div>
        </div>
    )
}


const MobileSidebar=()=>{
    return(
        <div className="  bg-red-300  border-t fixed left-0 right-0 bottom-0 block z-10 sm:hidden">
        <div className="flex gap-7 justify-center">
                <IoHome size={"20px"}/>
                <FaRegHeart size={"20px"}/>
                </div>
        </div>
    )
}

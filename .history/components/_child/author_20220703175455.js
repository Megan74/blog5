
import Image from "next/image";
import Link from "next/link";


export default function author ({name, img, designation}) {
    if(!name && !img) re
    return(

       <div className="author flex py-5">
        <Image src={"/images/author/profile.JPG"} width={90} height={90} className="rounded-full"></Image>

        <div className="flex flex-col justify-center px-4">
            <Link href={"/"}><a className="text-md font-bold text-gray italic-font 800 hover:text-gray-600"> Megan</a></Link>

            <span className="text-sm text-gray-500">Software Engineer</span>
        </div>
       </div> 
    )
}
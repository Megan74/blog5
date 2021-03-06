import { ImGithub, ImTwitter, ImLinkedin } from "react-icons/im";
import Link from 'next/link';


export default function header() {

   

  return (

    <header className="bg-gray-50">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
            <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                <input type="text" className="input-text"  placeholder="Search..."/>
              
                <button className >OK</button>
                
            </div>
            <div className="shrink w-80 sm:order-2">
                <Link href={"/"}>
                    <a className="font-bold uppercase text-3xl">Design</a>
                </Link>
    
</div>
<div className= "mt-6 w-111 h-55 order-3 flex justify-center">
    <div className="flex gap-6">
        <Link href={'https://github.com/Megan74'}>
        <a className= "social" ><ImGithub color="888888"/></a>
        </Link>
        <Link href={'https://twitter.com/techiemeggy'}>
    <a className= "social"><ImTwitter color="#888888"/></a>
    </Link>
    <Link href={'https://www.linkedin.com/in/megan-mat/'}>
    <a className= "social"><ImLinkedin color="#888888"/></a>
    </Link>
</div>

</div>
</div>
</header>
)
}
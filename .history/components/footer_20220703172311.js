import { ImGithub, ImTwitter , ImLinkedin } from "react-icons/im";
import Link from 'next/link';
import Newsletter from "./_child/newsletter";



export default function footer(){

  const bg = {
    backgroundImage : "url('/images/footer.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition
  }
    return(
 <footer className="bg-gray-50">
      <Newsletter></Newsletter>

    <div className="container mx-auto flex justify-center py-12">
      <div className="py-5">
         <div className="flex gap-6 justify-center">
         <Link href={'https://github.com/Megan74'}>
        <a><ImGithub color="888888"/></a>
        </Link>
        <Link href={'https://twitter.com/techiemeggy'}>
    <a><ImTwitter color="#888888"/></a>
    </Link>
    <Link href={'https://www.linkedin.com/in/megan-mat/'}>
    <a><ImLinkedin color="#888888"/></a>
    </Link>
      </div>



      </div>

    </div>


 </footer>
    )
}

import Format from "../../layout/format";
import Author from "../../components/_child/author";
import Image from "next/image";
import Related from "../../components/_child/related";
import he


export default function Page() {

    return(
        <Format> 
            <section className="container mx-auto md:px-2 py-16 w-1/2">
            <div className="flex justify-center">
            <Author></Author>
           </div>

         <div className="post py-10">
            <h1 className="font-bold text-4xl text-cente  pb-5">Your most unhappy customer </h1>

            <p className="text-gray-500 text-xl text-center">Far far away, behind the word mountains; far far from the country</p>
          <div className="py10">
           <Image src="/images/img1.jpeg" width={900} height={600}></Image>
          </div>
            <div className="content text-gray-600 text-lg flex flex-col gap-4"></div>
         </div>
         </section>

        </Format>
    
        
    
    
    )
    }

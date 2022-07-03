
import Format from "../../layout/format";
import Author from "../../components/_child/author";
import Image from "next/image";
import Related from "../../components/_child/related";
import header from "../../components/header";


export default function Page({posts}) {

  const{id, title, category, description, img, published, author} = data;

    return(
        <Format> 
            <section className="container mx-auto md:px-2 py-16 w-1/2">
            <div className="flex justify-center">
            { author ? <Author></Author> : <></>}
           </div>

         <div className="post py-10">
            <h1 className="font-bold text-4xl text-cente  pb-5">{title || "No title"}</h1>

            <p className="text-gray-500 text-xl text-center">{subtitle || "No Title"}</p>
          <div className="py10">
           <Image src={img ||"/"} width={900} height={600}></Image>
          </div>
            <div className="content text-gray-600 text-lg flex flex-col gap-4"></div>
         </div>
         </section>

        </Format>
    
        
    
    
    )
    }


    export async function getStaticProps(){
      
    }
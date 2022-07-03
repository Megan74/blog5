import Format from "../../layout/format";
import Author from "../../components/_child/author";


export default function Page() {

    return(
        <Format> 
            <section className="container mx-auto md:px-2 py-16 w-1/2"></section>
            <div className="flex justify-center">
            <Author></Author>
           </div>

         <div className="post py-10">
            <h1 className="font-bold text-4"></h1>
         </div>

        </Format>
    
        
    
    
    )
    }
import Format from "../../layout/format";
import Author from "../../components/_child/author";


export default function Page() {

    return(
        <Format> 
            <div className="flex justify-center">
            <Author></Author>
           </div>

         <div className="post py-10">
            <h1 className="font-bold text-4xl text-cente  pb-5">Your most unhappy customer </h1>

            <p>Faf far away, behind the word mountains; far far from the country</p>

            
         </div>


        </Format>
    
        
    
    
    )
    }
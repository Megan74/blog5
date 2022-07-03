import Author from "./_child/author";
import Link from "next/link";
import Image from "next/image";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from"./_child/error";






export default function section2() {
   

    const {data, isLoading, isError} = fetcher('api/posts')

   
    if(isLoading) return <Spinner></Spinner>
    if(isError) return <Error></Error>

    return (
    <section className="container mx-auto md:px-20 py-10">
     <h1 className="font-bold text-4xl py-12 text-center">Latest Posts </h1>
  
   
      {/* grid columns */}
     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {
        data.map((value, index) =>(
            <Post data={value} key={index}></Post>
        ))
        }
 
        </div>
    </section>
    )
    }
   
  

function Post({data}){
    const{id, title, category, img, description, published, author} = data;
  
    return(
   <div className="item">
    <div className="images cursor-pointer">
    <Link href={`/posts/${id}`}><a><Image  src={img ||"/"} className="rounded cursor-pointer" width={700} height={450} /></a></Link>
    </div>
    <div className="info flex justify-center flex-col py-4">
    <div className="cat">
        <Link href={`/posts/${id}`}><a className="text-orange-600 font-bold hover:text-orange-800 cursor-pointer">{category || "Unknown"}</a></Link>
        <Link href={`/posts/${id}`}><a className="text-gray-800 font-bold hover:text-gray-600 cursor-pointer">{published || "Unknown"}</a></Link>
    </div>
    
    <div className="title">
     <Link href={`/posts/${id}`}><a className="text-xl font-bold text-gray-800 hover:text-gray-600 cursor-pointer">{title || "Unknown"}</a></Link>

</div>
<p className="text-gray-500 py-3">{description || "Unknown"}</p>
    { author ? <Author {...author}></Author> : <></>}

  
    </div>
    </div>
    )
}


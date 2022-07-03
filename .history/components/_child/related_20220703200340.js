import Image from "next/link";
import Link from "next/link";
import Author from "./author";
/*import fetcher from "../../lib/fetcher";
import Spinner from "./spinner";
import Error from "./error";*/



export default function Related(){

    /*const {data, isLoading, isError} = fetcher('api/posts')

   
    if(isLoading) return <Spinner></Spinner>;
    if(isError) return <Error></Error>*/

    return(
        <section className="pt-20">
           <h1 classNa
           me="font-bold text-3xl py-10">Related</h1>

           <div className="flex flex-col gap-10">
            {
                data.map((value, index) => {
                <Post key={index} data={value}></Post>
            })
            }
           </div>
        </section>
    )
}

function Post({data}){

    const{id, title, category, img, published, author} = data;

    return(
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
    <Link href={`/posts/${id}`}><a><Image src= /*{img ||""}*/className="rounded" width={300} height={250}/></a></Link>
    </div>
    <div className="info flex justify-center flex-col">
     <div className="cat">
        <Link href={`/posts/${id}`}><a className="text-orange-600 hover:text-orange-800">{category ||"No category"}</a></Link>
        <Link href={`/posts/${id}`}><a className="text-gray-800 hover:text-gray-600">{published ||"No date"}</a></Link>
    </div>
    <div className="title">
     <Link href={`/posts/${id}`}><a className="text-xl font-bold text-gray-800 hover:text-gray-600">{title ||"no title"}</a></Link>
     </div>
     { author ? <Author {...author}></Author> : <></>}
       </div>

        </div>

    )
}
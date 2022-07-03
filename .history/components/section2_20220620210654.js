import Author from "./_child/author";
import Link from "next/link";
import Image from "next/image";
import fetcher from "../lib/fetcher";



export default function section2() {
    const {data, isLoading, isError} = fetcher('api/posts')
    if(isLoading) return <div>Loading..</div>
    if(isError) return <div>Error</div>
return (
    <section className="container mx-auto md:px-20 py-10">
     <h1 className="font-bold text-4xl py-12 text-center">Latest Posts </h1>
  
     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">

         {Post()}
         {Post()}
         {Post()}
         {Post()}
         {Post()}
         {Post()}
 
        </div>
    </section>
    )
    }


function Post({data}){
    const { id, title, category, img, published, author } = data;
    return(
   <div className="item">
    <div className="images">
    <Link href={"/"}><Image src={img || "/" } className="rounded" width={700} height={450}/></Link>
    </div>
    <div className="info flex justify-center flex-col py-4">
    <div className="cat">
        <Link href={"/"}><a className="text-orange-600 font-bold hover:text-orange-800">{category || "Unknown"}</a></Link>
        <Link href={"/"}><a className="text-gray-800 font-bold hover:text-gray-600">-{published || "Unknown"}</a></Link>
    </div>
    
    <div className="title">
     <Link href={"/"}><a className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "Title"}</a></Link>

</div>
<p className="text-gray-500 py-3">
By adopting this pattern, you can forget about fetching data in the imperative way: start the request,
 update the loading state, and return the final result. 
Instead, your code is more declarative: you just need to specify what data is used by the component.  
</p>

  
{author ? <Author></Author> : <></> }
    </div>
    </div>
    )
}
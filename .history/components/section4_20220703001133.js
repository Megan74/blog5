
import Author from "./_child/author";
import Link from "next/link";
import Image from "next/image";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from"./_child/error";




export default function section4 (){
  return(
  <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
        <h1 className="font-bold text-4xl py-12">Business </h1>
          <div className="flex flex-col gap-8">
         {/*posts */}
         {Post()}
         {Post()}
         {Post()}
         
      </div>
      </div>
      <div className="item">
      <h1 className="font-bold text-4xl py-12">Travel </h1>
      <div className="flex flex-col gap-8 ml-5">
        {Post()}
         {Post()}
         {Post()}
       </div>
       </div>
       </div>
     </section>
  )

}

function Post({data}) {
  const{id, title, category, img, published, author} = data;
  
return(
   <div className="flex gap-5">
    <div className="image flex flex-col justify-start">
    <Link href={"/"}><a><Image src={"/Images/img1.jpeg"} className="rounded" width={300} height={250}/></a></Link>
    </div>
     <div className="info flex justify-center flex-col">
     <div className="cat">
        <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">Business, Travel</a></Link>
        <Link href={"/"}><a className="text-gray-800 hover:text-gray-600">- June 22, 2022</a></Link>
    </div>
    <div className="title">
     <Link href={"/"}><a className="text-xl md:text-4xl font-bold text-gray-800 hover:text-gray-600"></a></Link>
     </div>
       <Author></Author>
       </div>
   </div>

)

}
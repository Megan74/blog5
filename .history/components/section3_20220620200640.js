import Author from "./_child/author";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";



export default function section3 (){
  
return (
   <section className="container mx-auto md:px-20 py-16">
  <h1 className="font-bold text-4xl py-12 text-center">Most Popular </h1>
   {/* swiper */}
     <Swiper
     slidesPerView={2}
     >
    <SwiperSlide>
    {
       data.map((value,index)=>(
        <Post data={value} key={index}></Post>
           ))
        }
    </SwiperSlide>
     </Swiper>
   </section>

)

}

function Post(){
    return(
   <div className="grid">
    <div className="images">
    <Link href={"/"}><Image src={img || "/" } width={600} height={400}/></Link>
    </div>
    <div className="info flex justify-center flex-col py-4">
    <div className="cat">
        <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</a></Link>
        <Link href={"/"}><a className="text-grey-800 hover:text-grey-600">-{published || "Unknown"}</a></Link>
    </div>
    
    <div className="title"></div>
     <Link href={"/"}><a className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">{title || "Title"}</a></Link>

</div>
<p className="text-gray-500 py-3">
By adopting this pattern, you can forget about fetching data in the imperative way: start the request,
 update the loading state, and return the final result. 
Instead, your code is more declarative: you just need to specify what data is used by the component.  
</p>

{author ? <Author></Author> : <></> }
    </div>
    )
}
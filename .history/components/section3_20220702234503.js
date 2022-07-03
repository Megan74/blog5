import Author from "./_child/author";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";


export default function section3 (){

  const {data, isLoading, isError} = fetcher('api/posts')

   
  if(isLoading) return <Spinner></Spinner>
  if(isError) return <Error></Error>

return (
   <section className="container mx-auto md:px-20 py-16">
  <h1 className="font-bold text-4xl py-12 text-center">Most Popular </h1>
   {/* swiper */}
     <Swiper
     slidesPerView={2}
     >
    <SwiperSlide>{Post()}</SwiperSlide>
    <SwiperSlide>{Post()}</SwiperSlide>
    <SwiperSlide>{Post()}</SwiperSlide>
     </Swiper>
   </section>

)

}

function Post(){
    return(
   <div className="grid">
    <div className="images">
 
    <Link href={"/"}><Image src={"/images/img1.jpeg"}  width={600} height={400}/></Link>
    </div>
    <div className="info flex justify-center flex-col py-4">
    <div className="cat">
        <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">Business, Travel</a></Link>
        <Link href={"/"}><a className="text-gray-800 hover:text-gray-600">- June 22, 2022</a></Link>
    </div>
    
    <div className="title"></div>
     <Link href={"/"}><a className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600"></a></Link>

</div>
<p className="text-gray-500 py-3">
</p>

   <Author></Author>
    </div>
    )
}
import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from"./_child/error";


export default function section1 (){

  const {data, isLoading, isError} = fetcher('api/posts')

   
  if(isLoading) return <Spinner></Spinner>
  if(isError) return <Error></Error>
  
    SwiperCore.use([Autoplay])

    const bg= {
        background:"url('/images/banner.png') no-repeat",
        backgroundPosition:"right"
    }
return (

    <section className="py-16" style={bg}>
       <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center"> Trending</h1>

    
    <Swiper
     
      slidesPerView={1}
      autoplay={{
        delay:3000
      }}
    >
      {

        data.map
      }
    </Swiper>
       </div>
    </section>

)

}

function Slide() {
return(

<div className="grid md:grid-cols-2">
<div className="image">
   
    <Link href={"/"}><Image src={"/Images/img1.jpeg"} width={900} height={800}/></Link>
    </div>
   <div className="info font-bold flex justify-center flex-col">
    <div className="cat">
        <Link href={"/"}><a className="text-orange-700 font-bold hover:text-orange-800">Business, Travel</a></Link>
        <Link href={"/"}><a className="text-grey-800 font-bold hover:text-grey-600">- June 22, 2022</a></Link>
    </div>
     <div className="title"></div>
     <Link href={"/"}><a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600"></a></Link>

</div>
<p className="text-gray-500 py-3">
</p>

   <Author></Author>
   
   </div>


)

}
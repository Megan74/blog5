
import Format from "../../layout/format";
import Author from "../../components/_child/author";
import Image from "next/image";
import Related from "../../components/_child/related";
import Header from "../../components/header";
import getPost from "../../lib/helper";
import fetcher from "../../lib/fetcher";
import Spinner from "../../components/_child/spinner";
import ErrorComponent from "../../components/_child/error";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";



export default function Page() {

  const router = useRouter();
  const {postId} = router.query;
  const {data, isLoading, isError} = fetcher('api/posts/1')

  if(isLoading) return <Spinner></Spinner>
  if(isError) return <ErrorComponent></ErrorComponent>

  return(
    <SWRConfig value={{ fallback}}>
    <Article {...data}></Article>
    </SWRConfig>
  )

}

  function Article({title, category, description, img, author}){

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
            <div className="content text-gray-600 text-lg flex flex-col gap-4">{description || "No Title"}</div>
         </div>
         </section>

        </Format>
    
        
    
    
    )
  }
    


    export async function getStaticProps(){
      const posts = await getPost(1)

      return{
        props: posts
      }
    }

    export async function getStaticProps(){
      const posts = await getPost()

      const paths = posts.map(value => {
        return(
          params: {
            postId : value.id.toString(),
          }
        )
      })

      return{

      }
    }
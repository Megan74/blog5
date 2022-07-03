import im



export default function Related(){
    return(
        <section className="pt-20">
           <h1 className="font-bold text-4xl py-12">Business</h1>
        </section>
    )
}

function Post(){
    return(
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
    <Link href={"/"}><a><Image src={"/Images/img1.jpeg"} className="rounded" width={300} height={250}/></a></Link>
    </div>

        </div>

    )
}
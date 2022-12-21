import Link from "next/link";

export default function InfoPost({
    category, 
    date,
    title,
    shortDescription,
    authorAvatar,
    authorName,
    authorJob
}: { 
    category: string,
    date: string,
    title: string,
    shortDescription: string,
    authorAvatar: string,
    authorName: string,
    authorJob: string,
}){

    return (
        <>
            <div className="flex items-center text-white/60 lg:space-x-3 flex-wrap">
                <div className="uppercase lg:mr-0 mr-2">
                    { category }
                </div>
                <span className="lg:block hidden">&bull;</span>
                <div className="">
                    { date }
                </div>
            </div>
            <h2 className="text-xl mt-2">
                <Link href="/detail">
                    { title }
                </Link>
            </h2>
            <p className="text-white/60 mt-4 w-10/12 font-thin lg:block hidden">
                { shortDescription }
            </p>
            <div className="flex items-center mt-5">
                <img src={ authorAvatar } alt="Author Featured Post" className="w-14 h-14 rounded-full object-cover" />
                <div className="ml-4">
                    <h3>{ authorName }</h3>
                    <div className="text-white/60 text-sm mt-1">
                        { authorJob }
                    </div>
                </div>
            </div>
        </>
    )
}
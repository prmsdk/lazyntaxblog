import Link from "next/link";
import InfoPost from "./InfoPost";

export default function CardPost({ thumbnail, ...infoPost}) {
    return (
        <article>
            <Link href="/detail">
                <img src={thumbnail} alt={`Thumbnail Post ${infoPost.title}`} className="rounded w-full mb-4" />
            </Link>
            <InfoPost {...infoPost} />
            <hr className="border-white/10 mt-10 md:hidden block"></hr>
        </article>
    )
}
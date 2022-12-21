import Link from "next/link"
import InfoPost from "./InfoPost"

export default function FeaturedPost() {
    return (
        <article>
            <div className="flex -mx-4 flex-wrap">
                <div className="px-4 lg:w-8/12 md:w-7/12 w-full pb-4">
                    <Link href="/detail">
                        <img src="/featured-thumbnail.png" alt="Featured Blog Post" className="rounded-xl w-full" />
                    </Link>
                </div> 
                <div className="px-4 lg:w-4/12 md:w-5/12 w-full pb-4">
                    <InfoPost 
                        category="UI Designer"
                        date="July, 6 2021"
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vitae."
                        shortDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eum, cum hic repellendus non assumenda, minus dicta ipsa animi debitis omnis? Quam, et animi!"
                        authorAvatar="/author-1.png"
                        authorName="Leslei Alexander"
                        authorJob="UI Designer"
                    />
                </div>
            </div>
        </article>
    )
}
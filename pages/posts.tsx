import { useState } from "react";
import CardPost from "../components/CardPost";
import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";
import dumpPost from '../utils/posts.json';

export default function Post() {
    const [posts, setPosts] = useState(dumpPost) 
    return (
        <Layout>
            <SectionHeader>UI Design</SectionHeader>
            {!posts.length ? (
            <div className="text-center py-24">
                <h2 className="text-5xl">No Result</h2>
                <p className="text-xl mt-6 text-white/60 md:w-6/12 w-full mx-auto">
                We couldn't find any post with the keryword 'coba'. Please try another
                </p>
            </div>
            ) : (
                <div className="flex -mx-4 md:py-6 py-2 flex-wrap">
                {posts.map(post => (
                    <div key={post.id} className="lg:w-4/12 md:w-6/12 w-full px-4 py-6">
                    <CardPost {...post} />
                    </div>
                ))}
                </div>
            )}
        </Layout>
    )
}
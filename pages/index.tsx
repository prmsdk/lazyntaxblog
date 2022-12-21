import { useState } from 'react'
import type { NextPage } from 'next'
import FeaturedPost from "../components/FeaturedPost";
import CardPost from '../components/CardPost';
import Layout from '../components/Layout';
import dumpPost from '../utils/posts.json';

const Home: NextPage = () => {
  const [posts, setPosts] = useState(dumpPost) 
  
  return (
    <Layout>
        <FeaturedPost />
        <hr className="border-white/10 md:mt-10 mt-4 md:hidden block"></hr>
        <div className="flex -mx-4 md:py-12 py-2 flex-wrap">
          {posts.map(post => (
            <div key={post.id} className="lg:w-4/12 md:w-6/12 w-full px-4 py-6">
              <CardPost {...post} />
            </div>
          ))}
        </div>
    </Layout>
  )
}

export default Home

import Head from 'next/head'
import { Categories, Card, PostWidget } from '../components'

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>@Juba31 - Blog | Web && Mobile Development | Cybersecurity </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className="lg:col-span-8 col-span-1">
          Hello, World!
          {/* {posts.map((post, idx) => (
            <PostCard post={post} key={post.title} />
          ))} */}
        </div>
        <div className="lg:col-span-4 col-span-1"></div>
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
      </div>
    </div>
  )
}

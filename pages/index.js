import Head from 'next/head'
import { Categories, Card, PostWidget } from '../components'
import Featured from '../sections/Featured'
import { getPosts } from '../services'

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Juba Matsaberidze - Blog | Web && Mobile Development | Cybersecurity </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, idx) => (
            <Card post={post.node} key={post.node.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts() || [])

  return {
    props: { posts }
  }
}
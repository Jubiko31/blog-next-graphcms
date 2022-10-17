import Head from 'next/head'

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>@Juba31 - Blog | Web && Mobile Development | Cybersecurity </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap'>
        Hello, World!
      </div>
    </div>
  )
}

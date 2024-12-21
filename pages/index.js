import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>why are u here</title>
      </Head>

      <main>
        <Header title="This script is free , why u tryna skid!" />
        <p className="description">
          stop being   <code>dawg</code>
        </p>

        <p>
          Load this script using:
          <pre>
            loadstring(game:HttpGet("https://luarmor.netlify.app/api/COCK"))()
          </pre>
        </p>
      </main>

      <Footer />
    </div>
  )
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>why are u here</title>
      </Head>

      <main>
        <h1>This script is protected!</h1>
        <p>Copy and paste the following code:</p>
        <pre>
          loadstring(game:HttpGet("https://luarmor.netlify.app/api/script?token=yourSecretKey"))()
        </pre>
        <p>Do not share your token!</p>
      </main>
 
   </div>
  )
}

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={`${inter.className} min-h-screen bg-gray-50`}>
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            ALX Listing App
          </h1>
          <p className="text-lg text-center text-gray-600 mb-12">
            Welcome to our Airbnb clone - Your next adventure awaits!
          </p>
        </main>
      </div>
    </>
  )
}

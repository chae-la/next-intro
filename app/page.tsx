import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>Hello world</h1>
      <Link href="/users">Users</Link> 
      {/* rather than using anchor tag, using Link or client-side rendfering to reduce rerendering */}
      <ProductCard />
    </main>
  )
}

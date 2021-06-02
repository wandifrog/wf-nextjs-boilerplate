import Link from 'next/link'
import PFancyHeader from '../components/PFancyHeader'

export default function HomePage() {

  return (
    <div>
      <h1>Home Page</h1>
      <PFancyHeader />
      <h2>212312</h2>
      <Link href="/about">go to about page</Link>
    </div>
  )
}

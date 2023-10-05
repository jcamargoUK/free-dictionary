import Image from 'next/image'
import Search from './components/search'
import Nav from './components/nav'




export default function Home() {
   
  return (
     <section className='flex items-center flex-col'>
        <Nav />
        <Search />
     </section>
  )
}


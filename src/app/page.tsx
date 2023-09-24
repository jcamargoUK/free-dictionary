import Image from 'next/image'
import Search from './components/search'
import axios from 'axios'




export default function Home() {
   
  return (
     <section>
        <h1>Free Dictionary</h1>
         <Search />
     </section>
  )
}


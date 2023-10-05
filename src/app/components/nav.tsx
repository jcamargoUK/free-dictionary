import { BiBook } from 'react-icons/bi';
import DropdownComponent from './dropdownMenu'

const Nav = () => {
  return(
    <section className=' flex w-80 mt-8 mb-2'>
      <BiBook className="w-10 h-10 text-gray-500"/>
      <DropdownComponent />
    </section>
  )
}

export default Nav





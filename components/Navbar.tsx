import Link from "next/link";

const NavBar = () => (
  <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center text-blue-500 font-bold text-2xl'>
        Tana Car Rental
      </Link> 

    </nav>
  </header>
);

export default NavBar;

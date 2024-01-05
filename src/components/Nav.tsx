
import { hamburger } from "../../assets/icons";
import { headerLogo } from "../../assets/images";
import { navLinks } from "../../constants";
import Image from 'next/image'
import Link from "next/link";
const Nav = () => {
    return (
      <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <Image
              src={headerLogo}
              alt='logo'
              width={129}
              height={29}
            />
          <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className='font-montserrat leading-normal text-lg text-slate-500
                  hover:text-slate-900 transition-colors duration-200
                  hover:underline
                 '>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className='flex gap-2 font-montserrat text-lg leading-normal font-medium max-lg:hidden wide:mr-24'>
            <Link href='/'>Sign in</Link>
            <span>/</span>
            <Link href='/'>Explore now</Link>
          </div>
          <div className='hidden max-lg:block'>
            <Image src={hamburger} alt='hamburger icon' width={25} height={25} />
          </div>
        </nav>
      </header>
    );
  };
  
  export default Nav;
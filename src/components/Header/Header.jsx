import React from 'react'
import { Container, Logo, LogoutBtn } from "../index.js"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authService from '../../appwrite/auth.js';

function Header() {

  const [name, setName] = React.useState("");

  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchUser = async () => {
      let user = await authService.getCurrentUser();
      setName(user.name)
      console.log(user)
    };

    fetchUser();
  }, [])



  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  return (
    <header className='py-3 shadow bg-gray-500 border-t-4 border-transparent bg-gradient-to-r from-blue-950 to-green-500 bg-clip-border'>
      <Container>
        <nav className='flex items-center'>
          <div className='mr-4 flex items-center gap-5'>
            <Link to="/">
              <Logo width='50px' className="rounded-2xl p-4 text-2xl font-bold font-serif text-[#f3e1c8] bg-linear-to-br from-emerald-700 to-green-700 cursor-pointer" />
            </Link>
            <p className='text-white font-semibold cursor-pointer' title='Go to Profile'>{name.toUpperCase()}</p>
          </div>
          <ul className='flex items-center gap-8 ml-auto'>
            {
              navItems.map((item) => (
                item.active ? (
                  <li key={item.name}>
                    <button onClick={() => navigate(item.slug)} className='inline-block px-6 py-2 duration-200 text-[#EAECEF] hover:bg-blue-100 font-[500] text-xl rounded-full border-transparent hover:border-b-2 hover:border-[#EAECEF] hover:text-neutral-500'>{item.name}</button>
                  </li>
                ) : null
              ))
            }
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header;
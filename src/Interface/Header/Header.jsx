import React from 'react'
import { Container, Logo, LogoutBtn } from "../index.js"
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authService from '../../appwrite/auth.js';

function Header() {
  const [name, setName] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const fetchUser = async () => {
      const user = await authService.getCurrentUser();
      setName(authStatus && user ? user.name : "");
    };
    fetchUser();
  }, [location.pathname, authStatus]);

  const navItems = [
    { name: 'Home', slug: "/", active: true },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
  ];

  const go = (slug) => { navigate(slug); setOpen(false); };

  return (
    <header className="blog-header">
      <Container>
        <nav className="blog-header-inner">
          <Link to="/" className="brand-link" aria-label="BlogHouse home">
            <span className="brand-badge">B</span>
            <span>
              <span className="brand-name block">BlogHouse</span>
              <span className="brand-tag">Ideas worth sharing</span>
            </span>
          </Link>

          <ul className="nav-list">
            {navItems.filter(item => item.active).map((item) => (
              <li key={item.name}>
                <button onClick={() => go(item.slug)}>{item.name}</button>
              </li>
            ))}
            {authStatus && <li><LogoutBtn /></li>}
          </ul>

          <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>☰</button>
        </nav>
      </Container>

      {open && (
        <div className="md:hidden border-t border-[#dce5df] bg-white/95 px-4 py-4 shadow-xl">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.filter(item => item.active).map((item) => (
              <button key={item.name} onClick={() => go(item.slug)} className="rounded-xl px-4 py-3 text-left font-semibold text-slate-600 hover:bg-[#eef4ef] hover:text-[#123d2b]">{item.name}</button>
            ))}
            {authStatus && <div className="px-4 py-3"><LogoutBtn /></div>}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header;

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="headerNav">
        <ul>
          <li>
            <Link to="/">Category</Link>
          </li>
          
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
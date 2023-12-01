const NavBar = () => {
  return (
    <div className="sticky top-0">
      <nav className="flex w-full h-10 bg-violet-300 items-center py-8 px-5">
        <div className="ml-56 w-16">
          <img src="public\assets\logo.jpg" alt="Logo" />
        </div>
        <div className="absolute  right-20">
          <ul className="flex sticky top-0">
            <li className="ml-8">Login</li>
            <li className="ml-8">Logout</li>
            <li className="ml-8">About</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';

// Components
import SearchBar from 'components/common/SearchBar';
import GroceryListButton from 'components/common/Nav/GroceryListButton.jsx';
import AccountButton from 'components/common/Nav/AccountButton.jsx';

// Assets
import logo from 'assets/images/logo.png';

const Nav = () => (
  <nav className="h-28 bg-primary py-12 md:px-16 lg:px-20 xl:px-24 2xl:px-36">
    <div className="h-full w-full max-w-screen-xl mx-auto flex justify-between items-center">
      <Link to="/" className="flex items-center text-white text-3xl">
        <img src={logo} alt="Ciku" className="h-12 mr-2" />
        Ciku
      </Link>
      <SearchBar />
      <section className="flex items-stretch h-1/2 ">
        <GroceryListButton />
        <AccountButton />
      </section>
    </div>
  </nav>
);

export default Nav;

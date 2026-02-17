import Image from "next/image";
import SearchIcon from "@/components/icons/SearchIcon";
import HeartIcon from "@/components/icons/HeartIcon"; 
import ShoppingBagIcon from "@/components/icons/ShoppingBagIcon"; 
import UserIcon from "@/components/icons/UserIcon"; 
import LogoIcon from "@/components/icons/LogoIcon"; 

export default function Header() {
  return (
    <header className="site-header">
      <div className="container topbar">
        <LogoIcon size={20}/>
        <h1 className="logo">LOGO</h1>
        <div className="topbar-actions">
          <span>USD</span>
          <span>ENG</span>
          <button className="icon-button" aria-label="Search">
            <SearchIcon size={16}/>
          </button>
          <button className="icon-button" aria-label="Search">
            <HeartIcon size={16}/>
          </button>
          <button className="icon-button" aria-label="Account">
            <ShoppingBagIcon size={16}/>
          </button>
          <button className="icon-button" aria-label="Cart">
            <UserIcon size={16}/>
          </button>
        </div>
      </div>
      <div className="container nav">
        <nav className="nav-links" aria-label="Primary">
          <a href="#">Shop</a>
          <a href="#">Skills</a>
          <a href="#">Stories</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
}

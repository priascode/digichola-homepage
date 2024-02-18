import { menuItems } from '../menuItems';
import MenuItems from './MenuItems';
const Navbar = ({isOpen, closeMenu}) => {
  return (
    <nav>
      <ul className={isOpen ? 'menus active' : 'menus'}>
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
              isOpen={isOpen}
              closeMenu={closeMenu}
            />
          );
        })}
      <div className="button-mob">
           <button className={isOpen ? 'login active' : 'login'}>Log in</button>
           <button className={isOpen ? 'start_for_free active' : 'start_for_free'}>Start for free</button>
      </div>   
      </ul>
    </nav>
  );
};

export default Navbar;

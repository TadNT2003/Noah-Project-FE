import { NavItemExpandable, NavItemNone } from "../items/navItems";

export default function NavBarTop({ navPage }: { navPage: string[][] }) {
  return (
    <nav className="flex flex-row items-center h-full">
      {navPage.map((items, index) => {
        return (
          <div key={index} className=" h-full">
            {items.length > 1 ? (
              <NavItemExpandable>{items[0]}</NavItemExpandable>
            ) : (
              <NavItemNone>{items[0]}</NavItemNone>
            )}
          </div>
        );
      })}
    </nav>
  );
}

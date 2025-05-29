import { Link } from "react-router-dom";

export default function Sidebar({dashboard}) {
    return (
      <div className="h-screen w-64 bg-gray-100 p-5 flex flex-col justify-between">
        {/* Top Section */}
        <div>
          {/* Brand Logo */}
          <h2 className="text-xl font-bold text-gray-800">Retail Ease</h2>
  
                <nav className="mt-6">
                 <h3 className="text-gray-500 uppercase text-sm mb-2">MENU</h3> 
                        <ul className="space-y-2">
                          <Link to={'/dashboard'} ><SidebarItem icon="📊" text="Dashboard" active={dashboard === 'Dashboard'} /></Link>
                          <Link to={'/orders'} ><SidebarItem icon="📢" text="Orders" active={dashboard === 'Orders'} /></Link>
                          <Link to={'/inventory'} ><SidebarItem icon="🔄" text="Inventory" active={dashboard === 'Inventory'} /></Link>
                          <Link to={'/sales'} ><SidebarItem icon="🔗" text="Sales" active={dashboard === 'Sales'} /></Link>
                          <Link to={'/customers'} ><SidebarItem icon="👥" text="Customers" active={dashboard === 'Customers'} /></Link>
                          <Link to={'/purchase'} ><SidebarItem icon="🛍️" text="Purchase" active={dashboard === 'Purchase'} /></Link>
                        </ul>
                        </nav>
                        </div>
                      
                        {/* Bottom Section - User Profile */}
        <div className="flex items-center space-x-3">
          <img 
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" 
            alt="User" 
            className="w-10 h-10 rounded-full"
          />
          <span className="text-gray-800 font-medium">Admin</span>
        </div>
      </div>
    );
  }
  
  // Sidebar Item Component
  function SidebarItem({ icon, text, active }) {
    return (
      <li
        className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer 
          ${active ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-200"}`}
      >
        <span>{icon}</span>
        <span>{text}</span>
      </li>
    );
  }
  
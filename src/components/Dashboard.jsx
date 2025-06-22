import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-blue-500 text-white p-6 space-y-4">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="flex flex-col space-y-2">
          {/* home */}
          <NavLink
            to="home"
            className={({ isActive }) =>
              isActive
                ? "bg-white text-blue-500 px-4 py-2 rounded font-semibold"
                : "hover:bg-blue-600 px-4 py-2 rounded"
            }
          >
            Home
          </NavLink>
          {/* about */}
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive
                ? "bg-white text-blue-500 px-4 py-2 rounded font-semibold"
                : "hover:bg-blue-600 px-4 py-2 rounded"
            }
          >
            About
          </NavLink>
          {/* contact */}
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive
                ? "bg-white text-blue-500 px-4 py-2 rounded font-semibold"
                : "hover:bg-blue-600 px-4 py-2 rounded"
            }
          >
            Contact
          </NavLink>
          {/* docs */}
          <NavLink
            to="docs"
            className={({ isActive }) =>
              isActive
                ? "bg-white text-blue-500 px-4 py-2 rounded font-semibold"
                : "hover:bg-blue-600 px-4 py-2 rounded"
            }
          >
            Docs
          </NavLink>

          <NavLink
            to="overview"
            className={({ isActive }) =>
              isActive
                ? "bg-white text-blue-500 px-4 py-2 rounded font-semibold"
                : "hover:bg-blue-600 px-4 py-2 rounded"
            }
          >
            Overview
          </NavLink>
          <NavLink
            to="users"
            className={({ isActive }) =>
              isActive
                ? "bg-white text-blue-500 px-4 py-2 rounded font-semibold"
                : "hover:bg-blue-600 px-4 py-2 rounded"
            }
          >
            Users
          </NavLink>
          <NavLink
            to="settings"
            className={({ isActive }) =>
              isActive
                ? "bg-white text-blue-500 px-4 py-2 rounded font-semibold"
                : "hover:bg-blue-600 px-4 py-2 rounded"
            }
          >
            Settings
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;

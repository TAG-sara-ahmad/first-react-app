import { NavLink, Outlet } from "react-router";

function Auth() {
  return (
    <div className="flex h-screen">
      {" "}
      <aside className="w-64 bg-blue-500 text-white p-6 space-y-4">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="flex flex-col space-y-2">
          <NavLink
            to="login"
            className={({ isActive }) =>
              isActive
                ? "bg-white text-blue-500 px-4 py-2 rounded font-semibold"
                : "hover:bg-blue-600 px-4 py-2 rounded"
            }
          >
            Login
          </NavLink>
          <NavLink
            to="signup"
            className={({ isActive }) =>
              isActive
                ? "bg-white text-blue-500 px-4 py-2 rounded font-semibold"
                : "hover:bg-blue-600 px-4 py-2 rounded"
            }
          >
            Signup
          </NavLink>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-10 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}

export default Auth;

import Link from "next/link";
import { getNavData, getUserData } from "../../lib/mock";
import { cache } from "react";

// In practive, the cache should be addded on function definition, but we add it here
// since it's the only place that uses it
const getNavDataCached = cache(getNavData);
const getUserDataCached = cache(getUserData);

async function Navbar() {
  const data = await getNavDataCached();
  const user = await getUserDataCached();

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-8">
            {data.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">{user.name}</span>
            <span className="text-xs text-gray-400">({user.role})</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

async function App() {
  const user = await getUserDataCached();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          App Router with Server Components
        </h1>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">User Information</h2>
            <p className="text-gray-700">
              <strong>Name:</strong> {user.name}
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-gray-700">
              <strong>Role:</strong> {user.role}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Data fetched at: {new Date(user.timestamp).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function Home() {
  return (
    <div>
      <Navbar />
      <App />
    </div>
  );
}

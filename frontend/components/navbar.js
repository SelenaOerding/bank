import Link from "next/link";
import { useUser } from "../context/UserContext";

export default function Navbar() {
  const { user, logout } = useUser();

  return (
    <header className="bg-green-900 text-white px-6 py-4 flex items-center justify-between shadow-md">
      <div className="flex w-full items-center justify-between px-6">
        <div className="text-2xl font-bold tracking-wide">Chasbank Forest</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <span className="text-white hover:text-green-300 cursor-pointer">
                  Hem
                </span>
              </Link>
            </li>

            {user && (
              <li>
                <Link href="/account">
                  <span className="text-white hover:text-green-300 cursor-pointer">
                    Konto
                  </span>
                </Link>
              </li>
            )}

            {!user ? (
              <>
                <li>
                  <Link href="/login">
                    <span className="text-white hover:text-green-300 cursor-pointer">
                      Logga in
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/register">
                    <span className="text-white hover:text-green-300 cursor-pointer">
                      Skapa användare
                    </span>
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <button
                  onClick={logout}
                  className="text-red-600 hover:text-red-800 cursor-pointer"
                >
                  Logga ut
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

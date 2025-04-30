import { useState } from "react";
import { useRouter } from "next/router";
import { loginUser } from "../utils/api";
import { useUser } from "../context/UserContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { login } = useUser();

  async function handleLogin(e) {
    e.preventDefault();
    const data = await loginUser(username, password);

    if (!data) return;

    login({
      userId: data.userId,
      otp: data.otp,
      username: username,
    });

    router.push("/");
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/img.png')" }}
    >
      <div className="flex items-center justify-center py-10">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center text-gray-900">
            Logga in
          </h2>
          <form onSubmit={handleLogin} className="mt-4">
            <label className="block text-gray-700">Användarnamn</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md text-gray-900"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label className="block text-gray-700 mt-4">Lösenord</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md text-gray-900"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="mt-6 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-700"
            >
              Logga in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

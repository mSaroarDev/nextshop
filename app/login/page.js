"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import userLogin from "@/utils/userLogin";
import Link from "next/link";
import Appnav from "../components/Appnav";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    userLogin(username, password)
      .then((json) => {
        localStorage.setItem("token", json.token);
        router.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Appnav />
      <div className="w-full bg-gray-100">
        <div className="h-screen w-full flex items-center justify-center">
          <div className="content-area p-5">
            <main>
              <div className="w-96 lg:max-w-sm text-center mb-3 p-5 lg:p-0">
                <div className="bg-white shadow-lg border border-purple-300 rounded-xl p-10">
                  <h1 className="text-2xl font-bold mb-5">Login Form</h1>
                  <div>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Input Username"
                      className="input input-bordered w-full max-w-xs mb-3"
                    />
                    <input
                      type="text"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Input Password"
                      className="input input-bordered w-full max-w-xs  mb-3"
                    />
                    <button
                      onClick={handleLogin}
                      className="btn btn-neutral mb-4"
                    >
                      Login
                    </button>
                    <div>
                      <Link className="hover:underline" href="/">
                        Go back to Homepage
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { BACKEND_URL } from "@/config";
export default function SignInPage() {
  const router = useRouter();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  return (

    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white text-sm mb-8 transition-colors"
        >
          ← Back to home
        </Link>
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 shadow-xl">
          <h1 className="text-2xl font-bold text-white mb-2">Sign in</h1>
          <p className="text-neutral-400 text-sm mb-6">
            Enter your credentials to access your account
          </p>
          <form
            className="space-y-5"
            onSubmit={async (e) => {
              e.preventDefault();
              setError("");
              setIsLoading(true);
              try {
                const res = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
                  username: email,
                  password,
                });
                localStorage.setItem("token", res.data.token);
                router.push("/dashboard");
              } catch (err) {
                const status = (err as AxiosError)?.response?.status;
                if (status === 401) {
                  setError("Invalid email or password.");
                } else {
                  setError("Sign in failed. Check backend and database connection.");
                }
              } finally {
                setIsLoading(false);
              }
            }}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
                autoComplete="email"
                onChange={e => setemail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
                autoComplete="current-password"
                onChange={e => setpassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
            {error ? (
              <p className="text-sm text-red-400 text-center">{error}</p>
            ) : null}
          </form>
          <p className="mt-6 text-center text-sm text-neutral-400">
            Don&apos;t have an account?{" "}
            <Link
              href="/sign-up"
              className="text-orange-500 hover:text-orange-400 font-medium transition-colors"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { AppNavbar } from "@/components/ui/navbar";
import { BACKEND_URL } from "@/config";

interface Zap  {
    "id": string 
   "Triggerid" :string
    "userId":number
    "actions":{
    "id": string
    "zapId": string
    "ActionId": string
    "sortingOrder":number
    type:{
        "id":string
        "name":string
    }[]
}

};

export default function Dashboard() {
  const router = useRouter();
  const [zaps, setZaps] = useState<Zap[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navItems = useMemo(
    () => [
      { name: "Dashboard", link: "/dashboard" },
      { name: "Zaps", link: "#zaps" },
    ],
    [],
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/sign-in");
      return;
    }

    const loadZaps = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/v1/zap`, {
          headers: {
            authorization: token,
          },
        });
        setZaps(response.data?.zap ?? []);
      } catch {
        setError("Unable to load zaps. Please sign in again.");
      } finally {
        setLoading(false);
      }
    };

    loadZaps();
  }, [router]);

  return (
    <div className="min-h-screen bg-black text-white">
      <AppNavbar
        items={navItems}
        align="right"
        action={{ label: "Create Zap", href: "#create-zap" }}
      />

      <main className="pt-28 px-4 pb-6">
        <section className="flex gap-4 h-[calc(100vh-8rem)]">
          <aside className="w-64 rounded-xl border border-neutral-800 bg-neutral-900/40 p-3">
            <button
              id="create-zap"
              className="w-full rounded-lg bg-orange-500 hover:bg-orange-600 text-white py-2 text-sm font-semibold transition-colors"
            >
              + Create
            </button>
            <nav className="mt-4 space-y-1 text-sm">
              <a className="block rounded-md px-3 py-2 hover:bg-neutral-800" href="#">
                Home
              </a>
              <a className="block rounded-md px-3 py-2 bg-neutral-800 text-white" href="#zaps">
                Zaps
              </a>
              <a className="block rounded-md px-3 py-2 hover:bg-neutral-800" href="#">
                Tables
              </a>
              <a className="block rounded-md px-3 py-2 hover:bg-neutral-800" href="#">
                Interfaces
              </a>
              <a className="block rounded-md px-3 py-2 hover:bg-neutral-800" href="#">
                Apps
              </a>
            </nav>
          </aside>

          <section className="w-72 rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
            <h2 className="text-2xl font-semibold mb-4">Zaps</h2>
            <div className="rounded-lg bg-neutral-800/60 px-3 py-2 text-sm">My Zaps</div>
            <div className="mt-3 flex gap-4 text-xs text-neutral-400">
              <span className="text-white border-b border-white pb-1">Personal</span>
              <span>Shared</span>
            </div>
            <button className="mt-6 w-full rounded-lg border border-neutral-700 py-2 text-sm hover:bg-neutral-800 transition-colors">
              + Create a personal folder
            </button>
          </section>

          <section
            id="zaps"
            className="flex-1 rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 overflow-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-semibold">My Zaps</h2>
              <button
                onClick={() => {
                  router.push("/zap/create");
                }}
                className="rounded-lg bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-semibold transition-colors"
              >
                + Create
              </button>
            </div>

            <div className="grid grid-cols-12 text-xs uppercase tracking-wide text-neutral-400 border-b border-neutral-800 pb-2">
              <div className="col-span-7">Name</div>
              <div className="col-span-3">Last Edit</div>
              <div className="col-span-2">Running</div>
            </div>

            {loading ? (
              <div className="py-6 text-neutral-400">Loading zaps...</div>
            ) : error ? (
              <div className="py-6 text-red-400">{error}</div>
            ) : zaps.length === 0 ? (
              <div className="py-6 text-neutral-400">No zaps yet. Create your first zap.</div>
            ) : (
              <div>
                {zaps.map((zap) => (
                  <div
                    key={zap.id}
                    className="grid grid-cols-12 items-center border-b border-neutral-800 py-3 text-sm"
                  >
                    <div className="col-span-7">
                      <div className="font-medium">Zap {zap.id.slice(0, 8)}</div>
                      <div className="text-xs text-neutral-500">
                        {Array.isArray(zap.actions) ? zap.actions.length : 0} actions
                      </div>
                    </div>
                    <div className="col-span-3 text-neutral-400">Just now</div>
                    <div className="col-span-2">
                      <span className="inline-flex items-center rounded-full bg-neutral-800 px-2 py-1 text-xs text-neutral-300">
                        Off
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </section>
      </main>
    </div>
  );
}
"use client";

import Link from "next/link";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

type NavbarItem = {
  name: string;
  link: string;
};

type NavbarAction = {
  label: string;
  href: string;
};

type AppNavbarProps = {
  items: NavbarItem[];
  showAuthButtons?: boolean;
  align?: "center" | "right";
  action?: NavbarAction;
};

export function AppNavbar({
  items,
  showAuthButtons = false,
  align = "center",
  action,
}: AppNavbarProps) {
  const navItemsClassName =
    align === "right"
      ? "left-auto right-28 inset-y-0 w-auto justify-end flex-none"
      : "";

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={items} className={navItemsClassName} />
        {action ? (
          <div className="ml-auto relative z-30 flex-shrink-0">
            <NavbarButton
              as={Link}
              href={action.href}
              variant="primary"
              className="bg-orange-500 hover:bg-orange-600 text-white whitespace-nowrap"
            >
              {action.label}
            </NavbarButton>
          </div>
        ) : null}
        {showAuthButtons ? (
          <div className="flex items-center gap-6 ml-auto relative z-30 flex-shrink-0">
            <Link
              href="/sign-in"
              className="text-sm text-neutral-300 hover:text-white transition-colors whitespace-nowrap"
            >
              Log in
            </Link>
            <NavbarButton
              as={Link}
              href="/sign-up"
              variant="primary"
              className="bg-orange-500 hover:bg-orange-600 text-white whitespace-nowrap"
            >
              Sign up
            </NavbarButton>
          </div>
        ) : null}
      </NavBody>
    </Navbar>
  );
}

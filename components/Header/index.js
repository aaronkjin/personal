"use client";

import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

import Button from "../Button";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Use the router only on the client-side
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`header-container ${theme === "dark" ? "dark-bg" : ""}`}>
      <div className="header-content">
        <div className="flex items-center justify-between p-2">
          <div className="flex ml-auto">
            <Button onClick={() => router.push("/")}>Home</Button>
            <Button onClick={() => router.push("/about")}>About</Button>
            <Button onClick={() => router.push("/projects")}>Projects</Button>
            {mounted && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {mounted && theme === "dark" ? (
                  <FiMoon size={20} />
                ) : (
                  <FiSun size={20} />
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

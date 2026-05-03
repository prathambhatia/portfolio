"use client";

import { createContext, useEffect, useRef, useState, ReactNode } from "react";

interface DarkModeContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

interface DarkModeProviderProps {
    children: ReactNode;
}

const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean | null>(false);
    const themeSoundRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const storedPreference = localStorage.getItem("theme");
        const prefersDarkMode = storedPreference === "dark";

        setIsDarkMode(prefersDarkMode);

        if (prefersDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        document.documentElement.style.overflowY = 'auto';

        const audio = new Audio("/theme-click.mp3");
        audio.preload = "auto";
        themeSoundRef.current = audio;

        return () => {
            if (themeSoundRef.current) {
                themeSoundRef.current.pause();
                themeSoundRef.current.src = "";
                themeSoundRef.current = null;
            }
        };
    }, []);

    const toggleDarkMode = () => {
        const audio = themeSoundRef.current;
        if (audio) {
            audio.currentTime = 0;
            void audio.play().catch(() => {});
        }
        setIsDarkMode((prev) => {
            const newValue = !prev;
            localStorage.setItem("theme", newValue ? "dark" : "light");
            document.documentElement.classList.toggle("dark", newValue);
            return newValue;
        });
    };

    if (isDarkMode === null) {
        return null;
    }

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export default DarkModeProvider;

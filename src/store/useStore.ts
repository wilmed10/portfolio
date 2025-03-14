import { create } from "zustand";

interface AppState {
    theme: "dark" | "light";
    activeSection: string | null;
    toggleTheme: () => void;
    setTheme: (theme: "dark" | "light") => void;
    setActiveSection: (section: string | null) => void;
}

const applyTheme = (theme: "dark" | "light") => {
    const root = document.documentElement;
    if (theme === "dark") {
        root.style.setProperty("--background", "#182339");
        root.style.setProperty("--primary", "#f1b24a");
        root.style.setProperty("--secondary", "#232741");
        root.style.setProperty("--tertiary", "#0C0D16");
        root.style.setProperty("--quaternary", "#ec9a12");
        root.style.setProperty("--gradient", "#06090e");
        root.style.setProperty("--text-color", "#ffffff");
    } else {
        root.style.setProperty("--background", "#f5faff");  // #CCE5FF
        root.style.setProperty("--primary", "#f1b24a");
        root.style.setProperty("--secondary", "#e3e6ea");
        root.style.setProperty("--tertiary", "#c0c7d1");
        root.style.setProperty("--quaternary", "#ffcc00");
        root.style.setProperty("--gradient", "#e6f2ff");   // #e6f2ff, #0056b3
        root.style.setProperty("--text-color", "#000000");
    }
};

export const useStore = create<AppState>((set) => ({
    theme: "dark",
    activeSection: null,

    toggleTheme: () => {
        set((state) => {
            const newTheme = state.theme === "dark" ? "light" : "dark";
            applyTheme(newTheme);
            return { theme: newTheme };
        });
    },

    setTheme: (theme) => {
        applyTheme(theme);
        set({ theme });
    },

    setActiveSection: (section) => {
        set({ activeSection: section });
    }
}));
import { useEffect } from "react";

import assets from "../assets/assets"


const ThmToggleBtn = ({theme , setTheme}) => {

    useEffect(() => {
        const prefersWindowMode  =  window.matchMedia('(prefers-colow-scheme: dark)').matches;
        setTheme(theme || (prefersWindowMode ? 'dark': 'light'));
    }, []);

    useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme)
  }, [theme]);
    return <>
    <button>
        {theme === 'dark' ? (
            <img onClick={() => setTheme('light')} src={assets.sun_icon} alt="" className="w-8.5 p-1.5 border border-gray-500 rounded-full" />
        ) : (
            <img  onClick={() => setTheme('dark')} src={assets.moon_icon} className="w-8.5 p-1.5 border border-gray-500 rounded-full" alt="" />
        )}
    </button>
    </>
}

export default ThmToggleBtn;
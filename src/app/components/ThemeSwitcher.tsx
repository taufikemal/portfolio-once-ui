"use client";
import { Switch } from "@/once-ui/components";
import {useEffect, useMemo, useState} from "react";
import { style } from "../resources";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const [mount, setMount] = useState(true);
  const { theme, setTheme } = useTheme()
  const nextTheme = useMemo(() => {
    return theme === "dark" ? "light" : "dark"
  }, [theme]);

  useEffect(() => {
    setMount(true);
  }, []);


  return <Switch
  reverse
  isChecked={theme === "dark"}
  onToggle={() => {
    // alert(`next ${nextTheme}`)
    setTheme(nextTheme)
  }}
  iconButtonProps={{
      tooltip: 'Learn more',
      tooltipPosition: 'bottom'
  }}
  /> 
  
};
export default ThemeSwitcher;
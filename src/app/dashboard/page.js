"use client";
import { useContext } from "react";
import { LanguageContext } from "@/app/LanguageContext";

export default function Dashboard() {
  const language = useContext(LanguageContext);
  return <h1>language:{language === "ch" ? "ch" : "en"}</h1>;
}

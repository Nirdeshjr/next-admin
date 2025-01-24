
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import Dashboard from "@/components/Dashboard/dashboard";

export const metadata: Metadata = {
  title:
    "Main Admin Dashboard",
  description: "This is the main dashboard of the system",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </>
  );
}

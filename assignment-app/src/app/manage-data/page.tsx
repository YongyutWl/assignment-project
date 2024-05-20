'use client'
import React from "react";
import ManageData from "@/views/manageData";
type Props = {};

export default function Page({}: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ManageData />
    </main>
  );
}

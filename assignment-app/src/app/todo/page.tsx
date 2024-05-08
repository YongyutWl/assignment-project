"use client";
import React from "react";
import Todo from "@/views/todo";

type Props = {};

export default function Page({}: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Todo />
    </main>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { roboto, raleway } from "@/functions/fonts";
import React from "react";

export const metadata: Metadata = {
  title: "Computação nas Escolas - IFRS",
  description: "Projeto Computação nas Escolas: promovendo o ensino de computação e pensamento computacional para alunos do ensino fundamental.",
  authors: [
      {name: "Professora Doutora Fernanda Mota"},
      {name: "Professora Adriana"},
      {name: "José Gomes"},
      {name: "A"},
      {name: "B"},
      {name: "C"},
      {name: "D"},
      {name: "E"},
  ],
  keywords: [
    "Computação",
    "Pensamento Computacional",
    "Educação",
    "Ensino Fundamental",
    "Programação em Blocos",
    "Robótica Educacional",
    "Tecnologia na Educação",
    "Aprendizagem Baseada em Projetos"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} ${raleway.variable}`}>
        {children}
      </body>
    </html>
  );
}

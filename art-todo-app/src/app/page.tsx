'use client'
import Header from "./component/todo/header";
import AddTodo from "./component/todo/add";
import List from "./component/todo/list";
import { Footer } from "./component/todo/footer";
import { useState } from "react";
import { GlobalContextProvider } from "./context/store";
export default function Home() {

  return (
    <>
      <Header></Header>
      <AddTodo></AddTodo>
      <List></List>
      <Footer></Footer>
    </>
  );
}
'use client'
import Header from "./component/todo/header";
import AddTodo from "./component/todo/add";
import List from "./component/todo/list";
import { Footer } from "./component/todo/footer";
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
import { Link, Route, Routes } from "react-router-dom";
import { BookLayout } from "./BookLayout";
import { BookRoutes } from "./BookRoutes";
import { Book } from "./pages/Book";
import { BookList } from "./pages/BookList";
import { Home } from "./pages/Home";
import { NewBook } from "./pages/NewBook";
import { NotFound } from "./pages/NotFound";


function App(){
  return (
    <>
    <Routes>
      
      <Route path = "/" element={<Home/>}/>
      
      <Route path = "/books/*" element={<BookRoutes/>}>
      </Route>
      <Route path = "*" element = {<NotFound/>}/>
    </Routes>
    </>
  )
}
export default App;

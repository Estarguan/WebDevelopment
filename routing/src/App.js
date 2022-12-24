import { Link, Route, Routes } from "react-router-dom";
import { Book } from "./pages/Book";
import { BookList } from "./pages/BookList";
import { Home } from "./pages/Home";
import { NewBook } from "./pages/NewBook";
import { NotFound } from "./pages/NotFound";


function App(){
  return (
    <>
    <nav>
      <ul>
        <li><Link to = "/">Home</Link></li>
        <li><Link to = "/books">Books</Link></li>
      </ul>
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "books" element = {<BookList/>}/>
      <Route path = "/books/:id" element={<Book/>}/>
      <Route path = "/books/new" element = {<NewBook/>}/>
      <Route path = "*" element = {<NotFound/>}/>
    </Routes>
    </nav>
    </>
  )
}
export default App;

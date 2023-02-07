import Books from "./components/Books";
import { BookContextProvider } from "./Contexts/BookContext";

export default function BooksList({}) {
  return (
    <BookContextProvider>
      <Books />
    </BookContextProvider>
  );
}

import React, { useReducer, useState } from "react";

const booksdata = [
  { id: 12, name: "python" },
  { id: 13, name: "javascriprt" },
  { id: 14, name: "c++" },
];

const Modal = ({ modalText }) => {
  return <p>{modalText}</p>;
};
const reducer = (state, action) => {
  if (action.type === "ADD") {
    return {
      ...state,
      books: [...state.books, action.payload],
      IsmodalOpen: true,
      modalText: "book is added.",
    };
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      books: state.books.filter((book) => book.id !== action.payload),
      IsmodalOpen: true,
      modalText: "book is removed.",
    };
  }
  return state;
};
export default function Reducer() {
  // const [books, setBooks] = useState(booksdata);
  // const [IsmodalOpen, setModalOpen] = useState(false);
  // const [modalText, setModalText] = useState("");
  const initialState = {
    books: booksdata,
    IsmodalOpen: false,
    modalText: "",
  };
  const [bookState, dispatch] = useReducer(reducer, initialState);
  const [bookname, setBookname] = useState("");

  const HandelSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: new Date().getTime.toString(), name: bookname };
    dispatch({ type: "ADD", payload: newBook });
    setBookname("");

    // setBooks((prevState) => {
    //   const newBook = { id: new Date().getTime.toString(), name: bookname };
    //   return [...prevState, newBook];
    // });
    // // setBookname("");
    // setModalOpen(true);
    // setModalText("book is added.");
  };
  const removeBook = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  return (
    <div>
      <h1>book List :</h1>

      <form onSubmit={HandelSubmit}>
        <input
          type="text"
          value={bookname}
          onChange={(e) => {
            setBookname(e.target.value);
          }}
        />
        <button type="submit">Add Book</button>
      </form>

      {bookState.IsmodalOpen && <Modal modalText={bookState.modalText} />}

      {bookState.books.map((book) => {
        const { id, name } = book;
        return (
          <li key={id}>
            {name}
            <button
              onClick={() => {
                removeBook(id);
              }}
            >
              remove
            </button>
          </li>
        );
      })}
    </div>
  );
}

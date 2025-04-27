import { useState } from "react";
import { toast } from "react-hot-toast";
import "izitoast/dist/css/iziToast.min.css";

export default function SearchBar({ onSearch }:{ onSearch: (request: string) => void }) {
  const [request, setRequest] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (request.trim() === "") {
      toast.error("Search can't be empty");
      return;
    }
    onSearch(request);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={request}
          onChange={(event) => setRequest(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

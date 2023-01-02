import { useState } from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import SearchResults from "../../components/admin/SearchResults";
import useSearch from "../../hooks/useSearch";

const Search = () => {
  const [query, setQuery] = useState("");
  const { resultados } = useSearch(query);

  const Searching = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  return (
    <div className=' bg-black'>
      <AdminNavbar />

      <div className='pt-20'>
        {/* Search bar */}
        <form onSubmit={Searching} className='px-16' action=''>
          <input
            onChange={Searching}
            placeholder='Que estas buscando?'
            className='text-slate-200 w-full border-none outline-none px-12 py-6 rounded bg-slate-900 placeholder-slate-400 text-xl'
            type='text'
            name=''
            id=''
          />
        </form>
        <div
          className='text-slate-200 min-h-screen p-4
        '
        >
          <ul className='flex gap-4 justify-between'>
            <li>horror</li>
            <li>comedia</li>
            <li>accion</li>
            <li>psicologica</li>
          </ul>

          {/* SEARCH RESULTS */}
          <SearchResults resultados={resultados} />
          {/* SEARCH RESULTS */}
        </div>
      </div>
    </div>
  );
};

export default Search;

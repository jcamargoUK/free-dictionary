"use client";

import React, { useState } from "react";
import axios from "axios";
import AudioPlayer from "./audioPlayer";

// Main component
const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [result, setResult] = useState<any>(null);

  // Fetch data from API
  const SearchWord = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}${searchTerm}`
      );
      setResult(response.data[0]); 
    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  // Handle input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }
  // Handle form submit
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    SearchWord();
  }
  // Clear search
  const clear = () => {
    setSearchTerm("");
    setResult(null);
  }
  // Render
  return (
    <section>
      <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmit(event)}>
        <section className="flex flex-row align-center align-middle w-auto h-auto m-0 mt-10 ">
          <input className="flex bg-slate-100 w-50 h-10 mt-8 text-gray-500 rounded-l-3xl pl-6 align-middle focus:outline-none" type="text" value={searchTerm} placeholder="Search..." onChange= {handleChange} />
          <button type="submit" className="bg-slate-100 h-10 w-20 align-middle rounded-r-3xl">S</button>
        </section>
        <button type="reset" onClick={clear}>Clear</button>
        
      </form>
      {result && (
        <div>
          <h2 className="text-3xl">{result.word}</h2>
          <p className="text-xl text-pink-500">{result.phonetics[0]?.text}</p>
          <AudioPlayer audioSrc={result.phonetics[0]?.audio} />
          <br />
          <section>
            <h3>Exclamation</h3>
            <p>{result.meanings[0]?.definitions[0]?.definition}</p>
            <h3>Example</h3>
            <p>{result.meanings[0]?.definitions[0]?.example}</p>
          </section>
          <section>
            <br />
            <h3>Noun</h3>
            <p>{result.meanings[0]?.definitions[1]?.definition}</p>
            <h3>Example</h3>
            <p>{result.meanings[0]?.definitions[1]?.example}</p>
          </section>
          <section>
            <br />
            <h3>Verb</h3>
            <p>{result.meanings[0]?.definitions[2]?.definition}</p>
            <h3>Example</h3>
            <p>{result.meanings[0]?.definitions[2]?.example}</p>
          </section>
        </div>
      )}
    </section>
  );
  
}
export default Search;


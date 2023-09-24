"use client";

import React, { useState } from "react";
import axios from "axios";



const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [result, setResult] = useState<any>(null);

  const SearchWord = async () => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
      );
      setResult(response.data[0]); // Assuming the API returns an array of results, and we take the first one.      
    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    SearchWord();
  }
  const clear = () => {
    setSearchTerm("");
    setResult(null);
  }

  return (
    <section>
      <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmit(event)}>
      <input type="text" value={searchTerm} placeholder="Search..." onChange={handleChange} />
      <button type="submit">Search</button>
      <button type="reset" onClick={clear}>Clear</button>
    </form>
      {result && (
        <div>
          <h2>{result.word}</h2>
          <p>{result.phonetics[0]?.text}</p>
          <audio controls>
            <source src={result.phonetics[0]?.audio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
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


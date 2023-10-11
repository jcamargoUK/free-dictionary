"use client";

import React, { useState } from "react";
import axios from "axios";
import AudioPlayer from "./audioPlayer";
import glass from '../../../public/images/glass.svg'
import Image from "next/image";
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
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // Handle input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  // Handle form submit
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    SearchWord();
  };
  // Clear search
  const clear = () => {
    setSearchTerm("");
    setResult(null);
  };
  // Render
  return (
    <section className=" flex align-middle flex-col m-auto w-80">
      <form
        onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
          handleSubmit(event)
        }
      >
        <section className="flex flex-row align-center align-middle w-auto h-auto">
          <input
            className="flex bg-slate-100 w-50 h-12 text-pink-600 border-pink-600 border-2 border-r-slate-100 rounded-l-2xl pl-6 align-middle focus:outline-none"
            type="text"
            value={searchTerm}
            placeholder="Search..."
            onChange={handleChange}
          />
          <button
            type="submit"
            className="h-12 w-20 align-middle rounded-r-2xl bg-slate-100 border-pink-600 border-2 border-l-slate-100 text-pink-600"
          >
            <Image src={glass} alt="glass" className=" m-auto" />
          </button>
        </section>
      </form>
      <button type="reset" onClick={clear} className=" border-2 my-4 py-1 w-[35%] m-auto border-pink-600 rounded-full text-l text-pink-600">
        Clear
      </button>
      {result && (
        <div>
          <section className=" flex w-[90%] justify-between mt-2">
            <h2 className="text-3xl mt-1 text-pink-600">{result.word}</h2>
            <AudioPlayer audioSrc={result.phonetics[0]?.audio} />
          </section>
          <p className="text-xl text-pink-600">{result.phonetics[0]?.text}</p>
          <br />
          <section>
            <section className="flex flex-row w-[100%]">
              <h3 className="text-xl text-bold text-pink-600">Exclamation</h3>
              <div className=" w-full ml-4 bg-slate-500 h-[1px] m-auto"></div>
            </section>
            <p className="text-pink-600">{result.meanings[0]?.definitions[0]?.definition}</p>
          </section>
          <section>
            <br />
            <section className="flex flex-row w-[100%]">
              <h3 className="text-xl text-bold text-pink-600">Noun</h3>
              <div className=" w-full ml-4 bg-slate-500 h-[1px] m-auto"></div>
            </section>
            <p className="text-pink-600">{result.meanings[0]?.definitions[1]?.definition}</p>
          </section>
          <section>
            <br />
            <section className="flex flex-row w-[100%]">
              <h3 className="text-xl text-bold text-pink-600">Verb</h3>
              <div className=" w-full ml-4 bg-slate-500 h-[1px] m-auto"></div>
            </section>
            <p className="text-pink-600">{result.meanings[0]?.definitions[2]?.definition}</p>
          </section>
        </div>
      )}
    </section>
  );
};
export default Search;

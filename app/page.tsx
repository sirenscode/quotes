"use client"
import { useEffect, useState } from "react";
import NavBar from "./components/navbar";

export default function Home() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function fetchRandQuote(){
    fetch("https://dummyjson.com/quotes/random")
    .then(res=>res.json())
    .then(data=>{
      setAuthor(data.author);
      setQuote(data.quote);
      document.getElementById("card")!.style.width="50%";
      document.getElementById("card")!.style.display="flex";
      setIsLoading(false);
      setTimeout(function(){
        document.getElementById("quote")!.style.display="flex";
        document.getElementById("author")!.style.display="flex";
        document.getElementById("card")!.style.padding="20px";
      }
        ,500)
    });
  }

  useEffect(()=>{
    fetchRandQuote();
  },[])
  function next(){
    document.getElementById("card")!.style.width="0px";
    document.getElementById("quote")!.style.display="none";
    document.getElementById("author")!.style.display="none";
    document.getElementById("card")!.style.padding="0px";
    
    setTimeout(function(){fetchRandQuote();setIsLoading(true);},200);
  }
    
  console.log(author);
  
  return (
    <main className="bg flex min-h-screen h-[100vh] flex-col  ">
      <NavBar/>
      <div className="w-full h-full flex flex-col gap-[20px] text-[#fff] items-center justify-center z-[20]">
        <div id="card" className="w-1/2 h-fit  rounded-[20px] flex flex-col items-center justify-center gap-[20px] shadow-lg shadow-[#5B2C6F] bg-[#515A5A] p-[20px]">
          <div className="mt-[auto] flex flex-col gap-[20px]">
            {quote && <h1 id="quote" className="text-[1.5em] w-full text-center font-semilight flex flex-row" style={{fontFamily:'Raleway', fontWeight:"bold"}}><svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 16 16"><path fill="#5B2C6F" d="M6.848 2.47a1 1 0 0 1-.318 1.378A7.284 7.284 0 0 0 3.75 7.01A3 3 0 1 1 1 10v-.027a3.521 3.521 0 0 1 .01-.232c.009-.15.027-.36.062-.618c.07-.513.207-1.22.484-2.014c.552-1.59 1.67-3.555 3.914-4.957a1 1 0 0 1 1.378.318m7 0a1 1 0 0 1-.318 1.378a7.283 7.283 0 0 0-2.78 3.162A3 3 0 1 1 8 10v-.027a3.521 3.521 0 0 1 .01-.232c.009-.15.027-.36.062-.618c.07-.513.207-1.22.484-2.014c.552-1.59 1.67-3.555 3.914-4.957a1 1 0 0 1 1.378.318"/></svg>{quote}</h1>}
            {author && <p id="author" className="text-[1em] font-semibold ml-[auto] pr-[20px]" style={{fontFamily: 'Kode Mono'}}>{author}</p>}
          </div>
          
          <div className="w-full flex flex-col items-right mt-[auto]">
            <div className="flex flex-col gap-[20px] items-center">
              {isLoading && <div id="loader" className="loader absolute mt-[-100px] ml-[auto]"></div>}
              <button onClick={next} className="ml-[auto]  shadow-[#5B2C6F] mt-[auto] rounded-full bg-[#5B2C6F] h-[40px] w-[40px] flex flex-col items-center justify-center hover:shadow-lg"><svg id="next-btn" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20"><path fill="#FFF" d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z"/></svg></button>
            </div>
            
          </div>
          
        </div>
        
      </div>
      <div className="w-full mt-[auto] p-[20px] z-[20]">
          <div className=" flex flex-col gap-[10px] w-[50px] ">
            <a href="#facebook"><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><path fill="#5B2C6F" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg></a>
            <a href="#instagram"><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><path fill="#5B2C6F" d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a78.831 78.831 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.883 4.883 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465a72.11 72.11 0 0 1-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78.43 78.43 0 0 1-2.189-.023l-.194-.006a63.036 63.036 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.889 4.889 0 0 1-1.771-1.153a4.904 4.904 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428a74.1 74.1 0 0 1-.03-.712l-.005-.194A79.047 79.047 0 0 1 2 13.028v-2.056a78.82 78.82 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.88 4.88 0 0 1 3.68 3.678a4.897 4.897 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"/></svg></a>
            <a href="#github"><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><path fill="#5B2C6F" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg></a>
          </div>
          <div className="w-full flex flex-col items-center text-[#151515]">
            <h1 className="font-semibold"><strong className="#5B2C6F">QUOTES</strong> Proudly Made with ❤️ by <span className="font-semibold">SIRENGO</span></h1>
          </div>
        </div>
      
    </main>
  );
}

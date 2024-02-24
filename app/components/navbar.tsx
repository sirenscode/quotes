import Image from "next/image";

const NavBar: React.FC = () =>{
    return(
        <main className="w-full flex flex-row p-[30px] z-[20] text-[#fff]">
            <div className="text-[1.5em] flex flex-row gap-[20px] items-center">
                <a href="/"><Image src={"/images/logo2.png"} width={60} height={50} alt="logo"/></a>
                <h1 className="font-bold text-[1.5em]"> QUO<strong className="text-[#5B2C6F]">TES</strong></h1>
            </div>
            <div className="ml-[auto]">
                <button><svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24"><path fill="#5B2C6F" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"/></svg></button>
            </div>
        </main>
    )
}

export default NavBar;
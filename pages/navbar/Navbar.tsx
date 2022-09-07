export function Navbar(){
    return(
        <nav>
            <ul className="flex justify-end gap-4 pr-4 list-none border-2 border-red-500">
                <li><a href="#" className="hover:opacity-80">About Me</a></li>
                <li><a href="#" className="hover:opacity-80">Home</a></li>
                <li><a href="#" className="hover:opacity-80">My Projects</a></li>
                <li><a href="#" className="hover:opacity-80">Contact</a></li>
            </ul>
        </nav>
    )
}
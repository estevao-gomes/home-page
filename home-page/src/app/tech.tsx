function TechItem({text, highlight}:{text:string, highlight?:boolean}){
    return(
        <li className={`py-2 rounded-2xl ${ highlight ? "bg-lightGreen" : "bg-darkGreen" } py-1 px-2 my-1 font-openSans text-white font-bold text-xl`}>{text}</li>
    )
}

export function Tech(){
    const techItems = [ "Lorem ", "Lorem ", "Lorem ", "Lorem ", "Lorem ", "Lorem ", "Lorem ", "Lorem ", "Lorem ", "Lorem "]
    
    return(
        <section className="min-h-[50vh] w-full bg-bgGreen pl-12 sm:pl-36 flex flex-col justify-center">
            <h2 className="font-bold font-openSans text-3xl sm:text-5xl max-w-[75%]">Lorem</h2>
            <h4 className="font-PTSans leading-relaxed max-w-[75%] sm:text-base mt-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, reiciendis ab.</h4>
            <ul className="flex mt-10 max-w-[900px] flex-wrap gap-6">
                <TechItem text={"Lorem"} highlight />
                <TechItem text={"Lorem"} highlight />
                <TechItem text={"Lorem"} highlight />
                {techItems.map((item, index)=>{
                    return(
                        <TechItem key={item + index.toString()} text={item} />
                    )
                })}
            </ul>
        </section>
    )
}
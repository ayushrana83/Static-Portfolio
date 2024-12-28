import { useEffect, useState } from "react"
import { motion } from "motion/react"

export default function FrontPage() {
    const [currWord , setCurrWord] = useState(0);
    const wordArray = ["Software" , "Frontend" , "Backend" , "Mern" , "Full Stack" , "Web"];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrWord(c => (c + 1) % wordArray.length); 
        }, 2000);


        return () => clearInterval(interval);
    }, []);

    return <div className="max-w-screen-2xl flex justify-center items-center h-96">
        <div className="text-[3rem] text-center space-y-6">
            <h1>Hello</h1>
            <h1>I am Ayush Rana</h1>
            <motion.div className="text-[5rem]">{wordArray[currWord]} Developer</motion.div>
        </div>
    </div>
}
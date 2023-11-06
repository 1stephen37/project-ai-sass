import { cn } from '@/lib/utils';
import { BrainCircuit } from 'lucide-react';
import { Poppins } from "next/font/google";
import React from 'react';

const poppins = Poppins({
    weight : "700",
    subsets : ["latin"]
});

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> =  ( {className} ) => {
    return (
        <div className={cn(
            "flex items-center"
        )}>
            <BrainCircuit color={"#0ea5e9"} size={40}></BrainCircuit>
            <span className={cn(
                "ml-2 font-bold text-3xl",
                poppins.className
            )}>
                Branfast
            </span>
        </div>
    );
}

export default Logo;
import React from 'react';
import TopBar from "@/components/TopBar";
// import { SideBar } from "@/components/sidebar/index";
import {cn} from "@/lib/utils";
import SideBar from "@/components/sidebar";

function DashBoardLayout (props : { children : React.ReactNode } ) {
    return (
        <>
            <header>
                <TopBar />
            </header>
            <main className={cn(
                "lg:bg-gray-950 lg:overflow-hidden lg:pl-80 lg:pr-7 lg:py-7 [&has([is-navbar-minimal])]:lg:pl-20 "
            )}>
                <SideBar />
            </main>
            { props.children }
        </>
    );
}

export default DashBoardLayout;
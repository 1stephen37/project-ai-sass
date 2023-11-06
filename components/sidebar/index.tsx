"use client"
import React from 'react';
import {cn} from "@/lib/utils";
import {useSidebarStore} from "@/store/sidebar-store";
import Logo from "@/components/logo";
import SidebarToggle from "@/components/sidebar/sidebar-toggle";
import {UserButton, useUser} from "@clerk/nextjs";
import {MAX_FREE_COUNT} from '@/constants';
import {Progress} from "@/components/ui/progress";
import ThemeToggle from "@/components/sidebar/ThemeToggle";
import SubscriptionButton from "@/components/SubscriptionButton";
import Navbar from "@/components/sidebar/Navbar";

interface SideBarProps {
    className?: string;
    isProPLan?: boolean;
    userLimitCount?: number;
}

function SideBar( { className, isProPLan, userLimitCount } : SideBarProps) {

    const { isMinimal } = useSidebarStore();

    const { user } = useUser();

    return (
        <div className={cn(
            "text-white",
            className
        )}>

            <div className="h-20 pl-7 pr-6">
                <div className="flex items-center justify-between w-full">
                    {
                        !isMinimal && <Logo/>
                    }
                    <SidebarToggle />
                </div>
            </div>

            <div className="grow overflow-y-auto scroll-smooth scrollbar-none">
                <Navbar />
            </div>

            <div className={cn(
                "fixed bottom-8 left-4 right-4",
                "lg:left-7 lg:right-auto",
                isMinimal && "lg:left-3"
            )}>
                <div className="mb-4 p-4 rounded-lg bg-gray-900">

                    <div className="mb-4 flex items-center">
                        <UserButton afterSignOutUrl={"/"} />
                        {
                            !isMinimal &&
                            <span className={"text-sm ml-4"} >
                                {user?.emailAddresses?.[0]?.emailAddress}
                            </span>
                        }
                    </div>
                    {
                        !isMinimal &&
                        <div className={"border-1 border-t-gray-950 pt-2"} >
                            {
                                !isProPLan &&
                                <div className={"mb-4"}>
                                    <div className="mb-2 text-center text-muted-foreground font-semibold">
                                        {userLimitCount}/{MAX_FREE_COUNT} Free generations
                                    </div>
                                    <Progress
                                        value={(userLimitCount/MAX_FREE_COUNT) * 100}
                                        className={"bg-gray-950 h-3"}
                                        indicatorClassName="gradient-btn"
                                    />
                                </div>
                            }
                            <SubscriptionButton isPro={isProPLan}/>
                        </div>
                    }
                </div>
                <ThemeToggle />
            </div>
        </div>
    );
}

export default SideBar;
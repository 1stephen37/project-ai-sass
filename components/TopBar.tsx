"use client"
import React from 'react';
import {cn} from "@/lib/utils";
import Logo from "@/components/logo";
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import {useSidebarStore} from "@/store/sidebar-store";

function TopBar() {

    const { handleOpenOrClose } = useSidebarStore();

    return (
        <div className={cn(
            "flex items-center p-4 justify-between sticky top-0 z-30",
            "lg:hidden"
        )}>
            <Logo/>
            <Button>
                <Menu />
            </Button>
        </div>
    );
}

export default TopBar;
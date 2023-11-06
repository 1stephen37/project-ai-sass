import React from 'react';
import {useSidebarStore} from "@/store/sidebar-store";
import {cn} from "@/lib/utils";
import Image from 'next/image';
import {Button} from '@/components/ui/button';
function SidebarToggle() {

    const { isMinimal, handleChangeSideBar, handleOpenOrClose } = useSidebarStore();

    return (
        <div>
            <div className={cn(
                "cursor-pointer hidden",
                "lg:block"
            )} 
                 onClick={handleChangeSideBar} 
                 is-navbar-minimal={isMinimal ? true : undefined}
            >
                <Image
                    src={`/icons/menu-${isMinimal ? 'open' : 'close'}.svg`}
                    width={24}
                    height={24}
                    alt={'navbar-icon'}
                />

                <Button
                    variant={"ghost"}
                    className={"lg:hidden"}
                    size={"icon"}
                    onclick={handleOpenOrClose}
                ></Button>

            </div>

        </div>
    );
}

export default SidebarToggle;
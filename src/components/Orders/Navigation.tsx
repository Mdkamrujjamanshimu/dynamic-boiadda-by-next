import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const Navigation = () => {
    const pathname = usePathname();
    const { logout } = useAuth() as any;

    const isActive = (href: string) => pathname === href;

    return (
        <div>
            <ul className="flex flex-col justify-between gap-[1rem] max-[1024px]:flex-row p-[.5rem] text-[1.8rem]">

                <li className={`whitespace-nowrap transition duration-300 p-[1rem] rounded-[0.5rem] cursor-pointer hover:bg-[#f0f0f0] ${isActive('/user') ? 'bg-[#e0e0e0]' : ''}`}>
                    <Link href="/user" className="text-[#111827] block">
                        Home
                    </Link>
                </li>
                <li className={`whitespace-nowrap transition duration-300 p-[1rem] rounded-[0.5rem] cursor-pointer hover:bg-[#f0f0f0] ${isActive('/user/my-orders') ? 'bg-[#e0e0e0]' : ''}`}>
                    <Link href="/user/my-orders" className="text-[#111827] block">
                        My Orders
                    </Link>
                </li>
                <li className={`whitespace-nowrap transition duration-300 p-[1rem] rounded-[0.5rem] cursor-pointer hover:bg-[#f0f0f0] ${isActive('/user/settings') ? 'bg-[#e0e0e0]' : ''}`}>
                    <Link href="/user/settings" className="text-[#111827] block">
                        Settings
                    </Link>
                </li>
                <li className={`whitespace-nowrap transition duration-300 p-[1rem] rounded-[0.5rem] cursor-pointer hover:bg-[#f0f0f0] ${isActive('/user/password') ? 'bg-[#e0e0e0]' : ''}`}>
                    <Link href="/user/password" className="text-[#111827] block">
                        Password
                    </Link>
                </li>
                <li
                    className="whitespace-nowrap hover:bg-[#f0f0f0] transition duration-300 p-[1rem] rounded-[0.5rem] cursor-pointer text-[#111827]"
                    onClick={logout}
                >
                    Log Out
                </li>
            </ul>
        </div>
    )
}

export default Navigation
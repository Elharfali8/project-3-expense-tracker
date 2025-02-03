import { ChartColumn, House, Wallet, User } from "lucide-react";

export const navLinks = [
    {
        id: 1,
        title: 'home',
        path: '/dashboard',
        icon: <House />
    },
    {
        id: 2,
        title: 'statistics',
        path: '/statistics',
        icon: <ChartColumn />
    },
    {
        id: 3,
        title: 'wallet',
        path: '/wallet',
        icon: <Wallet />
    },
    {
        id: 4,
        title: 'profile',
        path: '/profile',
        icon: <User />
    },
]
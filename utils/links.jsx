import { ChartColumn, House, Wallet, User, CircleDollarSign } from "lucide-react";

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
        title: 'add expense',
        path: '/add-expense',
        icon: <CircleDollarSign />
    },
    {
        id: 5,
        title: 'profile',
        path: '/profile',
        icon: <User />
    },
]
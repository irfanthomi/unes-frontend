import { FaDoorOpen } from 'react-icons/fa';
export const Menu = [
    {
        name: "Dashboard",
        url: "/admin",
        icon: "dashboard",
        sub: []
    },
    {
        name: "Site Setting",
        url: "/admin/site-setting",
        icon: <FaDoorOpen />,
        sub: []
    },
    {
        name: "Menu Setting",
        url: "/admin/menu-setting",
        icon: <FaDoorOpen />,
        sub: []
    },
    {
        name: "Users",
        url: "/admin/users",
        icon: "account_circle",
        sub: []
    },
    {
        name: "Article",
        url: "/admin/article",
        icon: <FaDoorOpen />,
        sub: [
            {
                name: "Berita",
                url: "/admin/artikel/berita",
                icon: "rtx"
            },
            {
                name: "Informasi",
                url: "/admin/artikel/informasi",
                icon: "rtx"
            }
        ]
    },

];
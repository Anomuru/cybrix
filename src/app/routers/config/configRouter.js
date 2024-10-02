import {DesignPage} from "pages/designPage";
import {HomePage} from "pages/homePage";

export const routersConfig = [
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/design",
        element: <DesignPage/>,
    },
    {
        path: "/telegramBot",
        element: null,
    },
    {
        path: "/none",
        element: null,
    }
]

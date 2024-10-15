import {DesignPage} from "pages/designPage";
import {HomePage} from "pages/homePage";
import {TelegramBotPage} from "../../../pages/telegramBotPage/inex";

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
        path: "/telegram",
        element: <TelegramBotPage/>,
    },
    {
        path: "/none",
        element: null,
    }
]

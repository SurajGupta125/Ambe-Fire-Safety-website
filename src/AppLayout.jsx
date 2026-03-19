import { Outlet } from "react-router-dom"
import { Headers } from "./Header"
import { Footer } from "./Footer"
export const AppLayout = () => {
    return (
        <div>
            <Headers />
            <Outlet />
            <Footer />
        </div>
    )
}
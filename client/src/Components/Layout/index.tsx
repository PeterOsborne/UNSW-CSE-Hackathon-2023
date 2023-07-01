import { ReactNode } from "react";
import { Header } from "../Header/index";
import { NavBar } from "../NavBar";

interface Props {
    children: ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <>

            {children}
        </>
    );
}

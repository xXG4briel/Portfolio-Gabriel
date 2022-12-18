import { ReactNode } from "react";
import { Container } from "./styles"

interface StyleBtn {
    color: string;
    borderColor?: string;
    hover: string;
}

interface ButtonProps {
    name: string;
    function?: any;
    href?: string;
    class?: string;
    style?: StyleBtn
}


export function Button(props: ButtonProps) {
    function handleClick() {
        event?.preventDefault();
        props.function();
    }
    return (
        <>
            { props.href ?
                <a href={props.href} target="_blank">
                    <Container color={ props.style?.color ?? "--bg-1"} className={props.class} onClick={ handleClick }>{props.name}</Container>
                </a> :
                <Container color={ props.style?.color ?? "--bg-1"} className={props.class} onClick={ handleClick }>{props.name}</Container>
             }
        </>
    );
}
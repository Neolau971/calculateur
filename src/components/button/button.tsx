import React from "react"

interface ButtonProps {
props1: string,
props2: string
}

const Button: React.FC<ButtonProps> = ({props1, props2}) => {
    return (
        <div>{props1} {props2}</div>
    )}

export default Button
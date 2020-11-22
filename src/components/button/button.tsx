
//interface ButtonProps {
//props1: string,
//props2: string
//}

import React from "react"

type ButtonProps = { props1: string }

export const Button = ({props1}:ButtonProps) => <div>{props1}</div>
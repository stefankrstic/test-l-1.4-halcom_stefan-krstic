import clsx from "clsx";
import React, { ReactNode } from "react";
import './BaseButton.scss';

interface BaseButtonProps {
    children: ReactNode;
    className?: string;
    color?: "blue" | "gray" | "green" | "orange" | "yellow" | "red";
}

export const BaseButton = ({children, className, color = 'blue'}: BaseButtonProps) => {
    return <button className={clsx('BaseButton', className, color)}>{children}</button>
    
};
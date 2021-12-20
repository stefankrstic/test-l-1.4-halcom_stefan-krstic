import clsx from "clsx";
import React, { ReactNode } from "react";
import styles from './BaseButton.module.scss';

interface BaseButtonProps {
    children: ReactNode;
    className?: string;
    color?: "blue" | "gray" | "green" | "orange" | "yellow" | "red";
}

export const BaseButton = ({children, className, color = 'blue'}: BaseButtonProps) => {
    return <button className={clsx(styles.root, className, styles[color])}>{children}</button>
    
};
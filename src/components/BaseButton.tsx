import clsx from "clsx";
import React, { ReactNode } from "react";
import styles from './BaseButton.module.scss';

interface BaseButtonProps {
    children: ReactNode;
    className?: string;
}

export const BaseButton = ({children, className}: BaseButtonProps) => {
    return <button className={clsx(styles.root, className)}>{children}</button>
    
};
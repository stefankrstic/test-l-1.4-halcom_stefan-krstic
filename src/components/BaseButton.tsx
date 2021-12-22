import clsx from "clsx";
import React, { ReactNode } from "react";
import './BaseButton.scss';

interface BaseButtonProps {
    children: ReactNode;
    className?: string;
    color?: 'blue' | 'skyblue' | 'gray' | 'green' | 'orange' | 'yellow' | 'red';
    disabled?: boolean;
    onClick?: () => void;
}

export const BaseButton = ({children, className, color = 'blue', disabled, onClick}: BaseButtonProps) => {
    return <button className={clsx('BaseButton', className, color)} disabled={disabled} onClick={onClick}>{children}</button>
    
};
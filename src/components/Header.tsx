import clsx from "clsx";
import React from "react";
import './Header.scss';

interface HeaderProps {
     title: string;
     centered?: boolean;

}

export const Header = ({title, centered}: HeaderProps) => {
    return (
        <div className={clsx('Header', centered && 'centered')}>
            {title}
        </div>
    )
}
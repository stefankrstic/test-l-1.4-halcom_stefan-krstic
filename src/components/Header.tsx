import clsx from "clsx";
import React from "react";
import './Header.scss';

interface HeaderProps {
     title: string;
     info?: string | null;
     centered?: boolean;

}

export const Header = ({title, info, centered}: HeaderProps) => {
    return (
        <div className="Header">
            <div className={clsx(centered && 'centered')}>{title}</div>
            {info ? <div className="info">{info}</div> : null}
        </div>
    )
}
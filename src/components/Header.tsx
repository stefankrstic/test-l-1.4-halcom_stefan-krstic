import clsx from "clsx";
import React from "react";
import styles from './Header.module.scss';

interface HeaderProps {
     title: string;
     centered?: boolean;

}

export const Header = ({title, centered}: HeaderProps) => {
    return (
        <div className={clsx(styles.root, centered && styles.centered)}>
            {title}
        </div>
    )
}
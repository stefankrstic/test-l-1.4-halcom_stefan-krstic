import React, { ReactNode } from "react";
import styles from './BaseButton.module.scss';

interface BaseButtonProps {
    children: ReactNode;
}

export const BaseButton = ({children}: BaseButtonProps) => {
    return <button className={styles.root}>{children}</button>
    
};
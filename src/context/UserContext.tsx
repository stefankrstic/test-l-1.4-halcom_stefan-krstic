import { createContext, ReactNode, useState } from "react";

const initialValues: UserState = {
    name: '', 
    surname: '',
    setState: () => null
}

interface UserState {
    name: string;
    surname: string;
    setState: (values: any) => void;
}

export const UserContext = createContext<UserState>(initialValues);

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider = ({children}: UserProviderProps) => {
    const [state, setState] = useState<UserState>(initialValues);
    
    return <UserContext.Provider value={{ ...state, setState}}>
        {children}
    </UserContext.Provider>
};
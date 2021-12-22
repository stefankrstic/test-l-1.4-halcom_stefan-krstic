import { createContext, ReactNode, useState } from "react";

interface UserState {
    name: string;
    surname: string;
}

interface UserContextValue extends UserState {
    login: (name: string, surname: string) => void;
    logout: () => void;
}

export const UserContext = createContext<UserContextValue>({
    name: '',
    surname: '',
    login: () => {},
    logout: () => {},
});

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider = ({children}: UserProviderProps) => {
    const [state, setState] = useState<UserState>({ name: '', surname: '' });

    const login = (name: string, surname: string) => {
        setState({ name, surname });
    };

    const logout = () => {
        setState({ name: '', surname: '' });
    };

    return <UserContext.Provider value={{ ...state, login, logout }}>{children}</UserContext.Provider>;
};
"use client"

import {createContext, ReactNode, useCallback, useState} from "react";

export const SplitTypeContext = createContext<{
    splittedKeys: string[];
    splitCompleted: (key: string) => void;
}>({
    splittedKeys: [],
    splitCompleted: (key: string) => {},
})

export const SplitTypeContextProvider = ({ children }: { children: ReactNode }) => {
    const [splittedKeys, setSplittedKeys] = useState<string[]>([])
    const splitCompleted = useCallback((key: string) => {
        setSplittedKeys((prevState) => ([key, ...prevState]))
    }, [])

    return (
      <SplitTypeContext.Provider value={{
        splittedKeys,
        splitCompleted,
      }}>
        {children}
      </SplitTypeContext.Provider>
    );
}

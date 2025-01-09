import { createContext, useState, useContext } from 'react';

const CommentsContext = createContext();

export function CommentsProvider({ children }) {
    const [cachedComments, setCachedComments] = useState([]);
    
    return (
        <CommentsContext.Provider value={{ cachedComments, setCachedComments }}>
            {children}
        </CommentsContext.Provider>
    );
}

export const useComments = () => useContext(CommentsContext); 
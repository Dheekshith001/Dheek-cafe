import React, { createContext, useContext, useState, useCallback } from 'react';

const ScrollCardContext = createContext(null);

export function ScrollCardProvider({ children }) {
  const [targets, setTargets] = useState({});

  // Allows components to register their DOM elements by name (e.g., 'hero', 'collection', 'sellers')
  const registerTarget = useCallback((id, element) => {
    if (!element) return;
    setTargets((prev) => {
      if (prev[id] === element) return prev; // Avoid redundant state updates
      return { ...prev, [id]: element };
    });
  }, []);

  const unregisterTarget = useCallback((id) => {
    setTargets((prev) => {
      if (!prev[id]) return prev;
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }, []);

  return (
    <ScrollCardContext.Provider value={{ targets, registerTarget, unregisterTarget }}>
      {children}
    </ScrollCardContext.Provider>
  );
}

export function useScrollCardContext() {
  const context = useContext(ScrollCardContext);
  if (!context) {
    throw new Error('useScrollCardContext must be used within a ScrollCardProvider');
  }
  return context;
}

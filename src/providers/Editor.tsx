import { createContext, useContext, useState } from "react";

type EditorProviderProps = {
  children: React.ReactNode;
};

type EditorProviderState = {
  filePath: string | null;
  setFilePath: (filePath: string | null) => void;
};

const initialState: EditorProviderState = {
  filePath: null,
  setFilePath: () => null,
};

const EditorProviderContext = createContext<EditorProviderState>(initialState);

export function EditorProvider({ children, ...props }: EditorProviderProps) {
  const [filePath, setFilePath] = useState<string | null>(null);

  const value: EditorProviderState = {
    filePath,
    setFilePath: (filePath: string | null) => {
      setFilePath(filePath);
    },
  };

  return (
    <EditorProviderContext.Provider {...props} value={value}>
      {children}
    </EditorProviderContext.Provider>
  );
}

export const useEditor = () => {
  const context = useContext(EditorProviderContext);

  if (context === undefined)
    throw new Error("useEditor must be used within a EditorContext");

  return context;
};

import { Link } from "@tanstack/react-router";
import { Editor } from "../components/Editor";
import { useEditor } from "../providers/Editor";
import { useEffect } from "react";

export const EditorPage = () => {
  const editor = useEditor();

  useEffect(() => {
    console.log({ filePath: editor.filePath });
  }, [editor.filePath]);

  return (
    <div className="flex flex-col size-full">
      <Editor />
      <Link to="/">Home</Link>
    </div>
  );
};

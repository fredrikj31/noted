import { Link } from "@tanstack/react-router";
import { Editor } from "../components/Editor";

export const EditorPage = () => {
  return (
    <div className="flex flex-col size-full">
      <Editor />
      <Link to="/">Home</Link>
    </div>
  );
};

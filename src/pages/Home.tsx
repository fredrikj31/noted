import { Button } from "@shadcn-ui/components/ui/button";
import { Link, useNavigate } from "@tanstack/react-router";
import { open } from "@tauri-apps/plugin-dialog";
import { useEditor } from "../providers/Editor";

export const HomePage = () => {
  const navigate = useNavigate();
  const editor = useEditor();

  const openFile = async () => {
    const filePath = await open({
      multiple: false,
      directory: false,
      title: "Open Note",
      filters: [
        {
          name: "note-file-extension",
          extensions: ["note"],
        },
      ],
    });
    editor.setFilePath(filePath);
    navigate({
      to: "/editor",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <span>Home Page</span>
      <Link to="/editor">Editor</Link>
      <Button onClick={async () => await openFile()}>Open File</Button>
    </div>
  );
};

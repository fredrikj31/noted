import { Link } from "@tanstack/react-router";

export const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <span>Home Page</span>
      <Link to="/editor">Editor</Link>
    </div>
  );
};

import { Button } from "@shadcn/components/ui/button";

export const App = () => {
  return (
    <>
      <h1 className="text-red-500 text-xl">Hello World</h1>
      <Button onClick={() => console.log("Hello World")}>Click Me</Button>
    </>
  );
};

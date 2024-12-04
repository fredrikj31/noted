import {
  usePlateEditor,
  Plate,
  PlateContent,
} from "@udecode/plate-common/react";

export const Editor = () => {
  const editor = usePlateEditor();

  return (
    <Plate editor={editor}>
      <PlateContent placeholder="Type..." />
    </Plate>
  );
};

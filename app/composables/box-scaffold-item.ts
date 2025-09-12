import type {
  FileFullOrFolderMiniOrWebLink,
} from "box-typescript-sdk-gen/lib/schemas/fileFullOrFolderMiniOrWebLink.generated.js.js";

// interface IBoxScaffoldItem {
//   src: FileFullOrFolderMiniOrWebLink | undefined;
//   name: string;
//   id: string;
//   childrenPromise: Promise<>
// }

export const useBoxScaffoldItem = (src: FileFullOrFolderMiniOrWebLink | undefined) => {
  const _children = $fetch("/api/box/get-folder-items", {
    method: "post",
    params: {
      id: src?.id || "0",
    },
  }).then((res) => res?.data.entries);

  return {
    src,
    name: src?.name || "",
    id: src?.id || "",
    children: src?.type === "folder" ? _children : null,
  };
};

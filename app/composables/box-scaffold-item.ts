import type {
  FileFullOrFolderMiniOrWebLink,
} from "box-typescript-sdk-gen/lib/schemas/fileFullOrFolderMiniOrWebLink.generated.js.js";
import type getFolderItems from "~~/server/api/box/get-folder-items";



export interface IBoxScaffoldItem {
  src: FileFullOrFolderMiniOrWebLink | undefined;
  name: string;
  id: string;
  children: ReturnType<typeof getFolderItems> | Awaited<ReturnType<typeof getFolderItems>> | null;
}

export const useBoxScaffoldItem = (src: FileFullOrFolderMiniOrWebLink | undefined): IBoxScaffoldItem => {
  return {
    src,
    name: src?.name || "",
    id: src?.id || "",
    children: src?.type === "folder"
      ? $fetch("/api/box/get-folder-items", {
          method: "post",
          params: {
            id: src?.id || "0",
          },
        })
      : null,
  };
};

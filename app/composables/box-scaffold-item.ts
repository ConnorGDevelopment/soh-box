import type {
  FileFullOrFolderMiniOrWebLink,
} from "box-typescript-sdk-gen/lib/schemas/fileFullOrFolderMiniOrWebLink.generated.js.js";
import type getFolderItems from "~~/server/api/box/get-folder-items";



export class BoxScaffoldItem {
  constructor(src: FileFullOrFolderMiniOrWebLink | undefined) {
    this.src = src;
    this.name = src?.name ? src.name : "";
    this.id = src?.id ? src.id : "0";
  }

  src: FileFullOrFolderMiniOrWebLink | undefined;
  name: string;
  id: string;
  children: ReturnType<typeof getFolderItems> | Awaited<ReturnType<typeof getFolderItems>> | null = null;
  async getChildren() {
    if(this.src?.type === "folder") {
      this.children = await $fetch("/api/box/get-folder-items", {
        method: "post",
        body: {
          id: this.id,
        },
      });
      console.log(this.children);
    } else {
      this.children = null;
    }
  }
}

export const useBoxScaffoldItem = (src: FileFullOrFolderMiniOrWebLink | undefined): BoxScaffoldItem => {
  return new BoxScaffoldItem(src);
};

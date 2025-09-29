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
  childSrc: ReturnType<typeof getFolderItems> | Awaited<ReturnType<typeof getFolderItems>> | null = null;
  async fetchChildren() {
    if(this.src?.type === "folder") {
      this.childSrc = await $fetch("/api/box/get-folder-items", {
        method: "post",
        body: {
          id: this.id,
        },
      });
      console.log(this.childSrc);
    } else {
      this.childSrc = null;
    }
  };

  get children() {
    if(this.childSrc !== null && this.childSrc !== undefined && "data" in this.childSrc && this.childSrc.data.entries !== undefined) {
      return this.childSrc.data.entries;
    } else {
      return [] as readonly FileFullOrFolderMiniOrWebLink[];
    }
  }
}

export const useBoxScaffoldItem = (src: FileFullOrFolderMiniOrWebLink | undefined): BoxScaffoldItem => {
  return new BoxScaffoldItem(src);
};

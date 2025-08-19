import type {
  FileBaseTypeField,
} from "box-typescript-sdk-gen/lib/schemas/fileBase.generated.js.js";
import type {
  FileFullOrFolderMiniOrWebLink,
} from "box-typescript-sdk-gen/lib/schemas/fileFullOrFolderMiniOrWebLink.generated.js.js";
import {
  deserializeItems,
  serializeItems,

} from "box-typescript-sdk-gen/lib/schemas/items.generated.js.js";
import type {
  Items,
} from "box-typescript-sdk-gen/lib/schemas/items.generated.js.js";



export class BoxScaffoldItem {
  constructor(public src: FileFullOrFolderMiniOrWebLink | undefined) {
    if(src) {
      this.name =  src.name ? src.name : "";
      this.id = src.id ? src.id : "";
    }
  }

  readonly name: string = "";
  readonly id: string = "";

  public children: Array<FileFullOrFolderMiniOrWebLink> = [];

  public async expand()  {
    // TODO: Figure out which fetch to use and where, might need to pass nuxt content for it to work
    // useFetch was acting wonky
    // This is throwing   [cause]: { statusCode: 405, statusMessage: 'HTTP method is not allowed.' }
    await $fetch<{
      statusCode: number;
      data: Items;
    }>("/api/box/get-folder-items", {
      params: {
        // TODO: Why is this throwing errors?
        // id: this.id
      },
    }).then((res) => {
      console.log(res);
      if(res.data) {
        if(res.data.entries) {
          this.children = this.children.concat(res.data.entries);
        }
      }
    });
  }

//   public children() {
//     return this.data ? this.data.entries : undefined;
//   }
}

export class BoxScaffold {
  constructor(public src: Items | undefined) {
  }
}

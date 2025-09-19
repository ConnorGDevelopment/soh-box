import {
  BoxClient, BoxDeveloperTokenAuth,
  JwtConfig, BoxJwtAuth,
} from "box-typescript-sdk-gen";
import {
  serializeItems,
} from "box-typescript-sdk-gen/lib/schemas/items.generated.js.js";



export default defineEventHandler(async (event) => {
  try {
    const client = new BoxClient({
      auth: process.env.NODE_ENV === "development"
        ? new BoxDeveloperTokenAuth({
          token: useRuntimeConfig(event).box.developerToken,
        })
        : new BoxJwtAuth({
          config: new JwtConfig({
            clientId: useRuntimeConfig(event).public.box.clientId,
            clientSecret: useRuntimeConfig(event).box.clientSecret,
            enterpriseId: useRuntimeConfig(event).box.enterpriseId,
            jwtKeyId: useRuntimeConfig(event).box.appAuth.publicKeyId,
            privateKey: useRuntimeConfig(event).box.appAuth.privateKey,
            privateKeyPassphrase: useRuntimeConfig(event).box.appAuth.passphrase,
          }),
        }),
    });

    const params = await readBody(event);

    const id = (
      params && Object.hasOwn(params, "id"))
      ? params.id
      : "0";

    console.log(params);

    const folderItems = await client.folders.getFolderItems(id);

    // console.log(folder);


    // const result = {
    //   statusCode: 200,
    //   data: folderItems,
    //   toJSON() {
    //     return {
    //       statusCode: 200,
    //       data: serializeItems(folderItems),
    //     };
    //   },
    // };
    // return result;

    return {
      statusCode: 200,
      data: folderItems,
    };
  } catch (error) {
    console.log(error);
    setResponseStatus(event,
      500);
  }
});

import {
  BoxClient, BoxDeveloperTokenAuth,
} from "box-typescript-sdk-gen";



export default defineEventHandler(async (event) => {
  try {
    const _runtimeConfig = useRuntimeConfig(event);

    // const config = new JwtConfig({
    //   'clientId': _runtimeConfig.public.box.sandbox.jwt.clientId,
    //   'clientSecret': _runtimeConfig.box.sandbox.jwt.clientSecret,
    //   'enterpriseId': _runtimeConfig.box.sandbox.jwt.enterpriseId,
    //   'jwtKeyId': _runtimeConfig.box.sandbox.jwt.appAuth.publicKeyId,
    //   'privateKey': _runtimeConfig.box.sandbox.jwt.appAuth.privateKey,
    //   'privateKeyPassphrase': _runtimeConfig.box.sandbox.jwt.appAuth.passphrase,
    // })
    // let auth = new BoxJwtAuth({ config })

    const params = await readBody(event);
    let id = "0";
    if (params && Object.hasOwn(params, "id")) {
      id = params.id;
    }

    const auth = new BoxDeveloperTokenAuth({
      token: _runtimeConfig.box.sandbox.jwt.developerToken,
    });

    const client = new BoxClient({
      auth,
    });

    // TODO: Fix this, the folder grabbed by Id has the array fields you need, can find nested via getFolderItems
    // const test = await client.folders.getFolderById("0");

    let folder = (await client.folders.getFolderItems(id)).entries;


    folder = folder?.map((item) => ({
      ...item,
      itemCollection: {
        entries: [
        ],
      },
    }));


    return {
      statusCode: 200,
      data: folder,
    };
  } catch (error) {
    console.log(error);
    setResponseStatus(event, 500);
  }
});

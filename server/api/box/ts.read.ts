import { BoxCcgAuth, BoxClient, BoxDeveloperTokenAuth, CcgConfig } from 'box-typescript-sdk-gen';

export default defineEventHandler(async (event) => {
  try {
    console.log('--------------- Start box-typescript-sdk-gen ---------------');

    const _runtimeConfig = useRuntimeConfig(event);

    const config = new CcgConfig({
      clientId: _runtimeConfig.public.box.sandbox.ccg.clientId,
      clientSecret: _runtimeConfig.box.sandbox.ccg.clientSecret,
      enterpriseId: _runtimeConfig.box.enterpriseId
    })

    // let auth = new BoxDeveloperTokenAuth({ token: process.env.NUXT_BOX_DEVELOPER_TOKEN });
    let auth = new BoxCcgAuth({ config })

    let client = new BoxClient({ auth });

    let testRootFolder = await client.withAsUserHeader('43998651696').folders.getFolderById('0');
    console.log('--------------- Root Folder ---------------');
    console.log(testRootFolder);

    console.log('--------------- Root Folder Items ---------------');
    const testRootFolderItems = (await client.folders.getFolderItems('0'));
    console.log(testRootFolderItems);

    console.log('--------------- End box-typescript-sdk-gen ---------------');

    return {
      statusCode: 200,
      data: JSON.stringify(testRootFolderItems)
    }
  } catch (error) {
    console.log(error);
    setResponseStatus(event, 500);
  }
})

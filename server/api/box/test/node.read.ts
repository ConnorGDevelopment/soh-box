import BoxSDK from 'box-node-sdk';
import type { FolderFull } from 'box-typescript-sdk-gen/src/schemas/folderFull.generated';

export default defineEventHandler(async (event) => {
  try {
    const _runtimeConfig = useRuntimeConfig(event);

    console.log('--------------- Start box-node-sdk ---------------');

    const config = {
      boxAppSettings: {
        clientID: _runtimeConfig.public.box.sandbox.ccg.clientId,
        clientSecret: _runtimeConfig.box.sandbox.ccg.clientSecret,
      },
      enterpriseID: _runtimeConfig.box.enterpriseId
    }

    const sdk = BoxSDK.getPreconfiguredInstance(config);
    const client = await sdk.getAnonymousClient();

    const testUserInfo = await client.CURRENT_USER_ID;
    console.log('--------------- Current User Info ---------------');
    console.log(testUserInfo);

    const testRootFolder = await client.folders.get('0');
    console.log('--------------- Root Folder ---------------');
    console.log(testRootFolder);

    // console.log('--------------- Root Folder Items ---------------');
    // testRootFolder.itemCollection?.entries?.forEach((entry) => console.log(entry));

    console.log('--------------- End box-node-sdk ---------------');

    setResponseStatus(event, 200);
  } catch (error) {
    console.log(error);
    setResponseStatus(event, 500);
  }

})

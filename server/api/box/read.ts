import BoxSDK from 'box-node-sdk';
import type { BoxDev } from '~/types/box';

export default defineEventHandler(async (event) => {
  console.log('----- Start -----');
  const sdk = new BoxSDK({
    clientID: useRuntimeConfig().public.box.clientId,
    clientSecret: useRuntimeConfig().box.clientSecret,
    appAuth: {
      keyID: useRuntimeConfig().public.box.boxKeyId,
      privateKey: useRuntimeConfig().box.privateKey,
      passphrase: useRuntimeConfig().box.passphrase,
    },
  })

  const client = await sdk.getBasicClient(useRuntimeConfig().box.developerToken);
  // const client = await sdk.getAppAuthClient('enterprise', useRuntimeConfig().box.enterpriseId);
  console.log(client.CURRENT_USER_ID)

  const rootFolder = await client.folders.get('0') as BoxDev.Folder;

  const response = rootFolder.item_collection;

  console.log(response);
  return response;
})

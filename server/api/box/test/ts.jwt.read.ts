import { BoxCcgAuth, BoxClient, BoxDeveloperTokenAuth, BoxJwtAuth, CcgConfig, JwtConfig } from 'box-typescript-sdk-gen';

export default defineEventHandler(async (event) => {
  try {
    console.log('--------------- Start box-typescript-sdk-gen jwt ---------------');

    const _runtimeConfig = useRuntimeConfig(event);

    const config = new JwtConfig({
      'clientId': _runtimeConfig.public.box.sandbox.jwt.clientId,
      'clientSecret': _runtimeConfig.box.sandbox.jwt.clientSecret,
      'enterpriseId': _runtimeConfig.box.sandbox.jwt.enterpriseId,
      'jwtKeyId': _runtimeConfig.box.sandbox.jwt.appAuth.publicKeyId,
      'privateKey': _runtimeConfig.box.sandbox.jwt.appAuth.privateKey,
      'privateKeyPassphrase': _runtimeConfig.box.sandbox.jwt.appAuth.passphrase,
    })

    let auth = new BoxDeveloperTokenAuth({ token: _runtimeConfig.box.sandbox.jwt.developerToken });
    // let auth = new BoxJwtAuth({ config })

    let client = new BoxClient({ auth });


    let testUserInfo = await client.users.getUserMe();
    console.log('--------------- User Info ---------------');
    console.log(testUserInfo);

    let testRootFolder = await client.folders.getFolderItems('0')
    console.log('--------------- Root Folder ---------------');
    console.log(testRootFolder);

    console.log('--------------- Root Folder Items ---------------');
    const testRootFolderItems = testRootFolder.entries;
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

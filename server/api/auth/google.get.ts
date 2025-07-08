import {
  OAuth2Client,
} from "google-auth-library";



export default defineEventHandler(async (event) => {
  try {
    const {
      code,
    } = await readBody(event);

    const client = new OAuth2Client(
      process.env.NUXT_OAUTH_GOOGLE_CLIENT_ID,
      process.env.NUXT_OAUTH_GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_WEB_REDIRECT_URI,
    );

    const result = await client.getToken(code);

    client.setCredentials(result.tokens);

    return {
      tokens: result,
    };
  } catch (error) {
    console.log(error);
    return;
  }
});

// function checkUserOrganization(userEmail) {
//   gapi.client.load('admin', 'directory_v1', function() {
//     var request = gapi.client.admin.users.get({
//       'userKey': userEmail
//     });

//     request.execute(function(resp) {
//       if (resp.error) {
//         // Handle the error (e.g., user not found)
//         console.error('Error:', resp.error.message);
//       } else {
//         const orgUnitPath = resp.orgUnitPath;
//         if (orgUnitPath) {
//           console.log(`User ${userEmail} is in organizational unit: ${orgUnitPath}`);
//           // Check if the path matches your desired organizational unit
//         } else {
//           console.log(`User ${userEmail} is not assigned to a specific organizational unit.`);
//         }
//       }
//     });
//   });
// }

// // Example usage:
// // Assuming you have already authenticated and loaded the gapi client.
// checkUserOrganization('user@example.com');

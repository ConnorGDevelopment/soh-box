import { getServerSession, getToken } from "#auth";
import { OAuth2Client } from 'google-auth-library';
import type { Session } from "next-auth";

export default eventHandler(async (event) => {
  const session = await getServerSession(event);

  if (!session) {
    throw createError({
      message: 'Unauthenticated',
      statusCode: 403
    })
  }

  try {
    const token = await getToken({
      event,
    });

    const session = await getServerSession(event) as Session & {
      id_token?: string
      sub?: string
      hd?: string
    };

    const client = new OAuth2Client();

    if (token?.id_token) {
      // Throws error if not valid
      const payload = await client.verifyIdToken({
        idToken: token.id_token,
        audience: useRuntimeConfig().public.google.clientId,
      }).then((ticket) => ticket.getPayload());

      if (!payload?.sub || session.sub !== payload?.sub) {
        throw createError({
          message: 'User ID mismatch',
          statusCode: 403
        })
      }

      if (!payload.hd || session.hd !== payload.hd) {
        throw createError({
          message: 'Domain Mismatch',
          statusCode: 403
        })
      }

      return true;
    } else {
      throw createError({
        message: 'No ID Token',
        statusCode: 403
      })
    }
  } catch (err) {
    console.log(err);
    return err;
  }
})
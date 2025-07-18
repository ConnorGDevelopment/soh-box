// file: ~/server/api/token.get.ts
import {
    getToken, getServerSession
} from "#auth";



export default eventHandler(async (event) => {
    const session = await getServerSession(event);

    if (!session) {
        throw createError({
            message: 'Unauthenticated',
            statusCode: 403
        })
    }

    const token = await getToken({
        event,
    });

    if (!token) {
        throw createError({
            message: 'No Token Present',
            statusCode: 403
        })
    }

    return token;
});

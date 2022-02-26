import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getPublications() {
    return api.get('/classes/Publication');
}

function createPointer(className, objectId) {
    return {
        "__type": "Pointer",
        className,
        objectId
    }
}

export async function createPublication(publication, ownerId) {
    publication.owner = createPointer('_User', ownerId);

    return api.post('/classes/Publication', publication);
}

export async function createComment(comment, publicationId) {
    comment.author = createPointer('_User', ownerId);
    comment.publication = createPointer('Publication', publicationId);

    return api.post('/classes/Comment', comment);
}
import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async (hotelId) => {
    const query = new URLSearchParams({
        where: `hotelId="${hotelId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (hotelId, text) => {
    const newComment = await request.post(baseUrl, {
        hotelId,
        text,
    });

    return newComment;
};

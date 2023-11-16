import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/hotels'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
};

export const getOne = async (hotelId) => {
    const result = await request.get(`${baseUrl}/${hotelId}`, );

    return result;
}

export const create = async (hotelData) => {
    const result = await request.post(baseUrl, hotelData);

    return result;
};



import type { AxiosPromise } from "axios";
import { apiInstance } from "./";
import type { User } from "./models";

const BASE_URL = "/users/"

export type GetUsersParams = {
    username: string;
};

export const getUsersList = (params?: GetUsersParams): AxiosPromise<User> => {
    return apiInstance.get(BASE_URL, { params });
};
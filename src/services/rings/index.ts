import type { AxiosRequestConfig, AxiosResponse } from "axios";
import api from "@/lib/axios";
import { Ring } from "@/types/ring";

type ErrorResponse = {
  message: string;
  statusCode: number;
};

export type CreateRingBody = Omit<Ring, "id" | "createdAt" | "updatedAt">;

export interface CreateRingResponse extends Partial<{ error: ErrorResponse }> {
  message: string;
}

export interface GetRingsResponse extends Partial<{ error: ErrorResponse }> {
  rings: Ring[];
}

export type UpdateRingBody = Partial<CreateRingBody>;

export interface UpdateRingResponse extends Partial<{ error: ErrorResponse }> {
  message: string;
}

export type GetRingResponse = Ring & Partial<{ error: ErrorResponse }>;

export interface DeleteRingResponse extends Partial<{ error: ErrorResponse }> {
  message: string;
}

export const createRing = (
  createRingBody: CreateRingBody,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<CreateRingResponse>> => {
  return api.post(`/rings/`, createRingBody, options);
};

export async function getRings(
  options?: AxiosRequestConfig
): Promise<GetRingsResponse> {
  const response = await api.get(`/rings/`, options);

  return response.data;
}

/* export const getRings = (
  options?: AxiosRequestConfig
): Promise<AxiosResponse<GetRingsResponse>> => {
  return api.get(`/rings/`, options);
}; */

export const updateRing = (
  id: string,
  updateRingBody: UpdateRingBody,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<UpdateRingResponse>> => {
  return api.patch(`/rings/${id}`, updateRingBody, options);
};

export const getRing = (
  id: string,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<GetRingResponse>> => {
  return api.get(`/rings/${id}`, options);
};

export const deleteRing = (
  id: string,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<DeleteRingResponse>> => {
  return api.delete(`/rings/${id}`, options);
};

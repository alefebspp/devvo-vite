import { useMutation, useQuery } from "@tanstack/react-query";
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { AxiosError, AxiosRequestConfig } from "axios";

import {
  createRing,
  getRings,
  updateRing,
  getRing,
  deleteRing,
} from "@/services/rings";
import { CreateRingBody, UpdateRingBody } from "@/services/rings";

export type CreateRingMutationResult = NonNullable<
  Awaited<ReturnType<typeof createRing>>
>;
export type CreateRingMutationBody = CreateRingBody;
export type CreateRingMutationError = AxiosError<unknown>;
export type GetRingsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getRings>>
>;
export type GetRingsQueryError = AxiosError<unknown>;
export type UpdateRingMutationBody = UpdateRingBody;
export type UpdateRingMutationError = AxiosError<unknown>;
export type UpdateRingMutationResult = NonNullable<
  Awaited<ReturnType<typeof updateRing>>
>;
export type GetRingQueryResult = NonNullable<
  Awaited<ReturnType<typeof getRing>>
>;
export type GetRingQueryError = AxiosError<unknown>;
export type DeleteRingMutationResult = NonNullable<
  Awaited<ReturnType<typeof deleteRing>>
>;

export type DeleteRingMutationError = AxiosError<unknown>;

export default function useRings() {
  const getCreateRingMutationOptions = <
    TError = AxiosError<unknown>,
    TContext = unknown
  >(options?: {
    mutation?: UseMutationOptions<
      Awaited<ReturnType<typeof createRing>>,
      TError,
      { data: CreateRingBody },
      TContext
    >;
    axios?: AxiosRequestConfig;
  }): UseMutationOptions<
    Awaited<ReturnType<typeof createRing>>,
    TError,
    { data: CreateRingBody },
    TContext
  > => {
    const mutationKey = ["createRing"];
    const { mutation: mutationOptions, axios: axiosOptions } = options
      ? options.mutation &&
        "mutationKey" in options.mutation &&
        options.mutation.mutationKey
        ? options
        : { ...options, mutation: { ...options.mutation, mutationKey } }
      : { mutation: { mutationKey }, axios: undefined };

    const mutationFn: MutationFunction<
      Awaited<ReturnType<typeof createRing>>,
      { data: CreateRingBody }
    > = (props) => {
      const { data } = props ?? {};

      return createRing(data, axiosOptions);
    };

    return { mutationFn, ...mutationOptions };
  };

  const useCreateRing = <
    TError = AxiosError<unknown>,
    TContext = unknown
  >(options?: {
    mutation?: UseMutationOptions<
      Awaited<ReturnType<typeof createRing>>,
      TError,
      { data: CreateRingBody },
      TContext
    >;
    axios?: AxiosRequestConfig;
  }): UseMutationResult<
    Awaited<ReturnType<typeof createRing>>,
    TError,
    { data: CreateRingBody },
    TContext
  > => {
    const mutationOptions = getCreateRingMutationOptions(options);

    return useMutation(mutationOptions);
  };

  const getGetRingsQueryKey = () => {
    return [`/rings/`] as const;
  };

  const getGetRingsQueryOptions = <
    TData = Awaited<ReturnType<typeof getRings>>,
    TError = AxiosError<unknown>
  >(options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getRings>>,
      TError,
      TData
    >;
    axios?: AxiosRequestConfig;
  }) => {
    const { query: queryOptions, axios: axiosOptions } = options ?? {};

    const queryKey = queryOptions?.queryKey ?? getGetRingsQueryKey();

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getRings>>> = ({
      signal,
    }) => getRings({ signal, ...axiosOptions });

    return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
      Awaited<ReturnType<typeof getRings>>,
      TError,
      TData
    > & { queryKey: QueryKey };
  };

  function useGetRings<
    TData = Awaited<ReturnType<typeof getRings>>,
    TError = AxiosError<unknown>
  >(options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getRings>>,
      TError,
      TData
    >;
    axios?: AxiosRequestConfig;
  }): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
    const queryOptions = getGetRingsQueryOptions(options);

    const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
      queryKey: QueryKey;
    };

    query.queryKey = queryOptions.queryKey;

    return query;
  }

  const getUpdateRingMutationOptions = <
    TError = AxiosError<unknown>,
    TContext = unknown
  >(options?: {
    mutation?: UseMutationOptions<
      Awaited<ReturnType<typeof updateRing>>,
      TError,
      { id: string; data: UpdateRingBody },
      TContext
    >;
    axios?: AxiosRequestConfig;
  }): UseMutationOptions<
    Awaited<ReturnType<typeof updateRing>>,
    TError,
    { id: string; data: UpdateRingBody },
    TContext
  > => {
    const mutationKey = ["updateRing"];
    const { mutation: mutationOptions, axios: axiosOptions } = options
      ? options.mutation &&
        "mutationKey" in options.mutation &&
        options.mutation.mutationKey
        ? options
        : { ...options, mutation: { ...options.mutation, mutationKey } }
      : { mutation: { mutationKey }, axios: undefined };

    const mutationFn: MutationFunction<
      Awaited<ReturnType<typeof updateRing>>,
      { id: string; data: UpdateRingBody }
    > = (props) => {
      const { id, data } = props ?? {};

      return updateRing(id, data, axiosOptions);
    };

    return { mutationFn, ...mutationOptions };
  };

  const useUpdateRing = <
    TError = AxiosError<unknown>,
    TContext = unknown
  >(options?: {
    mutation?: UseMutationOptions<
      Awaited<ReturnType<typeof updateRing>>,
      TError,
      { id: string; data: UpdateRingBody },
      TContext
    >;
    axios?: AxiosRequestConfig;
  }): UseMutationResult<
    Awaited<ReturnType<typeof updateRing>>,
    TError,
    { id: string; data: UpdateRingBody },
    TContext
  > => {
    const mutationOptions = getUpdateRingMutationOptions(options);

    return useMutation(mutationOptions);
  };

  const getGetRingQueryKey = (id: string) => {
    return [`/rings/${id}`] as const;
  };

  const getGetRingQueryOptions = <
    TData = Awaited<ReturnType<typeof getRing>>,
    TError = AxiosError<unknown>
  >(
    id: string,
    options?: {
      query?: UseQueryOptions<
        Awaited<ReturnType<typeof getRing>>,
        TError,
        TData
      >;
      axios?: AxiosRequestConfig;
    }
  ) => {
    const { query: queryOptions, axios: axiosOptions } = options ?? {};

    const queryKey = queryOptions?.queryKey ?? getGetRingQueryKey(id);

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getRing>>> = ({
      signal,
    }) => getRing(id, { signal, ...axiosOptions });

    return {
      queryKey,
      queryFn,
      enabled: !!id,
      ...queryOptions,
    } as UseQueryOptions<Awaited<ReturnType<typeof getRing>>, TError, TData> & {
      queryKey: QueryKey;
    };
  };

  function useGetRing<
    TData = Awaited<ReturnType<typeof getRing>>,
    TError = AxiosError<unknown>
  >(
    id: string,
    options?: {
      query?: UseQueryOptions<
        Awaited<ReturnType<typeof getRing>>,
        TError,
        TData
      >;
      axios?: AxiosRequestConfig;
    }
  ): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
    const queryOptions = getGetRingQueryOptions(id, options);

    const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
      queryKey: QueryKey;
    };

    query.queryKey = queryOptions.queryKey;

    return query;
  }

  const getDeleteRingMutationOptions = <
    TError = AxiosError<unknown>,
    TContext = unknown
  >(options?: {
    mutation?: UseMutationOptions<
      Awaited<ReturnType<typeof deleteRing>>,
      TError,
      { id: string },
      TContext
    >;
    axios?: AxiosRequestConfig;
  }): UseMutationOptions<
    Awaited<ReturnType<typeof deleteRing>>,
    TError,
    { id: string },
    TContext
  > => {
    const mutationKey = ["deleteRing"];
    const { mutation: mutationOptions, axios: axiosOptions } = options
      ? options.mutation &&
        "mutationKey" in options.mutation &&
        options.mutation.mutationKey
        ? options
        : { ...options, mutation: { ...options.mutation, mutationKey } }
      : { mutation: { mutationKey }, axios: undefined };

    const mutationFn: MutationFunction<
      Awaited<ReturnType<typeof deleteRing>>,
      { id: string }
    > = (props) => {
      const { id } = props ?? {};

      return deleteRing(id, axiosOptions);
    };

    return { mutationFn, ...mutationOptions };
  };

  const useDeleteRing = <
    TError = AxiosError<unknown>,
    TContext = unknown
  >(options?: {
    mutation?: UseMutationOptions<
      Awaited<ReturnType<typeof deleteRing>>,
      TError,
      { id: string },
      TContext
    >;
    axios?: AxiosRequestConfig;
  }): UseMutationResult<
    Awaited<ReturnType<typeof deleteRing>>,
    TError,
    { id: string },
    TContext
  > => {
    const mutationOptions = getDeleteRingMutationOptions(options);

    return useMutation(mutationOptions);
  };

  return {
    getCreateRingMutationOptions,
    useCreateRing,
    getGetRingsQueryKey,
    getGetRingsQueryOptions,
    useGetRings,
    getUpdateRingMutationOptions,
    useUpdateRing,
    getGetRingQueryKey,
    getGetRingQueryOptions,
    useGetRing,
    getDeleteRingMutationOptions,
    useDeleteRing,
  };
}

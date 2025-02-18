import { useQuery } from "@tanstack/vue-query";
import instance from "~/utils/axios-client";

interface GetPayloadResponse {
  message: string;
  success: boolean;
  data: any;
}

const getCategories = async () => {
  const response = await instance.get<GetPayloadResponse>("/category/list");
  return response.data.data;
};

export const useGetCategories = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    staleTime: 1000 * 60 * 60, // 60 minutes
  });

  return { data, isLoading, error };
};

import { useQuery } from "@tanstack/vue-query";
import instance from "~/utils/axios-client";

const getProducts = async () => {
  const route = useRoute();

  const response = await instance.get("/product/list", {
    params: {
      category: route.query?.category ?? undefined,
    },
  });
  return response.data.data;
};

export const useGetProducts = () => {
  const route = useRoute();

  // const isLoad = ref(true);
  // console.log('Category ID: ', categoryId)
  const catId = route?.query?.category ?? "All";
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["products", catId],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 60,
    // enabled: !!categoryId,
  });

  return { data, isLoading, error, refetch };
};

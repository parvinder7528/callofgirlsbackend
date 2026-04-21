import { i as baseApi } from "./router-D9IWjkiy.js";
const providerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProfiles: builder.query({
      query: (params) => {
        return {
          url: "/provider/get-allprofiles",
          method: "GET",
          params: {
            city: params?.city,
            category: params?.categoryId,
            all: params?.all
          }
        };
      },
      providesTags: ["User"]
    }),
    getProfileById: builder.query({
      query: (id) => ({
        url: `/provider/get-profileById/${id}`
      }),
      providesTags: ["User"]
    }),
    // 2. Get All Categories
    getAllCategories: builder.query({
      query: () => "/provider/get-allcategory",
      providesTags: ["User"]
    }),
    getAllCityCategoryService: builder.query({
      query: () => "/provider/get-city-category-service",
      providesTags: ["locationData"]
    })
  })
});
const {
  useGetProfileByIdQuery,
  useGetAllProfilesQuery,
  useGetAllCategoriesQuery,
  useGetAllCityCategoryServiceQuery
} = providerApi;
export {
  useGetAllCityCategoryServiceQuery as a,
  useGetAllCategoriesQuery as b,
  useGetProfileByIdQuery as c,
  useGetAllProfilesQuery as u
};

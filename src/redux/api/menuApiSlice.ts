import { CategoryModel, LoginResponse, MenuModel, OrderItem, OrderModel } from "../../types"
import { apiSlice } from "./baseApiSlice"



// Define a service using a base URL and expected endpoints
export const menuApi = apiSlice.injectEndpoints({
    //   reducerPath: 'auth',
    endpoints: (builder) => ({
        getMenuCategories: builder.query<CategoryModel[], {}>({
            query: () => {
                return {
                    url: 'categories',
                    method: 'GET',
                    // body: data
                }
            },
        }),
        getMenu: builder.query<MenuModel[], {}>({
            query: () => {
                return {
                    url: 'menu',
                    method: 'GET',
                    // body: data
                }
            },
        }),
        getOrders: builder.query<OrderModel[], {}>({
            query: () => {
                return {
                    url: 'orders',
                    method: 'GET',
                    // body: data
                }
            },
        }),
        createOrder: builder.mutation<OrderModel, OrderItem[]>({
            query: (data) => {
                return {
                    url: 'orders',
                    method: 'POST',
                    body: data
                }
            },
        }),
    })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMenuQuery, useLazyGetMenuQuery, useLazyGetMenuCategoriesQuery, useLazyGetOrdersQuery, useCreateOrderMutation } = menuApi
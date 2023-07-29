import React from "react";
import Layout from "../Layout/index";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../utils/AxiosInstance";
import Cart from "../components/Cart";


function Home() {
    const { isLoading, data, refetch } = useQuery({
        queryKey: ["items"],
        queryFn: async () => {
            const { data } = await apiClient.get(
                `/items`
            );
            return data;
        },
        cacheTime: 0,
    });

    return (
        <Layout selectedPath={"Home"}>
            <div className="container mx-auto">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {data && data.map((item) => (
                            <Cart key={item.id} cartItem={item} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home;
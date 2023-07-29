import React from 'react';
import Layout from "../Layout/index";
import { Button, Table } from 'antd';
import Image from "../components/common/Image"
import { useNavigate } from 'react-router-dom';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { apiClient } from "../utils/AxiosInstance";

const ItemsList = () => {
    const navigate = useNavigate();
    const { isLoading, data, refetch } = useQuery({
        queryKey: ["getitems"],
        queryFn: async () => {
            const { data } = await apiClient.get(`/items`);
            return data;
        },
        cacheTime: 0,
    });

    // Generate dynamic filters for the 'Name' column
    const uniqueNames = [...new Set(data && data.map((item) => item.name))];
    const nameFilters = uniqueNames.map((name) => ({ text: name, value: name }));

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            filters: nameFilters,
            onFilter: (value, record) => record.name === value,
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ['descend'],
        },
        {
            title: 'Price',
            dataIndex: 'price',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.price - b.price,
        },
        {
            title: 'Image',
            dataIndex: 'img',
            render: (value) =>  <Image src = { `http://localhost:3000/${value}`} width = "60px" height = "50px" />
        },
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <Layout selectedPath={"Items"}>
            <div className="container mx-auto m-5">
                <div className="m-5 float-right">
                    <Button className='' onClick={() => navigate("/addnewitems")}>Add New Item</Button>
                </div>
                <div className="my-12">
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <Table columns={columns} dataSource={data} onChange={onChange} />
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default ItemsList;

import React from 'react'
import Layout from "../Layout/index";
import { Button, Form, message } from 'antd';
import { useMutation } from '@tanstack/react-query';
import { apiClient } from "../utils/AxiosInstance";
import FormTextInput from '../components/common/FormTextInput';
import getRandomFourDigitNumber from '../utils/GenerateRandomNumber';

const AddnNewItems = () => {
    const [form] = Form.useForm();

    const mutation = useMutation({
        mutationFn: (data) => {
            return apiClient.post("/items", data, {
            });
        },
        onSuccess: () => {
            message.success("Item Added Successfully");
            form.resetFields();
        },
        onError: ({ response }) => {
            Object.keys(response.data).map((el) =>
                message.error(response.data)
            );
        },
    });
    const handleFinish = (val) => {
        mutation.mutate(val);
    };

    return (
        <Layout selectedPath={"AddNewItem"}>
            <section class="text-gray-600 body-font relative">
                <div class="container px-5 py-12 mx-auto">
                    <div class="flex flex-col text-center w-full mb-4">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-8 text-gray-900">Add New Item</h1>
                    </div>

                    <Form layout={"vertical"} onFinish={handleFinish} form={form}>
                        <div class="lg:w-1/2 md:w-2/3 mx-auto">
                            <div class="mx-auto">
                                <div class="p-2 w-1/2 mx-auto">
                                    <div class="relative">
                                        <FormTextInput
                                            name={"name"}
                                            label={'Name'}
                                        />
                                    </div>
                                </div>
                                <div class="p-2 w-1/2 mx-auto">
                                    <div class="relative">
                                        <FormTextInput
                                            name={"price"}
                                            label={'Price'}
                                            onlyNumber={true}
                                        />
                                    </div>
                                </div>
                                <div class="p-2 w-1/2 mx-auto">
                                    <div class="relative">
                                        <FormTextInput
                                            name={"img"}
                                            label={'Imgae Url'}
                                        />
                                    </div>
                                </div>
                                <div class="p-2 w-1/4 mx-auto">
                                    <div class="relative">
                                        <Button htmlType="submit" type="primary" 
                                        block 
                                        className='additem-btn bg-green-700 hover:bg-green-800 active:bg-green-800 focus:outline-none focus:ring focus:ring-green-800 my-4'>
                                              
                                             {'Save'}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>

                </div>
            </section >
        </Layout >

    )
}

export default AddnNewItems

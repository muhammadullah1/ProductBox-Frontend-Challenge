import React, { useEffect, useState } from "react";
import { Layout, Menu, Button, Drawer, Row, Col } from "antd";
import {
    MenuOutlined,
} from "@ant-design/icons";
import Logo from "../assets/svgs/Logo";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const { Header } = Layout;

const index = ({ children, selectedPath = '' }) => {
    const [open, setOpen] = useState(false);
    // const [current, setCurrent] = useState('Home');
    // const [current, setCurrent] = useState(selectedPath || (items.length > 0 ? items[0].key : ''));
    const [current, setCurrent] = useState(selectedPath);

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const items = [
        {
            label: 'Home',
            key: '',
        },
        {
            label: 'Cart',
            key: 'cart',
        },
        {
            label: 'About Us',
            key: 'about',
        }
    ];
    const rightMenuItems = [
        {
            label: 'Items',
            key: 'itemlist',
        },
        {
            label: 'AddNewItem',
            key: 'addnewitems',
        },
    ]

    const onClick = (e) => {
        setCurrent(e.key);
        navigate(`/${e.key}`);
    };
    useEffect(() => {
        const menuItems = document.querySelectorAll(".custom-menu .ant-menu-item");
        menuItems.forEach((item) => {
            if (item.outerText === current) {
                item.classList.add("ant-menu-item-selected");
            } else {
                item.classList.remove("ant-menu-item-selected");
            }
        });
    }, [current]);

    return (
        <Layout className="layout">
            <Header className="container mx-auto" style={{ padding: 0, background: "#FAF9F6" }}>
                <Row justify="space-between" align="middle" style={{ background: "#FAF9F6" }}>
                    <Col xs={20} sm={20} md={6} lg={4} >
                        <div
                            className="logo cursor-pointer"
                            onClick={() => navigate("/")}
                        >
                            <Logo />
                        </div>
                    </Col>
                    <Col xs={0} sm={0} md={16} lg={19}>
                        <Row justify="space-between" align="middle">
                            <Col xs={0} sm={0} md={14} lg={18}>
                                <Menu
                                    onClick={onClick}
                                    selectedKeys={[current]}
                                    mode="horizontal"
                                    items={items}
                                    defaultSelectedKeys={[selectedPath ? selectedPath : pathname]}
                                    className="custom-menu"
                                    style={{ background: "#FAF9F6" }} />
                            </Col>
                            <Col xs={0} sm={0} md={8} lg={5}>
                                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={rightMenuItems} className="custom-menu"
                                    style={{ background: "#FAF9F6" }} />
                            </Col>

                        </Row>
                    </Col>
                    <Col xs={2} sm={2} md={0}>
                        <Button type="primary" onClick={showDrawer} className="p-0">
                            <MenuOutlined />
                        </Button>
                    </Col>
                </Row>
                <Drawer
                    title="Menu"
                    placement="left"
                    onClick={onClose}
                    onClose={onClose}
                    closable={false}
                    open={open}
                    style={{
                        background: "#FAF9F6"
                    }}
                >
                    <Menu onClick={onClick} selectedKeys={[current]} mode="vertical" items={items} />
                    <div className="mx-2">
                        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={rightMenuItems} />
                    </div>
                </Drawer>
            </Header>
            <main className="m-5">{children}</main>
            <div className="">
                <Footer />
            </div>
        </Layout>
    );
};

export default index;
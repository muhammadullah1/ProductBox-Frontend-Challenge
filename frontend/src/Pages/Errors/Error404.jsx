import React from 'react';
import error404 from '../../assets/icons/error404.png'
import { Link } from "react-router-dom";
import { Button } from "antd";
function Error404(props) {
    return (
        <div className={"h-full w-full flex-col flex justify-center items-center p-5"}>
            <h1 className={"text-[44px] font-bold text-primaryColor"}>Page not found</h1>
            <br />
            <img src={error404} alt="404" style={{ maxWidth: 400, height: 'auto' }} />
            <p className={"text-[18px] my-5 font-semibold"}>The Page you are looking for might have been removed, had its name changed, or is temporarily unavailable</p>
            <Link to={"/"}>
                <Button className="primary-btn min-w-[119px]">
                    {"Go Back"}
                </Button>
            </Link>
        </div>
    );
}

export default Error404;
import React, {Suspense, useEffect, useMemo} from "react";
import {Route, Routes} from "react-router-dom";
import {AppRoutes} from "./AppRoutes";
import Error404 from "../Pages/Errors/Error404.jsx";


function index() {
 

    const cachePaths = useMemo(() => {
        const appRoutesCached = AppRoutes?.map((el) => {
            return (
                <Route path={el.path} element={<el.element/>} key={el.path}/>
            );
        })
        return [<Route path={"*"} element={<Error404/>}/>,...appRoutesCached]
    }, [AppRoutes])


    return (
        <Suspense fallback={<div>loading..</div>}>
            <Routes>
                {cachePaths}
            </Routes>
        </Suspense>
    );
}

export default index;
import React, { memo } from 'react';
import { renderRoutes } from "react-router-config"
import routes from "@/router"

import HYAppheader from "@/components/app-header"
import HYAppfooter from "@/components/app-footer"
import {HashRouter} from "react-router-dom"

export default memo(function App() {
    return (
        <HashRouter>
            <HYAppheader></HYAppheader>
            {renderRoutes(routes)}
            <HYAppfooter></HYAppfooter>
        </HashRouter>
    )
})
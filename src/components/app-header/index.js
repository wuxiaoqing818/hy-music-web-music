import { memo } from "react"

import { NavLink } from 'react-router-dom'
import { HeaderWrapper } from "./style"

export default memo(function HYAppheader() {
    return (
        <HeaderWrapper>
            <NavLink to="/">发现音乐</NavLink>
            <NavLink to="/mine">我的音乐</NavLink>
            <NavLink to="/friend">我的朋友</NavLink>

        </HeaderWrapper>
    )
})

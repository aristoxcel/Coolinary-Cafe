import { useContext } from "react"

import { Navigate, useLocation } from "react-router-dom"
import PropTypes from "prop-types"
import { AuthContext } from "../Providers/AuthProvider";


function PrivateRouter({children}) {
    const {user, loading}= useContext(AuthContext)
    const loc = useLocation();
    if (loading) {
        return <div className="mx-auto text-center my-32">
            <span className="origin-center rotate-90 loading loading-infinity loading-lg border-[100px] border-[#2596BE] "></span>
        </div>
    }

    if (user) {
        return children
    }
    return <Navigate to='/login' state={loc.pathname} replace={true} />
}

export default PrivateRouter

PrivateRouter.propTypes={
    children:PropTypes.node
}
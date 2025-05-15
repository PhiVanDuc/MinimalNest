import { jwtDecode } from "jwt-decode"

const decodeJwt = (jwt) => {
    try {
        const decode = jwtDecode(jwt);

        return {
            success: true,
            decode
        }
    }
    catch (error) {
        return {
            success: false
        }
    }
}

export default decodeJwt;
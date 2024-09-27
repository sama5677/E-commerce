import { roles } from "../../middleware/auth.js";

const endPoint = {
    brand:[roles.Vendor,roles.Admin]
}
export default endPoint
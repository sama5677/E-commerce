import { roles } from "../../middleware/auth.js";

const endPoint = {
  product: [roles.Vendor],
};
export default endPoint
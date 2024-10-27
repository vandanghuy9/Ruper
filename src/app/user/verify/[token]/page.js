import { register } from "@services/userService";
import { handleRegister } from "../../../../authentication/handleAuth";
import VerifiedUser from "./VerifiedUser";
const VerifyUser = async ({ params }) => {
  const token = params.token;
  const res = await handleRegister(token);
  return <VerifiedUser message={res?.message} />;
};

export default VerifyUser;

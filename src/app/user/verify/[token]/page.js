import { register } from "@services/userService";
import { handleRegister } from "../../../../authentication/handleAuth";
import VerifiedUser from "./VerifiedUser";
const VerifyUser = async ({ params }) => {
  const token = params.token;
  try {
    const res = await handleRegister(token);
    return <VerifiedUser message={res?.message} isRegisterSuccess={true} />;
  } catch (e) {
    return <VerifiedUser message={e?.message} isRegisterSuccess={false} />;
  }
};

export default VerifyUser;

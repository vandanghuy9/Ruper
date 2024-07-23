import { cookies } from "next/headers";
import { UserContext } from "@context/UserContext";
const CookieProvider = ({ children }) => {
  const cookieStore = cookies();
  const _id = cookieStore.has("userId") ? cookieStore.get("userId").value : null;
  const name = cookieStore.has("userName") ? cookieStore.get("userName").value : null;
  const email = cookieStore.has("userEmail") ? cookieStore.get("userEmail").value : null;
  const userInfor = { _id, name, email };
  return <UserContext userInfor={userInfor}>{children}</UserContext>;
};

export default CookieProvider;

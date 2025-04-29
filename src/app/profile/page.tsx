import { auth } from "@/lib/auth";
import ProfilePage from "../features/pofile";
import { redirect } from "next/navigation";

const Profile = async () => {
  const session = await auth();
  if (!session?.user) {
    return redirect("/login");
  }
  return <ProfilePage />;
};

export default Profile;


import { doLogout } from "../app/actions"
import Image from "next/image";
import Logout from "./Logout";

const Navigation = (session: any) => {
  return (
    <div className="flex flex-row justify-between ">
        <div>LOGO</div>
        <div>
        <div>Welcome, {session?.user?.name}</div>
        <Image
                src={session?.user?.image || ''}
                alt={session?.user?.name || ''}
                width={72}
                height={72}
                className="rounded-full"
            />
            <Logout />
        </div>
    </div>
  )
}
export default Logout

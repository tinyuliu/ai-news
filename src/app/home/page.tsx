import Image from "next/image";
import Logout from "../../components/Logout";
import { auth } from "../auth";

import { redirect } from "next/navigation";

const HomePage = async () => {
    const session = await auth() || {};

    if (!session?.user) redirect("/");

    return (
        <>
        <div className="flex flex-row justify-between items-center h-[102px] w-screen p-10 bg-pink-400/60">
        <div className="text-[32px]">LOGO</div>
        <div><input className="w-[300px] border-white border-2 bg-pink-400/40 rounded" type="text" value=" This is search bar..." /></div>
        <div className="flex flex-row gap-x-5 items-center">
            <div>Welcome, {session?.user?.name}</div>
            <Image
                src={session?.user?.image || ''}
                alt={session?.user?.name || ''}
                width={50}
                height={50}
                className="rounded-full"
            />
            <Logout />
        </div>
    </div>
    <div>
        <div>焦點新聞（可以取個有趣的名字）</div>
        <div>
            <div>新聞1</div>!
            <div>新聞2</div>
            <div>新聞3</div>
            <div>新聞4</div>
            <div>新聞5</div>
            <div>新聞6</div>
        </div>
        </div>
        </>
    );
};

export default HomePage;

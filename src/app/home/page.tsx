import Image from "next/image";
import Logout from "../../components/Logout";
import { auth } from "../auth";

import { redirect } from "next/navigation";
import Card from "../../components/Card";

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
        <div className="text-3xl font-bold m-10">焦點新聞（可以取個有趣的名字）</div>
        <div className="flex justify-items-stretch grid grid-cols-3 gap-x-8 gap-y-4 px-[180px]">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        </div>
        </>
    );
};

export default HomePage;

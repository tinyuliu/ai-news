
import LoginForm from "../components/LoginForm";

export default function Home() {
  return (
    <div className="flex flex-row justify-center items-center gap-x-28 p-28 h-screen w-screen">
      <div className="w-[436px]">
        <h1 className="text-[32px]">視蒔事（Logo）</h1>
        <br />
        <div className="text-[32px]">
          時事紛紛擾擾，<br />
          事實又在何方？
        </div>
        <br />
        <div className="text-2xl">
          事件每天發生，我們關注時事， 渴望從中洞見事實。
          <br />
          <br />
          蒔，草木之時，有栽種之意。
          <br />
          <br />
          希望這個新聞整理的平台，
          能幫助我們更好地了解這塊土地上的事。
          <br />
          <br />
          也為我們的後輩
        </div>
      </div>

      <div className="w-[436px] h-[500px] flex flex-col gap-y-20 p-10">
        <h1 className="text-[32px]">
          Login
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
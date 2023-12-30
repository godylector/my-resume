import { FC } from "react";

const EnterSite: FC = () => {
    return (
        <div className="w-full h-auto min-h-screen bg-gradient-to-r from-[#2E3192] to-[#1BFFFF]">
            <section id="profile" className="w-full h-screen flex justify-center items-center">
                <div className="w-full">
                    <div>
                        <div className="rounded-xl w-[40%] h-auto m-auto p-4 bg-black/60 relative">
                            <div className="absolute top-3 left-3 w-full flex justify-start items-center gap-2">
                                <div className="rounded-full bg-red-500 w-[10px] h-[10px]"></div>
                                <div className="rounded-full bg-yellow-500 w-[10px] h-[10px]"></div>
                                <div className="rounded-full bg-green-500 w-[10px] h-[10px]"></div>
                            </div>
                            <div className="mt-5">
                                <p>test</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <h1 className="text-6xl text-white cursor-default font-bold text-center">SAKKARIN SIMMA</h1>
                        <h2 className="text-2xl text-white/50 cursor-default font-semibold text-center leading-10">( ศักรินทร์ สิมมา )</h2>
                    </div>
                </div>
            </section>
            <section id="working" className="w-full h-screen">

            </section>
        </div>
    )
}

export default EnterSite;
import React from 'react';

import { CircleCheck, UserCog, CircleDashed } from 'lucide-react';
const Guests = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">Convidados</h2>
            <div className="space-y-5">
                <div className="items-center justify-between gap-4 flex">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">
                            Mark Hoppus
                        </span>
                        <span className="block text-sm text-zinc-400 truncate">
                            mark.hoppus@blink-182.com
                        </span>
                    </div>
                    <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                </div>
                <div className="items-center justify-between gap-4 flex">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">
                            Tom Delonge
                        </span>
                        <span className="block text-sm text-zinc-400 truncate">
                            tom.delonge@blink-182.com
                        </span>
                    </div>
                    <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                </div>
                <div className="items-center justify-between gap-4 flex">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">
                            Travis Barker
                        </span>
                        <span className="block text-s, text-zinc-400 truncate">
                            travis.barker@blink-182.com
                        </span>
                    </div>
                    <CircleCheck className="size-5 shrink-0  text-lime-300" />
                </div>
            </div>
            <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700 w-full justify-center">
                <UserCog className="size-5" />
                Gerenciar Convidados
            </button>
        </div>
    );
};

export default Guests;

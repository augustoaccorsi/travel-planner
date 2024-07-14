import React from 'react';
import { CircleCheck, UserCog, CircleDashed } from 'lucide-react';
import Button from '../../components/button';

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
            <Button size={'large'}>
                <UserCog className="size-5" />
                Gerenciar Convidados
            </Button>
        </div>
    );
};

export default Guests;

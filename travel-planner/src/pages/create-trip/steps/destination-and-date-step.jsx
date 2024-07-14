import React from 'react';
import { MapPin, Calendar, ArrowRight, Settings2 } from 'lucide-react';
import Button from '../../../components/button';

const DestinationAndDateStep = (props) => {
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3">
            <div className="flex items-center gap-2 flex-1">
                <MapPin className="size-5 text-zinc-400" />
                <input
                    disabled={props.isGuestInputOpen}
                    placeholder="Para onde você vai?"
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                ></input>
            </div>
            <div className="flex items-center gap-2">
                <Calendar className="size-5 text-zinc-400" />
                <input
                    disabled={props.isGuestInputOpen}
                    placeholder="Quando?"
                    className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
                ></input>
            </div>

            <div className="w-px h-6 bg-zinc-800 " />

            {!props.isGuestInputOpen ? (
                <Button
                    variant={'primary'}
                    onClick={() => props.setIsGuestInputOpen(true)}
                >
                    Continuar
                    <ArrowRight className="text-lime-950 size-5" />
                </Button>
            ) : (
                <Button onClick={() => props.setIsGuestInputOpen(false)}>
                    Alterar local/data
                    <Settings2 className="text-zinc-400 size-5" />
                </Button>
            )}
        </div>
    );
};

export default DestinationAndDateStep;

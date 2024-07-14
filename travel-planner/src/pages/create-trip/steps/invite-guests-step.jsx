import React from 'react';
import { ArrowRight, UserRoundPlus } from 'lucide-react';
import Button from '../../../components/button';

const InviteGuestsStep = (props) => {
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3">
            <button
                onClick={() => props.setIsGuestModalOpen(true)}
                type="button"
                className="flex items-center gap-2 flex-1"
            >
                <UserRoundPlus className="size-5 text-zinc-400" />
                {props.invitedUsers.length > 0 ? (
                    <span className="bg-transparent text-lg text-zinc-100 outline-none flex-1 text-left">
                        {`${props.invitedUsers.length} pessoa(s) convidada(s)`}
                    </span>
                ) : (
                    <span className="bg-transparent text-lg text-zinc-400 outline-none flex-1 text-left">
                        Quem estará na viagem?
                    </span>
                )}
            </button>

            <div className="w-px h-6 bg-zinc-800 " />

            <Button
                variant={'primary'}
                onClick={() => props.setIsConfirmTriptModalOpen(true)}
            >
                Confirmar Viagem
                <ArrowRight className="text-lime-950 size-5" />
            </Button>
        </div>
    );
};

export default InviteGuestsStep;

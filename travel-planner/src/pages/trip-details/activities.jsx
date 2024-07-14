import React from 'react';
import { Plus, CircleCheck } from 'lucide-react';
import Button from '../../components/button';

const Activities = (props) => {
    return (
        <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-semibold">Atividades</h2>
                <Button
                    onClick={() => props.setIsCreateActivityModalOpen(true)}
                    variant={true}
                >
                    Cadastrar Atividade
                    <Plus className="text-lime-950 size-5" />
                </Button>
            </div>

            <div className="space-y-8">
                <div className="space-y-2.5">
                    <div className="flex gap-2 items-baseline">
                        <span className="text-zinc-300 text-xl font-semibold">
                            Dia 17
                        </span>
                        <span className="text-zinc-500 text-xs">Sábado</span>
                    </div>
                    <p className="text-zinc-500 text-sm">
                        Nenhuma atividade cadastrada nessa data.
                    </p>
                </div>

                <div className="space-y-2.5">
                    <div className="flex gap-2 items-baseline">
                        <span className="text-zinc-300 text-xl font-semibold">
                            Dia 18
                        </span>
                        <span className="text-zinc-500 text-xs">Domingo</span>
                    </div>
                    <div className="space-y-2.5">
                        <div className="px-4 py-2.5 bg-zinc-900 rounded-xl flex items-center gap-2">
                            <CircleCheck className="size-5 text-lime-300" />
                            <span className="text-zinc-100">
                                Academia em Grupo
                            </span>
                            <span className="text-zinc-400 text-sm ml-auto">
                                8:00h
                            </span>
                        </div>
                    </div>
                    <div className="space-y-2.5">
                        <div className="px-4 py-2.5 bg-zinc-900 rounded-xl flex items-center gap-2">
                            <CircleCheck className="size-5 text-lime-300" />
                            <span className="text-zinc-100">
                                Academia em Grupo
                            </span>
                            <span className="text-zinc-400 text-sm ml-auto">
                                8:00h
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activities;

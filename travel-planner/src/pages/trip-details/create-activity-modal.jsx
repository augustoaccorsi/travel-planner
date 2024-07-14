import React from 'react';
import { X, Tag, Calendar } from 'lucide-react';
const CreateActivityModal = (props) => {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[640px] rounded-xl py-5 px-6 bg-zinc-900 space-y-5">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">
                            Cadastrar a Atividade
                        </h2>
                        <button
                            onClick={() =>
                                props.setIsCreateActivityModalOpen(false)
                            }
                        >
                            <X className="size-5 text-zinc-400"></X>
                        </button>
                    </div>
                    <p className="text-sm text-zinc-400">
                        Todos convidados podem visualizar as atividades.
                    </p>
                </div>

                <form className="items-center gap-2 space-y-3">
                    <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center flex-1 gap-2">
                        <Tag className="text-zinc-400 size-5" />
                        <input
                            name="atividade"
                            type="text"
                            placeholder="Qual a atividade?"
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="h-14 px-4 rounded-lg flex items-center flex-1 gap-2 bg-zinc-950 border border-zinc-800">
                            <Calendar className="text-zinc-400 size-5" />
                            <input
                                name="occursAt"
                                type="datetime-local"
                                placeholder="Data e horário da atividade"
                                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-lime-300 text-lime-950 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-lime-400 w-full text-center justify-center"
                    >
                        Salvar Atividade
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateActivityModal;

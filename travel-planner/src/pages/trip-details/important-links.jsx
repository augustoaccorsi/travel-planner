import React from 'react';
import { Plus, Link2 } from 'lucide-react';
import Button from '../../components/button';

const ImportantLinks = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">Links Importantes</h2>
            <div className="space-y-5">
                <div className="items-center justify-between gap-4 flex">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">
                            Reserva do Airbnb
                        </span>
                        <a
                            href="#"
                            className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
                        >
                            http://airbnb.com/hahhahahahahahahahahahahahahksjdksjdksjdksjdksjdksjdsj
                        </a>
                    </div>
                    <Link2 className="text-zinc-400 size-5 shrink-0" />
                </div>
                <div className="items-center justify-between gap-4 flex">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">
                            Reserva do Airbnb
                        </span>
                        <a
                            href="#"
                            className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
                        >
                            http://airbnb.com/hahhahahahahahahahahahahahahksjdksjdksjdksjdksjdksjdsj
                        </a>
                    </div>
                    <Link2 className="text-zinc-400 size-5 shrink-0" />
                </div>
            </div>
            <Button size={'large'}>
                <Plus className="size-5" />
                Cadastrar novo link
            </Button>
        </div>
    );
};

export default ImportantLinks;

import { MapPin, Calendar, ArrowRight } from 'lucide-react';

function App() {
    return (
        <div className="bg-zinc-950 text-zinc-50 antialiased bg-patter bg-no-repeat bg-center">
            <div className="h-screen flex items-center justify-center">
                <div className="max-w-3xl w-full px-6 text-center space-y-10">
                    <div className="flex flex-col items-center gap-3">
                        <img src="/logo.svg" alt="planner"></img>
                        <p className="text-zinc-300 text-lg">
                            Convide seus amigos e planeje sua próxima viagem!
                        </p>
                    </div>

                    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3">
                        <div className="flex items-center gap-2 flex-1">
                            <MapPin className="size-5 text-zinc-400" />
                            <input
                                placeholder="Para onde você vai?"
                                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                            ></input>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="size-5 text-zinc-400" />
                            <input
                                placeholder="Quando?"
                                className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
                            ></input>
                        </div>

                        <div className="w-px h-6 bg-zinc-800 " />

                        <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                            Continuar
                            <ArrowRight className="text-lime-950 size-5" />
                        </button>
                    </div>

                    <p className="text-zinc-500 text-sm">
                        Ao planejar sua viagem pela plann.er você
                        automaticamente concorda <br /> com nossos{' '}
                        <a className="text-zinc-300 underline" href="#">
                            termos de uso
                        </a>{' '}
                        e{' '}
                        <a className="text-zinc-300 underline" href="#">
                            políticas de privacidade
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;

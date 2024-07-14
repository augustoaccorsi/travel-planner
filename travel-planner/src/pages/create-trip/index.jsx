import {
    MapPin,
    Calendar,
    ArrowRight,
    UserRoundPlus,
    Settings2,
} from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InviteGuestsModal from './invite-guests-modal';
import ConfirmTripModal from './confirm-trip-modal';

const CreateTrip = () => {
    const navigate = useNavigate();

    const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
    const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
    const [invitedUsers, setInvitedUsers] = useState([]);
    const [isConfirmTriptModalOpen, setIsConfirmTriptModalOpen] =
        useState(false);

    const handleAddInvetedUser = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const userEmail = data.get('email').toString();

        if (!userEmail || invitedUsers.includes(userEmail)) {
            return;
        }

        setInvitedUsers([...invitedUsers, userEmail]);
        event.currentTarget.reset();
    };

    const handleRemoveInvited = (indexToRemove) => {
        setInvitedUsers(
            invitedUsers.filter((_, index) => indexToRemove !== index)
        );
    };

    const createTrip = () => {
        navigate('/trips/123');
    };

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

                    <div className="space-y-4">
                        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3">
                            <div className="flex items-center gap-2 flex-1">
                                <MapPin className="size-5 text-zinc-400" />
                                <input
                                    disabled={isGuestInputOpen}
                                    placeholder="Para onde você vai?"
                                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                                ></input>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="size-5 text-zinc-400" />
                                <input
                                    disabled={isGuestInputOpen}
                                    placeholder="Quando?"
                                    className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
                                ></input>
                            </div>

                            <div className="w-px h-6 bg-zinc-800 " />

                            {!isGuestInputOpen ? (
                                <button
                                    className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
                                    onClick={() => setIsGuestInputOpen(true)}
                                >
                                    Continuar
                                    <ArrowRight className="text-lime-950 size-5" />
                                </button>
                            ) : (
                                <button
                                    onClick={() => setIsGuestInputOpen(false)}
                                    className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700"
                                >
                                    Alterar local/data
                                    <Settings2 className="text-zinc-400 size-5" />
                                </button>
                            )}
                        </div>

                        {isGuestInputOpen ? (
                            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3">
                                <button
                                    onClick={() => setIsGuestModalOpen(true)}
                                    type="button"
                                    className="flex items-center gap-2 flex-1"
                                >
                                    <UserRoundPlus className="size-5 text-zinc-400" />
                                    {invitedUsers.length > 0 ? (
                                        <span className="bg-transparent text-lg text-zinc-100 outline-none flex-1 text-left">
                                            {`${invitedUsers.length} pessoa(s) convidada(s)`}
                                        </span>
                                    ) : (
                                        <span className="bg-transparent text-lg text-zinc-400 outline-none flex-1 text-left">
                                            Quem estará na viagem?
                                        </span>
                                    )}
                                </button>

                                <div className="w-px h-6 bg-zinc-800 " />

                                <button
                                    className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
                                    onClick={() =>
                                        setIsConfirmTriptModalOpen(true)
                                    }
                                >
                                    Confirmar Viagem
                                    <ArrowRight className="text-lime-950 size-5" />
                                </button>
                            </div>
                        ) : null}
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

            {isGuestModalOpen && (
                <InviteGuestsModal
                    setIsGuestModalOpen={setIsGuestModalOpen}
                    invitedUsers={invitedUsers}
                    handleRemoveInvited={handleRemoveInvited}
                    handleAddInvetedUser={handleAddInvetedUser}
                />
            )}

            {isConfirmTriptModalOpen && (
                <ConfirmTripModal
                    setIsConfirmTriptModalOpen={setIsConfirmTriptModalOpen}
                    handleAddInvetedUser={handleAddInvetedUser}
                    createTrip={createTrip}
                />
            )}
        </div>
    );
};

export default CreateTrip;

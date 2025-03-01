import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InviteGuestsModal from './invite-guests-modal';
import ConfirmTripModal from './confirm-trip-modal';
import DestinationAndDateStep from './steps/destination-and-date-step';
import InviteGuestsStep from './steps/invite-guests-step';
import { api } from '../../lib/axios';

const CreateTrip = () => {
    const navigate = useNavigate();

    const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
    const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
    const [invitedUsers, setInvitedUsers] = useState([
        'tom.delonge@blink-182.com',
        'mark.hoppus@blink-182.com',
        'travis.barker@blink-182.com',
    ]);
    const [isConfirmTriptModalOpen, setIsConfirmTriptModalOpen] =
        useState(false);

    const [destination, setDestination] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [ownerEmail, setOwnerEmail] = useState('');
    const [eventStartAndEndDates, setEventStartAndEndDates] =
        useState(undefined);

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

    const createTrip = async (event) => {
        event.preventDefault();

        if (
            !eventStartAndEndDates?.to ||
            !eventStartAndEndDates?.from ||
            ownerEmail === '' ||
            ownerName === '' ||
            destination === ''
        ) {
            return;
        }

        const response = await api.post('/trips', {
            destination,
            starts_at: eventStartAndEndDates.to,
            ends_at: eventStartAndEndDates.to,
            emails_to_invite: invitedUsers,
            owner_name: ownerName,
            owner_email: ownerEmail,
        });

        const { tripId } = response.data;

        navigate(`/trips/${tripId}`);
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
                        <DestinationAndDateStep
                            setDestination={setDestination}
                            isGuestInputOpen={isGuestInputOpen}
                            setIsGuestInputOpen={setIsGuestInputOpen}
                            setEventStartAndEndDates={setEventStartAndEndDates}
                            eventStartAndEndDates={eventStartAndEndDates}
                        />
                        {isGuestInputOpen ? (
                            <InviteGuestsStep
                                setIsGuestModalOpen={setIsGuestModalOpen}
                                invitedUsers={invitedUsers}
                                setIsConfirmTriptModalOpen={
                                    setIsConfirmTriptModalOpen
                                }
                            />
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
                    createTrip={createTrip}
                    setOwnerName={setOwnerName}
                    setOwnerEmail={setOwnerEmail}
                />
            )}
        </div>
    );
};

export default CreateTrip;

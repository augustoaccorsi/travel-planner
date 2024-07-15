import React, { useEffect, useState } from 'react';
import { CircleCheck, UserCog, CircleDashed } from 'lucide-react';
import Button from '../../components/button';
import { useParams } from 'react-router-dom';
import { api } from '../../lib/axios';

const Guests = () => {
    const { tripId } = useParams();
    const [guests, setGuests] = useState([]);

    const fetchData = () => {
        api.get(`/trips/${tripId}/participants`).then((response) =>
            setGuests(response.data?.participants)
        );
    };

    useEffect(() => {
        fetchData();
    }, [tripId]);

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">Convidados</h2>
            <div className="space-y-5">
                {guests &&
                    guests.map((guest, index) => (
                        <div
                            key={index}
                            className="items-center justify-between gap-4 flex"
                        >
                            <div className="space-y-1.5">
                                <span className="block font-medium text-zinc-100">
                                    {guest.name}
                                </span>
                                <span className="block text-sm text-zinc-400 truncate">
                                    {guest.email}
                                </span>
                            </div>
                            {guest.is_confirmed ? (
                                <CircleCheck className="size-5 shrink-0  text-lime-300" />
                            ) : (
                                <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                            )}
                        </div>
                    ))}
            </div>
            <Button size={'large'}>
                <UserCog className="size-5" />
                Gerenciar Convidados
            </Button>
        </div>
    );
};

export default Guests;

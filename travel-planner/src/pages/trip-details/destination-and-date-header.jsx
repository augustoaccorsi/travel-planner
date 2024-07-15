import React, { useEffect, useState } from 'react';
import { MapPin, Calendar, Settings2 } from 'lucide-react';
import Button from '../../components/button';
import { useParams } from 'react-router-dom';
import { api } from '../../lib/axios';
import { format } from 'date-fns';

const formatFullDate = (startsAt, endsAt) => {
    return format(new Date(startsAt), "d' de 'LLLL")
        .concat(' até ')
        .concat(format(new Date(endsAt), "d' de 'LLLL"));
};

const DestinationAndDateHeader = () => {
    const { tripId } = useParams();
    const [trip, setTrip] = useState([]);

    const fetchData = () => {
        api.get(`/trips/${tripId}`).then((response) =>
            setTrip({
                ...response.data.trip,
                fullDate: formatFullDate(
                    response.data.trip.starts_at,
                    response.data.trip.ends_at
                ),
            })
        );
    };

    useEffect(() => {
        fetchData();
    }, [tripId]);

    return (
        <div className="px-4 h-16 rounded-xl bg-zinc-900 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <MapPin className="size-5 text-zinc-400" />
                <span className="text-zinc-100">{trip.destination}</span>
            </div>
            <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                    <Calendar className="size-5 text-zinc-400" />
                    <span className="text-zinc-100">{trip.fullDate}</span>
                </div>

                <div className="w-px h-6 bg-zinc-800 " />
                <Button onClick={() => alert()} variant={false}>
                    Alterar local/data
                    <Settings2 className="text-zinc-400 size-5" />
                </Button>
            </div>
        </div>
    );
};

export default DestinationAndDateHeader;

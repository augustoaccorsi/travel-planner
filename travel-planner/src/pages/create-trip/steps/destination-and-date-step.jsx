import React, { useState } from 'react';
import { MapPin, Calendar, ArrowRight, Settings2, X } from 'lucide-react';
import Button from '../../../components/button';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const DestinationAndDateStep = (props) => {
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

    const displayedDate =
        props.eventStartAndEndDates &&
        props.eventStartAndEndDates.from &&
        props.eventStartAndEndDates.to
            ? format(props.eventStartAndEndDates.from, "d' de 'LLL")
                  .concat(' até ')
                  .concat(format(props.eventStartAndEndDates.to, "d' de 'LLL"))
            : null;

    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3">
            <div className="flex items-center gap-2 flex-1">
                <MapPin className="size-5 text-zinc-400" />
                <input
                    onChange={(event) =>
                        props.setDestination(event.target.value)
                    }
                    disabled={props.isGuestInputOpen}
                    placeholder="Para onde você vai?"
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                ></input>
            </div>

            <button
                onClick={() => setIsDatePickerOpen(true)}
                disabled={props.isGuestInputOpen}
                className="flex items-center gap-2 text-left w-[220px]"
            >
                <Calendar className="size-5 text-zinc-400" />
                <span className="text-lg text-zinc-400 w-40 flex-1">
                    {displayedDate ? displayedDate : 'Quando?'}
                </span>
            </button>

            {isDatePickerOpen && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
                    <div className="rounded-xl py-5 px-6 bg-zinc-900 space-y-5">
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold">
                                    Selecione a Data
                                </h2>
                                <button
                                    onClick={() => setIsDatePickerOpen(false)}
                                >
                                    <X className="size-5 text-zinc-400" />
                                </button>
                            </div>
                        </div>

                        <DayPicker
                            mode="range"
                            selected={props.eventStartAndEndDates}
                            onSelect={props.setEventStartAndEndDates}
                        />
                    </div>
                </div>
            )}

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

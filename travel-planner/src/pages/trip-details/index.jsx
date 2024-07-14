import React, { useState } from 'react';
import CreateActivityModal from './create-activity-modal';
import ImportantLinks from './important-links';
import Guests from './guests';
import Activities from './activities';
import DestinationAndDateHeader from './destination-and-date-header';

const TripDetails = () => {
    const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
        useState(false);

    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
            <DestinationAndDateHeader />

            <main className="flex ga-16 px-4 space-x-16">
                <Activities
                    setIsCreateActivityModalOpen={setIsCreateActivityModalOpen}
                />

                <div className="w-80 space-y-6">
                    <ImportantLinks />
                    <div className="w-full h-px bg-zinc-800" />
                    <Guests />
                </div>
            </main>

            {isCreateActivityModalOpen && (
                <CreateActivityModal
                    setIsCreateActivityModalOpen={setIsCreateActivityModalOpen}
                />
            )}
        </div>
    );
};

export default TripDetails;

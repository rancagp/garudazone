import React from 'react';
import Footer from '../footer';

const Highlightsection = () => {
    const videoHighlights = [
        {
            title: "Highlight 1",
            link: "https://www.youtube.com/embed/4F2oOGDyWeY?si=XJ8eVmyP4vwdUgMb&rel=0&autoplay=0&mute=1",
        },
        {
            title: "Highlight 2",
            link: "https://www.youtube.com/embed/eEy6cR3zIgg?si=5U4WoS8KQt1qBow7&rel=0&autoplay=0&mute=1",
        },
        {
            title: "Highlight 3",
            link: "https://www.youtube.com/embed/To8cGxmSTiE?si=gxvWFVNHoXfcvvhu&rel=0&autoplay=0&mute=1",
        },
        {
            title: "Highlight 4",
            link: "https://www.youtube.com/embed/h2Rs6u41nIg?si=glKyv22E2aqBxWIW&rel=0&autoplay=0&mute=1",
        },
    ];

    return (
        <>
            <div className="py-24 bg-gray-300">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Highlight Videos</h2>
                    <div className="flex justify-between gap-2 snap-x snap-mandatory">
                        {videoHighlights.map((video, index) => (
                            <div
                                key={index}
                                className="max-w-[280px] bg-white shadow-md rounded-lg snap-start overflow-hidden flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                            >
                                <div className="w-full h-48">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        className="embed-responsive-item"
                                        src={video.link}
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-700">
                                        {video.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Highlightsection;

import React from 'react';
import Footer from '../footer';

const Highlightsection = () => {
    const videoHighlights = [
        {
            title: "Highlight 1",
            thumbnail: "/images/timnas14.jpeg",
            link: "https://www.example.com/video1",
        },
        {
            title: "Highlight 2",
            thumbnail: "/images/timnas14.jpeg",
            link: "https://www.example.com/video2",
        },
        {
            title: "Highlight 3",
            thumbnail: "/images/timnas14.jpeg",
            link: "https://www.example.com/video3",
        },
        {
            title: "Highlight 4",
            thumbnail: "/images/timnas14.jpeg",
            link: "https://www.example.com/video4",
        },
    ];

    return (
        <>
            <div className="py-24 bg-gray-300">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Highlight Videos</h2>
                    <div className="flex overflow-x-auto space-x-4 snap-x snap-mandatory">
                        {videoHighlights.map((video, index) => (
                            <div
                                key={index}
                                className="min-w-[300px] bg-white shadow-md rounded-lg snap-start overflow-hidden flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                            >
                                <a href={video.link} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-700">
                                            {video.title}
                                        </h3>
                                    </div>
                                </a>
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

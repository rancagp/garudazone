import Button from "@/Components/Button";
import Navbar from "@/Components/navbar";
import React, { useState, useEffect } from 'react';
import { usePage, Link } from "@inertiajs/react";
import { Head } from "@inertiajs/react";

const MatchStatus = ({status, children}) => {
    const statusColor = status === 'live' ? 'text-green-500' : 'text-gray-800';
    return(
         <p className={`${statusColor} font-extrabold`}>{children}</p>
       )
}

const TeamInfo = ({match}) => {
   return (
         <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
                 <img
                      src={match.home_team_flag ? match.home_team_flag.replace('/storage', '/storage') : '/images/no-image.png'}
                      alt={match.home_team_name}
                      className="w-20"
                    />
                     <span>{match.home_team_name}</span>
                  </div>
             {match.status === 'live' ? (
                <div className="border flex gap-2 px-4 py-2 mx-4">
                     <span>{match.home_score}</span>
                      <span>-</span>
                      <span>{match.away_score}</span>
               </div>
                ) : (<span className="mx-4">vs</span>
              )}
            <div className="flex flex-col items-center">
                <img
                   src={match.away_team_flag ? match.away_team_flag.replace('/storage', '/storage') : '/images/no-image.png'}
                     alt={match.away_team_name}
                     className="w-20"
                  />
                <span>{match.away_team_name}</span>
              </div>
          </div>
     )
}


export default function Match({ matches, nearestMatches, scheduledMatches }) {
    const [activePage, setActivePage] = useState(1);

    const formatMatchTime = (date, time) => {
        const [hours, minutes, seconds] = time.split(':');
        const matchDate = new Date(date);
        matchDate.setHours(parseInt(hours, 10));
        matchDate.setMinutes(parseInt(minutes, 10));
        matchDate.setSeconds(parseInt(seconds, 10));
        return matchDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    }


    return (
        <>
            <Navbar />
             <Head title="Match" />

            {/* Card Pertandingan Terdekat (Live/Scheduled Terdekat) */}
            {nearestMatches && nearestMatches.length > 0 && (
                <div className="grid w-3/4 shadow-lg mx-auto mt-4">
                    {nearestMatches.map((match) => (
                        <div key={match.id}>
                             <div className="grid text-center gap-4 p-5 font-extrabold">
                                  <MatchStatus status={match.status}>
                                        {match.competition}
                                   </MatchStatus>
                                   <TeamInfo match={match}/>
                              </div>
                              <div className="grid border p-4 bg-slate-100/50">
                                  <div className="flex items-center justify-center gap-1">
                                       <span className="text-4xl font-extrabold">{new Date(match.match_date).getDate()}</span>
                                         <div className="grid">
                                              <span>{new Date(match.match_date).toLocaleString('default', { month: 'short' })}</span>
                                              <span className="-mt-2">{new Date(match.match_date).getFullYear()}</span>
                                         </div>
                                     </div>
                                      <p className="text-center font-extrabold">
                                          {match.stadium}, {match.location}
                                      </p>
                                  </div>
                                   <div className="grid text-center p-4">
                                      {match.status === 'live' ? (
                                          <p className="text-green-500 font-extrabold">LIVE</p>
                                       ) : (
                                         <p>{new Date(match.match_date).toLocaleString('en-US', { weekday: 'long' })}, {new Date(match.match_date).toLocaleString('default', { month: 'long' })} {new Date(match.match_date).getDate()} {new Date(match.match_date).getFullYear()} | {formatMatchTime(match.match_date, match.match_time)}</p>
                                       )}
                                   </div>
                           </div>
                      ))}
                </div>
           )}

            {/* Card Jadwal Pertandingan (Scheduled Lainnya) */}
             {scheduledMatches && scheduledMatches.length > 0 && (
                    <div className="grid w-3/4 shadow-lg mx-auto mt-4">
                       <div className="grid text-center gap-4 p-5">
                           <p className="font-extrabold">PERTANDINGAN AKAN DATANG</p>
                          </div>
                      {scheduledMatches.map((match) => (
                             <div key={match.id} className="grid text-center bg-slate-100/50 p-4 border gap-4">
                                    <p className="text-red-500 text-center font-extrabold">
                                          {match.competition}
                                        </p>
                                        <div className="flex items-center justify-center">
                                            <div className="flex items-center gap-2">
                                                 <span>{match.home_team_name}</span>
                                                  <img
                                                      src={match.home_team_flag ? match.home_team_flag.replace('/storage', '/storage') : '/images/no-image.png'}
                                                        alt={match.home_team_name}
                                                        className="w-10"
                                                     />
                                               </div>
                                                <div className="border flex gap-2 px-4 py-2">
                                                   <span>VS</span>
                                                </div>
                                            <div className="flex items-center gap-2">
                                                   <img
                                                    src={match.away_team_flag ? match.away_team_flag.replace('/storage', '/storage') : '/images/no-image.png'}
                                                       alt={match.away_team_name}
                                                       className="w-10"
                                                    />
                                               <span>{match.away_team_name}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center gap-2">
                                            <img
                                                src="https://www.pssi.org/assets/img/stadion.png"
                                                alt="stadion"
                                                  className="w-5"
                                            />
                                          <span className="text-xs">{match.stadium}, {match.location}</span>
                                      </div>
                                         <div className="grid text-center p-4">
                                            <p>{new Date(match.match_date).toLocaleString('en-US', { weekday: 'long' })}, {new Date(match.match_date).toLocaleString('default', { month: 'long' })} {new Date(match.match_date).getDate()} {new Date(match.match_date).getFullYear()} | {formatMatchTime(match.match_date, match.match_time)}</p>
                                     </div>
                                </div>
                         ))}
                     </div>
             )}


            {/* Card Hasil Pertandingan (tanpa Pagination) */}
            <div className="grid w-3/4 shadow-lg mx-auto my-4">
                <div className="grid text-center gap-4 p-5">
                    <p className="font-extrabold">HASIL PERTANDINGAN</p>
                </div>
                {matches && matches.map((match) => (
                    <div key={match.id} className="grid text-center bg-slate-100/50 p-4 border gap-4">
                        <p className="text-red-500 text-center font-extrabold">
                            {match.competition}
                        </p>
                         <div className="flex items-center justify-center gap-2">
                            <div className="flex items-center gap-2">
                                <span>{match.home_team_name}</span>
                                 <img
                                     src={match.home_team_flag ? match.home_team_flag.replace('/storage', '/storage') : '/images/no-image.png'}
                                      alt={match.home_team_name}
                                       className="w-10"
                                    />
                                </div>
                                <div className="border flex gap-2 px-4 py-2">
                                    <span>{match.home_score}</span>
                                    <span>-</span>
                                    <span>{match.away_score}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                     <img
                                          src={match.away_team_flag ? match.away_team_flag.replace('/storage', '/storage') : '/images/no-image.png'}
                                        alt={match.away_team_name}
                                           className="w-10"
                                    />
                                    <span>{match.away_team_name}</span>
                                </div>
                             </div>
                            <div className="flex items-center justify-center gap-2">
                                <img
                                    src="https://www.pssi.org/assets/img/stadion.png"
                                    alt="stadion"
                                     className="w-5"
                                />
                                <span className="text-xs">{match.stadium}, {match.location}</span>
                            </div>
                            <div className="grid text-center p-4">
                                <p>{new Date(match.match_date).toLocaleString('en-US', { weekday: 'long' })}, {new Date(match.match_date).toLocaleString('default', { month: 'long' })} {new Date(match.match_date).getDate()} {new Date(match.match_date).getFullYear()} | {formatMatchTime(match.match_date, match.match_time)}</p>
                             </div>
                      </div>
                    ))}
            </div>
             <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>© 2024 GarudaZone. All rights reserved.</p>
                    <div className="mt-2">
                        <a
                            href="https://www.example.com"
                            className="text-gray-400 hover:text-white mx-2"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="https://www.example.com"
                            className="text-gray-400 hover:text-white mx-2"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}
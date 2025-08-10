import React from 'react';

const leaderboard = [
  {
    name: "Lena Harper",
    sport: "Swimming",
    image: "https://i.ibb.co/ymtC3GhK/athlete-1.jpg"
  },
  {
    name: "Derek Mason",
    sport: "Tennis",
    image: "https://i.ibb.co/mCKmj3nt/athlete-2.jpg"
  },
  {
    name: "Carlos Vento",
    sport: "Volleyball",
    image: "https://i.ibb.co/QF4SQ4X0/athlete-3.jpg"
  },
  {
    name: "Maya Collins",
    sport: "Cycling",
    image: "https://i.ibb.co/zTkf15cP/athlete-4.jpg"
  },
  {
    name: "Jamal Brooks",
    sport: "Basketball",
    image: "https://i.ibb.co/cS88gdnv/athlete-5.jpg"
  },
  {
    name: "Ethan Ward",
    sport: "Running",
    image: "https://i.ibb.co/ynfZWLrC/athlete-6.jpg"
  },
  {
    name: "David Huge",
    sport: "Tennis",
    image: "https://i.ibb.co/pF8HbBq/athlete-7.jpg"
  },
  {
    name: "Natalie Fox",
    sport: "Volleyball",
    image: "https://i.ibb.co/PzJg9HGN/athlete-8.jpg"
  }
];



const TopPlayer = () => {
    return (
        <div className="bg-red-50 dark:bg-gray-800  px-5  md:px-1 py-14">
              <div className="w-full md:max-w-1/3 mx-auto text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-semibold mb-5">
                  Top Athlete of the month
                </h2>
                <p className="text-lg font-medium text-base-content">
                  Our top performer with highest record for the current month.
                </p>
              </div>
              <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                {
                    leaderboard.map((player)=> <div className='flex flex-col gap-1 items-center '>
                    <img src={player.image} alt="" className='mb-4 border border-gray-200 rounded-t-2xl shadow-sm' />
                    <h3 className='text-lg font-semibold'>{player.name}</h3>
                    <h3 className='text-sm text-gray-500 dark:text-gray-200'>{player.sport}</h3>
                    </div>)
                }
              </div>
            </div>
    );
};

export default TopPlayer;
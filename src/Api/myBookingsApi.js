export const myBookingsPromise = (email, accessToken) => {
  return fetch(
    `https://assignment-11-sport-sync-server.vercel.app/event-bookings/?email=${email}`,
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }
  ).then((res) => res.json());
};

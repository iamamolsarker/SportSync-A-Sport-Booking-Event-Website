export const manageMyEventsPromise = (email, accessToken) => {
  return fetch(
    `https://assignment-11-sport-sync-server.vercel.app/events/private/?email=${email}`,
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }
  ).then((res) => res.json());
};

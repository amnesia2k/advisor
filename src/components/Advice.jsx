// import useSWR, { mutate } from "swr";

// const fetcher = (url) => fetch(url).then((res) => res.json());

// const Advice = () => {
//   const { data, error } = useSWR("https://api.adviceslip.com/advice", fetcher, {
//     revalidateOnFocus: false, // Disable auto re-fetching on window focus
//     revalidateOnReconnect: false, // Disable auto re-fetching on network reconnect
//     refreshInterval: 0, // Disable polling
//   });
//   console.log(data, error);

//   if (error) return <div>Failed to fetch data</div>;
//   if (!data) return <div>Loading, please wait...</div>;

//   const adv = data.slip;
//   console.log(adv);
//   return (
//     <div>
//       <h1>{adv.advice}</h1>
//       <button
//         onClick={() => {
//           mutate();
//         }}
//       >
//         Get Advice
//       </button>
//     </div>
//   );
// };

// export default Advice;

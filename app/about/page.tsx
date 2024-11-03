import React from 'react';

function AboutPage() {
  return (
    <section>
      <h1 className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl'>
        We love
        <span className='bg-primary py-2 rounded-lg tracking-widest text-white'>
          store
        </span>
      </h1>
    </section>
  );
}

export default AboutPage;

// import db from '@/utils/db';

// async function AboutPage() {
//   const profile = await db.testProfile.create({
//     data: {
//       name: 'random name',
//     },
//   });
//   const users = await db.testProfile.findMany();

//   return (
//     <div>
//       {users.map((user) => {
//         return (
//           <h2 key={user.id} className='text-2xl font-bold'>
//             {user.name}
//           </h2>
//         );
//       })}
//     </div>
//   );
// }
// export default AboutPage;

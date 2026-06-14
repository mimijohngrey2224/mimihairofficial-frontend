
// import React, { useContext } from 'react';
// import EcomContext from '../../context/EcomContext';


// function Profile() {
//     const { user } = useContext(EcomContext);
//     if (!user) {
//        return <p>You are not logged in.</p>; 
//     }
//   return (
//     <div className=''>
//             <h2 className='font-bold'>Profile Page</h2>
//         <div>
//             <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
//             <p><strong>Email:</strong>{user.email}</p>
//             <p><strong>Phone:</strong> {user.phone}</p>
//         </div>
//     </div>
//   )
// }

// export default Profile


// import React, { useContext } from 'react';
// import EcomContext from '../../context/EcomContext';
// import avatar from '../../assets/avatar.png';

// function Profile() {
//   const { user } = useContext(EcomContext);

//   if (!user) {
//     return (
//       <div className="min-h-[60vh] flex items-center justify-center text-gray-600">
//         <p className="text-lg font-semibold">You are not logged in.</p>
//       </div>
//     );
//   }

//   return (
//     <section className="relative my-10 mx-6 rounded-xl overflow-hidden">

//       {/* 🌿 Forest Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-gray-900" />
//       <div className="absolute inset-0 bg-black/40" />

//       {/* CONTENT */}
//       <div className="relative z-10 flex justify-center px-6 py-12">
//         <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-8 max-w-md w-full">

//           {/* Avatar */}
//           <div className="flex flex-col items-center mb-6">
//             <img
//               src={user.profileImage || avatar}
//               alt="User Avatar"
//               className="w-24 h-24 rounded-full object-cover border-4 border-pink-500"
//             />
//             <h2 className="mt-4 text-2xl font-extrabold text-gray-800">
//               {user.firstName} {user.lastName}
//             </h2>
//             <p className="text-sm text-gray-500">My Profile</p>
//           </div>

//           {/* User Info */}
//           <div className="space-y-4 text-gray-700 text-lg">
//             <div className="flex justify-between border-b pb-2">
//               <span className="font-semibold">Email</span>
//               <span>{user.email}</span>
//             </div>

//             <div className="flex justify-between border-b pb-2">
//               <span className="font-semibold">Phone</span>
//               <span>{user.phone}</span>
//             </div>
//           </div>

//           {/* Actions */}
//           <div className="mt-8 flex justify-center">
//             <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-full transition">
//               Edit Profile
//             </button>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Profile;


import React, { useContext, useState } from 'react';
import EcomContext from '../../context/EcomContext';
import avatar from '../../assets/avatar.png';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const { user, setUser } = useContext(EcomContext);
  const [profileImage, setProfileImage] = useState(user?.profileImage || null);
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-gray-600">
        <p className="text-lg font-semibold">You are not logged in.</p>
      </div>
    );
  }

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        setUser({ ...user, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="relative my-10 mx-6 rounded-xl overflow-hidden">

      {/* 🌿 Forest Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-gray-900" />
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 flex justify-center px-6 py-12">
        <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-8 max-w-md w-full">

          {/* Avatar */}
          <div className="flex flex-col items-center mb-6">
            <img
              src={profileImage || avatar}
              alt="User Avatar"
              className="w-24 h-24 rounded-full object-cover border-4 border-pink-500 mb-2"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="text-sm text-gray-500"
            />
            <h2 className="mt-4 text-2xl font-extrabold text-gray-800">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-sm text-gray-500">My Profile</p>
          </div>

          {/* User Info */}
          <div className="space-y-4 text-gray-700 text-lg">
            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Email</span>
              <span>{user.email}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Phone</span>
              <span>{user.phone}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col items-center gap-4">
            {/* Go back to Signup if user wants to correct info */}
            <button
              onClick={() => navigate('/signup')}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-2 rounded-full transition"
            >
              Correct Signup Info
            </button>

            {/* Go to login page after profile is complete */}
            {/* <button
              onClick={() => navigate('/login')}
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-full transition"
            >
              Proceed to Login
            </button> */}
            
            {/* Go to Dashboard */}
            <button
              onClick={() => navigate('/dashboard')}
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-full transition"
            >
              Go to Dashboard
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Profile;


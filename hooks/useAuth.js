// import { useState , useEffect} from "react";

// const useAuth = ()=> {
//     const [user, setUser] = useState(null)

//     useEffect(()=>{
//         const fetchUser = async()=>{
//             const token = localStorage.getItem("auth-token")
//             if (token) {
//                 try {
//                     const res = await fetch("http://localhost:3000/api/auth/user", {
//                         method: "GET",
//                         headers: {
//                             "Content-Type": "application/json",
//                             "auth-token": `${localStorage.getItem("auth-token")}`
//                         }
//                     })

//                     if (!res.ok) {
//                         throw new Error("Failed to fetch user information")
//                     }
//                     const data = await res.json()
//                     setUser(data)
//                 } catch (error) {
//                     console.log("Erro fetching user information", error);
//                     localStorage.removeItem("auth-token")
                    
//                 }
//             }
//         }

//         fetchUser()
//     }, [])
//     return user
// }

// export default useAuth



import { useState, useEffect } from "react";

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("auth-token");
      if (!token) return;

      try {
        const res = await fetch("http://localhost:3000/api/auth/user", {
          headers: {
            "Content-Type": "application/json",
            "auth-token": token,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch user information");
        }

        const data = await res.json();
        console.log("Fetched user:", data); // 👈 you’ll see this now
        setUser(data);
      } catch (error) {
        console.error("Error fetching user info:", error);
        localStorage.removeItem("auth-token");
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  return user;
};

export default useAuth;

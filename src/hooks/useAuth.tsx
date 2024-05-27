import { useState } from "react";
import { collection, db, query, where, getDocs, auth } from "../firebase.ts";

export const useAuth = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async (usersId: string) => {
    console.log(usersId);
    const usersRef = collection(db, "users");
    const q = query(
      usersRef,
      where("username", "==", `${auth.currentUser?.email}`)
    );
    const response = await getDocs(q);
    const data = response.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setUsers(data[0]);
  };

  return { users, fetchUsers };
};

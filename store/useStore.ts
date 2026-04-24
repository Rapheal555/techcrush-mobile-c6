import { create } from "zustand";




const useStore = create((set) => ({
  user: { name:  "", email:  "", age: 0 },
  name: "",
  setName: (name: string) => set({ name }),
  setUser: (newUser: { name: ""; email: ""; age: 0 }) => set({ user: newUser }),

  // setUser:
}));




// ((set) => ({

//     // state
//   user: { name: "", email: "", age: 0 },
//   // Actions to update state
//   setUser: (newUser: { name: ""; email: ""; age: 0 }) => set({ user: newUser }),
  
// }));

export default useStore;

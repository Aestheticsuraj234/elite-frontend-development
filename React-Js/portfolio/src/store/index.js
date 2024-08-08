import { create } from "zustand";


export const useStore = create((set) => ({
    name: "",
    email: "",
    tel: null,

    setName: (newName) => set(() => ({ name: newName })),
    setEmail: (newEmail) => set(() => ({ email: newEmail })),
    setTel: (newTel) => set(() => ({ tel: newTel })),
}))


export const useGithubStore = create((set) => ({
    githubUser: null,
    loading: false,
    error: null,

    setGithubUser: async (username) => {
        set({ loading: true, error: null })
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            if (!response.ok) {
                throw new Error("User not found")
            }
            const data = await response.json()
            set({ githubUser: data, loading: false, error: null })


        } catch (error) {
            set({ error: error.message, loading: false })
        }
        finally {
            set({ loading: false })

        }
    },
    resetGithubUser: () => set({ githubUser: null, error: null }),

}))
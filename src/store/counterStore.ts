import { create } from 'zustand';

interface Post {
    id: number,
    title: string,
    body: string
}

interface CounterState {
    count: number,
    title: string,
    increment: (value: number) => void,
    post: Post[],
    getPosts: () => Promise<void>,
    clearStore: () => void,
    multiply: (value: number) => void
}

export const useCounterStore = create<CounterState>((set, get) => ({
    count: 10,
    title: 'Some title',
    post: [],
    increment: (value: number) =>  set(state => ({
        count: state.count + value
    })),
    getPosts: async () => {
        const post = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
        set(state => ({
            ...state,
            post
        }))
    },
    clearStore: () => {
        set({
            count: 0,
            title: "",
            post: []
        })
    },
    multiply: (value: number) => {
        const { count } = get()
        set({ count: count * value })
    }
}))
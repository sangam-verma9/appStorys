import { create } from 'zustand';

const store = create((set, get) => ({
    requestDemoClick: false,
    setRequestDemoClick: (requestDemoClick) => set({ requestDemoClick }),

    reset: () => set({
        requestDemoClick: '',
    }),

    getFormData: () => {
        const state = get();
        return {
            requestDemoClick: state.requestDemoClick,
        };
    }
}));

export default store;
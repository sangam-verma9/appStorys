import { create } from 'zustand';

const store = create((set, get) => ({
    // Existing state
    requestDemoClick: false,
    setRequestDemoClick: (requestDemoClick) => set({ requestDemoClick }),

    // New state for contact modal
    isContactModalOpen: false,
    openContactModal: () => set({ isContactModalOpen: true }),
    closeContactModal: () => set({ isContactModalOpen: false }),

    // Reset function - update to include new state
    reset: () => set({
        requestDemoClick: false,
        isContactModalOpen: false,
    }),

    // Get form data - update to include new state if needed
    getFormData: () => {
        const state = get();
        return {
            requestDemoClick: state.requestDemoClick,
            // Add any other form-related state here if needed
        };
    }
}));

export default store;
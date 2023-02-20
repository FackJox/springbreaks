import { create } from 'zustand'
import { Router } from "next/router";
import { devtools, persist } from "zustand/middleware";

export const useStore = create()(
	devtools(
		// Optional persist
		// This saves Zustand state when you close browser
		// Good in some cases, but not in others, especially prototyping
		// persist(

		(set) => ({
			// We keep the NextJS router in state because it's undefined in most components
			router: null,
			setRouter: (router) =>
				set((state) => ({
					...state,
					router,
				})),

            springbreakText: false,
            setSpringbreakText: (springbreakText) =>
            set((state) => ({
                ...state,
                springbreakText,
            })),

            caveraveText: false,
            setCaveraveText: (caveraveText) =>
            set((state) => ({
                ...state,
                caveraveText,
            })),

            gumballText: false,
            setGumballText: (gumballText) =>
            set((state) => ({
                ...state,
                gumballText,
            })),


			// Add any default values for app-wide state here
			// e.g. game start logic, points/score, etc
			// gameStarted: true,
			// points: 100,
		})

		// END: Optional persist
		// )
	)
);

export default useStore;

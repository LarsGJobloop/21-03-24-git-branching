import {create} from 'zustand'

export const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1})),
  exterminateAllBears: () => set(() => ({bears: 0})),
}))



// Example from vanilla javascript
/**
 * @param {(state: (addition: number) => number) => void} callback 
 */
// function higherOrderFunction(callback) {
//   const internalState = (addition) => {
//     return 10 + addition
//   }
//   callback(internalState)
// }

// higherOrderFunction(
//   (state) => {}
// )
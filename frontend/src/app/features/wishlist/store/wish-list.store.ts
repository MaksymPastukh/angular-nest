// import { HttpErrorResponse } from '@angular/common/http'
// import { inject } from '@angular/core'
// import { tapResponse } from '@ngrx/operators'
// import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'
// import { RxMethod, rxMethod } from '@ngrx/signals/rxjs-interop'
// import { pipe, switchMap, tap } from 'rxjs'
// import { WishListStateInterface } from '../domain/interfaces/wish-list-state.interface'

// type LoadKind = 'list' | 'submit' | 'my'

// const initialState: WishListStateInterface = {
//   // TODO: initial state
// }

// export const StoreName = signalStore(
//   { providedIn: 'root' },
//   withState(initialState),
//   withComputed((store) => ({
//     // TODO: computed
//   })),
//   withMethods((store, api = inject(ServiceName)) => {
//     const setPending = (kind: LoadKind = 'list'): void => {
//       if (kind === 'list') patchState(store, { isLoading: true, error: null } as any)
//       if (kind === 'my') patchState(store, { isLoadingMy: true } as any)
//       if (kind === 'submit') patchState(store, { isSubmitting: true, error: null } as any)
//     }

//     const stop = (kind: LoadKind = 'list'): void => {
//       if (kind === 'list') patchState(store, { isLoading: false } as any)
//       if (kind === 'my') patchState(store, { isLoadingMy: false } as any)
//       if (kind === 'submit') patchState(store, { isSubmitting: false } as any)
//     }

//     const setFailure = (message: string): void => {
//       patchState(store, { error: { message } } as any)
//     }

//     const getErrorMessage = (error: unknown): string => {
//       if (!(error instanceof HttpErrorResponse)) return 'Произошла ошибка'
//       const apiMessage: unknown = (error.error as { message?: unknown })?.message
//       if (typeof apiMessage === 'string') return apiMessage
//       if (Array.isArray(apiMessage)) return apiMessage.join(' ')
//       return error.message ?? `Request failed with status ${'$'}{error.status}.`
//     }

//     const load: RxMethod<void> = rxMethod<void>(
//       pipe(
//         tap(() => setPending('list')),
//         switchMap(() =>
//           api.request().pipe(
//             tapResponse({
//               next: (res) => {
//                 // patchState(store, {...)}
//               },
//               error: (e) => setFailure(getErrorMessage(e)),
//               finalize: () => stop('list'),
//             })
//           )
//         )
//       )
//     )

//     return {
//       load,
//     }
//   })
// )

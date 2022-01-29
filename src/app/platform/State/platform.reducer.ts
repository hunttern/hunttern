import { createReducer, on } from "@ngrx/store";
import { setLoading, setClassicPattern, setCandlePattern, setHarmonicPattern, setInput } from "./platform.action";
import { initialPlatformState, iPlatformState } from "./platform.state";

export function PlatformReducer(state: iPlatformState,action: any){
    return _platformReducer(state,action);
}

const _platformReducer = createReducer(initialPlatformState,
    on(setInput, (state,action) => {
        return{
            ...state,
            inputs: {zigzag: action.zigzag,prediction: action.prediction, sensitivity: action.sensitivity, error: action.error}
        }
    }),
    on(setHarmonicPattern, (state,action) => {
        return {
            ...state,
            harmonicPatterns: action.patterns
        }
    }),
    on(setCandlePattern, (state,action) => {
        return {
            ...state,
            harmonicPatterns: action.patterns
        }
    }),
    on(setClassicPattern, (state,action) => {
        return {
            ...state,
            harmonicPatterns: action.patterns
        }
    }),
    on(setLoading, (state,action) => {
        return {
            ...state,
            loading: action.status
        }
    })

)
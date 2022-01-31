import { createAction, props } from "@ngrx/store";

export const SET_INPUT = '[platform] set inputs';

export const SET_HARMONIC_PATTERNS = '[platform] set harmonic patterns';
export const SET_CANDLE_PATTERNS = '[platform] set candle patterns';
export const SET_CLASSIC_PATTERNS = '[platform] set classic patterns';

export const ADD_TO_SCREENER = '[platform] add position';
export const REMOVE_FROM_SCREENER = '[platform] remove position';

export const GET_WATHCLIST = '[platform] get watchlists';
export const ADD_WATHCLIST = '[platform] add watchlist';
export const ADD_SYMBOL_WATHCLIST = '[platform] add symbol to watchlist';   
export const DELETE_WATHCLIST = '[platform] delete watchlist';
export const DELETE_SYMBOL_WATHCLIST = '[platform] delete symbol to watchlist';
export const UPDATE_WATHCLIST = '[platform] update watchlist';

export const SET_LOADING = '[platform] set loading status';

export const setInput = createAction(SET_INPUT,props<{zigzag: boolean,prediction: boolean,sensitivity: number, error: number}>());

export const setHarmonicPattern = createAction(SET_HARMONIC_PATTERNS,props<{patterns: string[]}>());
export const setCandlePattern = createAction(SET_CANDLE_PATTERNS,props<{patterns: string[]}>());
export const setClassicPattern = createAction(SET_CLASSIC_PATTERNS,props<{patterns: string[]}>());

export const addToScreener = createAction(ADD_TO_SCREENER,props<{position: {id: number, symbol: string,type: 'long' | 'short', timeFrame: string, entry: number, tp: number, sl: number, data: Date}}>())
export const removeFromScreener = createAction(REMOVE_FROM_SCREENER, props<{id: number}>());

export const getWatchlist = createAction(GET_WATHCLIST);
export const addWatchlist = createAction(ADD_WATHCLIST,props<{name: string, coins: string[]}>());
export const deleteWatchlist = createAction(DELETE_WATHCLIST,props<{name: string}>());
export const updateWatchlist = createAction(UPDATE_WATHCLIST,props<{name: string, coins: string[]}>());
export const addSymbol = createAction(ADD_SYMBOL_WATHCLIST,props<{name: string}>());
export const deleteSymbol = createAction(DELETE_SYMBOL_WATHCLIST,props<{name: string}>());

export const setLoading = createAction(SET_LOADING, props<{status: boolean}>());
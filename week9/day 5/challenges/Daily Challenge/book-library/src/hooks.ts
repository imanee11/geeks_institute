import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './app/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = useSelector as <TSelected>(selector: (state: RootState) => TSelected) => TSelected;

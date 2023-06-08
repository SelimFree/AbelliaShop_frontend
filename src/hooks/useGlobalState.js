import { useContext } from "react";
import { globalStateContext, dispatchStateContext } from '../App';

const useGlobalState = () => [
    useContext(globalStateContext),
    useContext(dispatchStateContext)
];

export default useGlobalState;
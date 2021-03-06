import { IGeneralDebugFunctions } from './functions/general';
import { ITwoProngDebugFunctions } from './functions/two-prong';
import { IThreeProngDebugFunctions } from './functions/three-prong';
import { TDrawElemFunctions } from './functions/draw-elem/draw-elem';
import { IDebugElems } from './debug-elem-types';
/** @hidden */
interface Debug {
    /** Generated by debug object for later inspection */
    generated: Generated;
    /**
     * These functions are meant to be used in the console, e.g. in the
     * console try typing d.fs.twoProng.traceConvergence(0);
     */
    fs: IDebugFunctions;
    directives: IDirectives;
}
/** @hidden */
declare type GeneratedElems = {
    [T in keyof IDebugElems]: IDebugElems[T][];
};
/** @hidden */
interface ITiming {
    normalize: number;
    simplifyPaths: number;
    holeClosers: number;
    oneAnd2Prongs: number;
    threeProngs: number;
    sats: number;
    simplifyMat: number;
}
/** @hidden */
interface Generated {
    elems: GeneratedElems;
    timing: ITiming;
}
/** @hidden */
interface IDebugFunctions extends IGeneralDebugFunctions {
    twoProng: ITwoProngDebugFunctions;
    threeProng: IThreeProngDebugFunctions;
    drawElem: TDrawElemFunctions;
}
/** @hidden */
interface IDirectives {
    stopAfterHoleClosers: boolean;
    stopAfterHoleClosersNum: number;
    stopAfterTwoProngs: boolean;
    stopAfterTwoProngsNum: number;
    stopAfterThreeProngs: boolean;
    stopAfterThreeProngsNum: number;
}
declare function enableDebugForMat(debugOn: boolean): void;
export { Debug, GeneratedElems, ITiming, Generated, IDebugFunctions, IDirectives, enableDebugForMat };

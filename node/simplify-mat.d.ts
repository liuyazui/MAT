import { Mat } from "./mat";
/**
 * Simplifies the given MAT by replacing the piecewise quad beziers composing
 * the MAT with fewer ones to within a given tolerance.
 * @param cpNode A representation of the MAT
 * @param anlgeTolerance Tolerance given as the degrees difference of the unit
 * direction vectors at the interface between curves. A tolerance of zero means
 * perfect smoothness is required - defaults to 15.
 * @param hausdorffTolerance The approximate maximum Hausdorff Distance tolerance -
 * defaults to 0.1
 * @param hausdorffSpacing The spacing on the curves used to calculate the Hausdorff
 * Distance - defaults to 1
 */
declare function simplifyMat(mat: Mat, anlgeTolerance?: number, hausdorffTolerance?: number, hausdorffSpacing?: number): Mat;
export { simplifyMat };

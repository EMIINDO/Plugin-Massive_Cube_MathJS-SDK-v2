"use strict";

{
	globalThis.C3.Plugins.Massive_Cube_MathJS.Exps =
	{
		mathEval(str)
		{
			return this.matheval(str);
		},
		mathRound(float,numdigits) {
			return this.mathrnd(float,numdigits);
		},
		mathDerivative(str1,str2) {
			return this.mathder(str1,str2);
		},
		mathForm(val,type) {
			return this.mathformat(val,type);
		},
		mathFraction(val) {
			return this.mtFrac(val);
		}
	};
}
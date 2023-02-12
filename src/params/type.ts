import type { ParamMatcher } from '@sveltejs/kit';

let regex = /^(movie|tv)$/i;
 
export const match = ((param : any) => {
  return regex.test(param);
}) satisfies ParamMatcher;
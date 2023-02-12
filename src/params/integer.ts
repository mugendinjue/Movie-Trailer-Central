import type { ParamMatcher } from '@sveltejs/kit';
 
export const match = ((param : any) => {
  return /^\d+$/.test(param);
}) satisfies ParamMatcher;
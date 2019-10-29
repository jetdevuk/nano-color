export const rgb = (r:Number,g:Number,b:Number) : string => `\x1b[38;2;${r};${g};${b}m`
export const reset = () : string => '\x1b[0m';
export const mix = (c:string,m:string)=>c+m+reset()
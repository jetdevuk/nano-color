/**
 * RGB string generator for use in the mix function
 * @param {Number} r - RGB red value
 * @param {Number} g - RGB green value
 * @param {Number} b - RGB blue value
 * 
 * @returns string - ANSI RGB string
 */
export const rgb = (r:Number,g:Number,b:Number) : string => `\x1b[38;2;${r};${g};${b}m`
/**
 * Reset terminal color to default
 * @returns string - ANSI reset string
 */
export const reset = () : string => '\x1b[0m';
/**
 * Mixes a color with a message and a reset, allowing easy mixing
 * @param {string} c - Color string from rgb function
 * @param {string} m - Message
 * 
 * @returns string - Combined RGB string
 */
export const mix = (c:string,m:string)=>c+m+reset()
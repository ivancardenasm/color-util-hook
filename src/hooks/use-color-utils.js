const MAXIMUM_COLOR_DEGREES = 360;

const useColorUtils = () => {

    /**
     * Convert a color in HSL format to hexadecimal format.
     * @param {int} h - A degree value in the color wheel from 0 to 360.
     * @param {int} s - A percentage value that represent the saturation of the color.
     * @param {int} l - A percentage value that represent the lightness of the color.
     * @returns {String} - The color in hexadecimal format.
     */
    const hslToHex = (h, s, l) => {
        l /= 100;
        const a = s * Math.min(l, 1 - l) / 100;
        const f = n => {
            const k = (n + h / 30) % 12;
            const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
            return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
        };
        return `#${f(0)}${f(8)}${f(4)}`;
    };

    /**
     * Get a list of n hexadecimal colors with the maximum separation in the color wheel.
     * @param {Object} obj - Arguments of the function.
     * @param {Object} obj.n - Number of wanted colors.
     * @param {Object} obj.saturation - Percentage that represents the saturation of the colors.
     * @param {Object} obj.lightness - Percentage that represents the lightness of the colors.
     * @returns {Array} - A array object with n colors in hexadecimal.
     */
    const getHexColorList = ({n, saturation=60, lightness=75}) => {
        const colorSeparation = MAXIMUM_COLOR_DEGREES / n;
        return Array.from({length: n}, (x, i) => this.hslToHex(colorSeparation + colorSeparation * i, saturation, lightness));
    };

    return {
        getHexColorList,
        hslToHex,
    };
};

export default useColorUtils;

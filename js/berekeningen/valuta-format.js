/**
 * Number.prototype.format(n, x)
 *
 * @param integer n: length of decimal
 * @param integer x: length of whole part
 */
Number.prototype.format = function(n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = this.toFixed(Math.max(0, ~~n));

    return "\u20AC" + ('.' ? num.replace('.', '.') : num).replace(new RegExp(re, 'g'), '$&' + (',' || ','));
};

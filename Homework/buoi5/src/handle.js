export function formatNumbersAsCode(s) {
    let groupDigits = 0
    let tmp = ""
    try {
        for (i = s.length - 1; i >= 0; --i) {
            tmp = s.charAt(i) + tmp;
            ++groupDigits;
            if (groupDigits == 3 && i > 0) {
                tmp = "." + tmp;
                groupDigits = 0;
            }
        }
        return tmp;
    } catch (error) {
        return error.toString();
    }
}

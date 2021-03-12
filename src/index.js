module.exports = function check(str, bracketsConfig) {
    let configArray = bracketsConfig.map((i) => i[0] + i[1]);

    let currentStr = str;

    while (true) {
        for (let i = 0; i < configArray.length; i++) {
            str = str.replace(configArray[i], "");
        }

        if (str.length == 0) {
            return true;
        }

        if (currentStr === str) {
            return false;
        }

        currentStr = str;
    }
};

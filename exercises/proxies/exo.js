let traps = {
    get(target, key) {
        if (typeof target[key] === 'string') {
            return target[key].replace(/[\W]/g, '');
        }
        return target[key];
    },
    set(target, key, val) {
        if (typeof val == "string") {
            val = val.toLowerCase();
            if (target.indexOf(val) == -1) {
                target.push(val.toLowerCase());
            }
        }
        return true;
    }
};

module.exports = {traps};
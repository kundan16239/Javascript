function RunCallback(a, b, cb) {
    let result = a + b;
    return cb(result);
    // Write you code here, you need to add a and b, pass the result into callback function cb as argument return the result
}

module.exports = RunCallback;

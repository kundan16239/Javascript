function CreateObject(arr) {
    var Object = {};
    var arr;
    for (var i = 0; i < arr.length; i += 2) {
        Object[arr[i]] = arr[i + 1]
    }
    return Object
}

module.exports = CreateObject;
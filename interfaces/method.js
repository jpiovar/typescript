function userNameStandard(input) {
    return { wholeName: input.name + " " + input.surname };
}
var userNameConst = function (input) {
    return ({ wholeName: input.name + " " + input.surname });
};

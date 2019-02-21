interface InfoInput {
    name: string;
    surname: string;
}
type InfoOutput = {
    wholeName: string;
};
function userNameStandard(input: InfoInput): InfoOutput {
    return { wholeName: `${input.name} ${input.surname}` };
}
const userNameConst = (input: InfoInput): InfoOutput =>
    ({ wholeName: `${input.name} ${input.surname}` });
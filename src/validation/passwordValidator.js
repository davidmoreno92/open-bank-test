const validatePassword = (password) => {
    let regularExpression = /^(?=.{8,24}$)(?=[^A-Z]*[A-Z])(?=\D*\d)/;
    return regularExpression.test(password);
};

export default validatePassword;
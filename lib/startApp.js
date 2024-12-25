const startApp = (fn, ...args) => {
    // Output parameters 
    const parameter = {};
    // Function result output
    const output = fn(...args);
    // Equating an argument with a value
    parameter.output = output;
    // Rerutn parameters
    return parameter
};

export default startApp;

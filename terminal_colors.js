export const colors = () => {
    const color = {};

    // Colors code for terminal
    let fontColorRed = '\x1b[31m';
    let fontColorGreen = '\x1b[32m';
    let resetFontColor = '\x1b[0m';

    // Output parametrs for coloring and styling text in terminal
    color.red = fontColorRed;
    color.green = fontColorGreen;
    color.reset = resetFontColor;
    return color;
}
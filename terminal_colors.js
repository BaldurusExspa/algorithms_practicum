export const colors = () => {
    const color = {};

    // Colors code for terminal
    let fontColorRed = '\x1b[31m';
    let fontColorGreen = '\x1b[32m';
    let fontColorWhite = '\x1b[97m'
    let resetFontColor = '\x1b[0m';

    // Output parametrs for coloring and styling text in terminal
    // Red color
    color.red = fontColorRed;
    // Green color
    color.green = fontColorGreen;
    // White Color
    color.white = fontColorWhite;
    // Reset color and styles
    color.reset = resetFontColor;
    return color;
}
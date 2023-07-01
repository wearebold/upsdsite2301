
export default defineNuxtPlugin(async () => {
    if ('paintWorklet' in CSS) {
        await CSS.paintWorklet.addModule('/js/corner-circles-painter.js');
    }
});
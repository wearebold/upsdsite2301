
export default defineNuxtPlugin(async () => {
    if ('paintWorklet' in CSS) {
        await CSS.paintWorklet.addModule('/js/border-lines-painter.js');
    }
});
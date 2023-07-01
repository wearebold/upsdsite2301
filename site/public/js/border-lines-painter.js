registerPaint('borderLines', class {
    static get inputProperties() { return []; }
    
    paint(ctx, size) {
        const lineWidth = 1;
        
        // Drawing the top line
        ctx.beginPath();
        ctx.moveTo(0, -lineWidth);
        ctx.lineTo(size.width, -lineWidth);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = lineWidth;
        ctx.stroke();
        
        // Drawing the bottom line
        ctx.beginPath();
        ctx.moveTo(0, size.height + lineWidth);
        ctx.lineTo(size.width, size.height + lineWidth);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = lineWidth;
        ctx.stroke();
    }
});

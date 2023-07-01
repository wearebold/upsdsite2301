registerPaint('cornerCircles', class {
    static get inputProperties() { return []; }

    paint(ctx, size) {
        const radius = 6;
        const positions = [
            {x: radius, y: radius},
            {x: size.width - radius, y: radius},
            {x: radius, y: size.height - radius},
            {x: size.width - radius, y: size.height - radius}
        ];

        ctx.fillStyle = 'red';

        positions.forEach(pos => {
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, radius, 0, 2 * Math.PI);
            ctx.fill();
        });
    }
});

Surfaces.prototype.hyperbolicParaboloid = (count = 20) => {
    const points = [];
    const edges = [];
    const polygons = [];

    // z = x^2 - y^2; 
    //print points
    const size = 10;
    const delta = size / count;
    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
            const x = i * delta - size / 2;
            const y = j * delta - size / 2
            const z = x * x / 2 - y * y / 2;
            points.push(new Point(x, y, z))
        }
    }

    //print edges

    for(let i = 0; i < points.length; i++) {
        if(i + 1 < points.length && (i + 1) % count !== 0) {
            edges.push(new Edge(i, i + 1))
        }
        if(i + count < points.length){
            edges.push(new Edge(i, i + count    ))

        }
        //print polygons
        if(i + 1 + count < points.length &&  (i + 1) % count !== 0)  {
            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count ]))

        }
    }

   
    return new Subject(points, edges, polygons);
}
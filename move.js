
let sceneEl = document.querySelector("a-scene");
let dBalls = [] // Array of the balls we are about to create
let orbitalRadius = 1.2
let cycle = 0 // Track angular revolution of balls

// create small sphere
for (let i=0; i < 7; i++){
    let db = document.createElement('a-sphere');
    let ang = i * 2 * Math.PI / (7) // Calculate angular position of the ball
    // Use entity.setAttribute to change a certain value
    db.setAttribute('geometry', {
        radius: 0.2
    })
    // Some nice trig to get the ball in the right position

    db.setAttribute('position', {
        x: orbitalRadius * Math.cos(ang), 
        y: 0.5, 
        z: orbitalRadius * Math.sin(ang) - 4
    })
      
    db.setAttribute('material', {
        color: 'orange'
    })

    sceneEl.appendChild(db)
    dBalls.push(db);

    // Grab the red ball that we created in HTML
    let ball = sceneEl.querySelector('#ball')

    // Radius of the ball
    let rad = 0.1
    // Stores whether the ball is currently growing or shrinking
    let sign = 1
    let timer = setInterval(() => {
        rad += (0.005 * sign) // Either increase or decrease the radius of the ball

        ball.setAttribute('geometry', {
          radius: rad
        })
        
        // If radius is above/below threshold then flip sign
        if(rad >= 1.2 || rad <= 0.1) {
          sign *= -1
        }
        
        // Rotate the dragon balls
        dBalls.forEach((d, ind) => {
          let ang = cycle + (ind * 2 * 3.14159 / (7))
          d.setAttribute('position', {
            x: orbitalRadius * Math.cos(ang), 
            y: 0.5, 
            z: orbitalRadius * Math.sin(ang) - 4
          })
    });
    cycle += 0.01
    }, 50)

}



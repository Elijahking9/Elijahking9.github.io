$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(400,650,200,20,"red");
    createPlatform(800,550,200,20,"red");
    createPlatform(425,425,200,20,"red");
    createPlatform(200,300,200,20,"red");
    createPlatform(1200,450,200,20,"red");
    createPlatform(900,320,200,20,"red");
    createPlatform(650,225,200,20,"red");




    // TODO 3 - Create Collectables
    createCollectable("steve", 500, 610, 1, 0.7);
    createCollectable("steve", 900, 510, 1, 0.7);
    createCollectable("steve", 525, 385, 1, 0.7);
    createCollectable("steve", 300, 260, 1, 0.7);
    createCollectable("steve", 1300, 410, 1, 0.7);
    createCollectable("steve", 1000, 280, 1, 0.7);
    createCollectable("steve", 750, 185, 1, 0.7);



    
    // TODO 4 - Create Cannons
    createCannon("right", 600, 2400)
    createCannon("bottom", 700, 2400)
    createCannon("right", 375, 2400)
    createCannon("left", 600, 2400)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

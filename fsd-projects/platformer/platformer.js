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
    createPlatform(300,630,200,20, "teal");
    createPlatform(900,630,200,20, "teal");
    createPlatform(600,550,200,20, "teal");
    createPlatform(1000,500,200,20, "teal");
    createPlatform(750,395,50,20, "teal");
    createPlatform(450,270,150,20, "teal");



    // TODO 3 - Create Collectables
    createCollectable("diamond", 510, 230, 0.1, 1.00);
    createCollectable("diamond", 755, 350, 0.1, 1.00);
    createCollectable("diamond", 400, 650, 0.5, 1.00);



    
    // TODO 4 - Create Cannons
    createCannon("top", 900, 1200 )
    createCannon("right", 530, 1200)
    createCannon("left", 150, 1200)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

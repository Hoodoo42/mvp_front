Created skeleton directory for mvp_front

creating my first full js game. As it is only the very beginning I plan on there being many many changes and trial and error as I go.  

My Notes:
phaser.js is the fully/commented out version of phaser.min js, and wont be used for production.
phaser.min.js is the phaser framework


ONE SCENE PHASER 

<!-- there are more methods however these three are the main ones needed. -->
scene: {
    preload: preload, 
    create: create,
    update: update
}

MULTISCENE PHASER. multiple scenes essentially make the code modular. breaks up the code into categroized sections instead of one "page" so we send an array in, 
<!-- each scene will have to be added into the script tags in the html for access. -->
scene: [
    OneScene, 
    TwoScene, 
    ThreeScene,
    FourScene
    ],
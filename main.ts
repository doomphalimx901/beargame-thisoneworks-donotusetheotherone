namespace SpriteKind {
    export const foe = SpriteKind.create()
    export const oposition = SpriteKind.create()
    export const bad = SpriteKind.create()
    export const healing = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.oposition, function (sprite, otherSprite) {
    statusbar.value += -50
    sprites.destroy(fred)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump < 1) {
        jump += 1
        mySprite.setVelocity(0, -200)
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        jump = 0
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.healing, function (sprite, otherSprite) {
    for (let index = 0; index < 6; index++) {
        statusbar.value += 10
    }
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile8`)
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 0, function (status) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile13, function (sprite, location) {
    statusbar.value += -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bad, function (sprite, otherSprite) {
    statusbar.value += -50
    sprites.destroy(bob)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile9, function (sprite, location) {
    statusbar.value += -1
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.foe, function (sprite, otherSprite) {
    statusbar.value += -50
    sprites.destroy(jeff)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -50
    sprites.destroy(urf)
})
let statusbar: StatusBarSprite = null
let jump = 0
let mySprite: Sprite = null
let mySprite2: Sprite = null
let bob: Sprite = null
let fred: Sprite = null
let jeff: Sprite = null
let urf: Sprite = null
music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.LoopingInBackground)
urf = sprites.create(img`
    . . . . . c c c c c c c . . . . 
    . . . . c 7 7 7 7 7 7 7 c . . . 
    . . . c 7 7 7 7 7 7 7 7 7 c . . 
    . . c 7 7 7 f 7 7 f 7 7 7 c . . 
    . . c 7 7 7 7 7 7 7 7 7 7 c . . 
    . . f 7 7 1 f f 1 7 7 7 7 f . . 
    . . f 7 7 1 f f 1 7 7 7 7 f . . 
    . . . 7 7 2 2 2 2 7 7 7 7 f . . 
    . . c c 7 2 2 2 2 7 7 7 7 c . . 
    . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
    c 7 7 7 7 7 7 7 7 7 c 7 7 7 7 c 
    f 7 7 7 7 7 7 7 7 c c 7 7 7 c c 
    f 7 7 7 7 7 7 7 7 c 7 7 7 c . . 
    f 6 7 7 7 7 7 7 7 7 7 7 7 c . . 
    . f 6 7 7 7 7 7 7 7 7 7 c . . . 
    . . f f c c c c c c c c . . . . 
    `, SpriteKind.Enemy)
jeff = sprites.create(img`
    . . . . . c c c c c c c . . . . 
    . . . . c 7 7 7 7 7 7 7 c . . . 
    . . . c 7 7 7 7 7 7 7 7 7 c . . 
    . . c 7 7 7 f 7 7 f 7 7 7 c . . 
    . . c 7 7 7 7 7 7 7 7 7 7 c . . 
    . . f 7 7 1 f f 1 7 7 7 7 f . . 
    . . f 7 7 1 f f 1 7 7 7 7 f . . 
    . . . 7 7 2 2 2 2 7 7 7 7 f . . 
    . . c c 7 2 2 2 2 7 7 7 7 c . . 
    . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
    c 7 7 7 7 7 7 7 7 7 c 7 7 7 7 c 
    f 7 7 7 7 7 7 7 7 c c 7 7 7 c c 
    f 7 7 7 7 7 7 7 7 c 7 7 7 c . . 
    f 6 7 7 7 7 7 7 7 7 7 7 7 c . . 
    . f 6 7 7 7 7 7 7 7 7 7 c . . . 
    . . f f c c c c c c c c . . . . 
    `, SpriteKind.foe)
fred = sprites.create(img`
    . . . . . c c c c c c c . . . . 
    . . . . c 7 7 7 7 7 7 7 c . . . 
    . . . c 7 7 7 7 7 7 7 7 7 c . . 
    . . c 7 7 7 f 7 7 f 7 7 7 c . . 
    . . c 7 7 7 7 7 7 7 7 7 7 c . . 
    . . f 7 7 1 f f 1 7 7 7 7 f . . 
    . . f 7 7 1 f f 1 7 7 7 7 f . . 
    . . . 7 7 2 2 2 2 7 7 7 7 f . . 
    . . c c 7 2 2 2 2 7 7 7 7 c . . 
    . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
    c 7 7 7 7 7 7 7 7 7 c 7 7 7 7 c 
    f 7 7 7 7 7 7 7 7 c c 7 7 7 c c 
    f 7 7 7 7 7 7 7 7 c 7 7 7 c . . 
    f 6 7 7 7 7 7 7 7 7 7 7 7 c . . 
    . f 6 7 7 7 7 7 7 7 7 7 c . . . 
    . . f f c c c c c c c c . . . . 
    `, SpriteKind.oposition)
bob = sprites.create(img`
    . . . . . c c c c c c c . . . . 
    . . . . c 7 7 7 7 7 7 7 c . . . 
    . . . c 7 7 7 7 7 7 7 7 7 c . . 
    . . c 7 7 7 f 7 7 f 7 7 7 c . . 
    . . c 7 7 7 7 7 7 7 7 7 7 c . . 
    . . f 7 7 1 f f 1 7 7 7 7 f . . 
    . . f 7 7 1 f f 1 7 7 7 7 f . . 
    . . . 7 7 2 2 2 2 7 7 7 7 f . . 
    . . c c 7 2 2 2 2 7 7 7 7 c . . 
    . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
    c 7 7 7 7 7 7 7 7 7 c 7 7 7 7 c 
    f 7 7 7 7 7 7 7 7 c c 7 7 7 c c 
    f 7 7 7 7 7 7 7 7 c 7 7 7 c . . 
    f 6 7 7 7 7 7 7 7 7 7 7 7 c . . 
    . f 6 7 7 7 7 7 7 7 7 7 c . . . 
    . . f f c c c c c c c c . . . . 
    `, SpriteKind.bad)
mySprite2 = sprites.create(assets.image`myImage0`, SpriteKind.healing)
tiles.setCurrentTilemap(tilemap`level`)
tiles.placeOnRandomTile(urf, assets.tile`myTile7`)
tiles.placeOnRandomTile(bob, assets.tile`myTile6`)
tiles.placeOnRandomTile(fred, assets.tile`myTile5`)
tiles.placeOnRandomTile(jeff, assets.tile`myTile4`)
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles14)
tiles.placeOnRandomTile(mySprite2, assets.tile`myTile8`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
jump = 0
mySprite.ay = 300
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(mySprite)

namespace SpriteKind {
    export const yui = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    game.over(false)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    sprite.vy = -300
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile5, function (sprite, location) {
    game.over(true)
})
let mySprite: Sprite = null
game.showLongText("You are in Antarctica", DialogLayout.Center)
game.showLongText("You Gotta find your way out before this Snowstorm gets worse ", DialogLayout.Center)
game.showLongText("Good Luck.....", DialogLayout.Center)
tiles.setTilemap(tiles.createTilemap(hex`6400100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101000000000000000000000000000000000000000001010100000000000000000000000000010001010000010100010101010101010100000000000000000000000000000000010101000000000000000000000000000000000000000000000505050501010000000000000000000000000000000000000001010101000000000000000000000000010101010100010101000101010000000101010100010101000000000000000000000101010000000000010000010100000000000000000000000005010101010101060000000000000000000000010101000001010101010000000000000100000000000101010101010100010401010101010101010001010100010101020201010101010101010100000001010100000101010104040000000000000000050101010101010101010101010101010101010101010101010101010100000001010101010101010101010101010101010001010101010101000101010101010101010303010101010101010101010101010101010101010101010102020202020202010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010103030101010101010101010101010101010101010101010101030303030303030101010101010101`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . 
    . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . 2 . 2 2 . . 2 2 . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . 
    . . . . . . . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . 2 2 2 2 2 . 2 2 2 . 2 2 2 . . . 2 2 2 2 . 2 2 2 . . . . . . . . . . 2 2 2 . . . . . 2 . . 2 2 . . . . . . . . . . . . . 2 2 2 2 2 2 
    . . . . . . . . . . . . 2 2 2 . . 2 2 2 2 2 . . . . . . 2 . . . . . 2 2 2 2 2 2 2 . 2 . 2 2 2 2 2 2 2 2 . 2 2 2 . 2 2 2 . . 2 2 2 2 2 2 2 2 2 . . . 2 2 2 . . 2 2 2 2 . . . . . . . . . . . 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6], TileScale.Sixteen))
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . f f f f . . . . . . . . . . 
    . . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
    . . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
    . . . . . . . f d 1 1 1 1 1 1 1 f . . . . . . . 
    . . . . . . f d d 1 1 1 1 1 1 1 d f . . . . . . 
    . . . . . . f d d d 1 1 1 1 1 1 d f . . . . . . 
    . . . . . . f d d d d d d 1 1 1 d f . . . . . . 
    . . . . . . f b d d d d b f d 1 d f . . . . . . 
    . . . . . . f c b b b d c f d d b f . . . . . . 
    . . . . . . . f c b b 1 1 1 1 1 f . . . . . . . 
    . . . . . . . . f f f f f 1 b 1 f . . . . . . . 
    . . . . . . . . f b 1 1 1 c f b f . . . . . . . 
    . . . . . . . . f f b 1 b 1 f f . . . . . . . . 
    . . . . . . f . f f f b f b f . . . . . . . . . 
    . . . . . . f f f f f f f f . . . . . . . . . . 
    . . . . . . . f f f f f . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, myTiles.tile6)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 500
forever(function () {
    effects.blizzard.startScreenEffect()
    effects.blizzard.startScreenEffect()
})
forever(function () {
    mySprite.x += -0.3
})

namespace SpriteKind {
    export const ghost = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Hero)
})
sprites.onOverlap(SpriteKind.ghost, SpriteKind.ghost, function (sprite, otherSprite) {
    sprite.x += 1
    sprite.y += 1
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchUp, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.greenSwitchDown)
    tiles.setWallAt(location, true)
    tiles.setTileAt(tiles.getTileLocation(15, 12), sprites.dungeon.doorOpenSouth)
    music.powerDown.play()
    info.startCountdown(3)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "left"
    animation.runImageAnimation(
    Hero,
    [img`
. . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e d d 4 . . . . 
. . . f 2 2 2 2 e d d e . . . . 
. . f f 5 5 4 4 f e e f . . . . 
. . f f f f f f f f f f . . . . 
. . . f f f . . . f f . . . . . 
`,img`
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e e f f . . . . 
. . . f 2 2 2 e d d 4 . . . . . 
. . . f 2 2 2 e d d e . . . . . 
. . . f 5 5 4 f e e f . . . . . 
. . . . f f f f f f . . . . . . 
. . . . . . f f f . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d e e e e e f . . . 
. . . f e 4 e d d 4 f . . . . . 
. . . f 2 2 e d d e f . . . . . 
. . f f 5 5 f e e f f f . . . . 
. . f f f f f f f f f f . . . . 
. . . f f f . . . f f . . . . . 
`,img`
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e e f f . . . . 
. . . f 2 2 2 e d d 4 . . . . . 
. . . f 2 2 2 e d d e . . . . . 
. . . f 5 5 4 f e e f . . . . . 
. . . . f f f f f f . . . . . . 
. . . . . . f f f . . . . . . . 
`],
    50,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "down"
    animation.runImageAnimation(
    Hero,
    [img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. f f e 2 f f f f f f 2 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. . f e 4 1 f d d f 1 4 e f . . 
. . . f e 4 d d d d 4 e f e . . 
. . f e f 2 2 2 2 e d d 4 e . . 
. . e 4 f 2 2 2 2 e d d e . . . 
. . . . f 4 4 5 5 f e e . . . . 
. . . . f f f f f f f . . . . . 
. . . . f f f . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f e e 2 2 2 2 2 2 e f f . . 
. f f e 2 f f f f f f 2 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. . f e 4 1 f d d f 1 4 e f . . 
. . e f e 4 d d d d 4 e f . . . 
. . e 4 d d e 2 2 2 2 f e f . . 
. . . e d d e 2 2 2 2 f 4 e . . 
. . . . e e f 5 5 4 4 f . . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . f f f . . . . 
`],
    50,
    true
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.ghost, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 200)
    info.changeScoreBy(7)
})
function MakeGhostRandomTile () {
    ghost_1 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . f f f c 1 1 1 1 1 1 1 f . . . . . . . 
. . . f c 1 1 1 c d 1 1 1 1 1 1 1 f . . . . . . 
. . . f 1 b 1 b 1 b 1 1 1 1 d d d f . . . . . . 
. . . f b f b f f c f 1 1 f c d d f . . . . . . 
. . . . . . f c f 1 1 1 1 1 1 b b f . . . . . . 
. . . . . . . c c b d b 1 b 1 f c f . . . . . . 
. . . . . . . f f f b f b f d f f . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . . . f f f f f f f f f f f . . . . . 
. . . . . . . . . f f f f f c 1 1 1 c f . . . . 
. . . . . . . . . f f f f f 1 b 1 b 1 f . . . . 
. . . . . . . . . . f f f f b f b f b f . . . . 
. . . . . . . . . . . f f f f . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.ghost)
    animation.runImageAnimation(
    ghost_1,
    [img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 f f f f . . . . . 
. . . . . . f f f c d b 1 b c 1 1 1 c f . . . . 
. . . . f c 1 1 1 c b f b f 1 b 1 b 1 f . . . . 
. . . . f 1 b 1 b 1 f f f f b f b f b f . . . . 
. . . . f b f b f f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f . . . . . . . . . . 
. . . . . . . . . . f f f . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . f f f f 1 1 1 1 1 1 b f . . . . . . . 
. . . . f c 1 1 1 c d b 1 b d f f f . . . . . . 
. . . . f 1 b 1 b c b f b f c 1 1 1 c f . . . . 
. . . . f b f b f b f f f f 1 b 1 b 1 f . . . . 
. . . . . . . . . f f f f f f f b f b f . . . . 
. . . . . . . . . . f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . f f f c 1 1 1 1 1 1 1 f . . . . . . . 
. . . f c 1 1 1 c d 1 1 1 1 1 1 1 f . . . . . . 
. . . f 1 b 1 b 1 b 1 1 1 1 d d d f . . . . . . 
. . . f b f b f f c f 1 1 f c d d f . . . . . . 
. . . . . . f c f 1 1 1 1 1 1 b b f . . . . . . 
. . . . . . . c c b d b 1 b 1 f c f . . . . . . 
. . . . . . . f f f b f b f d f f . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . . . f f f f f f f f f f f . . . . . 
. . . . . . . . . f f f f f c 1 1 1 c f . . . . 
. . . . . . . . . f f f f f 1 b 1 b 1 f . . . . 
. . . . . . . . . . f f f f b f b f b f . . . . 
. . . . . . . . . . . f f f f . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . 7 . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . 7 . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . 7 . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . 7 . . f d d d 1 1 1 1 d d d f f . . . . . 
. . . 7 7 . f b d b f d d f b d b f c f . . . . 
. . . 7 7 7 f c d c f 1 1 f c d c f b f . . . . 
. . . . 7 7 f f f b d b 1 b d f f c f . . . . . 
. . . . f c b 1 b c f f f f f f . . . . . . . . 
. . . . f 1 c 1 c 1 f f f f f f . . . . . . . . 
. . . . f d f d f d f f f f f . . . . . . . . . 
. . . . . f . f . f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 1 f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f c d d 1 1 1 1 d d c f f . . . . . 
. . . . . . . f b c f 1 1 f c b f b b f . . . . 
. . . . . . . f f b d b 1 b d f f f f . . . . . 
. . . . . . . . f c b f b f d f . . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . f f f f f f f f f f . . . . . . . . 
. . . . . f c b 1 b c f f f f . . . . . . . . . 
. . . . . . f f b f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 1 f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f c d d 1 1 1 1 d d c f f . . . . . 
. . . . . . . f b c f 1 1 f c b f b b f . . . . 
. . . . . . . f f b d b 1 b d f f f f . . . . . 
. . . . . . . . f c b f b f d f . . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . f f f f f f f f f f . . . . . . . . 
. . . . . f c b 1 b c f f f f . . . . . . . . . 
. . . . . . f f b f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d 1 1 1 1 1 1 d d f . . . . . . 
. . . . . . f b d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f c d b f d d f b d b f . . . . . . 
. . . . . . . f b c f 1 1 f c b f f f . . . . . 
. . . . . . . f f b 1 1 1 1 b c f b c f . . . . 
. . . . . . . . f c d b 1 b d f b b b f . . . . 
. . . . . . . f f f f f f f f f f c f . . . . . 
. . . . . f c b 1 b c f f f f f . . . . . . . . 
. . . . . f 1 b 1 b 1 f f f f . . . . . . . . . 
. . . . . . f f b f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`],
    200,
    true
    )
    tiles.placeOnRandomTile(ghost_1, sprites.dungeon.floorLight0)
    ghost_1.follow(Hero, 50)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction == "up") {
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 4 b 3 2 . . . . . . 
. . . . 4 4 b 2 2 5 5 . . . . . 
. . . . 2 5 b 2 2 3 2 . . . . . 
. . . . a 5 5 2 3 5 5 . . . . . 
. . . . 2 2 4 3 5 5 . . . . . . 
. . . . 5 2 4 2 5 2 5 . . . . . 
. . . . 5 . 2 4 4 5 . . . . . . 
. . . . 5 2 . 5 2 5 . 5 . . . . 
. . . 5 . . . 5 . . . 5 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Hero, 0, -200)
    } else if (direction == "down") {
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . 5 . . 5 . . . . . . 
. . . . 5 . . . . . . . . . . . 
. . . . 5 . 5 . 5 . 5 . . . . . 
. . . . 5 . 4 b 3 2 5 . . . . . 
. . . . 4 4 b 2 2 2 5 . . . . . 
. . . . 2 5 b 2 2 3 2 . . . . . 
. . . . a 5 5 2 3 5 5 . . . . . 
. . . . 2 2 4 3 5 5 . . . . . . 
. . . . . 2 4 2 5 2 . . . . . . 
. . . . . . 3 4 4 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Hero, 0, 200)
    } else if (direction == "left") {
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 4 b 3 2 5 5 2 . . . 
. . . . 4 4 b 2 2 2 5 . . . . . 
. . . . 2 5 b 2 2 3 2 5 . . . . 
. . . . a 5 5 2 3 5 5 . . . . . 
. . . . 2 2 4 3 5 5 . 5 5 . . . 
. . . . . 2 4 2 5 2 . 2 . . . . 
. . . . . . 3 4 4 5 5 . 5 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Hero, -200, 0)
    } else {
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 5 . 5 5 5 4 b 3 2 . . . . . . 
. . . 2 4 4 b 2 2 2 . . . . . . 
. . 5 5 2 5 b 2 2 3 2 . . . . . 
. 5 . . a 5 5 2 3 5 5 . . . . . 
. . . 5 2 2 4 3 5 5 . . . . . . 
. . 5 2 4 2 4 2 5 2 . . . . . . 
. 5 . . 5 5 3 4 4 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Hero, 200, 0)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "right"
    animation.runImageAnimation(
    Hero,
    [img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . 4 d d e 4 4 4 e f . . . 
. . . . e d d e 2 2 2 2 f . . . 
. . . . f e e f 4 4 5 5 f f . . 
. . . . f f f f f f f f f f . . 
. . . . . f f . . . f f f . . . 
`,img`
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . f f e e 4 4 4 e f . . . 
. . . . . 4 d d e 2 2 2 f . . . 
. . . . . e d d e 2 2 2 f . . . 
. . . . . f e e f 4 5 5 f . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e e e d d d f . . . 
. . . . . f 4 d d e 4 e f . . . 
. . . . . f e d d e 2 2 f . . . 
. . . . f f f e e f 5 5 f f . . 
. . . . f f f f f f f f f f . . 
. . . . . f f . . . f f f . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e e e d d d f . . . 
. . . . . f 4 d d e 4 e f . . . 
. . . . . f e d d e 2 2 f . . . 
. . . . f f f e e f 5 5 f f . . 
. . . . f f f f f f f f f f . . 
. . . . . f f . . . f f f . . . 
`,img`
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . f f e e 4 4 4 e f . . . 
. . . . . 4 d d e 2 2 2 f . . . 
. . . . . e d d e 2 2 2 f . . . 
. . . . . f e e f 4 5 5 f . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f . . . . . . 
`],
    50,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ghost, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 200)
    info.changeLifeBy(-1)
})
info.onCountdownEnd(function () {
    for (let index = 0; index < 20; index++) {
        MakeGhostRandomTile()
    }
    scene.cameraShake(4, 500)
    music.siren.play()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "up"
    animation.runImageAnimation(
    Hero,
    [img`
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . f f f f f 2 2 f f f f f . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f 2 f 2 e f . . 
. . f f f 2 2 e e 2 2 f f f . . 
. f f e f 2 f e e f 2 f e f f . 
. f e e f f e e e e f e e e f . 
. . f e e e e e e e e e e f . . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . . f f f f 2 2 f f f f . . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f f 2 f e f . . 
. . f f f 2 f e e 2 2 f f f . . 
. . f e 2 f f e e 2 f e e f . . 
. f f e f f e e e f e e e f f . 
. f f e e e e e e e e e e f f . 
. . . f e e e e e e e e f . . . 
. . . e f f f f f f f f 4 e . . 
. . . 4 f 2 2 2 2 2 e d d 4 . . 
. . . e f f f f f f e e 4 . . . 
. . . . f f f . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . f f f f f 2 2 f f f f f . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f 2 f 2 e f . . 
. . f f f 2 2 e e 2 2 f f f . . 
. f f e f 2 f e e f 2 f e f f . 
. f e e f f e e e e f e e e f . 
. . f e e e e e e e e e e f . . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . . f f f f 2 2 f f f f . . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e f 2 f f f 2 f 2 e f . . 
. . f f f 2 2 e e f 2 f f f . . 
. . f e e f 2 e e f f 2 e f . . 
. f f e e e f e e e f f e f f . 
. f f e e e e e e e e e e f f . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f e . . . 
. . 4 d d e 2 2 2 2 2 f 4 . . . 
. . . 4 e e f f f f f f e . . . 
. . . . . . . . . f f f . . . . 
`],
    50,
    true
    )
})
let projectile: Sprite = null
let ghost_1: Sprite = null
let direction = ""
let Hero: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`18001000040707040707081e1e1e1e1e1e010101010101011e1e1e1e070707070407081e1e1e1e1e1e1c1818171217171217221b040704070707081e1e1e1e1c18100f0f0f0f0f0f0f0f0708070707070707081e1e1c18100f0f0f0f0f0f0f0f0f07070804070407070408011c100f0f0f0707070f040f0f0f0c0a0907070707070711010d0f0f0f07070f0f0f0f0f0f041a1e1e0707070407070801200f0f0f070f0f0f0f0f0f0f0f1a1e1e0707070c130a0901160a0a14040f1c17120f0f0f0f111e1e04070408010101011e1e1e0d0f0f0d04040f0f0f071a1e1e0e0e0708010101011e1e1e0d0f0f0d04040f0f0407081e1e0f07070b12181712181b1e0d0f0f0d040f0f040f071a1e1e0f0707070f0f0f0707081e0d0f070d04040f0f0f07111e1e0f0f0404040f0f0707081e0d0f070d04040f0f0f071a1e1e0f0704040f0f0f07070b12100f0f16130a0a130a0a091e1e0f070707070707040404040f07070d1e1e1e1e1e1e1e1e1e0f0f0f0f0f0f0f0f0f0f0f0f0f070d1e1e1e1e1e1e1e1e1e`,
            img`
. . . . . . 2 . . . . . . . . . . . . . . . 2 . 
. . . . . . 2 . . . . . . 2 2 2 2 2 2 2 2 2 . 2 
. . . . . . 2 . . . . 2 2 2 . . . . . . . . . 2 
. . . . . . 2 . . 2 2 2 . . . . . . . . . . . 2 
. . . . . . 2 . 2 2 . . . . . . . . . . . 2 2 2 
. . . . . . 2 . 2 . . . . . . . . . . . . 2 . . 
. . . . . . 2 . 2 . . . . . . . . . . . . 2 . . 
. . . 2 2 2 2 . 2 2 2 2 . . 2 2 2 . . . . 2 . . 
. . . 2 . . . . . . . 2 . . 2 . . . . . . 2 . . 
. . . 2 . . . . . . . 2 . . 2 . . . . . . 2 . . 
. . . 2 2 2 2 2 2 2 . 2 . . 2 . . . . . . 2 . . 
. . . . . . . . . 2 . 2 . . 2 . . . . . . 2 . . 
. . . . . . . . . 2 . 2 . . 2 . . . . . . 2 . . 
. . . . . . . . . 2 2 2 . . 2 2 2 2 2 2 2 2 . . 
. . . . . . . . . . . . . . 2 . . . . . . . . . 
. . . . . . . . . . . . . . 2 . . . . . . . . . 
`,
            [myTiles.tile0,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.floorDark4,sprites.dungeon.floorLight5,sprites.dungeon.floorLightMoss,sprites.dungeon.floorDark0,sprites.dungeon.floorLight3,sprites.dungeon.floorLight4,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.floorLight1,sprites.dungeon.floorLight0,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.floorLight2,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenSwitchDown,sprites.dungeon.greenSwitchUp,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth],
            TileScale.Sixteen
        ))
info.setLife(10)
Hero = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
direction = "down"
Hero.setPosition(30, 26)
controller.moveSprite(Hero)
scene.cameraFollowSprite(Hero)
info.startCountdown(3)

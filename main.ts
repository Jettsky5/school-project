namespace SpriteKind {
    export const Money = SpriteKind.create()
    export const Clothes = SpriteKind.create()
    export const Coin = SpriteKind.create()
    export const Diploma = SpriteKind.create()
    export const controller = SpriteKind.create()
    export const bigbootyboss = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite2, location) {
    tiles.placeOnRandomTile(Main_Player, assets.tile`myTile3`)
    game.showLongText("Uh Oh! You died from lava!", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.controller, function (sprite, otherSprite) {
    game.showLongText("The game you are playing right now is actually an example of what a software engineer does! ", DialogLayout.Full)
    sprites.destroy(controller_button_thingi, effects.spray, 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Money, function (sprite, otherSprite) {
    game.showLongText("Did you know software engineers make an average of $153,672 every year?", DialogLayout.Bottom)
    sprites.destroy(Money2, effects.confetti, 200)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Main_Player.vy == 0) {
        Main_Player.vy = -150
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Main_Player,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . f f f f f f f f f f f . . . 
        . . f f f f f f f f f f f . . . 
        . 2 f f f f f f f f f f f . . . 
        . 8 f f f f f f f f f f f . . . 
        . 8 f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 8 8 8 8 8 8 8 . . . . . 
        . . . f 8 8 8 8 8 8 8 . . . . . 
        . . . f 8 8 8 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . f f f f f f f f f f f . . . 
        . . f f f f f f f f f f f . . . 
        . 2 f f f f f f f f f f f . . . 
        . 8 f f f f f f f f f f f . . . 
        . 8 f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f 8 8 8 8 8 8 f . . . . . 
        . . . f 8 8 8 8 8 8 f . . . . . 
        . . f f 8 8 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . f f f f f f f f f f f . . . 
        . . f f f f f f f f f f f . . . 
        . 2 f f f f f f f f f f f . . . 
        . 8 f f f f f f f f f f f . . . 
        . 8 f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 8 8 8 8 8 8 8 . . . . . 
        . . . f 8 8 8 8 8 8 8 . . . . . 
        . . . f 8 8 8 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . f f f f f f f f f f f . . . 
        . . f f f f f f f f f f f . . . 
        . 2 f f f f f f f f f f f . . . 
        . 8 f f f f f f f f f f f . . . 
        . 8 f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f 8 8 8 8 8 8 8 8 . . . . 
        . . . f 8 8 8 8 8 8 8 8 . . . . 
        . . f f 8 8 8 8 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    200,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Diploma, function (sprite, otherSprite) {
    sprites.destroy(diploma, effects.spray, 200)
    game.showLongText("For a well-paying software engineering job, strong coding skills, experience, and at least a Bachelor's degree are typically required. Boot camps and self-learning can also be valuable alternatives for gaining the necessary skills!", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bigbootyboss, function (sprite, otherSprite) {
    if (Main_Player.vy > 0 && Main_Player.y < BIGGERbootyboss.y) {
        Main_Player.vy = -70
        statusbar.value += -10
    } else {
        info.changeLifeBy(-1)
    }
    pause(1000)
})
function BigBootyBoss () {
    BIGGERbootyboss = sprites.create(img`
        . . . . . . . f f . . . . f . . 
        . . . . 2 2 f . . f 9 9 . . . . 
        . f . f . . . f 8 f . 9 9 . . . 
        . . 9 . . f f . . 8 f . f f . . 
        . . 9 . f 8 . 2 2 . f f . f . f 
        . f . f 8 . . 2 . f . f . 8 . . 
        . f . f . . f . . . 2 2 . 8 . . 
        2 f . 2 . f . f . . . 2 f f f . 
        2 2 . f . f . f f . . . f . 2 . 
        . 2 . . . f f f f . . f f . 2 . 
        . f f . . . . . . . f f . f f . 
        f . . 8 8 8 f f f f . . . f . . 
        . . f 8 9 8 f . . . . . 9 f . . 
        . f 9 9 9 . . . . . 2 9 9 . . . 
        . . . . . . . f f 2 2 . . . . . 
        . . 8 f 9 9 9 f . . . . . f . . 
        `, SpriteKind.bigbootyboss)
    BIGGERbootyboss.changeScale(2, ScaleAnchor.Middle)
    BIGGERbootyboss.ay = 350
    tiles.placeOnTile(BIGGERbootyboss, tiles.getTileLocation(11, 6))
    bossalive = true
    statusbar = statusbars.create(140, 10, StatusBarKind.EnemyHealth)
    statusbar.positionDirection(CollisionDirection.Bottom)
    statusbar.setOffsetPadding(0, 5)
    statusbar.setColor(2, 12, 5)
    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar.setBarBorder(2, 15)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite4, location2) {
    diploma = sprites.create(img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        f f f f f f f f f f f f f f f f f 
        f d d d d d d d d d d d d d d d f 
        f d f f f f f f f f f f f f f d f 
        f d f f f f f f f f f f f f f d f 
        f d d d d d d d d d d d d d d d f 
        f d d d d d d d d d d d d d d d f 
        f d d d d d d d d d d d d d d d f 
        f d d d d d d d d d d d d d d d f 
        f d f f d f f f d f d f f d f d f 
        f d d d d d d d d d d d d d d d f 
        f d d d d d d d d d d d d d d d f 
        f f f f f f f f f f f f f f f f f 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        `, SpriteKind.Diploma)
    tiles.setCurrentTilemap(tilemap`level4`)
    tiles.placeOnRandomTile(Main_Player, assets.tile`myTile11`)
    tiles.placeOnRandomTile(diploma, assets.tile`myTile13`)
    game.showLongText("Woah! Whats this place? It looks like we have to go, up?", DialogLayout.Bottom)
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    game.showLongText("You did it! You fixed the bug! Thanks for playing my game and I hoped you liked it!", DialogLayout.Bottom)
    game.gameOver(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Main_Player,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f f f f f f f f . . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f 2 . 
        . . . f f f f f f f f f f f 8 . 
        . . f f f f f f f e e e f f 8 . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 8 8 8 8 8 8 8 f . . . 
        . . . . . 8 8 8 8 8 8 8 f . . . 
        . . . . . f e e f 8 8 8 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f f f f f f f f . . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f 2 . 
        . . . f f f f f f f f f f f 8 . 
        . . f f f f f f f e e e f f 8 . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 8 8 8 8 8 8 f . . . 
        . . . . . f 8 8 8 8 8 8 f . . . 
        . . . . f f f e e f 8 8 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f f f f f f f f . . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f 2 . 
        . . . f f f f f f f f f f f 8 . 
        . . f f f f f f f e e e f f 8 . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 8 8 8 8 8 8 8 f . . . 
        . . . . . 8 8 8 8 8 8 8 f . . . 
        . . . . . f e e f 8 8 8 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f f f f f f f f . . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f 2 . 
        . . . f f f f f f f f f f f 8 . 
        . . f f f f f f f e e e f f 8 . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 8 8 8 8 8 8 8 8 f . . . 
        . . . . 8 8 8 8 8 8 8 8 f . . . 
        . . . . f e e f 8 8 8 8 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundSouthEast0, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level6`)
    info.setLife(5)
    tiles.placeOnRandomTile(Main_Player, assets.tile`myTile16`)
    BigBootyBoss()
    game.showLongText("Uh Oh! We've found a bug! Jump on it head to fix it!", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Clothes, function (sprite3, otherSprite2) {
    game.showLongText("Did you know that software engineers can wear almost whatever they want?", DialogLayout.Bottom)
    sprites.destroy(comfy_clothes)
})
info.onLifeZero(function () {
    tiles.placeOnRandomTile(Main_Player, assets.tile`myTile16`)
    info.setLife(5)
    game.showLongText("Uh Oh! The bug killed you! Go! try to fix him!", DialogLayout.Bottom)
    statusbar.value = 100
})
let bossalive = false
let statusbar: StatusBarSprite = null
let BIGGERbootyboss: Sprite = null
let diploma: Sprite = null
let Main_Player: Sprite = null
let Money2: Sprite = null
let comfy_clothes: Sprite = null
let controller_button_thingi: Sprite = null
controller_button_thingi = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f f f f f f f f f f f f 
    f f c c c f f f f f f f f f f f 
    f c 2 2 2 c f f f f f f f f f f 
    f c 2 2 2 c f f f f f d d f f f 
    f c 2 2 2 c f f f f f d d f f f 
    f f c c c f f f f f f f f f f f 
    f f f f f f f f d d f f f f d d 
    f f f f f f f f d d f f f f d d 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f d d f f f 
    f f f f f f f f f f f d d f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.controller)
comfy_clothes = sprites.create(img`
    . . . . 1 d d d d 1 . . . . 
    . . . 1 d d 1 1 d d 1 . . . 
    . . . 1 d 1 1 1 1 d 1 . . . 
    . . . 1 d 1 1 1 1 d 1 . . . 
    . . . 1 d d d d d d 1 . . . 
    . . . . 1 1 1 1 1 1 . . . . 
    . . 1 1 1 d 1 1 d 1 1 1 . . 
    . 1 1 1 1 d 1 1 d 1 1 1 1 . 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 . 1 1 1 1 1 1 1 1 . 1 1 
    1 1 . 1 1 1 1 1 1 1 1 . 1 1 
    1 1 . 1 1 1 1 1 1 1 1 . 1 1 
    . . . 1 1 1 1 1 1 1 1 . . . 
    `, SpriteKind.Clothes)
Money2 = sprites.create(img`
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    f f f f f f f f f f f f f f f f f 
    f 7 7 7 7 f 7 7 7 7 7 f 7 7 7 7 f 
    f 7 7 7 f 7 f 7 7 7 f 7 f 7 7 7 f 
    f 7 7 7 f 7 7 7 7 7 7 7 f 7 7 7 f 
    f 7 7 7 f f 7 7 7 7 7 f f 7 7 7 f 
    f 7 7 7 f 7 f f f f f 7 f 7 7 7 f 
    f 7 7 7 f 7 7 7 7 7 7 7 f 7 7 7 f 
    f f f f f f f f f f f f f f f f f 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Money)
Main_Player = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f f 8 2 2 8 f f . . . . 
    . . . f f f f 8 8 f f f f . . . 
    . . f f f f f 8 8 f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . f f 4 f b f 4 4 f b f 4 f f . 
    . f 4 4 4 1 f 4 4 f 1 4 4 4 f . 
    . . f 4 4 1 f 4 4 f 1 4 4 f . . 
    . . . f 8 4 4 4 4 4 4 8 f . . . 
    . . f 8 f 8 8 8 8 8 8 f 8 f . . 
    . f 4 4 f 8 8 8 8 8 8 f 4 4 f . 
    . f 4 f . 8 8 8 8 8 8 . f 4 f . 
    . . f f . f f f f f f . f f . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level2`)
tiles.placeOnRandomTile(Main_Player, assets.tile`myTile3`)
tiles.placeOnRandomTile(Money2, assets.tile`myTile4`)
scene.cameraFollowSprite(Main_Player)
controller.moveSprite(Main_Player, 100, 0)
Main_Player.ay = 200
tiles.placeOnRandomTile(comfy_clothes, assets.tile`myTile10`)
tiles.placeOnRandomTile(diploma, assets.tile`myTile12`)
tiles.placeOnRandomTile(controller_button_thingi, assets.tile`myTile14`)
game.showLongText("Hello! Welcome to my game! This game is about software engineering! The controls are, D to go right! A to go left and space to jump! Enjoy!", DialogLayout.Bottom)
game.onUpdate(function () {
    if (bossalive) {
        if (Main_Player.x + 30 < BIGGERbootyboss.x) {
            BIGGERbootyboss.vx = -20
        } else if (Main_Player.x - 30 > BIGGERbootyboss.x) {
            BIGGERbootyboss.vx = 20
        } else {
            BIGGERbootyboss.vx = 0
        }
    }
})

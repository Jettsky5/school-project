@namespace
class SpriteKind:
    Money = SpriteKind.create()
    Clothes = SpriteKind.create()
    Coin = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    game.show_long_text("Did you know software engineers make an average of 153,672$ every year?",
        DialogLayout.BOTTOM)
    sprites.destroy(Money2)
sprites.on_overlap(SpriteKind.player, SpriteKind.Money, on_on_overlap)

def on_a_pressed():
    if Main_Player.vy == 0:
        Main_Player.vy = -150
    music.play(music.melody_playable(music.magic_wand),
        music.PlaybackMode.UNTIL_DONE)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_left_pressed():
    animation.run_image_animation(Main_Player,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        200,
        False)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_pressed():
    animation.run_image_animation(Main_Player,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        200,
        False)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_overlap_tile(sprite2, location):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile5
    """),
    on_overlap_tile)

def on_on_overlap2(sprite3, otherSprite2):
    game.show_long_text("Did you know that software engineers can wear almost whatever they want?",
        DialogLayout.BOTTOM)
    sprites.destroy(comfy_clothes)
sprites.on_overlap(SpriteKind.player, SpriteKind.Clothes, on_on_overlap2)

def on_overlap_tile2(sprite4, location2):
    tiles.set_current_tilemap(tilemap("""
        level4
    """))
    game.show_long_text("Woah! Whats this place? It looks like we have to go, up?",
        DialogLayout.BOTTOM)
    tiles.place_on_random_tile(Main_Player, assets.tile("""
        myTile11
    """))
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_insignia,
    on_overlap_tile2)

Main_Player: Sprite = None
Money2: Sprite = None
comfy_clothes: Sprite = None
comfy_clothes = sprites.create(img("""
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
    """),
    SpriteKind.Clothes)
Money2 = sprites.create(img("""
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
    """),
    SpriteKind.Money)
Main_Player = sprites.create(img("""
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
    """),
    SpriteKind.player)
tiles.set_current_tilemap(tilemap("""
    level2
"""))
tiles.place_on_random_tile(Main_Player, assets.tile("""
    myTile3
"""))
tiles.place_on_random_tile(Money2, assets.tile("""
    myTile4
"""))
scene.camera_follow_sprite(Main_Player)
controller.move_sprite(Main_Player, 100, 0)
Main_Player.ay = 200
tiles.place_on_random_tile(comfy_clothes, assets.tile("""
    myTile10
"""))
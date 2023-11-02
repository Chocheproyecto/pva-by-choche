namespace SpriteKind {
    export const Plants = SpriteKind.create()
    export const pea = SpriteKind.create()
    export const shooter = SpriteKind.create()
    export const wall = SpriteKind.create()
    export const soon = SpriteKind.create()
    export const player2 = SpriteKind.create()
    export const Electricpea = SpriteKind.create()
    export const Firegun = SpriteKind.create()
    export const Powerenemy = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Powerenemy, assets.tile`myTile6`, function (sprite, location) {
    music.play(music.createSong(hex`0078000408020300001c00010a006400f401640000040000000000000000000000000005000004060000002000010504001c00100500640000041e000004000000000000000000000000000a0400041f002c00300001123000340001123400380002121638003c0001163c004000011609010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8003f000000010002020404000500020204080009000202040c000d000202041000110002020414001500020204180019000202041c001d0002020420002100020204`), music.PlaybackMode.UntilDone)
    pause(1000)
    game.over(false)
})
sprites.onOverlap(SpriteKind.Powerenemy, SpriteKind.Plants, function (sprite, otherSprite) {
    sprite.setVelocity(0, 0)
    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite).value += -0.5
    if (statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite).value == 0) {
        sprite.setVelocity(-5, 0)
        sprites.destroy(otherSprite)
    }
})
sprites.onOverlap(SpriteKind.Powerenemy, SpriteKind.wall, function (sprite, otherSprite) {
    sprite.setVelocity(0, 0)
    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite).value += -0.5
    if (statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite).value == 0) {
        sprite.setVelocity(-5, 0)
        sprites.destroy(otherSprite)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game2 == 1) {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(grid.spriteCol(mySprite), grid.spriteRow(mySprite)), assets.tile`myTile5`)) {
            if (info.score() >= 100) {
                mySprite.setImage(img`
                    1 1 1 1 . . . . . . . . 1 1 1 1 
                    1 . . . . . . . . . . . . . . 1 
                    1 . . . . f f f f f f f f . . 1 
                    1 . . . f 7 7 7 7 7 7 7 f . . 1 
                    . . . f f 7 7 7 7 7 7 7 f . . . 
                    . . f f 7 7 7 f 7 f f f f . . . 
                    . . f 7 7 f f f f f 1 1 f . . . 
                    . f f 7 7 f 1 1 f 1 1 1 f . . . 
                    . f 7 7 7 f 1 2 f 1 1 2 f . . . 
                    . f 7 7 7 f f 1 f 1 1 1 f . . . 
                    . f f 7 7 7 f f f f 1 1 f . . . 
                    . . f 7 7 7 7 7 7 f 1 f f . . . 
                    1 . f f 7 7 7 7 7 f f f . . . 1 
                    1 . . f f 7 7 7 7 f f . . . . 1 
                    1 . . . . f f f f f . . . . . 1 
                    1 1 1 1 . . . . . . . . 1 1 1 1 
                    `)
                Peashooter += 1
            }
        }
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(grid.spriteCol(mySprite), grid.spriteRow(mySprite)), sprites.castle.tileGrass1)) {
            if (Peashooter >= 1) {
                mySprite2 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f f f . . . 
                    . . . . f 7 7 7 7 7 7 7 f . . . 
                    . . . f f 7 7 7 7 7 7 7 f . . . 
                    . . f f 7 7 7 f 7 f f f f . . . 
                    . . f 7 7 f f f f f 1 1 f . . . 
                    . f f 7 7 f 1 1 f 1 1 1 f . . . 
                    . f 7 7 7 f 1 2 f 1 1 2 f . . . 
                    . f 7 7 7 f f 1 f 1 1 1 f . . . 
                    . f f 7 7 7 f f f f 1 1 f . . . 
                    . . f 7 7 7 7 7 7 f 1 f f . . . 
                    . . f f 7 7 7 7 7 f f f . . . . 
                    . . . f f 7 7 7 7 f f . . . . . 
                    . . . . . f f f f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.shooter)
                mySprite2.setPosition(mySprite.x, mySprite.y)
                mySprite.setImage(img`
                    1 1 1 1 . . . . . . . . 1 1 1 1 
                    1 . . . . . . . . . . . . . . 1 
                    1 . . . . . . . . . . . . . . 1 
                    1 . . . . . . . . . . . . . . 1 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    1 . . . . . . . . . . . . . . 1 
                    1 . . . . . . . . . . . . . . 1 
                    1 . . . . . . . . . . . . . . 1 
                    1 1 1 1 . . . . . . . . 1 1 1 1 
                    `)
                statusbar = statusbars.create(20, 4, StatusBarKind.Health)
                statusbar.max = 4
                statusbar.attachToSprite(mySprite2)
                statusbar.setFlag(SpriteFlag.Invisible, true)
                info.changeScoreBy(-100)
                Peashooter = 0
            }
        }
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(grid.spriteCol(mySprite), grid.spriteRow(mySprite)), assets.tile`myTile7`)) {
            if (info.score() >= 50) {
                mySprite.setImage(img`
                    1 1 1 1 f f . f f f f . 1 1 1 1 
                    1 . f 5 5 5 f 5 5 5 5 f . . . 1 
                    1 f 5 5 f f f f f f f f f . . 1 
                    1 f 5 f f e e e e e f f 5 f . 1 
                    . f 5 f e e e e e e e f 5 f . . 
                    . . f f e f e e e f e f 5 f . . 
                    . f 5 f e e e e e e e f f . . . 
                    . f 5 f e f e e e f e f 5 f . . 
                    . f 5 f e e f f f e e f 5 f . . 
                    . . f 5 f e e e e e f 5 5 f . . 
                    . . . f f f f f f f f f f . . . 
                    . . . . . . f f f . . . . . . . 
                    1 . . . . . f 7 f . . . . . . 1 
                    1 . . . f f f 7 f f f . . . . 1 
                    1 . . f 7 f f 7 f f 7 f . . . 1 
                    1 1 1 1 f 7 7 f 7 7 f . 1 1 1 1 
                    `)
                Sunflower += 1
            }
        }
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(grid.spriteCol(mySprite), grid.spriteRow(mySprite)), sprites.castle.tileGrass1)) {
            if (Sunflower >= 1) {
                mySprite3 = sprites.create(img`
                    . . . f f f . f f f f . . . . . 
                    . . f 5 5 5 f 5 5 5 5 f . . . . 
                    . f 5 5 f f f f f f f f f . . . 
                    . f 5 f f e e e e e f f 5 f . . 
                    . f 5 f e e e e e e e f 5 f . . 
                    . . f f e f e e e f e f 5 f . . 
                    . f 5 f e e e e e e e f f . . . 
                    . f 5 f e f e e e f e f 5 f . . 
                    . f 5 f e e f f f e e f 5 f . . 
                    . . f 5 f e e e e e f 5 5 f . . 
                    . . . f f f f f f f f f f . . . 
                    . . . . . . f f f . . . . . . . 
                    . . . . . . f 7 f . . . . . . . 
                    . . . . f f f 7 f f f . . . . . 
                    . . . f 7 f f 7 f f 7 f . . . . 
                    . . . . f 7 7 f 7 7 f . . . . . 
                    `, SpriteKind.Plants)
                mySprite3.setPosition(mySprite.x, mySprite.y)
                mySprite.setImage(img`
                    1 1 1 1 . . . . . . . . 1 1 1 1 
                    1 . . . . . . . . . . . . . . 1 
                    1 . . . . . . . . . . . . . . 1 
                    1 . . . . . . . . . . . . . . 1 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    1 . . . . . . . . . . . . . . 1 
                    1 . . . . . . . . . . . . . . 1 
                    1 . . . . . . . . . . . . . . 1 
                    1 1 1 1 . . . . . . . . 1 1 1 1 
                    `)
                SunFlower_HP = statusbars.create(20, 4, StatusBarKind.Health)
                SunFlower_HP.max = 4
                SunFlower_HP.attachToSprite(mySprite3)
                SunFlower_HP.setFlag(SpriteFlag.Invisible, true)
                Sunflower = 0
                info.changeScoreBy(-50)
            }
        }
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(grid.spriteCol(mySprite), grid.spriteRow(mySprite)), assets.tile`myTile8`)) {
            if (info.score() >= 50) {
                mySprite.setImage(img`
                    1 1 1 1 . . . . . . . . 1 1 1 1 
                    1 . . . . . . . . . . . . . . 1 
                    1 . . . . . . . . . . . . . . 1 
                    1 . . . . f f f f f . . . . . 1 
                    . . . . f f e e e f f . . . . . 
                    . . . f f e e e e e f f . . . . 
                    . . . f e e e e e e e f . . . . 
                    . . f f e e f e e f e f f . . . 
                    . . f e e e e e e e e e f . . . 
                    . . f e e e e e e e e e f . . . 
                    . . f e e f e e e e f e f . . . 
                    . . f e e e f f f f e e f . . . 
                    1 . f e e e e e e e e e f . . 1 
                    1 . f e e e e e e e e e f . . 1 
                    1 . f f e e e e e e e f f . . 1 
                    1 1 1 1 f f f f f f f f 1 1 1 1 
                    `)
                Wallnut += 1
            }
        }
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(grid.spriteCol(mySprite), grid.spriteRow(mySprite)), sprites.castle.tileGrass1)) {
            if (Wallnut >= 1) {
                mySprite4 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f f . . . . . 
                    . . . . . f f e e e f f . . . . 
                    . . . . f f e e e e e f f . . . 
                    . . . . f e e e e e e e f . . . 
                    . . . f f e e f e e f e f f . . 
                    . . . f e e e e e e e e e f . . 
                    . . . f e e e e e e e e e f . . 
                    . . . f e e f e e e e f e f . . 
                    . . . f e e e f f f f e e f . . 
                    . . . f e e e e e e e e e f . . 
                    . . . f e e e e e e e e e f . . 
                    . . . f f e e e e e e e f f . . 
                    . . . . . f f f f f f f f . . . 
                    `, SpriteKind.wall)
                mySprite4.setPosition(mySprite.x, mySprite.y)
                mySprite.setImage(img`
                    1 1 1 1 . . . . . . . . 1 1 1 1 
                    1 . . . . . . . . . . . . . . 1 
                    1 . . . . . . . . . . . . . . 1 
                    1 . . . . . . . . . . . . . . 1 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    1 . . . . . . . . . . . . . . 1 
                    1 . . . . . . . . . . . . . . 1 
                    1 . . . . . . . . . . . . . . 1 
                    1 1 1 1 . . . . . . . . 1 1 1 1 
                    `)
                WallnutHp = statusbars.create(20, 4, StatusBarKind.Health)
                WallnutHp.value = 100
                WallnutHp.attachToSprite(mySprite4)
                WallnutHp.setFlag(SpriteFlag.Invisible, true)
                info.changeScoreBy(-50)
                Wallnut = 0
            }
        }
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(grid.spriteCol(mySprite), grid.spriteRow(mySprite)), assets.tile`myTile13`)) {
            if (info.score() >= 200) {
                mySprite.setImage(img`
                    1 1 1 . . f f f f f . . 8 1 1 1 
                    1 8 . . f 9 9 9 9 f f f . f f 1 
                    1 . f f f 9 9 9 9 9 9 f f f 9 1 
                    . . f 9 9 9 9 f f 9 9 9 f 9 9 f 
                    . . f 9 9 9 9 f f 9 9 9 f 9 9 f 
                    . . f f 9 9 9 f f 9 9 9 9 f 9 f 
                    . 8 . f f 9 9 9 9 9 9 9 f f f f 
                    . . 8 . f f 9 9 9 9 9 f f . . . 
                    . . . . . . f 9 f f f f . . . 8 
                    . f . . f . f 9 f . . . f . 8 . 
                    f 7 f f 8 f f 9 f . . f 7 f . . 
                    . f f 8 f . f 9 f . f 7 7 f . . 
                    . . . f . . f 9 f . f f f . . . 
                    1 . . . . . f 9 f . . . . . . 1 
                    1 f f f f f f 9 f f f f f f f 1 
                    1 1 1 7 7 7 7 f 7 7 7 7 7 1 1 1 
                    `)
                Electricpea2 += 1
            }
        }
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(grid.spriteCol(mySprite), grid.spriteRow(mySprite)), sprites.castle.tileGrass1)) {
            if (Electricpea2 >= 1) {
                Mysprite8 = sprites.create(img`
                    . . 8 . . f f f f f . . 8 8 . . 
                    . 8 . . f 9 9 9 9 f f f . f f f 
                    . . f f f 9 9 9 9 9 9 f f f 9 f 
                    . . f 9 9 9 9 f f 9 9 9 f 9 9 f 
                    . . f 9 9 9 9 f f 9 9 9 f 9 9 f 
                    . . f f 9 9 9 f f 9 9 9 9 f 9 f 
                    . 8 . f f 9 9 9 9 9 9 9 f f f f 
                    . . 8 . f f f 9 9 9 9 f f . . . 
                    . . . . . . f 9 f f f f . . . 8 
                    . f . . f . f 9 f . . . f . 8 . 
                    f 7 f f 8 f f 9 f . . f 7 f . . 
                    . f f 8 f . f 9 f . f 7 7 f . . 
                    . . . f . . f 9 f . f f f . . . 
                    . . . . . . f 9 f . . . . . . . 
                    . f f f f f f 9 f f f f f f f . 
                    f 6 7 7 7 7 7 f 7 7 7 7 7 7 6 f 
                    `, SpriteKind.Electricpea)
                Mysprite8.setPosition(mySprite.x, mySprite.y)
                mySprite.setImage(img`
                    1 1 1 1 . . . . . . . . 1 1 1 1 
                    1 . . . . . . . . . . . . . . 1 
                    1 . . . . . . . . . . . . . . 1 
                    1 . . . . . . . . . . . . . . 1 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    1 . . . . . . . . . . . . . . 1 
                    1 . . . . . . . . . . . . . . 1 
                    1 . . . . . . . . . . . . . . 1 
                    1 1 1 1 . . . . . . . . 1 1 1 1 
                    `)
                ElectricpeaHP = statusbars.create(20, 4, StatusBarKind.Health)
                ElectricpeaHP.value = 50
                ElectricpeaHP.attachToSprite(Mysprite8)
                ElectricpeaHP.setFlag(SpriteFlag.Invisible, true)
                info.changeScoreBy(-200)
                Electricpea2 = 0
            }
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(grid.spriteCol(mySprite), grid.spriteRow(mySprite)), assets.tile`myTile19`)) {
                if (info.score() >= 200) {
                    mySprite.setImage(img`
                        1 1 1 f f f f f f f . . 2 1 1 1 
                        1 2 2 2 f 2 2 2 2 f f f . f f 1 
                        1 2 f f f 2 2 2 2 2 2 f f f 2 1 
                        f 2 f 2 2 2 4 f f 2 2 2 2 2 2 f 
                        f f f 2 2 2 4 f f 2 2 2 f 2 2 f 
                        . f f f 2 2 4 f f 2 2 2 2 f 2 f 
                        . 2 . f f 2 2 2 2 2 2 2 f f f f 
                        . . 2 . f f f 2 2 2 2 f f . . . 
                        . . . . . . f 2 f f f f . . . 2 
                        . 2 . . 2 . f 2 f . . 2 2 2 2 . 
                        2 2 2 2 2 2 f 2 f . . 2 2 2 2 2 
                        . 2 2 2 2 2 f 2 f . 2 2 2 2 . . 
                        . . . 2 . . f 2 f . 2 2 2 2 . . 
                        1 . . . . . f 2 f . . . . . . 1 
                        1 f f f f f f 2 f f f f f f f 1 
                        1 1 1 2 2 2 2 f 2 2 2 2 2 1 1 1 
                        `)
                    Firepea2 += 1
                }
            }
        }
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(grid.spriteCol(mySprite), grid.spriteRow(mySprite)), sprites.castle.tileGrass1)) {
            if (Firepea2 >= 1) {
                Mysprite7 = sprites.create(img`
                    2 2 2 f f f f f f f . . 2 2 . . 
                    2 2 2 2 f 2 2 2 2 f f f . f f f 
                    f 2 f f f 2 2 2 2 2 2 f f f 2 f 
                    f 2 f 2 2 2 4 f f 2 2 2 2 2 2 f 
                    f f f 2 2 2 4 f f 2 2 2 f 2 2 f 
                    . f f f 2 2 4 f f 2 2 2 2 f 2 f 
                    . 2 . f f 2 2 2 2 2 2 2 f f f f 
                    . . 2 . f f f 2 2 2 2 f f . . . 
                    . . . . . . f 2 f f f f . . . 2 
                    . 2 . . 2 . f 2 f . . 2 2 2 2 . 
                    2 2 2 2 2 2 f 2 f . . 2 2 2 2 2 
                    . 2 2 2 2 2 f 2 f . 2 2 2 2 . . 
                    . . . 2 . . f 2 f . 2 2 2 2 . . 
                    . . . . . . f 2 f . . . . . . . 
                    . f f f f f f 2 f f f f f f f . 
                    f 2 2 2 2 2 2 f 2 2 2 2 2 2 2 f 
                    `, SpriteKind.Firegun)
                Mysprite7.setPosition(mySprite.x, mySprite.y)
                mySprite.setImage(img`
                    1 1 1 1 . . . . . . . . 1 1 1 1 
                    1 . . . . . . . . . . . . . . 1 
                    1 . . . . . . . . . . . . . . 1 
                    1 . . . . . . . . . . . . . . 1 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    . . . . . . . 1 . . . . . . . . 
                    1 . . . . . . . . . . . . . . 1 
                    1 . . . . . . . . . . . . . . 1 
                    1 . . . . . . . . . . . . . . 1 
                    1 1 1 1 . . . . . . . . 1 1 1 1 
                    `)
                FirepeaHp = statusbars.create(20, 4, StatusBarKind.Health)
                FirepeaHp.value = 50
                FirepeaHp.attachToSprite(Mysprite7)
                FirepeaHp.setFlag(SpriteFlag.Invisible, true)
                info.changeScoreBy(-200)
                Firepea2 = 0
            }
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
	
})
scene.onOverlapTile(SpriteKind.Powerenemy, assets.tile`myTile0`, function (sprite, location) {
    music.play(music.createSong(hex`0078000408020300001c00010a006400f401640000040000000000000000000000000005000004060000002000010504001c00100500640000041e000004000000000000000000000000000a0400041f002c00300001123000340001123400380002121638003c0001163c004000011609010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8003f000000010002020404000500020204080009000202040c000d000202041000110002020414001500020204180019000202041c001d0002020420002100020204`), music.PlaybackMode.UntilDone)
    pause(1000)
    game.over(false)
})
sprites.onOverlap(SpriteKind.Powerenemy, SpriteKind.shooter, function (sprite, otherSprite) {
    sprite.setVelocity(0, 0)
    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite).value += -0.5
    if (statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite).value == 0) {
        sprite.setVelocity(-5, 0)
        sprites.destroy(otherSprite)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Plants, function (sprite, otherSprite) {
    sprite.setVelocity(0, 0)
    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite).value += -0.05
    if (statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite).value == 0) {
        sprite.setVelocity(-5, 0)
        sprites.destroy(otherSprite)
    }
})
info.onCountdownEnd(function () {
    if (m != 1) {
        wave = 1
    } else {
        P2 = 1
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.shooter, function (sprite, otherSprite) {
    sprite.setVelocity(0, 0)
    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite).value += -0.05
    if (statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite).value == 0) {
        sprite.setVelocity(-5, 0)
        sprites.destroy(otherSprite)
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile0`, function (sprite, location) {
    music.play(music.createSong(hex`0078000408020300001c00010a006400f401640000040000000000000000000000000005000004060000002000010504001c00100500640000041e000004000000000000000000000000000a0400041f002c00300001123000340001123400380002121638003c0001163c004000011609010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8003f000000010002020404000500020204080009000202040c000d000202041000110002020414001500020204180019000202041c001d0002020420002100020204`), music.PlaybackMode.UntilDone)
    pause(1000)
    game.over(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Powerenemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -1
    if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value == 0) {
        sprites.destroy(otherSprite)
        kill += 1
    }
})
function wave1 () {
    mySprite5 = sprites.create(img`
        . . . f f f f f . . . . 
        . . f 1 1 1 1 1 f f . . 
        . f 1 1 1 1 1 1 1 1 f . 
        f 1 9 9 1 1 1 1 1 1 1 f 
        f 1 9 9 1 1 1 1 1 1 1 f 
        f 1 9 9 1 1 1 1 1 1 1 f 
        f 1 9 9 1 1 1 1 1 1 1 f 
        f f 1 1 1 1 1 1 1 1 f f 
        . f f 1 1 1 1 1 1 1 f b 
        . . f 1 1 1 1 1 f f f b 
        . . f 1 f 1 1 1 1 f b b 
        . . f 1 f 1 1 1 1 f f f 
        . . f f 1 1 1 1 1 f 2 2 
        . . f 1 1 1 f 1 1 f 2 4 
        . . . f f f f f f . 2 4 
        . . . . . f f f . . 2 2 
        `, SpriteKind.Enemy)
    grid.snap(mySprite5)
    grid.place(mySprite5, tiles.getTileLocation(9, randint(1, 5)))
    mySprite5.vx = -5
    ZombieHp = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    ZombieHp.value = 10
    ZombieHp.attachToSprite(mySprite5)
    ZombieHp.setFlag(SpriteFlag.Invisible, true)
    Sprite_ZOMBIE = sprites.create(img`
        . . . 1 1 1 1 1 1 1 . . 
        . . 1 f f f f f f f 1 . 
        . 1 f f f f f f f f 1 . 
        1 f 9 9 f f f f f f f 1 
        1 f 9 9 f f f f f f f 1 
        1 f 9 9 f f f f f f f 1 
        1 1 f f f f f f f f f 1 
        1 1 f f f f f f f f f 1 
        . 1 1 f 1 f f f f f 1 b 
        . . 1 f 1 f f f f 1 b b 
        . . 1 f 1 f f f f 1 b b 
        . . 1 1 f f f f f 1 b b 
        . . 1 f f f f f f 1 1 1 
        . . 1 f f f 1 f f 1 2 2 
        . . . 1 1 1 1 1 1 1 2 4 
        . . . . . 1 1 1 . . f 2 
        `, SpriteKind.Powerenemy)
    grid.snap(Sprite_ZOMBIE)
    grid.place(Sprite_ZOMBIE, tiles.getTileLocation(9, randint(1, 5)))
    Sprite_ZOMBIE.vx = -1
    ZombieHP2 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    ZombieHP2.value = 30
    ZombieHP2.attachToSprite(Sprite_ZOMBIE)
    ZombieHP2.setFlag(SpriteFlag.Invisible, true)
}
scene.onOverlapTile(SpriteKind.player2, sprites.castle.tileGrass1, function (sprite, location) {
    if (P2 == 1) {
        if (info.player2.score() >= 100) {
            if (controller.player2.isPressed(ControllerButton.A)) {
                mySprite5 = sprites.create(img`
                    . . . f f f f f f f . . 
                    . . f 1 1 1 1 1 1 1 f . 
                    . f 1 1 1 1 1 1 1 1 f . 
                    f 1 9 9 1 1 1 1 1 1 1 f 
                    f 1 9 9 1 1 1 1 1 1 1 f 
                    f 1 9 9 1 1 1 1 1 1 1 f 
                    f f 1 1 1 1 1 1 1 1 1 f 
                    f f 1 1 1 1 1 1 1 1 1 f 
                    . f f 1 f 1 1 1 1 1 f b 
                    . . f 1 f 1 1 1 1 f b b 
                    . . f 1 f 1 1 1 1 f b b 
                    . . f f 1 1 1 1 1 f b b 
                    . . f 1 1 1 1 1 1 f f f 
                    . . f 1 1 1 f 1 1 f 2 2 
                    . . . f f f f f f f 2 4 
                    . . . . . f f f . . f 2 
                    `, SpriteKind.Enemy)
                mySprite5.vx = -3
                mySprite5.setPosition(player2.x, player2.y)
                ZombieHp = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
                ZombieHp.value = 10
                ZombieHp.attachToSprite(mySprite5)
                ZombieHp.setFlag(SpriteFlag.Invisible, true)
                info.player2.changeScoreBy(-100)
            }
        }
        if (info.player2.score() >= 100) {
            if (controller.player2.isPressed(ControllerButton.B)) {
                Sprite_ZOMBIE = sprites.create(img`
                    . . . 1 1 1 1 1 1 1 . . 
                    . . 1 f f f f f f f 1 . 
                    . 1 f f f f f f f f 1 . 
                    1 f 9 9 f f f f f f f 1 
                    1 f 9 9 f f f f f f f 1 
                    1 f 9 9 f f f f f f f 1 
                    1 1 f f f f f f f f f 1 
                    1 1 f f f f f f f f f 1 
                    . 1 1 f 1 f f f f f 1 b 
                    . . 1 f 1 f f f f 1 b b 
                    . . 1 f 1 f f f f 1 b b 
                    . . 1 1 f f f f f 1 b b 
                    . . 1 f f f f f f 1 1 1 
                    . . 1 f f f 1 f f 1 2 2 
                    . . . 1 1 1 1 1 1 1 2 4 
                    . . . . . 1 1 1 . . f 2 
                    `, SpriteKind.Powerenemy)
                Sprite_ZOMBIE.vx = -3
                Sprite_ZOMBIE.setPosition(player2.x, player2.y)
                ZombieHP2 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
                ZombieHP2.value = 30
                ZombieHP2.attachToSprite(mySprite5)
                ZombieHP2.setFlag(SpriteFlag.Invisible, true)
                info.player2.changeScoreBy(-100)
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.soon, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        sprites.destroy(otherSprite, effects.warmRadial, 100)
        info.changeScoreBy(25)
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile6`, function (sprite, location) {
    music.play(music.createSong(hex`0078000408020300001c00010a006400f401640000040000000000000000000000000005000004060000002800010504001c00100500640000041e000004000000000000000000000000000a04000419003000340001123400380002121638003c0001163c004000011609010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8004d000000010002020404000500020204080009000202040c000d000202041000110002020414001500020204180019000202041c001d00020204200021000202042400250002020428002900020204`), music.PlaybackMode.UntilDone)
    pause(1000)
    game.over(false)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.wall, function (sprite, otherSprite) {
    sprite.setVelocity(0, 0)
    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite).value += -0.05
    if (statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite).value == 0) {
        sprite.setVelocity(-5, 0)
        sprites.destroy(otherSprite)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -1
    if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value == 0) {
        sprites.destroy(otherSprite)
        kill += 1
    }
})
let projectile: Sprite = null
let sun: Sprite = null
let ZombieHP2: StatusBarSprite = null
let Sprite_ZOMBIE: Sprite = null
let ZombieHp: StatusBarSprite = null
let mySprite5: Sprite = null
let P2 = 0
let wave = 0
let FirepeaHp: StatusBarSprite = null
let Mysprite7: Sprite = null
let Firepea2 = 0
let ElectricpeaHP: StatusBarSprite = null
let Mysprite8: Sprite = null
let Electricpea2 = 0
let WallnutHp: StatusBarSprite = null
let mySprite4: Sprite = null
let SunFlower_HP: StatusBarSprite = null
let mySprite3: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite2: Sprite = null
let player2: Sprite = null
let m = 0
let kill = 0
let Wallnut = 0
let Sunflower = 0
let Peashooter = 0
let mySprite: Sprite = null
let game2 = 0
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffff9999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffff9999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffff999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffff999999999999999999999999999999999999999ffffff999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff99999999999999999999999999999999999999ffffffff99999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffff9999999999ffffffff999999999999999999ffffffff99999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffff9999999999ffffffffffff99999999999999fffffffff9999999999999999999999999
    9999999999999999999999999999999999999999999999999999999fffff999999999999ffffffffffffffffff999999999fffffffffffff9999999999999ffffffffff9999999999999999999999999
    99999999999999999999999999999999999999999999999999999ffffffff99999999999fffffff777777ffffff99999999fffffffffffff9999999999999fffffffffff999999999999999999999999
    999999999999999999999999999999999999999999999999999ffffffffff99999999999fffffff777777ffffff9999999ffffffffffffffff99999999999fffffffffff999999999999999999999999
    99999999999999999999999999999999999999999999999999ffffffffffff99999999999fffffff77777ffffff9999999ffffffffffffffff9999999999fffffffffffff99999999999999999999999
    999999999999999999999999999999999999999999999999fffffffffffffff9999999999fffffff77777fffffff99999fffffffbbbbffffff9999999999fffffffffffff99999999999999999999999
    9999999999999999999999999999999999999999999999fffffffffffffffff99999999999fffffff77777ffffff99999fffffffbbbfffffff9999999999ffffff7fffffff9999999999999999999999
    99999999999999999999999999999999999999999999ffffffffffffffffffff9999999999fffffff77777ffffff9999fffffffbbbbfffffff999999999fffffff7ffffffff999999999999999999999
    9999999999999999999999999999999999999999999ffffffffffff77fffffff99999999999fffffff7777fffffff999fffffffbbbfffffff9999999999ffffff777fffffff999999999999999999999
    99999999999999999999999999999999999999999fffffffffffff7777fffffff9999999999fffffff77777ffffff999ffffffbbbbfffffff9999999999ffffff777ffffffff99999999999999999999
    999999999999999999999999999999999999999fffffffffffff777777fffffff99999999999ffffff77777ffffff99fffffffbbbbffffff99999999999ffffff7777fffffff99999999999999999999
    99999999999999999999999999999999999999ffffffffffff777777777fffffff9999999999fffffff7777fffffff9ffffffbbbbfffffff9999999999ffffff777777fffffff9999999999999999999
    99999999999999999999999999999999999999ffffffffff777fffff777ffffffff9999999999ffffff77777fffffffffffffbbbbffffff99999999999ffffff777777fffffff9999999999999999999
    99999999999999999999999999999999999999fffffffff7777fffff7777fffffff9999999999fffffff7777fffffffffffffbbbfffffff99999999999ffffff7777777fffffff999999999999999999
    99999999999999999999999999999999999999fffffff7777fffffff7777ffffffff999999999fffffff7777ffffffffffffbbbbfffffff9999999999fffffff7777777fffffff999999999999999999
    99999999999999999999999999999999999999fffff777777fffffff77777fffffff9999999999fffffff7777fffffffffffbbbfffffff99999999999ffffff7fffff777fffffff99999999999999999
    99999999999999999999999999999999999fffff777777ffffffffff77777fffffff9999999999fffffff7777ffffffffffbbbbfffffff99999999999ffffff7fffff777fffffff99999999999999999
    99999999999999999999999999999999999fffff777777ffffffff777777ffffffff99999999999fffffff777ffffffffffbbbfffffff99999999999fffffff7fffff7777fffffff9999999999999999
    99999999999999999999999999999999999ffffff77777ffffffff7777ffffffffff99999999999fffffff7777ffffffffbbbbfffffff99999999999ffffff77fffff7777fffffff9999999999999999
    99999999999999999999999999999999999ffffff77777fffff777777fffffffff99999999999999fffffff77777ffffffbbbfffffff999999999999ffffff77fffff77777fffffff999999999999999
    99999999999999999999999999999999999ffffff77777fffff77777ffffffffff99999999999999fffffff77777ffffffbbbfffffff99999999999fffffff777777777777fffffff999999999999999
    99999999999999999999999999999999999fffffff777777777777fffffffffff9999999999999999fffffff7777ffffffbbfffffff999999999999ffffff77777777777777fffffff99999999999999
    999999999999999999999999999999999999ffffff77777777777fffffffffff99999999999999999fffffff7777ffffffbbfffffff999999999999ffffff77777777777777fffffff99999999999999
    999999999999999999999999999999999999fffffff777777777ffffffffff99999999999999999999fffffff777ffffffbbffffff999999999999fffffff777fffff7777777fffffff9999999999999
    999999999999999999999999999999999999fffffff7777777fffffffffff999999999999999999999fffffff777ffffffbfffffff999999999999ffffff777ffffff7777777fffffff9999999999999
    9999999999999999999999999999999999999fffffff777777ffffffffff99999999999999999999999fffffff77ffffffbffffff9999999999999ffffff777fffffff7777777fffffff999999999999
    9999999999999999999999999999999999999fffffff7777777fffffff9999999999999999999999999fffffff77fffffffffffff999999999999fffffff77ffffffff7777777fffffff999999999999
    99999999999999999999999999999999999999fffffff777777ffffff999999999999999999999999999fffffffffffffffffffff999999999999ffffff777fffffffff7777777fffffff99999999999
    99999999999999999999999999999999999999fffffff7777777ffff9999999999999999999999999999ffffffffffffffffffff9999999999999ffffff77ffffffffff7777777fffffff99999999999
    999999999999999999999999999999999999999ffffff7777777ffffff999999999999999999999999999fffffffffffffffffff999999999999fffffff77fffffffffff7777777fffffff9999999999
    999999999999999999999999999999999999999fffffff777777ffffff999999999999999999999999999ffffffffffffffffff9999999999999ffffff77ffffffffffff7777777ffffffff999999999
    9999999999999999999999999999999999999999ffffff7777777ffffff999999999999999999999999999fffffffffffffffff9999999999999ffffff77fffffffffffff7777777fffffff999999999
    9999999999999999999999999999999999999999fffffff777777ffffff999999999999999999999999999ffffffffffffffff99999999999999ffffff7ffffffffffffff7777777ffffffff99999999
    9999999999999999999999999999999999999999fffffff7777777ffffff999999999999999999999999999fffffffffffffff9999999999999ffffff77fffffff9fffffff7777777fffffff99999999
    99999999999999999999999999999999999999999ffffff7777777ffffff999999999999999999999999999ffffffffffffff99999999999999ffffff77ffffff99fffffff77777777fffffff9999999
    99999999999999999999999999999999999999999fffffff777777fffffff99999999999999999999999999ffffffffffffff99999999999999ffffff7fffffff999fffffff7777777fffffff9999999
    999999999999999999999999999999999999999999ffffff7777777ffffff999999999999999999999999999ffffffffffff99999999999999fffffff7ffffff9999fffffff77777777fffffff999999
    999999999999999999999999999999999999999999fffffff777777ffffff999999999999999999999999999ffffffffffff99999999999999ffffff7fffffff99999fffffff7777777fffffff999999
    9999999999999999999999999999999999999999999ffffff7777777ffffff999999999999999999999999999ffffffffff999999999999999ffffff7fffffff99999fffffff77777777fffffff99999
    9999999999999999999999999999999999999999999ffffff7777777ffffff999999999999999999999999999ffffffffff99999999999999ffffffffffffff9999999fffffff7777777fffffff99999
    9999999999999999999999999999999999999999999fffffff777777fffffff999999999999999999999999999fffffffff99999999999999ffffff7fffffff9999999fffffff777ffffffffffff9999
    99999999999999999999999999999999999999999999ffffff7777777ffffff999999999999999999999999999ffffffff99999999999ffffffffff7ffffff999999999fffffffffffffffffffff9999
    99999999999999999999999999999999999999999999fffffff777777fffffff999999999999999999999999999fffffff99999999999fffffffffffffffff999999999fffffffffffffffffffff9999
    999999999999999999999999999999999999999999999ffffff7777777ffffff999999999999999999999999999fffffff99999999999ffffffffffffffff99999999999ffffffffffffffffffff9999
    999999999999999999999999999999999999999999999ffffff7777777fffffff999999999999999999999999999ffffff99999999999ffffffffffffffff9999999999999ffffffffffffffffff9999
    9999999999999999999999999999999999999999999999ffffff777777fffffff999999999999999999999999999ffffff99999999999fffffffffffffff99999999999999ffffffffff999999999999
    9999999999999999999999999999999999999999999999ffffff7777777fffffff999999999999999999999999999fffff9999999999999999ffffffffff999999999999999999999999999999999999
    fffff999999999999999999999999999999999999999999ffffff777777fffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    fffffff9999999999999999999999999999999999999999ffffff777777.ffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    ffffffffff9999999999999999999999999999999999999ffffff777777fffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    fffffffffffff99999999999999999999999999999999999ffffff77777fffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    ffffffffffffff9999999999999999999999999999999999fffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    7fffffffffffffffff9999999999999999999999999999999ffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    ffffffffffffffffffff9999999999999999999999999999999999fffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    7fffffffffffffffffffff99999999999999999999999999999999fffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    7fffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    7ffffffff7ffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    77ffffffff7777ffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffff
    777fffffff777777ffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffff
    7777fffffff7777777fffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffff
    7777fffffff777777777fffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffff
    77777fffffff7777777777fffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffff
    77777fffffff77777777777777fffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffff777fffffff
    77777ffffffff7777777777777ffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffff77777777ffffffff
    777777fffffff7777777777777ffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff777777777777777ffffffff
    777777fffffff7777777777777ffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777777777777777ffffffff7
    7777777ffffff7777777777777fffff777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.ffffff7777777777777777fffffffff77
    7777777ffffff7777777777777fffff7777777777fffff7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77ffffffff777777777777ffffffffffff777
    77777777fffff777777777777ffffff777777777ffffff777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777fffffffff777777777fffffffffffffff777
    77777777fffff777777777777ffffff777777777ffffff777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777fffffff7777fffffffff77777777fffffffffffffff7777
    77777777fffff777777777777ffffff77777777fffffff77ffffff777777777777ffffff7777777777fffffffff777777777777777777777ffffffff777ffffffffff777777ffffffffffffffff77777
    77777777fffff777777777777ffffff77777777fffffff77ffffff77777777777fffffff7777777777fffffffff777777777777777777777fffffff7777ffffffff77777777ffffffffffffff7777777
    77777777fffff77777777777ffffff777777777ffffff777ffffff77777777ffffffffff777777777ffffffffff77777777777777777777ffffffff777fffffff777777777fffffffffff77777777777
    77777777fffff77777777777ffffff77777777fffffff77fffffff7777777fffffffffff777777777ffffffffff7777777777777777777ffffffff7777fffffff777777777ffffffff77777777777777
    77777777fffff77777777777ffffff77777777fffffff7ffffffff777777ffffffffffff77777777fffffffffff777777777777777777ffffffff7777ffffffff777777777fffffff7777777777fffff
    77777777fffff77777777777ffffff77777777ffffff77fffffff77777ffffffffffff7777777777fffffffffff777777777777777777ffffffff7777fffffff7777777777ffffff7777777777ffffff
    77777777fffff7777777777ffffff777777777ffffff7ffffffff777fffffffffffff7777777777ffffffffffff77777777777777777ffffffff7777fffffff7777777777ffffff77777777fffffffff
    77777777fffff7777777777ffffff777777777fffff77fffffff777ffffffffffff777777777777ffffffffffff7777777777777777ffffffff77777fffffff7777777777ffffff7777777ffffffffff
    77777777fffff777777777fffffff777777777fffff77ffffff777fffffffffff7777777777777fffffff7fffff7777777777777777fffffff777777ffffff77777777777ffffff7777777ffffffffff
    77777777fffff777777777fffffff777777777fffff77ffffff777ffffffffff7777777777777ffffffff7fffff777777777777777ffffffff77777fffffff77777777777ffffff7777777ffffffffff
    77777777fffff777777777ffffff777777777ffffff77fffff777fffffffff77777777777777ffffffff77fffff777777777777777fffffff777777ffffff777777777777fffff77777777ffffffff77
    77777777fffff77777777fffffff777777777ffffff77fffff777fffffff777777777777777fffffffff77fffff77777777777777fffffff777777fffffff777777777777ffffff7777777ffffff7777
    77777777fffff77777777ffffff7777777777ffffff7ffffff777ffffff77777777777777ffffffffff777fffff77777777777777fffffff777777fffffff777777777777ffffff7777777fffff77777
    77777777fffff77777777ffffff7777777777ffffff7ffffff777ffffff777777fffffffffffffffff7777fffff7777777777777fffffff777777fffffff7777777777777fffffff777777ffffff7777
    77777777fffff7777777fffffff7777777777fffff77ffffff77ffffff7777fffffffffffffffffff7777ffffff7777777777777fffffff777777fffffff7777777777777fffffff777777ffffff7777
    77777777fffff7777777ffffff7777777777ffffff7fffffff77ffffff77ffffffffffffffffffff7777fffffff7777777777777ffffff777777fffffff777777777777777ffffff777777fffffff777
    77777777fffff7777777ffffff7777777777ffffff7ffffff777fffffffffffffffffffffffffff777fffffffff777777777777fffffff77777ffffffff777777777777777ffffff777777fffffff777
    77777777fffff777777fffffff777777777ffffffffffffff777fffffffffffffffffffffffff777fffffffffff777777777777ffffff777777fffffff7777777777777777ffffff7777777ffffff777
    77777777fffff777777ffffff777777777fffffffffffffff777fffffffffffffffff7777777777fffffffffff777777777777fffffff77777ffffffff77777777777777777ffffff777777fffffff77
    77777777fffff77777fffffff777777fffffffffffffffff7777ffffffffffffff77777777777ffffffffffff7777777777777fffffff77777fffffff777777777777777777fffffff777777ffffff77
    ffff7777fffff77777fffffff77777ffffffffffffffffff7777ffffffffffff7777777777ffffffffffffff77777777777777ffffff777777ffffff7777777777777777777fffffffff7777ffffff77
    ffffff77fffff7777fffffff777fffffffffffff7ffffff77777ffffffffff77777777777fffffffffffff777777777777777fffffff77777fffffff7777777777777777777ffffffffffff7ffffff77
    fffffffffffff7777fffffff77fffffffffffff77ffffff77777ffffffffff77777777777ffffffffffff7777777777777777ffffff777777ffffff777777777777777777777fffffffffff77fffff77
    fffffffffffff7777ffffff7ffffffffffffff7777ffffff7777fffffffff777777777777ffffffffff77777777777777777fffffff77777fffffff7777777777777777777777ffffffffff77fffff77
    fffffffffffff7777ffffffffffffffffff7777777ffffff7777fffffffff777777777777ffffffff7777777777777777777fffffff77777fffffff77777777777777777777777fffffffff77fffff77
    fffffffffffff7777fffffffffffffffff77777777ffffff7777ffffffff7777777777777fffffff77777777777777777777ffffff777777ffffff77777777777777777777777777fffffff77fffff77
    fffffffffffff7777ffffffffffffff77777777777ffffff7777ffffffff7777777777777fffffff7777777777777777777fffffff77777fffffff777777777777777777777777777ffffff77fffff77
    777ffffffffff7777fffffffffffff7777777777777ffffff777ffffffff7777777777777fffffff7777777777777777777ffffff777777ffffff777777777777777777777777777fffffff77fffff77
    7777fffffffff7777fffffffffff777777777777777ffffff77fffffffff77777777777777ffffff777777777777777777fffffff777777ffffff7777777777777777777777777fffffffff77fffff77
    7777fffffffff7777fffffffff77777777777777777ffffff7fffffffffff7777777777777ffffff77777777777777777ffffffff77777fffffff777777777777777777777777fffffffff777fffff77
    7777fffffffff7777ffffff77777777777777777777ffffff7fffffffffffff77777777fffffffff7777777777777777ffffffff77777fffffff777777777777777777777777ffffffffff777fffff77
    77777fffffff77777777777777777777777777777777ffffffffffffffffffffffffffffffffffff777777777777777fffffffffffffffffffff7777777777777777777ffffffffffffff777ffffff77
    777777777ff777777777777777777777777777777777ffffffffffffffffffffffffffffffffffff777777777777777fffffffffffffffffffff777777777777ffffffffffffffffffff7777ffffff77
    7777777777f777777777777777777777777777777777ffffffffffffffffffffffffffffffffffff777777777777777ffffffffffffffffffff7777777777777fffffffffffffffffff7777fffffff77
    77777777777777777777777777777777777777777777fffffffffff77fffffffffffffffffffff77777777777777777ffffffffffffffffffff7777777777777ffffffffffffffffff77777fffffff77
    777777777777777777777777777777777777777777777fffffffff77777ffffffffffffffff77777777777777777777ffffffffffffffffff777777777777777ffffffffffffffffffffffffffffff77
    7777777777777777777777777777777777777777777777fffffff777777777777777777777777777777777777777777fffffffffffff77777777777777777777fffffffffffffffffffffffffffff777
    7777777777777777777777777777777777777777777777ffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffff7777
    7777777777777777777777777777777777777777777777fffff7777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffffffffffffffffffff7777
    7777777777777777777777777777777777777777777777fffff7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffff77777
    7777777777777777777777777777777777777777777777fffff7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777fffff7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
pause(2000)
story.printCharacterText("Watch Out AI robots are coming we need your help so please click solo or multiplayer with friends", "Choche")
pause(2000)
story.showPlayerChoices("solo", "multiplayer")
if (story.checkLastAnswer("solo")) {
    game2 = 1
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    tiles.setCurrentTilemap(tilemap`level2`)
    scene.setBackgroundColor(7)
    scene.cameraFollowSprite(mySprite)
    mySprite = sprites.create(img`
        1 1 1 1 . . . . . . . . 1 1 1 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 1 1 1 . . . . . . . . 1 1 1 1 
        `, SpriteKind.Player)
    grid.snap(mySprite)
    grid.moveWithButtons(mySprite)
    grid.place(mySprite, tiles.getTileLocation(0, 0))
    Peashooter = 0
    Sunflower = 0
    Wallnut = 0
    kill = 0
    info.setScore(200)
    info.startCountdown(30)
}
if (story.checkLastAnswer("multiplayer")) {
    game2 = 1
    m = 1
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    tiles.setCurrentTilemap(tilemap`level3`)
    scene.setBackgroundColor(7)
    scene.cameraFollowSprite(mySprite)
    mySprite = sprites.create(img`
        1 1 1 1 . . . . . . . . 1 1 1 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 1 1 1 . . . . . . . . 1 1 1 1 
        `, SpriteKind.Player)
    grid.snap(mySprite)
    grid.moveWithButtons(mySprite)
    grid.place(mySprite, tiles.getTileLocation(0, 0))
    player2 = sprites.create(img`
        1 8 8 8 . . . . . . . . 8 8 8 1 
        8 . . . . . . . . . . . . . . 8 
        8 . . . . . . . . . . . . . . 8 
        8 . . . . . . . . . . . . . . 8 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . 8 8 8 1 8 8 8 . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        8 . . . . . . . . . . . . . . 8 
        8 . . . . . . . . . . . . . . 8 
        8 . . . . . . . . . . . . . . 8 
        1 8 8 8 . . . . . . . . 8 8 8 1 
        `, SpriteKind.player2)
    grid.snap(player2, false)
    controller.player2.moveSprite(player2)
    grid.place(player2, tiles.getTileLocation(9, 0))
    Peashooter = 0
    Sunflower = 0
    Wallnut = 0
    kill = 0
    info.setScore(200)
    info.player2.setScore(100)
    info.startCountdown(30)
}
game.onUpdateInterval(15000, function () {
    sun = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . b . b . b . . . . . . 
        . . . b . b b b b b b . b . . . 
        . . . . b 1 b b b b 1 b . . . . 
        . . b b b b b b b b b b b b . . 
        . . . b b b b b b b b b b . . . 
        . . b b b b b b b b b b b b . . 
        . . . b b 1 b b b b 1 b b . . . 
        . . b b b b b b b b b b b b . . 
        . . . . b b b b b b b b . . . . 
        . . . b . b b b b b b . b . . . 
        . . . . . b . b . b . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.soon)
    grid.place(sun, tiles.getTileLocation(randint(3, 10), 0))
    sun.setVelocity(0, 3)
})
game.onUpdateInterval(10000, function () {
    if (wave == 1) {
        wave1()
    }
    if (kill == 20) {
        game.gameOver(true)
    }
})
game.onUpdateInterval(1000, function () {
    for (let mySprite2 of sprites.allOfKind(SpriteKind.shooter)) {
        projectile = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f . . 
            . f 8 9 8 9 8 9 6 9 6 9 6 9 f . 
            . f 9 8 9 8 9 8 9 6 9 6 9 6 f . 
            . . f f f f f f f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        projectile.setPosition(mySprite2.x, mySprite2.y)
        projectile.setVelocity(50, 0)
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f 7 7 7 7 7 7 7 f . . . . 
            . . f f 7 7 7 7 7 7 7 f . . . . 
            . f f 7 7 7 f 7 f f f f . . . . 
            . f 7 7 f f f f f 1 1 f . . . . 
            f f 7 7 f 1 1 f 1 1 1 f . . . . 
            f 7 7 7 f 1 2 f 1 1 2 f . . . . 
            f 7 7 7 f f 1 f 1 1 1 f . . . . 
            f f 7 7 7 f f f f 1 1 f . . . . 
            . f 7 7 7 7 7 7 f 1 f f . . . . 
            . f f 7 7 7 7 7 f f f . . . . . 
            . . f f 7 7 7 7 f f . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f . . . . . 
            . . f 7 7 7 7 7 7 7 f . . . . . 
            . f f 7 7 7 7 7 7 7 f . . . . . 
            f f 7 7 7 f 7 f f f f . . . . . 
            f 7 7 f f f f f 1 1 f . . . . . 
            f 7 7 f 1 1 f 1 1 1 f . . . . . 
            7 7 7 f 1 2 f 1 1 2 f . . . . . 
            7 7 7 f f 1 f 1 1 1 f . . . . . 
            f 7 7 7 f f f f 1 1 f . . . . . 
            f 7 7 7 7 7 7 f 1 f f . . . . . 
            f f 7 7 7 7 7 f f f . . . . . . 
            . f f 7 7 7 7 f f . . . . . . . 
            . . . f f f f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f 7 7 7 7 7 7 7 f . . . . 
            . . f f 7 7 7 7 7 7 7 f . . . . 
            . f f 7 7 7 f 7 f f f f . . . . 
            . f 7 7 f f f f f 1 1 f . . . . 
            f f 7 7 f 1 1 f 1 1 1 f . . . . 
            f 7 7 7 f 1 2 f 1 1 2 f . . . . 
            f 7 7 7 f f 1 f 1 1 1 f . . . . 
            f f 7 7 7 f f f f 1 1 f . . . . 
            . f 7 7 7 7 7 7 f 1 f f . . . . 
            . f f 7 7 7 7 7 f f f . . . . . 
            . . f f 7 7 7 7 f f . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f 7 7 7 7 7 7 7 f . . . . 
            . . f f 7 7 7 7 7 7 7 f . . f . 
            . f f 7 7 7 f 7 f f f f . f f . 
            . f 7 7 f f f f f 1 1 f . f . . 
            f f 7 7 f 1 1 f 1 1 1 f f f . . 
            f 7 7 7 f 1 2 f 1 1 2 f f . . . 
            f 7 7 7 f f 1 f 1 1 1 f . f . . 
            f f 7 7 7 f f f f 1 1 f f f . . 
            . f 7 7 7 7 7 7 f 1 f f . . . . 
            . f f 7 7 7 7 7 f f f . . . . . 
            . . f f 7 7 7 7 f f . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f 7 7 7 7 7 7 7 f . . . . 
            . . f f 7 7 7 7 7 7 7 f . . f . 
            . f f 7 7 7 f 7 f f f f . f f . 
            . f 7 7 f f f f f 1 1 f . f . f 
            f f 7 7 f 1 1 f 1 1 1 f f f . f 
            f 7 7 7 f 1 2 f 1 1 2 f f . f f 
            f 7 7 7 f f 1 f 1 1 1 f . f . . 
            f f 7 7 7 f f f f 1 1 f f f . . 
            . f 7 7 7 7 7 7 f 1 f f . . . . 
            . f f 7 7 7 7 7 f f f . . . . . 
            . . f f 7 7 7 7 f f . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f 7 7 7 7 7 7 7 f . f . . 
            . . f f 7 7 7 7 7 7 7 f f f f . 
            . f f 7 7 7 f 7 f f f f f f f . 
            . f 7 7 f f f f f 1 1 f . f . f 
            f f 7 7 f 1 1 f 1 1 1 f f f . f 
            f 7 7 7 f 1 2 f 1 1 2 f f . f f 
            f 7 7 7 f f 1 f 1 1 1 f . f . . 
            f f 7 7 7 f f f f 1 1 f f f . . 
            . f 7 7 7 7 7 7 f 1 f f . . . . 
            . f f 7 7 7 7 7 f f f . . . . . 
            . . f f 7 7 7 7 f f . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . f f 
            . . . . f f f f f f f f . . f . 
            . . . f 7 7 7 7 7 7 7 f . f . . 
            . . f f 7 7 7 7 7 7 7 f f f f . 
            . f f 7 7 7 f 7 f f f f f f f . 
            . f 7 7 f f f f f 1 1 f . f . f 
            f f 7 7 f 1 1 f 1 1 1 f f f . f 
            f 7 7 7 f 1 2 f 1 1 2 f f . f f 
            f 7 7 7 f f 1 f 1 1 1 f . f . . 
            f f 7 7 7 f f f f 1 1 f f f . . 
            . f 7 7 7 7 7 7 f 1 f f . . . . 
            . f f 7 7 7 7 7 f f f . . . . . 
            . . f f 7 7 7 7 f f . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        150,
        false
        )
        projectile.lifespan = 2000
    }
})
game.onUpdateInterval(1000, function () {
    for (let Mysprite7 of sprites.allOfKind(SpriteKind.Firegun)) {
        projectile = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . f f f 2 4 4 4 4 f . . . . . 
            f f f 2 f 2 4 4 4 4 f . . . . . 
            f f 2 4 f 2 2 4 4 4 f . . . . . 
            . f f 2 f 2 2 2 2 4 f . . . . . 
            . . . f f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        projectile.setPosition(Mysprite7.x, Mysprite7.y)
        projectile.setVelocity(45, 0)
        projectile.lifespan = 4
        animation.runImageAnimation(
        Mysprite7,
        [img`
            2 2 2 f f f f f f f . . 2 2 . . 
            2 2 2 2 f 2 2 2 2 f f f . f f f 
            f 2 f f f 2 2 2 2 2 2 f f f 2 f 
            f 2 f 2 2 2 4 f f 2 2 2 2 2 2 f 
            f f f 2 2 2 4 f f 2 2 2 f 2 2 f 
            . f f f 2 2 4 f f 2 2 2 2 f 2 f 
            . 2 . f f 2 2 2 2 2 2 2 f f f f 
            . . 2 . f f f 2 2 2 2 f f . . . 
            . . . . . . f 2 f f f f . . . 2 
            . 2 . . 2 . f 2 f . . 2 2 2 2 . 
            2 2 2 2 2 2 f 2 f . . 2 2 2 2 2 
            . 2 2 2 2 2 f 2 f . 2 2 2 2 . . 
            . . . 2 . . f 2 f . 2 2 2 2 . . 
            . . . . . . f 2 f . . . . . . . 
            . f f f f f f 2 f f f f f f f . 
            f 2 2 2 2 2 2 f 2 2 2 2 2 2 2 f 
            `,img`
            2 2 f f f f f f f . . 2 2 . . . 
            2 2 2 f 2 2 2 2 f f f . f f f . 
            2 f f f 2 2 2 2 2 2 f f f 2 f . 
            2 f 2 2 2 4 f f 2 2 2 2 2 2 f . 
            f f 2 2 2 4 f f 2 2 2 f 2 2 f . 
            f f f 2 2 4 f f 2 2 2 2 f 2 f . 
            2 . f f 2 2 2 2 2 2 2 f f f f . 
            . 2 . f f f 2 2 2 2 f f . . . . 
            . . . . . f 2 f f f f . . . 2 . 
            . 2 . . 2 . f 2 f . . 2 2 2 2 . 
            2 2 2 2 2 2 f 2 f . . 2 2 2 2 2 
            . 2 2 2 2 2 f 2 f . 2 2 2 2 . . 
            . . . 2 . . f 2 f . 2 2 2 2 . . 
            . . . . . . f 2 f . . . . . . . 
            . f f f f f f 2 f f f f f f f . 
            f 2 2 2 2 2 2 f 2 2 2 2 2 2 2 f 
            `,img`
            2 f f f f f f f . . 2 2 . . . . 
            2 2 f 2 2 2 2 f f f . f f f . . 
            f f f 2 2 2 2 2 2 f f f 2 f . . 
            f 2 2 2 4 f f 2 2 2 2 2 2 f . . 
            f 2 2 2 4 f f 2 2 2 f 2 2 f . . 
            f f 2 2 4 f f 2 2 2 2 f 2 f . . 
            . f f 2 2 2 2 2 2 2 f f f f . . 
            2 . f f f 2 2 2 2 f f . . . . . 
            . . . . f 2 2 f f f . . . 2 . . 
            . 2 . . 2 f f 2 f . . 2 2 2 2 . 
            2 2 2 2 2 2 f 2 f . . 2 2 2 2 2 
            . 2 2 2 2 2 f 2 f . 2 2 2 2 . . 
            . . . 2 . . f 2 f . 2 2 2 2 . . 
            . . . . . . f 2 f . . . . . . . 
            . f f f f f f 2 f f f f f f f . 
            f 2 2 2 2 2 2 f 2 2 2 2 2 2 2 f 
            `,img`
            2 2 2 2 f f f f f f f . . 2 2 . 
            2 2 2 2 2 f 2 2 2 2 f f f . f f 
            2 2 2 f f f 2 2 2 2 2 2 f f f 2 
            2 2 2 f 2 2 2 4 f f 2 2 2 2 2 2 
            . . . f 2 2 2 4 f f 2 2 2 f 2 2 
            . . . f f 2 2 4 f f 2 2 2 2 f 2 
            . . . . f f 2 2 2 2 2 2 2 f f f 
            . . . 2 . f f f 2 2 2 2 f f . . 
            . . . . . . . f 2 2 f f f . . . 
            . 2 . . 2 . f 2 f . . 2 2 2 2 . 
            2 2 2 2 2 2 f 2 f . . 2 2 2 2 2 
            . 2 2 2 2 2 f 2 f . 2 2 2 2 . . 
            . . . 2 . . f 2 f . 2 2 2 2 . . 
            . . . . . . f 2 f . . . . . . . 
            . f f f f f f 2 f f f f f f f . 
            f 2 2 2 2 2 2 f 2 2 2 2 2 2 2 f 
            `,img`
            2 2 2 f f f f f f f . . 2 2 . . 
            2 2 2 2 f 2 2 2 2 f f f . f f f 
            f 2 f f f 2 2 2 2 2 2 f f f 2 f 
            f 2 f 2 2 2 4 f f 2 2 2 2 2 2 f 
            f f f 2 2 2 4 f f 2 2 2 f 2 2 f 
            . f f f 2 2 4 f f 2 2 2 2 f 2 f 
            . 2 . f f 2 2 2 2 2 2 2 f f f f 
            . . 2 . f f f 2 2 2 2 f f . . . 
            . . . . . . f 2 f f f f . . . 2 
            . 2 . . 2 . f 2 f . . 2 2 2 2 . 
            2 2 2 2 2 2 f 2 f . . 2 2 2 2 2 
            . 2 2 2 2 2 f 2 f . 2 2 2 2 . . 
            . . . 2 . . f 2 f . 2 2 2 2 . . 
            . . . . . . f 2 f . . . . . . . 
            . f f f f f f 2 f f f f f f f . 
            f 2 2 2 2 2 2 f 2 2 2 2 2 2 2 f 
            `],
        150,
        false
        )
    }
})
game.onUpdateInterval(3000, function () {
    for (let Mysprite8 of sprites.allOfKind(SpriteKind.Electricpea)) {
        projectile = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . 8 8 . . . . . . . . . 
            . . . . . 8 . . . . . . . . . . 
            . 8 . . f f f f f f f . . . . 8 
            . 8 . f 9 9 9 9 9 9 9 f 8 8 8 8 
            . 8 . f 9 9 9 9 9 9 9 f 8 . . . 
            . 8 . f 9 9 9 9 9 9 9 f . . . . 
            . . . f 6 9 9 9 8 9 9 f . . . . 
            . . . f 6 9 8 8 9 9 9 f . . . . 
            . . . f 6 6 9 9 9 9 9 f . . . . 
            . . . f 6 6 6 6 9 9 9 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . 8 8 . . . . 
            . . . . . . 8 8 8 8 8 . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        projectile.setPosition(Mysprite8.x, Mysprite8.y)
        projectile.setVelocity(25, 0)
        animation.runImageAnimation(
        Mysprite8,
        [img`
            . 8 . . f f f f f . . 8 8 . . . 
            8 . . f 9 9 9 9 f f f . f f f . 
            . f f f 9 9 9 9 9 9 f f f 9 f . 
            . f 9 9 9 9 f f 9 9 9 f 9 9 f . 
            . f 9 9 9 9 f f 9 9 9 f 9 9 f . 
            . f f 9 9 9 f f 9 9 9 9 f 9 f . 
            8 . f f 9 9 9 9 9 9 9 f f f f . 
            . 8 . f f f 9 9 9 9 f f . . . . 
            . . . . . f 9 f f f f . . . 8 . 
            . f . . f . f 9 f . . . f . 8 . 
            f 7 f f 8 f f 9 f . . f 7 f . . 
            . f f 8 f . f 9 f . f 7 7 f . . 
            . . . f . . f 9 f . f f f . . . 
            . . . . . . f 9 f . . . . . . . 
            . f f f f f f 9 f f f f f f f . 
            f 6 7 7 7 7 7 f 7 7 7 7 7 7 6 f 
            `,img`
            8 . . f f f f f . . 8 8 . . . . 
            . . f 9 9 9 9 f f f . f f f . . 
            f f f 9 9 9 9 9 9 f f f 9 f . . 
            f 9 9 9 9 f f 9 9 9 f 9 9 f . . 
            f 9 9 9 9 f f 9 9 9 f 9 9 f . . 
            f f 9 9 9 f f 9 9 9 9 f 9 f . . 
            . f f 9 9 9 9 9 9 9 f f f f . . 
            8 . f f f 9 9 9 9 f f . . . . . 
            . . . . f 9 9 f f f . . . 8 . . 
            . f . . f f f 9 f . . . f . 8 . 
            f 7 f f 8 f f 9 f . . f 7 f . . 
            . f f 8 f . f 9 f . f 7 7 f . . 
            . . . f . . f 9 f . f f f . . . 
            . . . . . . f 9 f . . . . . . . 
            . f f f f f f 9 f f f f f f f . 
            f 6 7 7 7 7 7 f 7 7 7 7 7 7 6 f 
            `,img`
            . . . 8 . . f f f f f . . 8 8 . 
            . . . . . f 9 9 9 9 f f f . f f 
            . . . f f f 9 9 9 9 9 9 f f f 9 
            . . . f 9 9 9 9 f f 9 9 9 f 9 9 
            . . . f 9 9 9 9 f f 9 9 9 f 9 9 
            . . . f f 9 9 9 f f 9 9 9 9 f 9 
            . . . . f f 9 9 9 9 9 9 9 f f f 
            . . . 8 . f f f 9 9 9 9 f f . . 
            . . . . . . . f 9 9 f f f . . . 
            . f . . . . f 9 f . . . f . 8 . 
            f 7 f f 8 . f 9 f . . f 7 f . . 
            . f f 8 f . f 9 f . f 7 7 f . . 
            . . . f . . f 9 f . f f f . . . 
            . . . . . . f 9 f . . . . . . . 
            . f f f f f f 9 f f f f f f f . 
            f 6 7 7 7 7 7 f 7 7 7 7 7 7 6 f 
            `,img`
            . . 8 . . f f f f f . . 8 8 . . 
            . 8 . . f 9 9 9 9 f f f . f f . 
            . . f f f 9 9 9 9 9 9 f f f 9 . 
            . . f 9 9 9 9 f f 9 9 9 f 9 9 . 
            . . f 9 9 9 9 f f 9 9 9 f 9 9 . 
            . . f f 9 9 9 f f 9 9 9 9 f 9 . 
            . 8 . f f 9 9 9 9 9 9 9 f f f . 
            . . 8 . f f f 9 9 9 9 f f . . . 
            . . . . . . f 9 9 f f f . . 8 . 
            . f . . f . f 9 f . . . f . 8 . 
            f 7 f f 8 f f 9 f . . f 7 f . . 
            . f f 8 f . f 9 f . f 7 7 f . . 
            . . . f . . f 9 f . f f f . . . 
            . . . . . . f 9 f . . . . . . . 
            . f f f f f f 9 f f f f f f f . 
            f 6 7 7 7 7 7 f 7 7 7 7 7 7 6 f 
            `],
        150,
        false
        )
        projectile.lifespan = 4000
    }
})
game.onUpdateInterval(200, function () {
    if (P2 == 1) {
        info.player2.changeScoreBy(5)
    }
})
game.onUpdateInterval(10000, function () {
    for (let value of sprites.allOfKind(SpriteKind.Plants)) {
        animation.runImageAnimation(
        value,
        assets.animation`Girasol ANIM Help from TGB`,
        150,
        false
        )
        sun = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . b . b . b . . . . . . 
            . . . b . b b b b b b . b . . . 
            . . . . b 1 b b b b 1 b . . . . 
            . . b b b b b b b b b b b b . . 
            . . . b b b b b b b b b b . . . 
            . . b b b b b b b b b b b b . . 
            . . . b b 1 b b b b 1 b b . . . 
            . . b b b b b b b b b b b b . . 
            . . . . b b b b b b b b . . . . 
            . . . b . b b b b b b . b . . . 
            . . . . . b . b . b . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, value, 0, 0)
        sun.setKind(SpriteKind.soon)
    }
})

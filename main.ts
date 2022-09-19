input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(game.score())
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.Shake, function () {
    game.setScore(0)
    basic.showNumber(game.score())
})
let player: game.LedSprite = null
basic.showIcon(IconNames.Heart)
player = game.createSprite(2, 2)
let enemy = game.createSprite(0, 2)
basic.forever(function () {
    if (player.isTouching(enemy)) {
        enemy.delete()
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        enemy = game.createSprite(randint(0, 5), 2)
        game.addScore(1)
    }
})

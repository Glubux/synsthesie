input.onButtonPressed(Button.A, function () {
    if (messen == 1) {
        messen = 0
    } else {
        messen = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (mode == 1) {
        messen = 0
    } else {
        mode = 1
    }
})
let mode = 0
let messen = 0
messen = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . # . # .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . . # . .
    . # . # .
    # . . . #
    . # . # .
    . . # . .
    `)
basic.showLeds(`
    . # . # .
    # . . . #
    . . . . .
    # . . . #
    . # . # .
    `)
basic.showLeds(`
    # . . . #
    . . . . .
    . . . . .
    . . . . .
    # . . . #
    `)
basic.clearScreen()
basic.forever(function () {
    if (messen == 1) {
        music.playTone(input.lightLevel() * 5, music.beat(BeatFraction.Half))
    }
})
basic.forever(function () {
    if (messen == 1) {
        basic.showNumber(input.lightLevel() / 255 * 100)
    } else {
        basic.clearScreen()
    }
})

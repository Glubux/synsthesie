input.onButtonPressed(Button.A, function () {
    if (messen == 1) {
        messen = 0
    } else {
        messen = 1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (modus == 0) {
        modus = 1
    }
    if (modus == 1) {
        modus = 0
    }
})
let modus = 0
let messen = 0
messen = 0
modus = 0
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
    if (messen == 0) {
        if (0 < input.lightLevel() && input.lightLevel() < 52) {
            basic.clearScreen()
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                `)
        }
        if (51 < input.lightLevel() && input.lightLevel() < 103) {
            basic.clearScreen()
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                # # # # #
                `)
        }
        if (102 < input.lightLevel() && input.lightLevel() < 154) {
            basic.clearScreen()
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                # # # # #
                # # # # #
                `)
        }
        if (153 < input.lightLevel() && input.lightLevel() < 205) {
            basic.clearScreen()
            basic.showLeds(`
                . . . . .
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        }
        if (204 < input.lightLevel() && input.lightLevel() < 256) {
            basic.clearScreen()
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        }
    }
})

input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . # . #
        . # # # .
        . # # # .
        . . # . .
        # . . . #
        `)
    radio.sendString("MICROBITS")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)

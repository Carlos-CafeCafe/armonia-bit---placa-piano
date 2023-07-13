input.onPinPressed(TouchPin.P0, function () {
    basic.showString("a")
    radio.sendString("a")
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showString("c")
    radio.sendString("c")
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showString("b")
    radio.sendString("b")
})
radio.setGroup(1)
radio.setTransmitPower(7)
basic.showIcon(IconNames.Happy)

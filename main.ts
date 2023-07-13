input.onPinPressed(TouchPin.P0, function () {
    basic.showString("a")
    radio.sendString("a")
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

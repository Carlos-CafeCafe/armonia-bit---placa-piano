input.onPinPressed(TouchPin.P0, function () {
    basic.showString("a")
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    radio.sendString("a")
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showString("c")
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    radio.sendString("c")
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showString("b")
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    radio.sendString("b")
})
radio.setGroup(3)
radio.setTransmitPower(7)
basic.showIcon(IconNames.Happy)

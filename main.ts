let strip: neopixel.Strip = null
input.onPinPressed(TouchPin.P0, function () {
	
})
input.onButtonPressed(Button.A, function () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 1023)
})
input.onButtonPressed(Button.AB, function () {
    strip.clear()
    strip.show()
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
})
input.onButtonPressed(Button.B, function () {
    pins.analogWritePin(AnalogPin.P2, 1023)
    strip = neopixel.create(DigitalPin.P2, 15, NeoPixelMode.RGB)
    strip.showRainbow(0, 59)
    strip.rotate(1)
    basic.pause(500)
    strip.show()
    basic.pause(500)
    strip.rotate(1)
    basic.pause(500)
    strip.show()
})
input.onGesture(Gesture.Shake, function () {
    pins.analogWritePin(AnalogPin.P2, 1023)
    strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
    strip.showRainbow(1, 360)
    strip.show()
})

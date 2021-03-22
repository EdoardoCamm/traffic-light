// Pin 0 is Yellow
// Pin 1 is green
// Turns lights on when A pressed
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 1)
})
// Turns lights off when B pressed
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 0)
})

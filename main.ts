input.onButtonPressed(Button.A, function () {
    while (true) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(3000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
input.onButtonPressed(Button.B, function () {
	
})

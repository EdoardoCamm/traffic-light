let Number2 = 0
input.onButtonPressed(Button.A, function () {
    while (true) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(60000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        if (pins.digitalReadPin(DigitalPin.P0) == 0) {
            basic.showString("Don't walk")
        }
        basic.pause(120000)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
input.onButtonPressed(Button.AB, function () {
    while (true) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showIcon(IconNames.StickFigure)
        basic.pause(1000)
        basic.clearScreen()
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        if (pins.digitalReadPin(DigitalPin.P0) == 0) {
            for (let index = 0; index <= 13; index++) {
                Number2 = 13 - index
                basic.showNumber(Number2)
                basic.pause(1000)
            }
        }
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        if (pins.digitalReadPin(DigitalPin.P0) == 0) {
            basic.showString("Don't walk")
        }
        basic.pause(120000)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
input.onGesture(Gesture.Shake, function () {
    while (true) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        if (input.buttonIsPressed(Button.AB)) {
            pins.digitalWritePin(DigitalPin.P2, 0)
        }
    }
})

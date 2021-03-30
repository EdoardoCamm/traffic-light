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
    for (let index = 0; index <= 4; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showIcon(IconNames.StickFigure)
        basic.pause(1000)
        basic.clearScreen()
        Number2 += 1
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        if (pins.digitalReadPin(DigitalPin.P0) == 0) {
            for (let index = 0; index <= 13; index++) {
                Number2 = 13 - index
                basic.showNumber(Number2)
                basic.pause(100)
            }
        }
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        while (pins.digitalReadPin(DigitalPin.P0) == 0) {
            if (pins.digitalReadPin(DigitalPin.P0) == 0) {
                basic.showString("stop")
            }
        }
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index <= 4; index++) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(500)
    }
})
let Number2 = 0
Number2 = 0

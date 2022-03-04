bluetooth.onBluetoothConnected(function () {
    basic.showString("c")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("d")
})
input.onButtonPressed(Button.A, function () {
    Blue += 10
    neopixel2.showColor(neopixel.rgb(Red, Green, Blue))
})
blockytalky.onReceivedString(function (key, receivedString) {
	
})
let Blue = 0
let Green = 0
let Red = 0
let neopixel2: neopixel.Strip = null
basic.showIcon(IconNames.Yes)
neopixel2 = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
Red = 0
Green = 0
Blue = 0
neopixel2.setBrightness(10)
neopixel2.showColor(neopixel.rgb(Red, Green, Blue))
basic.forever(function () {
	
})

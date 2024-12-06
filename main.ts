input.onButtonPressed(Button.A, function () {
    had()
})
function had () {
    while (true) {
        for (let index = 0; index < 6; index++) {
            strip.shift(1)
            strip.setPixelColor(Led, neopixel.colors(NeoPixelColors.Red))
            strip.show()
            basic.pause(200)
            Led += 1
        }
        Led = 0
        for (let index = 0; index < 6; index++) {
            strip.shift(1)
            strip.setPixelColor(Led, neopixel.colors(NeoPixelColors.Green))
            strip.show()
            basic.pause(200)
            Led += 1
        }
        Led = 0
        for (let index = 0; index < 6; index++) {
            strip.shift(1)
            strip.setPixelColor(Led, neopixel.colors(NeoPixelColors.Blue))
            strip.show()
            basic.pause(200)
            Led += 1
        }
        Led = 0
    }
}
let Led = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 6, NeoPixelMode.RGB)

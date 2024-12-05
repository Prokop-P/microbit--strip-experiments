let Led = 0
let strip = neopixel.create(DigitalPin.P1, 6, NeoPixelMode.RGB)
strip.setBrightness(150)
basic.forever(function () {
    for (let index = 0; index < 6; index++) {
        strip.shift(1)
        strip.setPixelColor(Led, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(100)
        Led += 1
    }
    Led = 0
})

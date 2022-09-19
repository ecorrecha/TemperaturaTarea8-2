basic.forever(function () {
    basic.showNumber(input.temperature())
    while (input.temperature() <= 26) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Sad)
    }
    basic.showNumber(input.temperature())
    while (input.temperature() <= 31) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Heart)
    }
    basic.showNumber(input.temperature())
    while (input.temperature() >= 31) {
        basic.showNumber(input.temperature())
        basic.showIcon(IconNames.Angry)
    }
})

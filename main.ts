let once = 0
let set_start_melody_dadadum_repeating = 0
basic.showString("ABC")
let i = 64
for (let index = 0; index < 28; index++) {
    i += 1
    basic.showString(String.fromCharCode(i))
    basic.clearScreen()
    set_start_melody_dadadum_repeating = once
    basic.pause(4000)
    i += 1
    for (let index = 0; index < 26; index++) {
        i += 1
        basic.showString(String.fromCharCode(i))
    }
}
basic.clearScreen()
set_start_melody_dadadum_repeating = once

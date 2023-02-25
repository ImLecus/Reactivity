const lightColors:any = {
    red: "#ff8296",
    green: "#c7f9cc",
    purple: "#b8b8ff"
}
const icons:any = {
    walk: require("../assets/img/walk.png"),
    write: require("../assets/img/book_fill.png"),
    diary: require("../assets/img/diary.png")
}
const colors:any = {
    light : {
        bg : "#fff",
        complementary: "#222",
        red: "#ef233c",
        green:"#06d6a0",
        purple:"#9381ff",
        text: "#000"
    },
    dark : {
        bg: "#222",
        complementary: "#fff",
        text: "#fff",
        red: "#ef233c",
        green:"#06d6a0",
        purple:"#9381ff"
    }

}

var colorTheme = "light"

export {colors, lightColors, icons, colorTheme}
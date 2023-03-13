import Lang from "../data/language.json"
export default function DateToText(date){
    return(Lang.days[date.split("/")[0] % 6 ]+ date.split("/")[0] + Lang.months[date.split("/")[1] % 12])
}
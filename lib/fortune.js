//dynamic setting for view
var fortunes = [
    "Conquer your fears or they will conquer you",
    "Rivers need springs",
    "Do not fear what you dont know",
    "You will have a pleasant surprise",
    "Whenever possible, Keep it simple",
]

exports.getFortune = function(){
    var idx = Math.floor(Math.random() * fortunes.length)
    return fortunes[idx]
}
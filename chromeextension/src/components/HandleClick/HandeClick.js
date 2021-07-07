

export default function HandleClick(event) {
    let target
    if (event.target.id) {
        target = event.target.id
    } else {
        target = event.target.name
    }
    console.log(target)
    return target


}
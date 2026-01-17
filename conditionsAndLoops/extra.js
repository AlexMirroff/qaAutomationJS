let exampleString = "SWfkKJFSDb"


for (let i = 0; i < exampleString.length; i++) {

    let original = exampleString.charAt(i)
    let capitalized = exampleString.charAt(i).toUpperCase()

    let isCapital = (original === capitalized)
    if (!isCapital) {
        console.log("FALSE") // 1st NOT cap found, so no sense to continue
        break
    }

    if (i == exampleString.length - 1) {
        console.log("TRUE") // last letter reached and break was't triggered, so TRUE
    }

}


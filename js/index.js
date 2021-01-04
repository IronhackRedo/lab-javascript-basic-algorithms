// Iteration 1: Names and Input
const hacker1 = "Driver's Name"
const hacker2 = "Navigator's Name"

console.log(`the driver's name is ${hacker1}`)
console.log(`the navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`
        The driver has the longest name,
        it has ${hacker1.length} characters.
        `)
} else if(hacker1.length < hacker2.length) {
    console.log(`
        It seems that the navigator 
        has the longest name, it has 
        ${hacker2.length} characters`)
} else {
    console.log(`
        Wow, you both have equally long
        names, ${hacker1.length}
    `)
}

// Iteration 3: Loops

function capitalizeStringWithSpace(item){
    let container = '';
    for(x=0; x < item.length; x++){
        container += hacker1[x].toUpperCase() + ' ';
    }
    container.trim()
    return container;
}

console.log(capitalizeString(hacker1))

function reverseString(item){
    let container = ''
    for(x=item.length-1; x>=0; x--){
        container += item[x]
    }
return container;
}

console.log(reverseString(hacker1))

// Checking for the lexicographic order of the strings

if(hacker1 > hacker2){
    console.log("The navigator's name goes first")
} else if(hacker1 < hacker2){
    console.log("The driver's name goes first")
} else {
    console.log("They have the same lexicographic order")
}

// Bonus 1

const sample = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Lectus mauris ultrices eros in cursus. Egestas sed tempus urna et pharetra pharetra. Tincidunt id aliquet risus feugiat in ante metus. Fames ac turpis egestas integer eget. Dui id ornare arcu odio ut sem nulla pharetra. Sit amet cursus sit amet dictum sit amet justo. In ante metus dictum at. Euismod elementum nisi quis eleifend quam. Quis risus sed vulputate odio ut enim blandit volutpat. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus.
Duis at consectetur lorem donec massa sapien faucibus et. Lectus proin nibh nisl condimentum. Ut lectus arcu bibendum at varius vel pharetra vel. In aliquam sem fringilla ut morbi. Viverra justo nec ultrices dui sapien. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Dictum non consectetur a erat nam. Sagittis purus sit amet volutpat consequat mauris nunc congue. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Amet risus nullam eget felis eget nunc lobortis mattis. Iaculis nunc sed augue lacus viverra vitae congue eu consequat. Est sit amet facilisis magna. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Vestibulum sed arcu non odio euismod. Mattis pellentesque id nibh tortor id aliquet. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat.
Praesent elementum facilisis leo vel fringilla. Nibh tellus molestie nunc non blandit massa enim nec dui. Dis parturient montes nascetur ridiculus mus. Semper viverra nam libero justo laoreet sit amet. Mi ipsum faucibus vitae aliquet. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis. Sed tempus urna et pharetra pharetra massa. Potenti nullam ac tortor vitae purus faucibus ornare. Diam in arcu cursus euismod quis viverra nibh cras. Nisl suscipit adipiscing bibendum est ultricies. Commodo nulla facilisi nullam vehicula ipsum a arcu. Diam vel quam elementum pulvinar etiam non quam. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Nisl purus in mollis nunc sed id semper risus. Faucibus in ornare quam viverra. Pellentesque dignissim enim sit amet venenatis urna.`

function countWords(sample){
    let a = sample.split(' ')
    count = a.length
    return count
}

console.log(countWords(sample))

function countEts(sample){
    count = 0;
    const a = sample.split(' ')
      for(one of a){
        if(one === 'et' || one === 'et,'){
          count += 1;
        }
      }
    return count;
}

console.log(countEts(sample))

// Bonus 2

function alphaNumericOnlyLowerCase(sample){
    let container = ''
    sample = sample.toLowerCase()
    for(one of sample){
        if(/^[a-zA-Z0-9]+$/.test(one)){
            container += one;
        }
    }
    return container;
}

function phraseTocheck(sample){
    let toggle = true;
    sample = alphaNumericOnlyLowerCase(sample)
    for(x=0, y=sample.length-1; x < sample.length; x++, y--){
        if(sample[x] !== sample[y]){
            toggle = false;
            break;
            }
        }
    return toggle
}

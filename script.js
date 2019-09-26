//Little Red Riding Hood

//First Version

const littleRed = {
    color: 'red',
    pluralNoun: ['apples', 'pie', 'fish', 'bag'],
    adjective: 'scary',
    exclamation: 'Hello!',
    Sillyword: 'bean',
    verb: ['walked', 'feed', 'give']

}

console.log(`One day, Little ${littleRed.color} Riding Hood was going through the forest carrying a 
basket of ${littleRed.pluralNoun[0]} for her grandmother. Suddenly, she met a big 
${littleRed.adjective} wolf.

"${littleRed.exclamation}" said the wolf. "Where are you going little ${littleRed.Sillyword}?"

"I'm going to my grandmother's house," she said. Then the wolf 
${littleRed.verb[0]} away.

When Miss Riding Hood got to her grandmother's house, the wolf was in bed 
dressed like her grandmother.

"My, Grandmother," she said. "What big ${littleRed.pluralNoun[1]} you have."

"The better to ${littleRed.verb[1]} you with," said the wolf.

"And, Grandmother," she said, "what big ${littleRed.pluralNoun[2]}" you have."

The wolf said, "The better to ${littleRed.verb[2]} you with."

And then she said, "What big  ${littleRed.pluralNoun[3]}" you have, Grandmother." But 
the wolf said nothing. He had just died of indigestion from eating Grandmother`)

// Second Version
littleRed.color = 'blue'
littleRed.pluralNoun[3] = 'suitcase'
littleRed.adjective = 'ugly'
littleRed.exclamation = 'hey'
littleRed.Sillyword = 'dork'
littleRed.verb[2] = 'make'


console.log(`One day, Little ${littleRed.color} Riding Hood was going through the forest carrying a 
basket of ${littleRed.pluralNoun[0]} for her grandmother. Suddenly, she met a big 
${littleRed.adjective} wolf.

"${littleRed.exclamation}" said the wolf. "Where are you going little ${littleRed.Sillyword}?"

"I'm going to my grandmother's house," she said. Then the wolf 
${littleRed.verb[0]} away.

When Miss Riding Hood got to her grandmother's house, the wolf was in bed 
dressed like her grandmother.

"My, Grandmother," she said. "What big ${littleRed.pluralNoun[1]} you have."

"The better to ${littleRed.verb[1]} you with," said the wolf.

"And, Grandmother," she said, "what big ${littleRed.pluralNoun[2]}" you have."

The wolf said, "The better to ${littleRed.verb[2]} you with."

And then she said, "What big ${littleRed.pluralNoun[3]}" you have, Grandmother." But 
the wolf said nothing. He had just died of indigestion from eating Grandmother`)

//Snow White

// First Version

 const snowWhite = {
     pluralNoun:['tale', 'dwarfs'],
     number: 7,
     color: 'White',
     adjective: ['amazing', 'weird', 'peculiar'],
     noun: ['castle', 'forest', 'room', 'wand', 'apple'],
     partOfTheBody: 'hand',
     adverb: 'happily'

 }

 console.log(`One of the most popular fairy ${snowWhite.pluralNoun[0]} of all time is Snow White and the 
 ${snowWhite.number} ${snowWhite.pluralNoun[1]}.
 
 Snow White is a princess whose ${snowWhite.adjective[0]} beauty threatens her stepmother, 
 the queen. Snow White is forced to flee from the ${snowWhite.noun[0]} in which she lives 
 and hide in a nearby ${snowWhite.noun[1]}.
 
 Once there, she is discovered by ${snowWhite.adjective[1]} animals who guide her to the 
 ${snowWhite.adjective[2]} cottage of the seven dwarfs. The dwarfs take care of her until 
 the prince, who has traveled the four corners of the ${snowWhite.noun[2]} in search of 
 Snow ${snowWhite.color}, arrives and gives her a magical ${snowWhite.noun[3]} on her 
 ${snowWhite.partOfTheBody}, which miraculously bring her back to life after she eats 
 a poisonous ${snowWhite.noun[4]}. Snow White and the prince live ${snowWhite.adverb} ever after.`)

 // Second Version

 snowWhite.number = 10
 snowWhite.adjective[0] = 'fantastic'
 snowWhite.noun[1] = 'bushes'
 snowWhite.noun[3] = 'necklace'
 snowWhite.color = 'pink'

 console.log(`One of the most popular fairy ${snowWhite.pluralNoun[0]} of all time is Snow White and the 
 ${snowWhite.number} ${snowWhite.pluralNoun[1]}.
 
 Snow White is a princess whose ${snowWhite.adjective[0]} beauty threatens her stepmother, 
 the queen. Snow White is forced to flee from the ${snowWhite.noun[0]} in which she lives 
 and hide in a nearby ${snowWhite.noun[1]}.
 
 Once there, she is discovered by ${snowWhite.adjective[1]} animals who guide her to the 
 ${snowWhite.adjective[2]} cottage of the seven dwarfs. The dwarfs take care of her until 
 the prince, who has traveled the four corners of the ${snowWhite.noun[2]} in search of 
 Snow ${snowWhite.color}, arrives and gives her a magical ${snowWhite.noun[3]} on her 
 ${snowWhite.partOfTheBody}, which miraculously bring her back to life after she eats 
 a poisonous ${snowWhite.noun[4]}. Snow White and the prince live ${snowWhite.adverb} ever after.`)

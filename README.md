# Reverse cat age calculator 🐈


## What it does

Returns the calculated cat age from a human equivalent age.

For eg. a 33 year old human is a 4 years and 3 months old cat. 

## Why? 

I wanted to see how old I would be as a cat using my human age. I couldn't find a good calculator out there for any human equivalent age, so I wrote one...

## Installation

```
npm install cat-age-calculator --save
```

## Example usage

Pass an integer between 1 and 116 to one of the following functions...

### 1. Returns an object

```

getCatAgeObject(33);
 
// { years: 4, months: 3}

```   

### 2. Returns a formatted string

```

getCatAgeString(33);

// '4 years and 3 months'

```

## What it does behind the scenes

The known human to cat age data (see table below) was converted to an array of objects to reference. And the following functionality was added.

1. a check to see if the human value inputted exists in the data array and returns the corresponding cat age it if it finds a match.
2. if the human age is below 28 it finds both the human and cat values before and after in the data and uses them for the cat age calculation.
3. if the human age is above 28 it uses the last human and cat values in the data plus the logic of +4 human years to every 1 cat year for the calculation.
4. an object per age format is generated from a function within the build folder, each of valid human years are property keys with their equivalent cat age as the property value.
5. The public functions are setup to return a cat age value from the array using the human age for the index to lookup the value.

## What's up with cat ages

Cats age rapidly in the first two years of their life at a few different rates (see table below), after their second year of life each additional year is equal to about four human years. 

| Human equivalent age | Actual cat age  |
|----------------------|-----------------|
| 1 year               | 1 month         |
| 4 years              | 3 months        |
| 10 years             | 6 months        |
| 12 years             | 7 months        |
| 15 years             | 1 year          |
| 21 years             | 1 year 6 months |
| 24 years             | 2 years         |
| 28 years             | 3 years         |
| + 4 years...         | + 1 year...     |

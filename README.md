# Reverse cat age calculator 🐈


Returns the calculated cat age from a human equivalent age.

For eg. a 33 year old human is a 4 years and 3 months old cat. 



## Install

```
npm install cat-age-calculator --save
```

The entry file for this package is setup as an UMD module, allowing it to be used as a Node module and in the browser side too.


## Usage


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

The known human to cat age data (see table below) were captured in an array of objects and the following functionality calculates the cat age:

1. It first checks to see if the inputted value exists in the data array and returns the corresponding cat age if it finds a match.
2. If the human age is below 28, it finds both the human and cat values before and after the inputted age within the data and uses them in a calculation.
3. If the human age is above 28, it uses the last human and cat values in the data plus the logic that there are 4 human years to every 1 cat year in a calculation.
4. Using the calculations above, a build script loops over a set of human years and generates an object containing every human year and it's equivalent cat age (the human years are the property keys and the cat ages are the property value).
5. The public functions simply return the calculated cat age in different formats using the human age passed in as a key to lookup a property value.

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

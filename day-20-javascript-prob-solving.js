// ===========================================
// Day 20 - JavaScript Coding Challenge
// ===========================================

// 1. Reverse String

{
    let str = "yashpawar";
    let rev = "";

    for (let i = str.length - 1; i >= 0; i--) {
        rev = rev + str[i];
    }

    console.log(rev);
}

// Output:
// rawaphsay

// ------------------------------------------

// 2. Reverse Number

{
    let num = 786;
    let rev = 0;

    while (num > 0) {
        let digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num / 10);
    }

    console.log(rev);
}

// Output:
// 687

// ------------------------------------------

// 3. Count Vowels from String

{
    let str = "javascript";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if ("aeiouAEIOU".includes(str[i])) {
            count++;
        }
    }

    console.log(count);
}

// Output:
// 3

// ------------------------------------------

// 4. Factorial

{
    let num = 5;
    let fact = 1;

    for (let i = 1; i <= num; i++) {
        fact *= i;
    }

    console.log(fact);
}

// Output:
// 120

// ------------------------------------------

// 5. Prime Number 
{
    let num = 7;
    let prime = num > 1; // 0 and 1 are not prime

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            prime = false;
            break;
        }
    }

    if (prime) {
        console.log("Prime Number");
    } else {
        console.log("Not Prime Number");
    }
}

// Output:
// Prime Number

// ------------------------------------------

// 6. Palindrome Number

{
    let num = 121;
    let temp = num;
    let rev = 0;

    while (num > 0) {
        let digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num / 10);
    }

    if (temp == rev) {
        console.log("Palindrome Number");
    } else {
        console.log("Not Palindrome Number");
    }
}

// Output:
// Palindrome Number

// ------------------------------------------

// 7. Armstrong Number

{
    let num = 153;
    let temp = num;
    let sum = 0;

    while (num > 0) {
        let digit = num % 10;
        sum = sum + (digit * digit * digit);
        num = Math.floor(num / 10);
    }

    if (temp == sum) {
        console.log("Armstrong Number");
    } else {
        console.log("Not Armstrong Number");
    }
}

// Output:
// Armstrong Number

// ------------------------------------------

// 8. Even or Odd

{
    let num = 12;

    if (num % 2 == 0) {
        console.log("Even Number");
    } else {
        console.log("Odd Number");
    }
}

// Output:
// Even Number

// ------------------------------------------

// 9. Fibonacci Series

{
    let n = 10;
    let a = 0;
    let b = 1;

    console.log(a);
    console.log(b);

    for (let i = 3; i <= n; i++) {
        let c = a + b;
        console.log(c);

        a = b;
        b = c;
    }
}

// Output:
// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34

// ------------------------------------------

// 10. Find Second Largest from Array

{
    let arr = [10, 20, 50, 40, 80, 60];

    let largest = arr[0];
    let second = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            second = largest;
            largest = arr[i];
        } else if (arr[i] > second && arr[i] != largest) {
            second = arr[i];
        }
    }

    console.log(second);
}

// Output:
// 60

// ------------------------------------------

// 11. Reverse Array

{
    let arr = [10, 20, 30, 40, 50];
    let rev = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        rev.push(arr[i]);
    }

    console.log(rev);
}

// Output:
// [50, 40, 30, 20, 10]

// ------------------------------------------

// 12. Remove Duplicates

{
    let arr = [10, 20, 10, 30, 20, 40];
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }

    console.log(result);
}

// Output:
// [10, 20, 30, 40]

// ===========================================
// End of Day 20 JavaScript Coding Challenge
// ===========================================
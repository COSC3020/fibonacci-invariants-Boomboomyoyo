[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12033564&assignment_repo_type=AssignmentRepo)
# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

## Response
I have an immediate answer for an invariant for the end of the recursive call, but the beginning is more difficult.

At the end of the recursive call, just before the code returns the array, you could put an invariant saying "At this point the array contains every member of the Fibonnaci Sequence up to value n", but as that is the purpose of the function, that invariant doesn't seem useful to showing the correctness of the algorithm.

If I were to put an invariant at the beginning of the function, I might choose "The array containing every member of the Fibonnaci Sequence up to value n-1 can be found through recursion." With the way I have set up my code for this, this is almost always true. Since I don't have the negative part of the Fibonnaci Sequence set up, for n=0 specifically, this wouldn't be true, as n=-1 has no meaning in my implementation. I will probably come back to this and add the negative part in here shortly. For now though, this holds true for the relevant part of the algorithm, which is all positive numbers. This is useful as it means you can construct the entire Fibonnaci Series up to an arbitrarily high number using this code.

## Questions

I think I'm going to include this section for the conceptual exercises like this one where I modify the readme file. Let me know if this works well for you.

1. Is it alright to use an invariant in that way, or should I add a phrase like "For all positive whole numbers, ..."?

2. I noticed in this case that the invariant I am looking at is essentially the inductive step of the logic behind the recursion. Is it fair to assume this will hold true for a lot of loop-based or recursion-based algorithms?

# Extra Exploration
Doing some extra work on this exercise mainly so I can learn a bit about the JSVerify testing setup. Thanks for the input on the original problem, it was quite helpful.

Questions:
1. Is there a way to generate arbitrary negative or positive integers with the tests? I assume that nat means natural numbers, so I tried using "whole", but that didn't seem to work.

2. How does the function argument for jsc.forall() work? Is that basically just creating a conditional and checking if that holds true for an arbitrary value?


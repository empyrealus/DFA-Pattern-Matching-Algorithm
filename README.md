# DFA-Pattern-Matching-Algorithm
Pattern matching algorithm using Deterministic Finite Automata and Regular Expressions

Determinisitic Finite Automata is used for finite state machines and/or algorithim production within larger programs that 
utilize states; think of a vending machine or elevator. Deterministic Finite Automata can also have more advanced applications
such as real-time speech recognition or network security (TCP handhshake process) applications, etc.

This basic DFA is implemented utilizing Javascript to match the pattern (Regular Expression) (AA+TT)(AA+TT)* 

A language may contain a set of rules called our grammar. Utilizing the rules of our grammar we can come up with a Regular Expression
that consists of our languages alphabet to search for meaningful patterns. 

Using the DNA sequencing letters as an example we may say that our language DNA* consists of the alphabet {A,C,G,T}, if a rule
of the DNA grammar states that we MUST have any combonation of AATTAATTAAAA or TTAATTAATTTTTT, then we may craft a regular
expression that adheres to that rule of the grammar. The regular expression would look like (AA+TT)(AA+TT)*. 

See how it's implemented in Javascript by exploring the code.

*. Note that this does not contain a "How to Implement a DFA" but is rather an example of a baisc one and a DFA's capabilities.

See how you can use a DFA to find a 'needle' in a 'haystack':
https://phyziro.com/hwTest.php

See how this is done in C++
https://github.com/empyrealus/DFA-Pattern-Matching-C-

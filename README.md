code smells found:

- magic values
- unclear variable names
- duplicate logic in buttons
- long functions
- global state variables

Magic Values:
I moved all repeated strings that were in the code into named constants at the top of the file. Making it look better and easier to read for the user.

Unclear Variable Names:
Some names like c,a,b,bi and ctr were names that were not that descpritive and do not fully describe what they were holding. So I changed them to more descriptve names of the function for better readability

Duplicate logice in buttons:
All the updates that would occur in the code was moved into a single function named updateUI. This helped remove repated code from the increment, decrement, and reset click handlers.

Long functions:
It did not look right that the setup() function did everything at first. The function was too long and just looked scary at first. So I split it into three seprate functions and they setupUI, events, and UpdateUI

Global State Variables:
I fixed this by moving the count into the state object instead. That way it aviods unnessary global variables and makes it easier to expand on it.

Choice of using Gemini was informed by the AT/Google program
Should explore ollama deployed locally - consider container spec for optimum performance, may need a costly VPS
Updating function description and systemInstructions has lead the model to print code instead of calling a function
Function calling happens with place holder values, this is dangerous expecially for executing functions like purchase insurace.
GDPR constraints apply to Gemini models. - With less systemInstructions, the model calls the functions but with more information on systemInstructions, the models reverts to GDPR compliance.

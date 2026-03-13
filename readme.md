Answers to reflection Questions:

Q1. Why was it important to re-format the data from the Useless Facts API before sending it to your own client? What are the benefits of an API providing a clean, minimal response?

Ans: 
Re-formatting the data ensures that the client receives only the information it actually needs. The Useless Facts API returns several fields such as the ID, source, URL, and language, but the client application only needs the fact text. Sending only the required data makes the response cleaner and easier for the client to process.

A clean, minimal response improves performance because less data is transferred over the network. It also simplifies the client-side code since developers do not need to filter unnecessary fields. Additionally, it helps maintain a clear and stable API contract by controlling exactly what data is exposed to the client.
*********************************************************************************************
Q2.
In the catch block, why is it better to send a generic error message to the client instead of the actual error object from axios?
Ans:
Sending a generic error message is better because it protects sensitive information about the server and the external API. The axios error object may contain internal details such as request configuration, stack traces, or system information that should not be exposed to users.

Providing a simple message like "Could not fetch fun fact" improves security and keeps the API response clean and user-friendly. Meanwhile, the detailed error information can still be logged on the server for debugging purposes.
********************************************************************************************************
Q3.How might you modify this application to get a fact in a different language if the external API supported it (e.g., with a query parameter like ?language=de)?
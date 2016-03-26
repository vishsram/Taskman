# Taskman

Taskman is a simulation project for Windows's Task Manager system. It provides a live graphical structure for CPU utilization, memory utilization, network, etc. 

It provides the user with the CPU utilization, memory utilization graphs of the VM server hosted on Azure cloud in a web browser.

It utilizes REST architectural style for communication between Server and Clients. It uses simple HTTP protocols such as GET, POST etc to receive CPU and memory info from the Linux VM and transforms the data into live graphs using D3.js scripts. On the server side, it uses /proc to retrieve system information from the Linux VM hosted using Node JS server application.

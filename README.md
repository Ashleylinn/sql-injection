# SQL Injection Demo + Secure Fix

A hands-on demonstration of how SQL Injection works and how to fix it using safe, parameterized queries.

This project contains two login endpoints:

- /login-insecure — intentionally vulnerable

- /login-secure — protected using parameterized queries

The goal is to show, in the simplest possible example, how attackers bypass authentication and how developers can prevent it.

## Why important?

SQL Injection is one of the most common and serious vulnerabilities in web applications.
This demo illustrates:

- how insecure string-built SQL queries can be exploited

- why trusting user input is dangerous

- how parameterized queries prevent attacks

- what secure backend patterns look like

This project is a great introduction to secure backend development and OWASP Top 10 fundamentals.

## Features

insecure Login (Vulnerable)

- Uses raw string concatenation to build SQL queries

- Allows attackers to log in without knowing the password

- Demonstrates how malicious input changes the meaning of SQL code

Secure Login (Safe)

- Uses parameterized SQL queries

- Prevents SQL injection completely

- Rejects malicious input safely

## Tech Stack

- Node.js + Express

- PostgreSQL

- pg (node-postgres library)

- Postman (used for testing)

## Testing using Postman

1. Test valid login (insecure)

![addedtocart](./images/insecure)

2. Test SQL Injection attack

![addedtocart](./images/checklist.png)


3. Test the secure version (attack fails)

![addedtocart](./images/secure)

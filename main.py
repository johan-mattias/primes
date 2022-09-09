
#cite: https://stackoverflow.com/questions/3939660/sieve-of-eratosthenes-finding-primes-python

limit = 100
primes = []
for _ in range(limit):
    primes.append(1)
primes[0] = 0
primes[1] = 0

for i in range(len(primes)):
    if primes[i]:
        for n in range(i * i, limit, i):     # Mark factors non - prime
            primes[n] = 0

basic.show_number(0)
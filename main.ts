// cite: https://stackoverflow.com/questions/3939660/sieve-of-eratosthenes-finding-primes-python
let limit = 10000
let primes = []
for (let _ = 0; _ < limit; _++) {
    primes.push(1)
}
primes[0] = 0
primes[1] = 0
for (let i = 0; i < primes.length; i++) {
    if (primes[i]) {
        for (let n of _py.range(i * i, limit, i)) {
            //  Mark factors non - prime
            primes[n] = 0
        }
    }
    
}
let biggest_prime = 0
for (let i = 0; i < primes.length; i++) {
    if (primes[i] == 1) {
        biggest_prime=i
    }
}
basic.showNumber(biggest_prime)

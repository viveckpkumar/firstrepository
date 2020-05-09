function isprime(n)
{
    for(var i=2;i<n;i++)
    {
        if (n%i===0) {
            console.log(n,"is not prime");
            break;
        }
        else if (i==n-1&n%i!=0)
        {
            console.log(n,"is A prime no")
        }
        else continue;
    }
}

isprime(991);
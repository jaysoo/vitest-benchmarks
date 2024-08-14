# Benchmarks for `@nx/vite:test`

The workspace is on Nx 19.0 currently, and has three projects with 500 spec files each that run memory and CPU intensive computations.

To run all tests:

```shell
nx run-many -t test
```

To benchmark tests:

```shell
hyperfine "nx run-many -t test --skip-nx-cache"
```

The results on my local machine for 19.0 are:

```
hyperfine "nx run-many -t test --skip-nx-cache"
Benchmark 1: nx run-many -t test --skip-nx-cache
  Time (mean ± σ):     59.178 s ±  0.872 s    [User: 294.108 s, System: 59.387 s]
  Range (min … max):   57.552 s … 60.607 s    10 runs
```

And upgrading to 19.1 yields similar results.

---
title: 'Installation'
description: 'Install the MadMatcher tools: Sparkly and Delex for blocking (which need PyLucene), and MatchFlow for matching.'
order: 2
---

MadMatcher's three open-source tools are Python packages: Sparkly and Delex do blocking, and
MatchFlow does matching. Sparkly and Delex depend on PyLucene (a Java/JCC build). MatchFlow
runs on Spark or pandas without it. The packages are not yet on PyPI, so install them from
GitHub.

The order below is deliberate. PyLucene is the one piece that cannot be pip installed, so set
it up first, then add the packages that use it.

## Requirements

- Python 3 (the repo install guides test on Python 3.12)
- Java Temurin 17 JDK (Spark needs Java; Sparkly and Delex also need it for PyLucene)
- A C++ compiler (g++ on Linux, the Xcode command line tools on macOS) for PyLucene
- pip

## Step 1. Install PyLucene (required for blocking)

PyLucene is not on PyPI and cannot be installed with pip. It uses JCC to compile Lucene's
Java code into a C-extension that Python can call, so the build needs a C++ compiler, a JDK,
and JCC. The exact steps are OS-specific. At a high level:

1. Install a C++ compiler (g++ on Linux, the Xcode command line tools on macOS).
2. Install the Java Temurin 17 JDK.
3. Pin `setuptools==70.3.0` before building JCC. Newer setuptools removed the
   `pkg_resources.extern.packaging` module JCC's shared-mode build relies on, so the PyLucene
   `make` step otherwise fails with `JCC was not built with --shared mode support`.
4. Download and unpack PyLucene 9.12.0, build and install JCC from its `jcc` subdirectory,
   then build and install PyLucene with `make`.
5. Verify with `python3 -c "import lucene; print(lucene.VERSION)"`, which should print
   `9.12.0`.

The repos test PyLucene 9.12.0 with Java Temurin 17 and Python 3.12 (macOS guides on Apple
M1). Follow the exact guide for your OS:

- Sparkly: [Java, JCC, and PyLucene](https://github.com/MadMatcher/sparkly/blob/main/doc/install-java-jcc-pylucene.md), [Linux](https://github.com/MadMatcher/sparkly/blob/main/doc/install-single-machine-linux.md), [macOS](https://github.com/MadMatcher/sparkly/blob/main/doc/install-single-machine-macOS.md), [why PyLucene](https://github.com/MadMatcher/sparkly/blob/main/doc/why-pylucene.md)
- Delex: [Linux](https://github.com/MadMatcher/delex/blob/main/doc/installation-guides/install-linux-single-machine.md), [macOS](https://github.com/MadMatcher/delex/blob/main/doc/installation-guides/install-macos-single-machine.md)

## Step 2. Install Sparkly and Delex (blocking)

With PyLucene in place, install the blocking packages from GitHub. The pip step pulls in
everything except Java, JCC, and PyLucene, which you installed above. Delex builds on Sparkly,
so install Sparkly first.

```bash
pip install git+https://github.com/MadMatcher/sparkly.git@main
pip install git+https://github.com/MadMatcher/delex.git@main
```

Reach for Delex when one blocking strategy is not enough.

## Step 3. Install MatchFlow (matching)

MatchFlow has no PyLucene dependency. Install it from GitHub:

```bash
pip install git+https://github.com/MadMatcher/MatchFlow.git@main
```

This installs MatchFlow and its dependencies (Flask, Joblib, Numba, Numpy, Pandas, Pyarrow,
Py_Stringmatching, PySpark, Scikit-Learn, Scipy, Streamlit, Xgboost, and others). MatchFlow
runs on pandas on a single machine, on Spark on a single machine, or on Spark on a cluster.
For Spark it needs the Java Temurin 17 JDK. See the
[MatchFlow single-machine guide](https://github.com/MadMatcher/MatchFlow/blob/main/docs/installation-guides/install-single-machine.md).

## Verify

```python
import lucene        # from PyLucene; should import without error
import sparkly       # blocking
import MatchFlow     # matching
```

Then run the [Quickstart](/docs/quickstart/).

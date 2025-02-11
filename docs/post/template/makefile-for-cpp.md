---
lastUpdated: 2025-02-11 19:48:24+8:00
---
##  makefile

### tempalte for cpp 

```makefile
# Compiler
CXX = g++

# Compiler flags
CXXFLAGS = -Wall -Wextra -std=c++17

# Source files
SRCS = $(wildcard src/*.cpp)

# Object files
OBJS = $(SRCS:.cpp=.o)

# Executable
TARGET = bin/main

# Build the executable
$(TARGET): $(OBJS)
    $(CXX) $(CXXFLAGS) -o $(TARGET) $(OBJS)

# Build object files
%.o: %.cpp
    $(CXX) $(CXXFLAGS) -c $< -o $@

# Clean up build files
clean:
    rm -f $(OBJS) $(TARGET)

# Phony targets
.PHONY: clean
```
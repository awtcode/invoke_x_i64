#include <stdio.h>
#include <emscripten.h>
#include <chrono>
#include <string>

extern int64_t sidey(int64_t arg1);

EMSCRIPTEN_KEEPALIVE
int main(int argc, char *argv[]) {
    printf("main+\n");
    int64_t temp1 = 9223372036854775807 - 100;
    sidey(temp1);
    return 0;
}
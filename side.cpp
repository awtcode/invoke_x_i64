#include <stdio.h> 
#include <emscripten.h>
#include "header.h"


EMSCRIPTEN_KEEPALIVE int64_t sideyi64(int64_t arg1) {
  int64_t temp = arg1 + 1111;
  if (arg1 > 0) {
    printf("sideyi64:%lld\n", temp);
  }
  else {
    printf("sideyi64: <0 %lld\n", temp);
    throw;
  }

  return temp;
}

EMSCRIPTEN_KEEPALIVE int64_t sidey(int64_t arg1) {
  printf("sidey+\n");
  
  try {
    return sideyi64(arg1);
  } catch (...) {
    printf("caught exception!\n");
  }
}

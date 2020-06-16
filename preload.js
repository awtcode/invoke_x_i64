var Module = {
    //dynamicLibraries: ['side.wasm', 'side2.wasm']
    //dynamicLibraries: ['http://localhost:8080/side.wasm']
    dynamicLibraries: ['side.wasm']
};


function helper() {
    //console.log('helper');
//     FS.createPreloadedFile("/output", "side.wasm", "http://localhost:8080/side.wasm", true, true, () => {
//    var sideExists = FS.analyzePath("/output/side.wasm").exists;
//    console.log("mmh sideExists:" + sideExists);
   
   loadDynamicLibrary("/output/side.wasm", {
    global: true,
    nodelete: true,
    fs: FS
   });
}

// Module['onRuntimeInitialized'] = function() {
//     FS.mkdir('/output'); 
//     FS.createPreloadedFile("/output", "side.wasm", "http://localhost:8080/side.wasm", true, true, () => {
//         out("side.wasm loaded!!!");
//         helper();
//         Module['_main'](0,0);
//     });
// }

// Set this to false to wait for side.wasm to load upfront. Set to true if we using createPreloadedFile
Module['noInitialRun'] = false;

Module.mmh = helper;
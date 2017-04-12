/*
 This function uses destructuring for argument parsing. But it has a problem:
 it crashes when the caller passes an option object without an enable property.
 Since all options have defaults, we'd like to not crash in this case.
 Can you think of a clean way to fix this problem?


 function go(options) {
 let {speed = 4,
 enable: {hyperdrive = false,
 frobnifier = true}} = options
 console.log("speed=", speed,
 "hyperdrive:", hyperdrive,
 "frobnifier:", frobnifier)
 }

 go({speed: 5})



 */


function go(options) {
    let {speed = 4,
         enable: {
            hyperdrive = false,
            frobnifier = true
         }
    } = options;

    console.log(`speed="${speed}",
hyperdrive:"${hyperdrive}",
frobnifier:"${frobnifier}"`)
}

go({speed: 5,enable: { hyperdrive:true}});



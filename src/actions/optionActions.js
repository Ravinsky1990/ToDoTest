//Add
export const addOption = (option) => ({
    type: "ADD_OPTION",
    option
})
//Set Options
export const setOptions = (options)=>({
    type:"SET_OPTIONS",
    options
})


//Remove
export  const removeOption = (text="") => ({
    type: "REMOVE_OPTION",
    text
});
//Remove All

export const removeAll = ()=>({
    type:"REMOVE_ALL"
})


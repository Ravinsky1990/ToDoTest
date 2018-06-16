export default (options, {text})=>{
    return options.filter((option)=>{
        return option.includes(text.toLowerCase())
    });
}
const para = "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam"

const countWords = (para) => {
    return para.trim().split(/\s+/).length
}

console.log(countWords(para))
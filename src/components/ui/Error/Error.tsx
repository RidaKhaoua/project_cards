type TPrpos = {
    message: string
}

function Error({message}:TPrpos) {
  return message ? <span className="text-red-500 block size-1 w-full">{message}</span> : null
  
}

export default Error
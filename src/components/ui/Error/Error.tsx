type TPrpos = {
    message: string
}

function Error({message}:TPrpos) {
  return message ? <span className="text-red-500 block size-0 w-full pb-9 ">{message}</span> : null
  
}

export default Error
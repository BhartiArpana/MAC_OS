import React from 'react'

const DateTime = () => {
     const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  const time = new Date().toLocaleString("en-US", options);

  return (
    <div>{time}</div>
  )
}

export default DateTime
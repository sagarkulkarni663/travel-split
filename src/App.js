import React, { useState } from 'react'
import TravelLogo from './TravelLogo.js'
import Form from "./Form"
import PackingList from './PackingList'
import Footer from './Footer'

const App = () => {
  const [data, setData] = useState([])

  const itemcheck = (id) => {
    setData((items) => items.map((item) => item.id === id ? { ...item, package: !item.package } : item))
  }
  const onDataChange = (item) => {
    setData((items) => [...items, item])
  }
  const handleDelete = (id) => {
    setData((items) => items.filter((data) => data.id !== id))
  }
  const clear = () => {
    const sd = window.confirm("Are you sure you want to delete?")
    if (sd) setData([])
  }
  return (
    <div className="app" >
      <TravelLogo />
      <Form onDataChange={onDataChange} />
      <PackingList
        data={data}
        handleDelete={handleDelete}
        itemcheck={itemcheck}
        clear={clear}
      />
      <Footer data={data} />

    </div>
  )
}

export default App
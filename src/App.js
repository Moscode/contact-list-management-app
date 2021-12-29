import ContactForm from './ContactForm'
import useFetch from 'react-fetch-hook'
import { useState, useEffect } from 'react'

const App = () => {
  const url = "https://randomuser.me/api"
  const { isLoading, data, error } = useFetch(url + "?results=200")
  const [contactList, setContactList] = useState(null)
  const [filterQuery, setFilterQuery ] = useState(null)

  useEffect(()=>{
    if(filterQuery){
      const queryString = filterQuery.toLowerCase()
      const filteredData = data?.results?.filter((contact)=>{
        const fullName = `${contact.name.last} ${contact.name.first}`
        if(queryString.length === 1){
          const firstLetter = fullName.charAt(0).toLowerCase()
          return firstLetter === queryString
        }else{
          return fullName.toLowerCase().includes(queryString)
          }
        })
      setContactList(filteredData)
      }else{
      setContactList(data?.results)
    } 
  }, [data, filterQuery])

  return (
    <div class="bg-gray-200">
      <form>
        <input
        class="p-2 rounded-sm mt-6 ml-12"
        onChange={(e)=> setFilterQuery(e.target.value)}
        placeholder="Search for contact..."
        type="text"
        />
      </form>
      <section class="p-10 md:p-4 lg:p-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ContactForm contactList={contactList}/>
      </section>
    </div>
  );
}

export default App;
